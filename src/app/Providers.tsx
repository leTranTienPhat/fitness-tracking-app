"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { queryClientOptions } from "../api/reactQueryConfig";

interface IProps {
  children: ReactNode;
}

const queryClient = new QueryClient(queryClientOptions);

const Providers = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default Providers;
