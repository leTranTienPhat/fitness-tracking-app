import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getListOfBodyParts = async () => {
  try {
    const response = await axiosInstance.get("bodyPartList");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchBodyParts() {
  return useQuery({
    queryKey: ["bodyParts"],
    queryFn: () => getListOfBodyParts(),
  });
}
