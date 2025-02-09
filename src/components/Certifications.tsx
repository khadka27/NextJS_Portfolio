import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

import Certification from "@/components/Images/CertificateOfCompletion_Learning Next.js 2022.png";
import AWS from "@/components/Images/AWS.png";
import HTML from "@/components/Images/frontend-development-html-tag.png";
import ethical from "@/components/Images/ethical-hacking.png";
import tag from "@/components/Images/frontend-development-html-tag.png";
import java from "@/components/Images/java-programming.png";

const certifications = [
  {
    title: "Frontend Developer Certification",
    image: Certification,
    description:
      "Certified by XYZ Academy for mastering frontend development using React, Tailwind CSS, and modern frameworks.",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    image: AWS,
    description:
      "Certified by AWS Academy, this certification validates foundational knowledge of cloud computing concepts, AWS services, architecture, security, and cost management. Designed for individuals starting their journey in cloud technologies, it covers essential services like EC2, S3, IAM, and more.",
  },
  {
    title: "Java Programming - Great Learning Academy",
    image: java,
    description:
      "Completed a comprehensive course on Java programming covering core topics, including OOP, data structures, and multi-threading.",
  },
  {
    title: "Introduction to Ethical Hacking",
    image: ethical,
    description:
      "Learned the basics of ethical hacking, including network vulnerabilities, reconnaissance techniques, and preventive security measures.",
  },
  {
    title: "Frontend Development - HTML",
    image: HTML,
    description:
      "Focused on HTML fundamentals, including semantic structure, forms, tables, and layout creation for responsive design.",
  },
  {
    title: "HTML Attributes and Tags",
    image: tag,
    description:
      "Explored HTML attributes and elements in detail, focusing on their roles in building well-structured and accessible web pages.",
  },
];

const CertificationCard = ({
  title,
  image,
  description,
  onImageClick,
}: any) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-1/3 p-4">
      <Card className="overflow-hidden rounded-lg shadow-lg transition-transform">
        <motion.div whileHover={{ scale: 1.1 }} className="overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => onImageClick(image)}
          />
        </motion.div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CertificationsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-900 py-10">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
            Certifications
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Hover over a certification to learn more about it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              image={cert.image}
              description={cert.description}
              onImageClick={openImage}
            />
          ))}
        </div>
      </div>

      {isOpen && selectedImage && (
        <Dialog
          open={isOpen}
          onClose={closeImage}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeImage}
          ></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-3xl">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeImage}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Certification Preview"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default CertificationsPage;
