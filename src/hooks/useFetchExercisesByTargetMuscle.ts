import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getExercisesByTargetMuscle = async (targetMuscle: string) => {
  try {
    const response = await axiosInstance.get(`target/${targetMuscle}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchExercisesByTargetMuscle(targetMuscle: string) {
  return useQuery({
    queryKey: ["ExercisesByTargetMuscle"],
    queryFn: () => getExercisesByTargetMuscle(targetMuscle),
  });
}
