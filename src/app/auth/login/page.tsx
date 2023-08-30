"use client";
import { Container, Heading, Text } from "@chakra-ui/react";
import LoginForm from "@/src/components/LoginForm";
import CustomDivider from "@/src/components/shareable/CustomDivider";
import SocialAccountList from "@/src/components/SocialAccountList";
import Link from "next/link";

const Login = () => {
  return (
    <Container border="1px" borderColor="gray.200" p="10">
      <Heading
        textAlign="center"
        mb="10                                                                                                                                                                                                                                                                                                                                                           "
      >
        Sign In
      </Heading>
      <LoginForm />
      <Text mb="4">
        Don't have an account?{" "}
        <Text
          as="span"
          color="blue.300"
          _hover={{
            color: "blue.600",
            cursor: "pointer",
          }}
        >
          <Link href="/auth/signup">Sign up now</Link>
        </Text>
      </Text>
      <CustomDivider />
      <SocialAccountList />
    </Container>
  );
};

export default Login;
