import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const getDonors = (filters) => API.get('/donors', { params: filters });
export const toggleAvailability = (id, available) => API.patch(`/donors/${id}`, { available });
export const addDonor = (donorData) => API.post('/donors', donorData);