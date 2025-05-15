import React from "react";

const Slider = () => {
  const slides = [
    { img: "https://iili.io/3VcFbJn.png" },
    { img: "https://iili.io/3VcFmRs.png" },
    { img: "https://iili.io/3VcFsiN.png" },
    { img: "https://iili.io/3VcFiVp.png" },
    { img: "https://iili.io/3VcFQfI.png" },
    { img: "https://iili.io/3VcFZlt.png" },
  ];

  // Repeat slides to avoid gap at loop point
  const allSlides = [...slides, ...slides];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "20px 0",
      }}
      className="bg-offWhite "
    >
      <div
        style={{
          display: "flex",
          animation: "scroll 20s linear infinite",
        }}
      >
        {allSlides.map((slide, idx) => (
          <div
            key={idx}
            style={{
              flex: "0 0 auto",
              width: "150px",
              marginRight: "20px",
            }}
          >
            <img
              src={slide.img}
              alt={`slide-${idx}`}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>

      {/* Inline Keyframes to Avoid Gap */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
