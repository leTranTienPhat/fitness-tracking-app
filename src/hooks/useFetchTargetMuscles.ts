import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getListOfTargetMuscles = async () => {
  try {
    const response = await axiosInstance.get("targetList");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchTargetMuscles() {
  return useQuery({
    queryKey: ["targetMuscles"],
    queryFn: () => getListOfTargetMuscles(),
  });
}
