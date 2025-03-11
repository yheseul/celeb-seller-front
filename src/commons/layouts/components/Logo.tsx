"use client";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="flexRowCenter gap-1 text-3xl font-medium text-main order-2 lg:order-1 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <ShoppingCartOutlined />
      <div>셀럽셀러</div>
    </div>
  );
};

export default Logo;
