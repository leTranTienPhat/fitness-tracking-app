import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import googleIcon from "@/public/google-icon.svg";
import facebookIcon from "@/public/facebook-icon.svg";

const SocialAccountList = () => {
  const signInWithGoogle = () => {
    alert("Sign in With Google");
  };
  const signInWithFacebook = () => {
    alert("Sign in With Facebook");
  };

  return (
    <Flex gap="4">
      <Box cursor="pointer" onClick={signInWithGoogle}>
        <Image src={googleIcon} alt="Google Signin" width="42" />
      </Box>
      <Box cursor="pointer" onClick={signInWithFacebook}>
        <Image src={facebookIcon} alt="Facebook Signin" width="42" />
      </Box>
    </Flex>
  );
};

export default SocialAccountList;
