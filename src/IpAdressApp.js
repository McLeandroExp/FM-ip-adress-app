import React, { useEffect, useState } from "react";
import { AdressInfo } from "./components/AdressInfo";
import { IpSearch } from "./components/IpSearch";
import { LMap } from "./components/LMap";

export const IpAdressApp = () => {
  const [ipData, setIpData] = useState(null)
  const [coors, setCoors] = useState([51.505,-0.09])  
  useEffect(() => {
    if(ipData) setCoors(ipData.coors)
  }, [ipData])
  return (
    <div className="ipApp">
      <section className="mainContent">
        <h1 className="ipApp__title">IP Address Tracker</h1>
        <IpSearch setIpData = {setIpData}/>
        <AdressInfo ipData = {ipData}/>
      </section>
      <LMap coors = {coors}/>
    </div>
  );
};
