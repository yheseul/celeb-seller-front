import { ButtonProps } from "../types/button.types";

const Button = ({ children, onClick, id }: ButtonProps) => {
  const colorClass = {
    disabled: "bg-gray-300 border-gray-300 text-white",
    default: "bg-main border-main",
    kakao: "bg-kakao border-kakao",
    naver: "bg-naver border-naver",
    google: "bg-white",
  };

  return (
    <button
      className={`border rounded-md py-2 w-full ${
        id === "default" ? `disabled ${colorClass[id]}` : colorClass[id]
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
