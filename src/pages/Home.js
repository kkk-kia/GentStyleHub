import React, { useEffect, useState } from "react";
import { Slider } from "../components/slider/slider";
import { PopularStayles } from "../components/popular-Stayles/popular-Stayles";
import { DownloadApp } from "../components/downloadApp/downloadApp";
import { Off } from "../components/off/off";

export const Home = () => {
  return (
    <div className="Home">
      <Off/>
      <Slider/>
      <PopularStayles/>
      <DownloadApp/>
    </div>
  );
};
