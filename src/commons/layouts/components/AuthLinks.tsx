"use client";

import axiosInstance from "@/api/axiosInstance";
import { MYPAGE_MENU } from "@/commons/constants/layout.constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const AuthLinks = () => {
  const [user, setUser] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const myPageMenu = Object.values(MYPAGE_MENU);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    axiosInstance
      .get("/getLoggedInUser")
      .then((response) => {
        if (response.data) {
          setUser(response.data);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        setUser(null);
        throw new Error(err);
      });
  }, []);

  return (
    <div>
      {user ? (
        <>
          <button
            className="text-main flexCol"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            마이페이지
          </button>
          {isHovering && (
            <ul
              className="text-black border w-40 rounded-md absolute top-8 right-0 bg-white z-20"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {myPageMenu.map((menu, index) => (
                <li
                  className="categoryItem cursor-pointer"
                  key={index}
                  onClick={menu.onClick}
                >
                  {menu.label}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div className="flex gap-2">
          <Link href="/?modal=login">로그인</Link>
          <div>/</div>
          <Link href="/?modal=signup">회원가입</Link>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
