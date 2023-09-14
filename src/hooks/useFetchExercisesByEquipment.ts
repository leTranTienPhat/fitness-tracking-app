import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getExercisesByEquipment = async (equipment: string) => {
  try {
    const response = await axiosInstance.get(`equipment/${equipment}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchExercisesByEquipment(equipment: string) {
  return useQuery({
    queryKey: ["ExercisesByEquipment"],
    queryFn: () => getExercisesByEquipment(equipment),
  });
}
