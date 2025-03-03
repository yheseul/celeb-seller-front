"use client";

import SearchBar from "@/app/_components/SearchBar/components/SearchBar";
import Link from "next/link";
import Nav from "../nav/Nav";
import HorizontalDivider from "@/app/_components/HorizontalDivider";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header className="flexCol">
      <div className="flex justify-between text-gray-400 py-2">
        <div>⭐ 즐겨찾기</div>
        <div className="flex gap-2">
          <Link href="/?modal=login">로그인</Link>
          <div>/</div>
          <Link href="/?modal=signup">회원가입</Link>
        </div>
      </div>
      <HorizontalDivider />
      <div className="flex flex-col gap-2 justify-between lg:flex-row items-center py-2">
        <div className="flexRowCenter gap-1 text-3xl font-medium text-main order-2 lg:order-1">
          <ShoppingCartOutlined />
          <div>셀럽셀러</div>
        </div>
        <SearchBar />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
