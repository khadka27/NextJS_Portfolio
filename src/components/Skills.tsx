import React from "react";
import Image, { StaticImageData } from "next/image";
import html from "./Images/html.png";
import css from "./Images/css.png";
import javascript from "./Images/javascript.png";
import react from "./Images/react.png";
import bootstrap from "./Images/bootstrap.png";
import tailwind from "./Images/tailwind.png";
import Link from "next/link";

const frontendSkills = [
  {
    image: html,
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    image: css,
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    image: javascript,
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: react,
    title: "React",
    link: "https://reactjs.org/",
  },
  {
    image: tailwind,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  {
    image: bootstrap,
    title: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
];

const backendSkills = [
  {
    image: html,
    title: "Node.js",
    link: "https://nodejs.org/",
  },
  {
    image: html,
    title: "Python",
    link: "https://www.python.org/",
  },
  {
    image: html,
    title: "Java",
    link: "https://www.oracle.com/java/",
  },
  {
    image: html,
    title: "Django",
    link: "https://www.djangoproject.com/",
  },
];

const SkillBox = ({
  image,
  title,
  link,
}: {
  image: StaticImageData;
  title: string;
  link: string;
}) => {
  return (
    <div className="skill-box px-2 py-4 sm:px-4 mx-2 sm:mx-4">
      <div className="flex flex-col items-center">
        <Link href={link} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <div className="rounded-full overflow-hidden mb-2 border-2 border-gray-300 p-1 shadow-md transition-transform transform hover:scale-105 hover:border-teal-400 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Image src={image} alt={title} width={50} height={50} />
            </div>
          </a>
        </Link>
        <h3 className="font-semibold text-center text-sm sm:text-base">
          <Link href={link} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div id="skill" className="min-h-screen py-10 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">My Skills</h2>
          </div>
          <h1 className="shadow-text">Skills</h1>
        </div>
        <div className="section mb-10">
          <h2 className="text-center text-2xl font-bold mb-6">
            Frontend Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {frontendSkills.map((skill, index) => (
              <SkillBox
                key={index}
                image={skill.image}
                title={skill.title}
                link={skill.link}
              />
            ))}
          </div>
        </div>
        <div className="section">
          <h2 className="text-center text-2xl font-bold mb-6">
            Backend Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {backendSkills.map((skill, index) => (
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
    </div>
  );
}
