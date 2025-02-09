import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Myskills from "./myskills";

const skills = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    title: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    title: "CSS3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "JavaScript (ES6+)",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "React.js",
    link: "https://reactjs.org/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    title: "Node.js",
    link: "https://nodejs.org/",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    title: "Express.js",
    link: "https://expressjs.com/",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
    title: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    title: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    title: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    title: "Git",
    link: "https://git-scm.com/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    title: "GitHub",
    link: "https://github.com/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    title: "VS Code",
    link: "https://code.visualstudio.com/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    title: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
];

const SkillBox = ({ image, title, link }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="skill-box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer flex flex-col items-center justify-center"
    >
      <Link href={link} legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 p-3 shadow-md">
            <Image
              src={image}
              alt={title}
              width={70}
              height={70}
              className="object-contain"
            />
          </div>
          <h3 className="mt-3 font-semibold text-center text-lg text-gray-800 dark:text-gray-200">
            {title}
          </h3>
        </a>
      </Link>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div
      id="skill"
      className="min-h-screen py-16 bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 sm:px-12">
        <div className="relative text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white">
            SKILLS
          </h2>
          <h1 className="shadow-text">SKILLS</h1>
        </div>
        <Myskills />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillBox
              key={index}
              image={skill.image}
              title={skill.title}
              link={skill.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
