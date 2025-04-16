import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inDeepmoran, setInDeepmoran] = useState(false);
  const [onButton, setOnButton] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      const inside = element?.closest("#deepmoran");
      const isButton = element?.closest("button");

      setInDeepmoran(!!inside);
      setOnButton(!!isButton);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`fixed top-1 left-1 w-3 h-3 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out
        ${inDeepmoran ? "bg-yellow-400" : "bg-deepMaroon"} 
        ${onButton ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    />
  );
};

export default CustomCursor;
