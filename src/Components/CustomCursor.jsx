import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inDeepmoran, setInDeepmoran] = useState(false);
  const [onButton, setOnButton] = useState(false);
  const [showCursor, setShowCursor] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 768);
    };

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      const inside = element?.closest("#deepmoran");
      const isButton = element?.closest("button");

      setInDeepmoran(!!inside);
      setOnButton(!!isButton);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showCursor) return null;

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
