import { Input } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IProps {
  id: string;
  register: UseFormRegister<FieldValues>;
}

const DefaultInput = ({ id, register }: IProps) => {
  return <Input mb="4" placeholder="Username" {...register(id)}></Input>;
};

export default DefaultInput;
