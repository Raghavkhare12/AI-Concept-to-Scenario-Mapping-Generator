import axios from "axios";

export const api = axios.create({
  baseURL: "https://ai-concept-to-scenario-mapping-generator.onrender.com",
});