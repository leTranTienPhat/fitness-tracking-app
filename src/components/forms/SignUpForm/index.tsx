import { Button } from "@chakra-ui/react";
import { loginSchema } from "@/src/validation/LoginFormValidation";
import DefaultInput from "../../shareable/DefaultInput";
import PasswordInput from "../../shareable/PasswordInput";
import FormWrapper from "../FormWrapper";
import { auth } from "@/src/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface ISignUpData {
  username: string;
  password: string;
}

const SignUpForm = () => {
  const onSubmit = (data: ISignUpData) => {
    const { username, password } = data;
    createUserWithEmailAndPassword(auth, username, password).then(
      (userCredential) => {
        console.log(userCredential);
      }
    );
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
