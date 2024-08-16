"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import AboutImage from "./Images/homepage.png"; // Adjust the path to your image
import logo from "./Images/logo.png"; // Adjust the path to your image
import SocialIcons from "./SocialIcons";
import { Globes } from "./globe";
import Link from "next/link";

const MotionImage = motion(Image);

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an initial loading delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetching)
    }, 2000);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 mt-1">
      <div className="text-white dark:text-red-600"></div>
      {/* <div className="h-10 w-[310px] flex justify-end ml-[78%] ">
        <Globes  />
      </div> */}
      {/* logo and navbar */}
      <header className="flex items-center  justify-between max-w-6xl mx-1 lg:p-8 m-0">
        <Image
          src={logo}
          alt="logo"
          width={70}
          height={70}
          className="bg-gray-300 dark:bg-white custom-rounded"
        />
      </header>

      {/* Main content */}
      <div className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 lg:py-16 lg:grid-cols-12 lg:pt-0">
        {" "}
        {/* Mobile image */}
        <div className="flex justify-center lg:hidden mt-10">
          <MotionImage
            src={AboutImage}
            alt="About"
            className="custom-rounded border-4 border-yellow-400 dark:border-sky-500 h-64 w-64"
            initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
            animate={{
              borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            width={256}
            height={256}
          />
        </div>
        {/* Main text */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="  font-bold h-10 relative inline-block p-2 border-2 border-transparent rounded-md bg-clip-border bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-500 ease-in-out mb-10 hover:border-white">
            <span className="text-white"> Abishek Khadka</span>
          </h1>

          <h1 className="text-4xl font-bold text-gray-800 dark:text-sky-500 lg:text-5xl flex-col">
            Hello, I&apos;m{" "}
            <Typewriter
              options={{
                strings: [
                  "Abishek Khadka",
                  "Web Developer",
                  "Freelance Writer",
                ],
                deleteSpeed: 50,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className=" mt-4 text-gray-600 dark:text-gray-300 lg:text-xl mr-11">
            👋 Hello! I&apos;m Abishek Khadka, a Full Stack Developer with a
            passion for crafting dynamic web solutions. Explore my portfolio
            where each visit brings a refreshing animated experience, reflecting
            my commitment to seamless design and functionality.
          </p>
          <div className="mt-8">
            <Link
              href=".hire"
              className="px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Hire me
            </Link>
          </div>

          <div className="mt-5">
            <p className="bouncy-text mb-1 text-black dark:text-sky-500 ">
              Connect with me
            </p>
            <SocialIcons />
          </div>
        </div>
        {/* Desktop image */}
        <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
          <MotionImage
            src={AboutImage}
            alt="About"
            className="custom-rounded border-4 bouder-r border-sky-500 h-[50%] w-[52%]"
            initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
            animate={{
              borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
