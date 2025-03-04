"use client";

import Button from "../../Button/components/Button";
import { CloseOutlined } from "@ant-design/icons";
import Input from "./Input";
import HorizontalDivider from "../../HorizontalDivider";
import { ModalContainerProps } from "../types/modalContainer.types";
import useModalContainer from "../hooks/useModalContainer";

const ModalContainer = ({
  title,
  description,
  inputs,
  button,
}: ModalContainerProps) => {
  const { router, touched, errors, handleInputChange, isFormValid, isLogin } =
    useModalContainer();

  return (
    <div
      className="fixed inset-0 z-40 w-full bg-black bg-opacity-50"
      onClick={() => router.back()}
    >
      <div className="fixed inset-0 z-50 flexRowCenter justify-center">
        <form
          className="flex flex-col relative h-1/2 min-h-[544px] w-1/3 min-w-[370px] max-w-md gap-4 rounded-2xl bg-white px-6 pb-4 pt-11"
          onClick={(event) => event.stopPropagation()}
        >
          <CloseOutlined
            className="absolute text-gray-500 top-3 right-3"
            onClick={() => router.back()}
          />
          <div className="text-center text-2xl text-main font-bold">
            {title}
          </div>
          <div className="text-center text-sm text-gray-500">{description}</div>
          <div className="flexCol gap-4">
            {inputs.map((input) => (
              <Input
                key={input.id}
                id={input.id}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                errors={touched[input.id] ? errors[input.id] : undefined}
                onChange={handleInputChange}
              />
            ))}
          </div>
          <Button id={`${isFormValid ? "default" : "disabled"}`}>
            {button}
          </Button>
          {isLogin && (
            <div className="flex flex-col gap-2">
              <div className="flexRowCenter">
                <HorizontalDivider />
                <div className="w-56 font-medium text-center text-xs text-gray-500">
                  SNS LOGIN
                </div>
                <HorizontalDivider />
              </div>
              <div className="flexColCenter gap-2">
                <Button id="google">Google로 시작하기</Button>
                <Button id="kakao">Kakao로 시작하기</Button>
                <Button id="naver">Naver로 시작하기</Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalContainer;
