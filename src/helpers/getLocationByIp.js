import axios from "axios";
export const getLocationByIp = async (ip = "") => {
  try {
    const instance = axios.create({
      baseURL: "https://geo.ipify.org/api/v2/country,city",
      params: {
        apiKey: process.env.REACT_APP_LOCALIZATION_KEY,
        ipAddress: ip,
      },
    });
    const response = await instance.get();
    const data = response.data;

    return {
      coors: [data.location.lat,data.location.lng],
      ip: data.ip,
      location: `${data.location.region}, ${data.location.postalCode}`,
      timezone: data.location.timezone,
      isp: data.isp,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
