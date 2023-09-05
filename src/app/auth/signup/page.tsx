"use client";
import SignUpForm from "@/src/components/forms/SignUpForm";
import { Container, Heading } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Container border="1px" borderColor="gray.200" p="10">
      <Heading
        textAlign="center"
        mb="10                                                                                                                                                                                                                                                                                                                                                           "
      >
        Sign Up
      </Heading>
      <SignUpForm />
    </Container>
  );
};

export default Signup;
