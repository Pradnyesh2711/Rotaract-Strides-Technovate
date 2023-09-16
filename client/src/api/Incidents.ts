import axios from "axios";
import { BACKEND_URL } from "constants/definitions";

export const getIncidents = async (deptName: string, stationName: string) => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/incidents/get_Incidents_by_dept_and_station?dept_name=${deptName}&station_name=${stationName}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
