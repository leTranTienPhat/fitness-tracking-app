import { Button } from "@chakra-ui/react";
import DefaultInput from "../shareable/DefaultInput";
import PasswordInput from "../shareable/PasswordInput";
import { loginSchema } from "@/src/validation/LoginFormValidation";
import FormWrapper from "../FormWrapper";

const LoginForm = () => {
  const onSubmit = <T,>(data: T) => {
    console.log(data);
  };

  return (
    <FormWrapper schema={loginSchema} onSubmit={onSubmit}>
      <DefaultInput id="username" />
      <PasswordInput id="password" />
      <Button mb="4" type="submit">
        Login
      </Button>
    </FormWrapper>
  );
};

export default LoginForm;
