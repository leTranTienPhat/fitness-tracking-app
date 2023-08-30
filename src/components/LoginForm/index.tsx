import {
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import DefaultInput from "../shareable/DefaultInput";
import PasswordInput from "../shareable/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  username: z.string().min(1, { message: "Required" }),
  password: z.number().min(10),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitLogin = () => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <FormControl isInvalid={errors.username}>
        <DefaultInput id="username" register={register} />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
      <PasswordInput id="password" register={register} />
      <Button mb="4" onClick={handleSubmitLogin}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
