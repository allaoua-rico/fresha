import React, { useEffect, useRef, useState } from "react";

export default function BookingStickyCol({ children }) {
  const [top, setTop] = useState(80);
  const ref = useRef();
  const handleScroll = () => {
    setTop(window.scrollY + 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full lg:sticky top-20 z-20 "
      // style={{    -mt-6
      //   top: top,
      // }}
    >
      {children}
    </div>
  );
}
