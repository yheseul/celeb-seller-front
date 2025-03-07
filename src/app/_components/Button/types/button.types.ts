import { MouseEvent } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  id: "basic" | "disabled" | "default" | "kakao" | "naver" | "google";
}
