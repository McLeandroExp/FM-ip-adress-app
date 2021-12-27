import React, { useState } from "react";
import { getLocationByIp } from "../helpers/getLocationByIp";

export const IpSearch = ({setIpData}) => {
  
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => setInputValue(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 15) {
      getLocationByIp(inputValue)
        .then(data => setIpData(data));
      setInputValue('')  
    }
  };
  return (
    <form className="ipform" onSubmit={handleSubmit}>
      <input
        className="ipform__input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="ipform__button"></button>
    </form>
  );
};
