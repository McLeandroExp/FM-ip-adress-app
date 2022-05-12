import React from "react";

/**
 * componente que muestra la informacion obtenida a traves de la peticion
 */
export const AdressInfo = ({ ipData }) => {
  let ipAddress = "",
    location = "",
    timezone = "",
    isp = "";
  if (ipData) {
    ipAddress = ipData.ip;
    location = ipData.location;
    timezone = ipData.timezone;
    isp = ipData.isp;
  }
  return (
    <article className="address">
      <div className="address__section">
        <h3 className="address__section-title">ip address</h3>
        <p className="address__section-info">{ipAddress}</p>
      </div>
      <div className="address__section">
        <h3 className="address__section-title">location</h3>
        <p className="address__section-info">{location}</p>
      </div>
      <div className="address__section">
        <h3 className="address__section-title">timezone</h3>
        <p className="address__section-info">{timezone}</p>
      </div>
      <div className="address__section">
        <h3 className="address__section-title">isp</h3>
        <p className="address__section-info">{isp}</p>
      </div>
    </article>
  );
};
