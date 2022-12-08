import React from "react";

export default function LanguageSelect() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-3 w-4/5">
          <select
            className="form-select form-select-lg mb-3
                appearance-none
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label=".form-select-lg example"
          >
            <option defaultValue>English</option>
            <option value="1">Arabic</option>
            <option value="2">French</option>
            <option value="3">Espagnol</option>
          </select>
        </div>
      </div>
    </div>
  );
}
