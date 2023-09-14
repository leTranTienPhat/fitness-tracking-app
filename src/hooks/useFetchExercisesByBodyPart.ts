import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getExercisesByBodyPart = async (bodyPart: string) => {
  try {
    const response = await axiosInstance.get(`bodyPart/${bodyPart}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchExercisesByBodyPart(bodyPart: string) {
  return useQuery({
    queryKey: ["ExercisesByBodyPart"],
    queryFn: () => getExercisesByBodyPart(bodyPart),
  });
}
