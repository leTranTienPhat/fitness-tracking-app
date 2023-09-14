import axios from "axios";

const axiosInstance = axios.create({
  method: "GET",
  timeout: 5000, // Adjust the timeout as needed
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});

axiosInstance.defaults.baseURL = "https://exercisedb.p.rapidapi.com/exercises";

export default axiosInstance;
