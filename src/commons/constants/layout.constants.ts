import { useLogout } from "../layouts/hooks/useLogout";
import { TRecord } from "../types/component.types";

export const CATEGORY_MENU: TRecord = {
  MENU1: "여성의류",
  MENU2: "남성의류",
  MENU3: "신발",
  MENU4: "가방/지갑",
  MENU5: "시계",
  MENU6: "쥬얼리",
  MENU7: "패션 액세서리",
  MENU8: "디지털",
  MENU9: "가전제품",
};

export const MYPAGE_MENU = {
  MENU1: { label: "내상점", onClick: () => alert("내상점 클릭") },
  MENU2: { label: "찜목록", onClick: () => alert("찜목록 클릭") },
  MENU3: { label: "고객센터", onClick: () => alert("고객센터 클릭") },
  MENU4: { label: "로그아웃", onClick: useLogout },
};
