import { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IProps {
  id: string;
  register: UseFormRegister<FieldValues>;
}

const PasswordInput = ({ id, register }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  return (
    <InputGroup>
      <Input
        mb="4"
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
  );
};

export default PasswordInput;
