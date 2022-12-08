import React from "react";
import H2Wrapper from "../assets/Wrappers/H2Wrapper";

export default function Venues() {
  return (
    <div className="w-full">
      <H2Wrapper>Venues near Mellow Nails Artistry</H2Wrapper>
      <div className="w-full  flex overflow-auto whitespace-nowrap scrollbar-hide">
        {venues.map((venue) => (
          <a
            key={venue.name}
            href={venue.link}
            className="
            w-4/5 shrink-0
            md:w-2/5
            lg:flex-1 lg:w-0

            flex flex-col items-center
            
            mx-1  lg:mx-2
            group
            "
          >
            <div className="relative">
              <img
                src={venue.img}
                alt={venue.img}
                className="max-w-full rounded-[4px] h-auto group-hover:opacity-80 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 text-sm font-medium bg-white py-1 px-2 rounded-md">
                FEMALE ONLY
              </div>
            </div>

            <div className="w-full">
              <div className="text-lg font-semibold  mt-3">{venue.name}</div>
              <div className="text-md text-secondarytextColor truncate">
                {venue.location}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const venues = [
  {
    name: "Plush Nail Boutique ",
    location:
      "8775 Prince Abdulaziz Ibn Musaid Ibn Jalawi Street, Riyadh (As Sulimaniyah), Riyadh Province",
    femaleOlny: true,
    link: "/a/plush-nail-boutique-riyadh-8775-prince-abdulaziz-ibn-musaid-ibn-jalawi-street-jbt3hwxb",
    img: "images/venues/venue1.jpg",
  },
  {
    name: "Eugénie Salon",
    location: "Al-Thumamah Valley Street, Riyadh (Al Olaya), Riyadh Province",
    femaleOlny: true,
    link: "/a/eugenie-salon-riyadh-al-thumamah-valley-street-v12sqrze",
    img: "images/venues/venue2.jpg",
  },
  {
    name: "The Hair.sa",
    location: "Jabir bin Abdullah, Riyadh (Al Mutamarat), Riyadh Province",
    femaleOlny: true,
    link: "/a/the-hair-sa-riyadh-jabir-bin-abdullah-vv7v5xtt",
    img: "images/venues/venue3.jpg",
  },
  {
    name: "Khusal - Al Wurud",
    location:
      "Ash Shaikh Abdullah Al Anqari, Riyadh (Al Wurud), Riyadh Province",
    femaleOlny: false,
    link: "/a/khusal-al-wurud-riyadh-ash-shaikh-abdullah-al-anqari-kx2s7han",
    img: "images/venues/venue4.jpg",
  },
];
