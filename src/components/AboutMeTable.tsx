// AboutMePage.tsx

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import about from "./Images/3.png";

const AboutMePage = () => {
  return (
    <div className="container mx-auto ">
      <div className="relative flex items-center justify-center ">
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4 Sine">About Me</h2>
        </div>
        <h1 className="shadow-text">About</h1>
      </div>

      <p className="mt-10 text-justify">
        I am a self-taught web developer and freelance writer. I have been
        working in this field for more than 2 years. I have worked with
        different clients and companies. I have a good understanding of
        different programming languages and frameworks. I am also good at
        writing articles and blogs. I have written articles on different topics
        like technology, health, and fitness. I am passionate about learning new
        things and improving my skills. I am a hardworking and dedicated person.
        I always try to give my best in everything I do. I am looking for new
        opportunities and challenges to grow and improve myself. I am confident
        that I can be a valuable asset to any organization. I am looking forward
        to working with you. Thank you for considering my application. I hope to
        hear from you soon.
      </p>

      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center min-h-screen px-6 py-12">
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 mr-11">
          <Image
            src={about}
            alt="logo"
            width={1500}
            height={1500}
            className="mr-11"
          />
        </div>

        <div className="md:w-1/2 relative z-10 md:pl-12">
          <div className="relative z-20 p-4">
            <ul className="mb-8 space-y-2">
              <li className="mb-4 font-bold ">
                <strong>Name:</strong> Abishek Khadka
              </li>
              <li className="mb-4 font-bold">
                <strong>Date of birth:</strong> May 10, 2002
              </li>
              <li className="mb-4 font-bold">
                <strong>Address:</strong> Butwal 12, Nepal
              </li>
              <li className="mb-4 font-bold">
                <strong>Zip code:</strong> 32750
              </li>
              <li className="mb-4 font-bold">
                <strong>Email:</strong> abishekkhadka90@gmail.com
              </li>
              <li className="mb-4 font-bold">
                <strong>Phone:</strong> +977-9824474475
              </li>
            </ul>
            <div className="mb-8">
              <span className="text-yellow-500 text-3xl font-bold">5 +</span>{" "}
              Project complete
            </div>
            <a
              href="/AbishekKhadkaCV.pdf"
              className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
