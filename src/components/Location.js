import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Location({ textColor, aboutSection }) {
  // const [Color, setColor] = useState("secondarytextColor")
  return (
    <div>
      {" "}
      <div className="flex">
        {" "}
        <p
          className={
            "mb-1  md:text-lg md:text-" +
            (textColor == "gray" ? "secondarytextColor" : "black")
          }
        >
          7774 Prince Abdulaziz Ibn Musaid Ibn Jalawi - Al Olaya Dist. Unit No.
          14 Riyadh 12221 - 3888, Riyadh
        </p>
        {aboutSection && (
          <Link to="/map">
            <img src={"images/map.png"} alt="map" className="w-18 ml-2" />
          </Link>
        )}
      </div>
      <div className="md:hidden">
        <Link to="/map">
          <div className="text-blue-400 text-lg ">Show map</div>
        </Link>
      </div>
      {aboutSection && (
        <div>
          <a href="https://www.google.com/maps?daddr=7774+Prince+Abdulaziz+Ibn+Musaid+Ibn+Jalawi+-+Al+Olaya+Dist.+Unit+No.+14+Riyadh+12221+-+3888,+Riyadh">
            <div className="text-blue-400 text-lg hover:underline inline">
              See directions
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
