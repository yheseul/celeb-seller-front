import { HoverProvider } from "../../contexts/HoverContext";
import Aside from "../aside/Aside";
import Header from "../header/Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flexCol gap-2 w-full relative">
      <div className="sticky bg-white top-0">
        <HoverProvider>
          <Header />
          <Aside />
        </HoverProvider>
      </div>
      {children}
    </div>
  );
};

export default Layout;
