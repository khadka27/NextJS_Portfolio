import React from "react";
import { InfiniteMovingCardsDemo } from "@/components/moving-card";

function Slogan() {
  return (
    <section id="slogan" className="bg-gray-200 dark:bg-gray-900">
      <div className="relative flex items-center justify-center  ">
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Resume</h2>
        </div>
        <h1 className="shadow-text">Resume</h1>
      </div>
      <InfiniteMovingCardsDemo />
    </section>
  );
}

export default Slogan;
