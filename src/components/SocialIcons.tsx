"use client";
import Image from "next/image";
import React, { useState } from "react";
import facebookImage from "./Images/download.png";
import instagramImage from "./Images/insta.png";
import gitImage from "./Images/git.png";
import linkedinImage from "./Images/linkend.png";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    image: facebookImage.src,
    href: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    image: instagramImage.src,
    href: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "GitHub",
    image: gitImage.src, // Adjust this path as per your actual file structure
    href: "https://www.twitter.com",
  },
  {
    id: 4,
    name: "LinkedIn",
    image: linkedinImage.src, // Adjust this path as per your actual file structure
    href: "https://www.linkedin.com",
  },
];

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
    href: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 20 }; // Adjust damping for smoother transitions
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="relative flex space-x-[-10px] mt-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="-mr-4 relative group"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          style={{ zIndex: hoveredIndex === item.id ? 1 : 0 }}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                key={`tooltip-${item.id}`}
                initial={{ opacity: 1, scale: 1, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 20 }}
                transition={{ duration: 0.2 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 pointer-events-none"
              >
                {/* Display name without animation */}
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform transition-transform hover:scale-105 relative"
          >
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className={`object-cover object-top rounded-full h-14 w-14 border-2 ${
                hoveredIndex === item.id ? "z-30 border-white" : ""
              } relative transition duration-500`}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

const SocialIcons = () => {
  return <AnimatedTooltip items={socialLinks} />;
};

export default SocialIcons;
