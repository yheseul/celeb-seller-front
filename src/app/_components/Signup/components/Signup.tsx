"use client";

import ModalContainer from "../../ModalContainer/components/ModalContainer";
import {
  SIGNUP_INPUT,
  SIGNUP_MODAL,
} from "@/commons/constants/component.constants";

const Signup = () => {
  return (
    <ModalContainer
      title={SIGNUP_MODAL.title}
      description={SIGNUP_MODAL.description}
      inputs={SIGNUP_INPUT}
      button={SIGNUP_MODAL.button}
    />
  );
};

export default Signup;
