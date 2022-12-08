import React from "react";

export default function ProdileFavoritesAndList() {
  return (
    <div className="grid grid-cols-2 gap-x-lg">
      <button className="bg-white border font-semibold text-center w-full px-md py-[10px] rounded-md shadow-md text-lg">
        My favourites
      </button>
      <button className="bg-white border font-semibold text-center w-full px-md py-[10px] rounded-md shadow-md text-lg">
        List your business
      </button>
    </div>
  );
}
