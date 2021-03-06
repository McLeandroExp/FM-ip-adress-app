import axios from "axios";
export const getLocationByIp = async (input = "") => {
  try {
    const instance = axios.create({
      baseURL: "https://geo.ipify.org/api/v2/country,city",
      params: {
        apiKey: process.env.REACT_APP_LOCALIZATION_KEY,
        ipAddress: input,
        domain: input,
        email: input,
      },
    });
    const response = await instance.get();
    if (response.statusText !== "OK") {
      throw new Error(response.statusText);
    }
    const data = response.data;

    return {
      coors: [data.location.lat, data.location.lng],
      ip: data.ip,
      location: `${data.location.region}, ${data.location.postalCode}`,
      timezone: data.location.timezone,
      isp: data.isp,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
