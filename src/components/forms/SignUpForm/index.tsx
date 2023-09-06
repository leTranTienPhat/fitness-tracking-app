import { Button } from "@chakra-ui/react";
import { loginSchema } from "@/src/validation/LoginFormValidation";
import DefaultInput from "../../shareable/DefaultInput";
import PasswordInput from "../../shareable/PasswordInput";
import FormWrapper from "../FormWrapper";
import { LoginCredentials, useRegister } from "@/src/api/auth";

const SignUpForm = () => {
  const registerFn = useRegister();
  const onSubmit = (data: LoginCredentials) => {
    registerFn.mutate(data, {
      onSuccess: () => console.log("Success register"),
    });
  };

  return (
    <FormWrapper schema={loginSchema} onSubmit={onSubmit}>
      <DefaultInput id="username" />
      <PasswordInput id="password" />
      <Button mb="4" type="submit">
        Sign Up Now
      </Button>
    </FormWrapper>
  );
};

export default SignUpForm;
