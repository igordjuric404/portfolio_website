"use client";

import React, { useState, useEffect } from "react";

const imagesData = [
  "https://images.unsplash.com/photo-1663583513676-9f6361cd859d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1663530294185-5af3692326c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8&auto=format&fit=crop&w=1506&q=80",
  "https://images.unsplash.com/photo-1663579111009-863bc978c78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1663492412083-17bfcad3c533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8&auto=format&fit=crop&w=987&q=80",
];

interface Image {
  src: string;
  status: "active" | "inactive";
  x: number;
  y: number;
}

const ImageSlider: React.FC = () => {
  const [images, setImages] = useState<Image[]>(
    imagesData.map((src) => ({
      src,
      status: "inactive",
      x: 0,
      y: 0,
    }))
  );
  const [globalIndex, setGlobalIndex] = useState(0);
  const [last, setLast] = useState({ x: 0, y: 0 });

  const activate = (index: number, x: number, y: number) => {
    setImages((prevImages) =>
      prevImages.map((image, idx) =>
        idx === index
          ? { ...image, status: "active", x, y }
          : image
      )
    );
    setLast({ x, y });
  };

  const distanceFromLast = (x: number, y: number): number => {
    return Math.hypot(x - last.x, y - last.y);
  };

  const handleOnMove = (x: number, y: number) => {
    if (distanceFromLast(x, y) > window.innerWidth / 20) {
      const leadIndex = globalIndex % images.length;
      const tailIndex = (globalIndex - 5 + images.length) % images.length;

      activate(leadIndex, x, y);

      setImages((prevImages) =>
        prevImages.map((image, idx) =>
          idx === tailIndex ? { ...image, status: "inactive" } : image
        )
      );

      setGlobalIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log("Mouse Coordinates: ", e.clientX, e.clientY); // Debugging: Log coordinates
      handleOnMove(e.clientX, e.clientY);
    };
    const handleTouchMove = (e: TouchEvent) =>
      handleOnMove(e.touches[0].clientX, e.touches[0].clientY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [last]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {images.map((image, index) => (
        <img
          key={index}
          className="image"
          src={image.src}
          alt={`slider-${index}`}
          style={{
            position: "absolute",
            display: image.status === "active" ? "block" : "none",
            left: `${image.x}px`,
            top: `${image.y}px`,
            width: "40vmin",
            transform: "translate(-50%, -50%)",
            transition: "opacity 400ms ease, left 100ms, top 100ms", // Ensure smooth transitions
            zIndex: index + 1, // Ensure correct layering order
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
