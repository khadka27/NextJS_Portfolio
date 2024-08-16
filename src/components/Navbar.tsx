"use client";
import React, { ReactNode, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import DarkModeToggle from "@/components/DarkModeToggle"; // Ensure this is the correct path to your DarkModeToggle component
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
  subItems?: { name: string; link: string }[];
};

const Navbar = ({
  navItems = [],
  className,
}: {
  navItems?: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const defaultNavItems = [
    { name: "Home", link: "/", icon: <FaHome /> },
    {
      name: "About",
      link: "#about",
      icon: <FaInfoCircle />,
      subItems: [
        { name: "Skills", link: "#skill", icon: <FaCode /> },
        { name: "Projects", link: "#project", icon: <FaProjectDiagram /> },
      ],
    },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];

  const items = navItems.length ? navItems : defaultNavItems;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 pl-10 py-4 items-center justify-center space-x-8",
          className
        )}
      >
        {items.map((navItem, idx) => (
          <div
            key={`link=${idx}`}
            className="relative"
            onMouseEnter={() => navItem.subItems && setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <Link
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-lg">{navItem.name}</span>
            </Link>
            {navItem.subItems && dropdownVisible && (
              <div className="absolute top-full mt-2 w-48 bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] rounded-lg shadow-lg">
                {navItem.subItems.map((subItem, subIdx) => (
                  <Link
                    key={`subLink=${subIdx}`}
                    href={subItem.link}
                    className="block px-4 py-2 text-lg dark:text-neutral-50 text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <DarkModeToggle />
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
