import React from "react";
import CardHoverEffectDemo from "./cardhover";

function Project() {
  return (
    <div
      id="project"
      className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-900 py-10"
    >
      <div className="relative flex items-center justify-center ">
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
        </div>
        <h1 className="shadow-text">Projects</h1>
      </div>
      <div className=" p-4 shadow-md flex justify-between items-center bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-900">
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}

export default Project;
