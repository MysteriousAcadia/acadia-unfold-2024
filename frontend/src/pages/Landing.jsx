import React from "react";

function Landing() {
  return (
    <div>
      <div className="  w-full flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
          Web3 AI Playground
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300">
          A portal to explore Web3 AI projects and play with AI agents
        </p>
        <div className="flex flex-row justify-center mt-12">
          <a
            href="/view-projects"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
