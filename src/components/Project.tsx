import React from "react";
import CardHoverEffectDemo from "./cardhover";

function Project() {
  return (
    <div
      id="project"
      className=" id='project' min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 "
    >
      <div className="relative flex items-center justify-center ">
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
        </div>
        <h1 className="shadow-text">Projects</h1>
      </div>
      <div className=" p-4 shadow-md flex justify-between items-center bg-gray-100 dark:bg-gray-900">
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}

export default Project;
