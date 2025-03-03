"use client";

import { MenuOutlined } from "@ant-design/icons";
import AsideMenu from "./AsideMenu";
import { useHoverContext } from "../../contexts/HoverContext";

const Aside = () => {
  const { isHovering, handleMouseOver, handleMouseOut } = useHoverContext();

  return (
    <div
      className="flexCol w-20 pb-2 relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex gap-1 cursor-pointer hover:text-main">
        <MenuOutlined className="text-xl" />
        <div>카테고리</div>
      </div>
      {isHovering && <AsideMenu />}
    </div>
  );
};

export default Aside;
