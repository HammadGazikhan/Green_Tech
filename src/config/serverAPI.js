import axios from "axios";

// const apiHitPoint = import.meta.env.API_URL
const apiHitPoint = "https://atifsyed.pythonanywhere.com/"

console.log("apiHitPoint", apiHitPoint)

const serverAPI = axios.create({
  baseURL:  apiHitPoint,
  // baseURL: `http://127.0.0.1:8000/`,
});

export default serverAPI;
