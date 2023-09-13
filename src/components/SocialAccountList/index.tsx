import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import googleIcon from "@/public/google-icon.svg";
import facebookIcon from "@/public/facebook-icon.svg";
import { signInWithGoogle, signInWithFacebook } from "@/src/api/socialAuth";

const SocialAccountList = () => {
  const signInWithGoogleCallback = () => {
    alert("Sign in With Google");
  };
  const signInWithFacebookCallback = () => {
    alert("Sign in With Facebook");
  };

  return (
    <Flex gap="4">
      <Box
        cursor="pointer"
        onClick={() => signInWithGoogle(signInWithGoogleCallback)}
      >
        <Image src={googleIcon} alt="Google Signin" width="42" />
      </Box>
      <Box
        cursor="pointer"
        onClick={() => signInWithFacebook(signInWithFacebookCallback)}
      >
        <Image src={facebookIcon} alt="Facebook Signin" width="42" />
      </Box>
    </Flex>
  );
};

export default SocialAccountList;
