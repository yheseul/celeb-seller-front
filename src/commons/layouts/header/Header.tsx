import SearchBar from "@/app/_components/SearchBar/components/SearchBar";
import Nav from "../nav/Nav";
import HorizontalDivider from "@/app/_components/HorizontalDivider";
import Logo from "../components/Logo";
import AuthLinks from "../components/AuthLinks";

const Header = () => {
  return (
    <header className="flexCol">
      <div className="flex justify-between text-gray-400 py-2">
        <div>⭐ 즐겨찾기</div>
        <AuthLinks />
      </div>
      <HorizontalDivider />
      <div className="flex flex-col gap-2 justify-between lg:flex-row items-center py-2">
        <Logo />
        <SearchBar />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
