"use client";

import axiosInstance from "@/api/axiosInstance";
import { TRecord } from "@/commons/types/component.types";
import { signupSchema } from "@/commons/zod/signupSchema";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";

const useModalContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLogin = searchParams.get("modal") === "login";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const [errors, setErrors] = useState<TRecord>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    password: false,
    checkPassword: false,
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (!isLogin) {
      setTouched((prev) => ({
        ...prev,
        [id]: true,
      }));

      const result = signupSchema.safeParse({
        ...formData,
        [id]: value,
      });

      if (!result.success) {
        const fieldErrors = result.error.errors.reduce((acc, cur) => {
          acc[cur.path[0]] = cur.message;
          return acc;
        }, {} as TRecord);

        setErrors(fieldErrors);
      } else {
        setErrors({});
      }
    }
  };

  const isSignupAllFilled = Object.values(formData).every(
    (value) => value.trim() !== ""
  );
  const isLoginAllFilled = formData.email && formData.password;
  const isValid = Object.keys(errors).length === 0;
  const isFormValid = isLogin ? isLoginAllFilled : isSignupAllFilled && isValid;

  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axiosInstance
      .post("/login", {
        email: formData.email,
        pwd: formData.password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const handleRegister = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axiosInstance
      .post("/insertMember", {
        email: formData.email,
        pwd: formData.password,
        nickname: formData.name,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return {
    router,
    touched,
    errors,
    handleInputChange,
    isFormValid,
    isLogin,
    handleLogin,
    handleRegister,
  };
};

export default useModalContainer;
