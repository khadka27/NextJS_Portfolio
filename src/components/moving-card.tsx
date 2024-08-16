"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased text-sky-500 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={resumeItems} direction="right" speed="slow" />
    </div>

  );
}

const resumeItems = [
  {
    quote:
      "During this period, I acquired foundational web development skills through an online course. I learned the basics of HTML, CSS, and JavaScript, which laid the groundwork for my future endeavors in web development.",
    name: "Abishek Khadka",
    title: "Basic Skills of Web Developer (2021-2022, ONLINE)",
  },
  {
    quote:
      "In this year, I focused on learning Java through a course at ICP. This experience allowed me to understand object-oriented programming and develop applications using Java.",
    name: "Abishek Khadka",
    title: "Basic Java (2022-2023, ICP)",
  },
  {
    quote:
      "Concurrently with my Java studies, I also learned Python. The course at ICP helped me grasp Python's versatility and simplicity, which I applied in various small projects and problem-solving exercises.",
    name: "Abishek Khadka",
    title: "Basic Python (2022-2023, ICP)",
  },
  {
    quote:
      "I further deepened my knowledge of web development by learning more about the artistic aspects and basic components of HTML, CSS, and JavaScript at ICP. This period was crucial in honing my front-end development skills.",
    name: "Abishek Khadka",
    title: "Art & Basic Components of HTML, CSS, JS (2022-2023, ICP)",
  },
  {
    quote:
      "In the subsequent year, I shifted my focus to backend development with PHP at ICP. This allowed me to understand server-side scripting and database interactions, enhancing my ability to build dynamic and interactive web applications.",
    name: "Abishek Khadka",
    title: "PHP Backend (2023-2024, ICP)",
  },
  {
    quote:
      "To complement my technical skills, I also pursued a course in UI/UX design at ICP. This experience equipped me with the principles of user-centered design and the ability to create visually appealing and user-friendly interfaces.",
    name: "Abishek Khadka",
    title: "UI/UX Designer (2023-2024, ICP)",
  },
  {
    quote:
      "I expanded my backend development skills by learning Node.js at ICP. This course provided me with the expertise to build scalable and efficient server-side applications using Node.js, enhancing my overall full-stack development capabilities.",
    name: "Abishek Khadka",
    title: "Node.js Developer (2023-2024, ICP)",
  },
  {
    quote:
      "To further advance my web development skills, I pursued a course in Next.js at ICP. This experience allowed me to build optimized and server-rendered React applications, leveraging the power of Next.js for better performance and SEO.",
    name: "Abishek Khadka",
    title: "Next.js Developer (2023-2024, ICP)",
  },
  {
    quote:
      "My proficiency in front-end development was strengthened by a React course at ICP. This course enabled me to create dynamic and responsive user interfaces, making use of React's component-based architecture and state management.",
    name: "Abishek Khadka",
    title: "React Developer (2023-2024, ICP)",
  },
  {
    quote:
      "I enhanced my CSS skills by learning Tailwind CSS at ICP. This experience helped me streamline the styling process and maintain design consistency across my projects, utilizing Tailwind CSS's utility-first approach.",
    name: "Abishek Khadka",
    title: "Tailwind CSS Developer (2023-2024, ICP)",
  },
];

export default InfiniteMovingCardsDemo;
