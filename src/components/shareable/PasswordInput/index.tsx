import { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister, useFormContext } from "react-hook-form";

interface IProps {
  id: string;
}

const PasswordInput = ({ id }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  return (
    <FormControl isInvalid={Boolean(errors[id])} mb="4">
      <InputGroup>
        <Input
          id={id}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          {...register(id)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>
        {errors[id] && errors[id]?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
};

export default PasswordInput;
