import { ChangeEvent } from "react";

export interface ModalContainerProps {
  title: string;
  description: string;
  inputs: InputField[];
  button: string;
}

export interface InputField {
  id: "name" | "email" | "password" | "checkPassword";
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  errors?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}