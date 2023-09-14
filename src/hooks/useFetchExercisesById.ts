import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getExercisesById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`exercise/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchExercisesById(id: string) {
  return useQuery({
    queryKey: ["ExercisesById"],
    queryFn: () => getExercisesById(id),
  });
}
