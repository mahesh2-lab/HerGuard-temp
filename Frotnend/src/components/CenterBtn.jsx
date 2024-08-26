import React from "react";
import { useMap } from "react-leaflet";
import { IconButton, Button } from "@material-tailwind/react";
import L from "leaflet";
import { customIcon } from "./hoem";
import { Color } from "./color";

function CenterButton({ center, zoom, tooglereport, bgColor }) {
  const map = useMap();

  // Centers the map on the given coordinates and adds a marker
  const handleClick = () => {
    map.flyTo(center, zoom);
    L.marker(center, { icon: customIcon })
      .addTo(map)
      .bindPopup("You are here.")
      .openPopup();
  };

  return (
    <div className="absolute top-[53%] gap-y-3 below-400px:top-[75%] below-400px:mr-4  mb-[31px] mr-[31px] right-0 flex items-end flex-col p-2 z-[2000]">
      {/* Button to recenter the map */}
      <IconButton
        onClick={handleClick}
        className="bg-[#E5E4E4] text-black border border-[#FAF7F7]"
      >
        <i className="fa-regular fa-lg fa-life-ring"></i>
      </IconButton>

      <Button
        onClick={tooglereport}
        className="bg-[#E5E4E4] text-black border border-[#FAF7F7]"
      >
        {bgColor ? "Close Report" : "Report Location"}
      </Button>

      <div className="border border-[#FAF7F7] below-400px:hidden backdrop-blur-sm bg-[#E5E4E4] rounded-[17px] shadow-md py-4 px-6 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] opacity-100">
        <h2 className="mt-4 text-xl font-semibold opacity-100">
          Safety Levels
        </h2>
        <ul className="text-[11px] py-3 leading-9 opacity-100">
          <li className="mt-2 flex items-center">
            <Color color="#4CAF50" /> Very Safe: Calm, Secure, Protected
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#8BC34A" /> Safe: Trust, Comfort, Stable
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#FFEB3B" /> Moderate: Caution, Alert, Watchful
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#FF9800" /> Unsafe: Warning, Risk, Uncertain
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#F44336" /> Very Unsafe: Danger, Threat, Fear
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CenterButton;
