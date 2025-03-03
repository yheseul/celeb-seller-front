import Login from "../_components/Login/components/Login";
import Signup from "../_components/Signup/components/Signup";

export default function ModalPage({
  searchParams,
}: {
  searchParams: { modal?: string };
}) {
  const modal = searchParams.modal || "";

  if (modal === "login") return <Login />;
  if (modal === "signup") return <Signup />;
}
