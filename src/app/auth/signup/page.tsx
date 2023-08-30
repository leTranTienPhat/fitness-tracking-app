"use client";
import SignupForm from "@/src/components/SignupForm";
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
      <SignupForm />
    </Container>
  );
};

export default Signup;
