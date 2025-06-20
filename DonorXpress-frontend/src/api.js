import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api/donors" });

export const getDonors = (group) => API.get(group ? `/?group=${group}` : "");
export const addDonor = (data) => API.post("/", data);
export const toggleAvailability = (id, available) =>
    API.patch(`/${id}`, { available });
