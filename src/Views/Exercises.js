import React from "react";
import ExerciseCardGrid from "./ExerciseCardGrid";
import Samples from "./Samples";

export default function Exercises() {
  return (
    <div className="container w-full h-full max-w-3xl px-5 mx-auto overflow-y-auto md:px-24">
      <div className="w-full h-full pt-6 pb-20 overflow-y-auto">
        <div className="flex mb-5 text-gray-400 place-items-center">
          <a href="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </a>
          <h1 className="pl-4 text-3xl text-gray-800">
            Helpful <br />
            exercises
          </h1>
        </div>
        <div className="flex justify-between mb-4 text-gray-400">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2 overflow-hidden">
          {Samples.map((sample) => (
            <ExerciseCardGrid sample={sample} />
          ))}
        </div>
      </div>
    </div>
  );
}
