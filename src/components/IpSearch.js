import React, { useState } from "react";
import { getLocationByIp } from "../helpers/getLocationByIp";

export const IpSearch = ({setIpData}) => {
  
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => setInputValue(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (inputValue.trim().length >= 2) {
      getLocationByIp(inputValue)
        .then(data => setIpData(data));
      setInputValue('')  
    // }
  };
  return (
    <form className="ipform" onSubmit={handleSubmit}>
      <input
        className="ipform__input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for Any IP address or domain"
      />
      <button className="ipform__button"></button>
    </form>
  );
};
