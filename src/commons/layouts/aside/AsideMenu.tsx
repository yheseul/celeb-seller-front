import { CATEGORY_MENU } from "../../constants/layout.constants";
import { useHoverContext } from "../../contexts/HoverContext";

const AsideMenu = () => {
  const { handleMouseOver, handleMouseOut } = useHoverContext();
  const categoryMenu = Object.values(CATEGORY_MENU);

  return (
    <ul
      className="border w-40 rounded-md absolute top-7 bg-white"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {categoryMenu.map((menu, index) => (
        <li className="categoryItem cursor-pointer" key={index}>
          {menu}
        </li>
      ))}
    </ul>
  );
};

export default AsideMenu;
