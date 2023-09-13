"use client";

import { useLogout, useUser } from "@/src/api/auth";
import withAuth from "@/src/hoc/withAuth";
import { Box, Button } from "@chakra-ui/react";

const MyPage = () => {
  const user = useUser();
  const logout = useLogout();

  const getInfo = () => {
    console.log(user);
  };

  const logOut = () => {
    logout.mutate({});
  };

  if (user.isLoading) {
    return <div>Loading ...</div>;
  }

  if (!user.data) {
    return <div>Not logged in</div>;
  }

  return (
    <Box>
      <div>Logged in as {user.data.email}</div>
      <Button onClick={getInfo}>Get Info</Button>
      <Button disabled={logout.isLoading} onClick={logOut}>
        Log out
      </Button>
    </Box>
  );
};

export default withAuth(MyPage);
