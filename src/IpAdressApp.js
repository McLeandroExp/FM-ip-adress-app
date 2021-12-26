import React from "react";
import { AdressInfo } from "./components/AdressInfo";
import { IpSearch } from "./components/IpSearch";
import { LMap } from "./components/LMap";

export const IpAdressApp = () => {
  return (
    <div className="ipApp">
      <section className="mainContent">
        <h1 className="ipApp__title">IP Address Tracker</h1>
        <IpSearch />
        <AdressInfo />
      </section>
      <LMap />
    </div>
  );
};
