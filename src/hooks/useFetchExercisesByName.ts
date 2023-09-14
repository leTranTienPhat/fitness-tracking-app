import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getExercisesByName = async (name: string) => {
  try {
    const response = await axiosInstance.get(`name/${name}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchExercisesByName(name: string) {
  return useQuery({
    queryKey: ["ExercisesByName"],
    queryFn: () => getExercisesByName(name),
  });
}
