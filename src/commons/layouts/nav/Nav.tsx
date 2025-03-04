import VerticalDivider from "@/app/_components/VerticalDivider";
import {
  DollarOutlined,
  MessageOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-4 h-4 order-2 lg:order-1">
      <div className="navMenu">
        <DollarOutlined />
        <Link href="/SellItem">판매하기</Link>
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
