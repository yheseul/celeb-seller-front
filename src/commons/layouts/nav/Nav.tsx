"use client";

import axiosInstance from "@/api/axiosInstance";
import VerticalDivider from "@/app/_components/VerticalDivider";
import {
  DollarOutlined,
  MessageOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();

  const fetchLoggedInUser = () => {
    axiosInstance
      .get("/getLoggedInUser")
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          router.push("/SellItem");
        } else {
          alert("로그인 후 이용해 주세요.");
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <nav className="flex gap-4 h-4 order-2 lg:order-1">
      <div className="navMenu">
        <DollarOutlined />
        <button onClick={fetchLoggedInUser}>판매하기</button>
      </div>
      <VerticalDivider />
      <div className="navMenu">
        <ShopOutlined />
        <div>내상점</div>
      </div>
      <VerticalDivider />
      <div className="navMenu">
        <MessageOutlined />
        <div>셀톡</div>
      </div>
    </nav>
  );
};

export default Nav;
