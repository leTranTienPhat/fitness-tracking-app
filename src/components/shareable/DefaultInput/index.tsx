import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface IProps {
  id: string;
}

const DefaultInput = ({ id }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(errors[id])} mb="4">
      <Input id={id} placeholder="Username" {...register(id)}></Input>
      <FormErrorMessage>
        {errors[id] && errors[id]?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
};

export default DefaultInput;
