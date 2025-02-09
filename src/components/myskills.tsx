import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const descriptions = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Icon-speed.svg",
    title: "Fast Development",
    description:
      "Developing blazing fast web applications for seamless user interaction.",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Icon-responsive.svg",
    title: "Responsive Design",
    description:
      "Mobile-first, responsive design layout for all devices is a top priority.",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/11/Icon-learning.svg",
    title: "Continuous Learning",
    description:
      "Constantly continues to learn new technologies and keep up-to-date with the freshest trends.",
  },
];

const InfoCard = ({ icon, title, description }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow max-w-xs mx-auto"
  >
    <div className="w-16 h-16 mb-4">
      <Image
        src={icon}
        alt={title}
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-center text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </motion.div>
);

export default function myskills() {
  return (
    // <div className="min-h-screen py-16 bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="text-center mb-12">
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {descriptions.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    // </div>
  );
}
