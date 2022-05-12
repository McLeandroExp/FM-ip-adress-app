import React, { useState } from "react";
import { getLocationByIp } from "../helpers/getLocationByIp";

//componente encargado de manejar la entrada
//del formulario y de cambiar el objeto que tiene la informacion
//con la que se renderiza la aplicacion

export const IpSearch = ({ setIpData }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => setInputValue(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    getLocationByIp(inputValue).then((data) => {
      if (data) {
        setIpData(data);
      } else {
        alert("Please enter a valid IP address or mail address");
      }
    });
    setInputValue("");
  };
  return (
    <form className="ipform" onSubmit={handleSubmit}>
      <input
        className="ipform__input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for Any IP address or mail address"
      />
      <button className="ipform__button"></button>
    </form>
  );
};
