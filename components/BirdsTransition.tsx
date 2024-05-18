"use client";
import React, { useEffect, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

const BirdsTransition = () => {
  const [imageIndex, setImageIndex] = useState(4);
  const [startX, setStartX] = useState<number>(0); // Store the initial X position

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    setStartX(e.touches[0].clientX); // Set the initial X position on touch start
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX; // Calculate the change in X position from the start
    if (Math.abs(deltaX) > 10) {
      // Check if the change exceeds a threshold (e.g., 100)
      if (deltaX > 0) {
        setImageIndex(5);
      } else if (deltaX < 0) {
        setImageIndex(6);
      }
    }
  };

  const handleTouchEnd = () => {
    setImageIndex(4); // Reset imageIndex on touch end
  };

  const handleMove = useGesture({
    onMove: ({ distance: [dx], delta: [deltaX] }) => {
      if (dx > 100) {
        // const newImageIndex = getRandomIndex();
        console.log("distance: " + dx + "delta x: " + deltaX);
        if (deltaX > 0) {
          setImageIndex(5);
        } else if (deltaX < 0) {
          setImageIndex(6);
        }
      }
    },
    onMoveEnd: () => {
      setTimeout(() => {
        setImageIndex(4);
      }, 500);
    },
  });

  const styles = useSpring({
    from: { opacity: 1 },
    to: { opacity: 1 },
    config: { duration: 2000 }, // Adjust the duration as needed
  });

  return (
    <animated.img
      {...handleMove()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={"w-[248px] h-[236px] lg:w-[649px] lg:h-[618px]"}
      draggable={false}
      src={`/bird${imageIndex}.svg`}
      alt={`sack bird`}
      style={styles}
    />
  );
};

export default BirdsTransition;
