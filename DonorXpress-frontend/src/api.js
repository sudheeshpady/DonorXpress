import axios from "axios";

const API = axios.create({
    baseURL: "https://donorxpress-backend.onrender.com/api/",
});

export const getDonors = (filters) => API.get("/donors", { params: filters });
export const toggleAvailability = (id, available) =>
    API.patch(`/donors/${id}`, { available });
export const addDonor = (donorData) => API.post("/donors", donorData);
