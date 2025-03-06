"use server";

import { IFormData } from "@/commons/types/component.types";
import { signupSchema } from "@/commons/zod/signupSchema";
import { ZodError } from "zod";

const submitAction = async (prevState: IFormData, formData: FormData) => {
  try {
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const password = formData.get("password") || "";
    const checkPassword = formData.get("checkPassword") || "";

    const finalData = {
      name,
      email,
      password,
      checkPassword,
    };

    signupSchema.parse(finalData);
    // sending the data to the server.....!~!~!

    return { ...finalData, errors: {} };
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors = error.errors.reduce((acc, cur) => {
        const field = cur.path[0];
        acc[field] = cur.message;
        return acc;
      }, {} as Record<string, string>);
      return { ...prevState, errors: fieldErrors };
    }
    return { ...prevState };
  }
};

export default submitAction;
