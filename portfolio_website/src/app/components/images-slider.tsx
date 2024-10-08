"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const imagesData = [

  "/img/my_images/Barcelona/04.jpg",
  "/img/my_images/Barcelona/05.jpg",
  "/img/my_images/Barcelona/10.jpg",
  "/img/my_images/Barcelona/14.jpg",
  "/img/my_images/Barcelona/15.jpg",
  "/img/my_images/Barcelona/16.jpg",
  "/img/my_images/Barcelona/17.jpg",
  "/img/my_images/Barcelona/19.jpg",
  "/img/my_images/Barcelona/20.jpg",
  "/img/my_images/Barcelona/21.jpg",
  "/img/my_images/Barcelona/23.jpg",
  "/img/my_images/Barcelona/24.jpg",
  "/img/my_images/Barcelona/27.jpg",
  "/img/my_images/Barcelona/30.jpg",
  "/img/my_images/Barcelona/34.jpg",
  "/img/my_images/Barcelona/38.jpg",
  "/img/my_images/Barcelona/43.jpg",
  "/img/my_images/Barcelona/48.jpg",
  "/img/my_images/Barcelona/49.jpg",
  "/img/my_images/Barcelona/52.jpg",
  "/img/my_images/Barcelona/53.jpg",
  "/img/my_images/Barcelona/54.jpg",
  "/img/my_images/Barcelona/57.jpg",
  "/img/my_images/Barcelona/60.jpg",


  "/img/my_images/Paris/04.jpg",
  "/img/my_images/Paris/06.jpg",
  "/img/my_images/Paris/08.jpg",
  "/img/my_images/Paris/09.jpg",
  "/img/my_images/Paris/10.jpg",
  "/img/my_images/Paris/12.jpg",
  "/img/my_images/Paris/14.jpg",
  "/img/my_images/Paris/15.jpg",
  "/img/my_images/Paris/16.jpg",
  "/img/my_images/Paris/17.jpg",
  "/img/my_images/Paris/18.jpg",
  "/img/my_images/Paris/19.jpg",
  "/img/my_images/Paris/21.jpg",
  "/img/my_images/Paris/24.jpg",
  "/img/my_images/Paris/28.jpg",
  "/img/my_images/Paris/31.jpg",
  "/img/my_images/Paris/33.jpg",
  "/img/my_images/Paris/36.jpg",
  "/img/my_images/Paris/37.jpg",
  "/img/my_images/Paris/38.jpg",
  "/img/my_images/Paris/46.jpg",
  "/img/my_images/Paris/49.jpg",
  "/img/my_images/Paris/54.jpg",
  "/img/my_images/Paris/55.jpg",
  "/img/my_images/Paris/56.jpg",
  "/img/my_images/Paris/57.jpg",
  "/img/my_images/Paris/59.jpg",
  "/img/my_images/Paris/61.jpg",
  "/img/my_images/Paris/63.jpg",
  "/img/my_images/Paris/65.jpg",
  
  "/img/my_images/Prague/15.jpg",
  "/img/my_images/Prague/16.jpg",
  "/img/my_images/Prague/18.jpg",
  "/img/my_images/Prague/19.jpg",
  "/img/my_images/Prague/20.jpg",
  "/img/my_images/Prague/21.jpg",
  "/img/my_images/Prague/22.jpg",
  "/img/my_images/Prague/23.jpg",
  "/img/my_images/Prague/24.jpg",
  "/img/my_images/Prague/25.jpg",
  "/img/my_images/Prague/26.jpg",
  "/img/my_images/Prague/27.jpg",
  "/img/my_images/Prague/28.jpg",
  "/img/my_images/Prague/30.jpg",
  "/img/my_images/Prague/31.jpg",
  "/img/my_images/Prague/32.jpg",
  "/img/my_images/Prague/33.jpg",
  "/img/my_images/Prague/36.jpg",
  "/img/my_images/Prague/37.jpg",
  "/img/my_images/Prague/38.jpg",
  "/img/my_images/Prague/39.jpg",

  "/img/my_images/Rome/06.jpg",
  "/img/my_images/Rome/38.jpg",
  "/img/my_images/Rome/41.jpg",
  "/img/my_images/Rome/42.jpg",
  "/img/my_images/Rome/44.jpg",
  "/img/my_images/Rome/45.jpg",
  "/img/my_images/Rome/48.jpg",
  "/img/my_images/Rome/49.jpg",
  "/img/my_images/Rome/51.jpg",
  "/img/my_images/Rome/52.jpg",
  "/img/my_images/Rome/59.jpg",
  "/img/my_images/Rome/60.jpg",
  "/img/my_images/Rome/64.jpg",
  "/img/my_images/Rome/66.jpg",

];


interface ImageItem {
  src: string;
  status: "active" | "inactive";
  x: number;
  y: number;
  order: number;
}


const ImageSlider: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>(
    imagesData.map((src) => ({
      src,
      status: "inactive",
      x: 0,
      y: 0,
      order: -1, // Initialize order to -1 for inactive images
    }))
  );
  
  const [globalIndex, setGlobalIndex] = useState(0);
  const [last, setLast] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const activate = (index: number, x: number, y: number) => {
    setImages((prevImages) =>
      prevImages.map((image, idx) =>
        idx === index
          ? { ...image, status: "active", x, y, order: globalIndex }
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
          idx === tailIndex ? { ...image, status: "inactive", order: -1 } : image
        )
      );

      setGlobalIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovering) {
      const container = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - container.left; // Relative to container
      const y = e.clientY - container.top; // Relative to container
      handleOnMove(x, y);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isHovering) {
      const container = e.currentTarget.getBoundingClientRect();
      const x = e.touches[0].clientX - container.left; // Relative to container
      const y = e.touches[0].clientY - container.top; // Relative to container
      handleOnMove(x, y);
    }
  };
  

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={`slider-${index}`}
          width={500} // Set appropriate width
          height={500} // Set appropriate height
          style={{
            position: "absolute",
            display: image.status === "active" ? "block" : "none",
            left: `${image.x}px`,
            top: `${image.y}px`,
            width: "40vmin",
            transform: "translate(-50%, -50%)",
            transition: "opacity 400ms ease, left 100ms, top 100ms",
            zIndex: image.order, // Use the order as the zIndex
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
