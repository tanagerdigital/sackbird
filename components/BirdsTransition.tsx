"use client";
import React, { useEffect, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

const BirdsTransition = () => {
  const [imageIndex, setImageIndex] = useState(4);

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
      width={649}
      height={618}
      draggable={false}
      src={`/bird${imageIndex}.svg`}
      alt={`sack bird`}
      style={styles}
    />
  );
};

export default BirdsTransition;
