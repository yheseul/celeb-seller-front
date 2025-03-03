import { InputField } from "@/app/_components/ModalContainer/types/modalContainer.types";

export const SIGNUP_INPUT: InputField[] = [
  {
    id: "name",
    label: "이름",
    type: "text",
    placeholder: "이름을 입력해 주세요.",
  },
  {
    id: "email",
    label: "이메일",
    type: "text",
    placeholder: "이메일을 입력해 주세요.",
  },
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해 주세요.",
  },
  {
    id: "checkPassword",
    label: "비밀번호 확인",
    type: "password",
    placeholder: "비밀번호를 한 번 더 입력해 주세요.",
  },
];

export const SIGNUP_MODAL = {
  title: "회원가입",
  description: "회원가입을 위해 아래 빈칸을 모두 채워 주세요.",
  button: "회원가입",
};

export const LOGIN_MODAL = {
  title: "로그인",
  description: "로그인을 위해 아래 빈칸을 모두 채워 주세요.",
  button: "로그인",
};

export const LOGIN_INPUT: InputField[] = [
  {
    id: "email",
    label: "이메일",
    type: "email",
    placeholder: "이메일을 입력해 주세요.",
  },
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해 주세요.",
  },
];
