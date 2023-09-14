"use client";
import { useFetchBodyParts } from "@/src/hooks/useFetchBodyParts";
import { Box, Spinner, Text } from "@chakra-ui/react";

interface IProps {}

const Exercices = () => {
  const { data: exercises, isLoading, isError } = useFetchBodyParts();

  if (isLoading) return <Spinner />;
  if (isError) return <Box>ERROR</Box>;

  return (
    <Box>
      {exercises?.data.map((item: string, index: string) => {
        return <Text key={index}>{item}</Text>;
      })}
    </Box>
  );
};

export default Exercices;
