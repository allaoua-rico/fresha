import React, { useEffect, useState } from "react";

export default function BlueButton({ children, index, selected, onClick }) {
  const [isSelected, setIsSelected] = useState(selected === index);

  useEffect(() => {
    setIsSelected(selected === index);
  }, [selected]);

  return (
    <button
      className={
        "py-1 px-4 font-medium border hover:border-blue-500 rounded-full shadow-sm mx-2 " +
        (isSelected ? " text-white bg-blue-500" : " text-blue-400 bg-white")
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
