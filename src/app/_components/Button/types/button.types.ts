export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  id: "basic" | "disabled" | "default" | "kakao" | "naver" | "google";
}
