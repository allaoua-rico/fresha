import {  useState } from "react";
import BlueButton from "../assets/Wrappers/BlueButton";
import H2Wrapper from "../assets/Wrappers/H2Wrapper";

export default function TreatYourself() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-full ">
      <H2Wrapper>Treat yourself anytime, anywhere</H2Wrapper>
      <div className="-ml-2 flex whitespace-nowrap overflow-auto scrollbar-hide">
        {locations.map((loc, index) => (
          <BlueButton
            selected={selected}
            index={index}
            key={loc.title}
            onClick={() => setSelected(index)}
          >
            {loc.title}
          </BlueButton>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-5">
        {locations[selected].list.map((el) => (
          <a
            key={el}
            className="py-[2px] px-3 lg:px-1 text-gray-500 hover:text-secondarytextColor text-sm truncate"
            href="/map"
          >
            {el}
          </a>
        ))}
      </div>
    </div>
  );
}
const locations = [
  {
    title: "Salons near me",
    list: [
      "Beauty Salon near me",
      "Hair Salon near me",
      "Waxing Salon near me",
      "Spa Salon near me",
      "Aesthetics Salon near me",
      "Tanning Salon near me",
      "Weight Salon near me",
      "Personal Salon near me",
      "Eyebrows & Lashed Salon near me",
      "Nail Salon near me",
      "Massage Salon near me",
      "BarberShop Salon near me",
      "Therapy Salon near me",
      "Tattoo Salon near me",
      "Gym & Fitness Salon near me",
    ],
  },
  {
    title: "Other businesses in Riyadh",
    list: [
      "Nail Salon Al Khobar",
      "Hair Salon Al Khobar",
      "Hair Salon Riyadh",
      "Beauty Salon Riyadh",
      "Aesthetics Salon near me",
    ],
  },
  {
    title: "Other cities",
    list: [
      "Salons in Riyadh",
      "Salons in Jeddah",
      "Salons in Rural England",
      "Salons in London",
      "Salons in Brisbane",
      "Salons in Perth",
      "Salons in Glasgow",
      "Salons in Rural Scotland",
      "Salons in Toronto",
      "Salons in Al Khobar",
      "Salons in Dhahran",
      "Salons in Melbourne",
    ],
  },
];
