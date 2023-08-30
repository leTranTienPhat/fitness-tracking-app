import { Box, Button } from "@chakra-ui/react";
import DefaultInput from "../shareable/DefaultInput";
import PasswordInput from "../shareable/PasswordInput";

const SignupForm = () => {
  const handleSignupAction = () => {
    alert("Sign up successfully");
  };

  return (
    <Box>
      {/* <DefaultInput />
      <PasswordInput /> */}
      <Button mb="4" onClick={handleSignupAction}>
        Login
      </Button>
    </Box>
  );
};

export default SignupForm;
