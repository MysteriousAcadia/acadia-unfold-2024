import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProject from "./pages/CreateProject.jsx";
import SetupBot from "./pages/SetupBot.jsx";
import ViewProjects from "./pages/ViewProjects.jsx";
import Landing from "./pages/Landing.jsx";
import "./App.css";
import "@mysten/dapp-kit/dist/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <nav class=" border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Phantom Player
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:justify-center md:mt-0 md:border-0 ">
              <li className="px-1 py-2">Home</li>
              <li className="px-1 py-2">Projects</li>
              <li>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  0xbc.....cdAd
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/setup-bot" element={<SetupBot />} />
          <Route path="/view-projects" element={<ViewProjects />} />
        </Routes>
      </Router>
    </>
  </StrictMode>
);
