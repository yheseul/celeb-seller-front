export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  id: "disabled" | "default" | "kakao" | "naver" | "google";
}
