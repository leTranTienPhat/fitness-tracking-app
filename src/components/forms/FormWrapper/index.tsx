import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ReactNode } from "react";
import * as z from "zod";

interface IProps {
  children: ReactNode;
  schema: any;
  onSubmit: any;
}

const FormWrapper = ({ children, schema, onSubmit }: IProps) => {
  type schemaType = z.infer<typeof schema>;

  const methods = useForm<schemaType>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const submitAction: SubmitHandler<schemaType> = (data: schemaType) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitAction)}>{children}</form>
    </FormProvider>
  );
};

export default FormWrapper;
