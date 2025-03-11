import axiosInstance from "@/api/axiosInstance";

export const useLogout = () => {
  const answer = confirm("로그아웃하시겠습니까?");
  if (answer) {
    axiosInstance
      .post("/logout")
      .then((response) => {
        console.log(response);
        window.location.href = "/";
      })
      .catch((err) => {
        throw new Error(err);
      });
  } else {
    console.log("로그아웃안함");
  }
};
