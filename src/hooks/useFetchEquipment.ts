import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

const getListOfEquipments = async () => {
  try {
    const response = await axiosInstance.get("equipmentList");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function useFetchEquipments() {
  return useQuery({
    queryKey: ["equipment"],
    queryFn: () => getListOfEquipments(),
  });
}
