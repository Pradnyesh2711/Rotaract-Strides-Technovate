import axios from "axios";
import { BACKEND_URL } from "constants/definitions";

export const getAllAdmins = async () =>{
  try {
    const res = await axios.get(
      `${BACKEND_URL}/dember/getAdmins`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};