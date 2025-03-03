import {
  LOGIN_INPUT,
  LOGIN_MODAL,
} from "@/commons/constants/component.constants";
import ModalContainer from "../../ModalContainer/components/ModalContainer";

const Login = () => {
  return (
    <ModalContainer
      title={LOGIN_MODAL.title}
      description={LOGIN_MODAL.description}
      inputs={LOGIN_INPUT}
      button={LOGIN_MODAL.button}
    />
  );
};

export default Login;
