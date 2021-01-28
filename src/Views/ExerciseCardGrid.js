import React from "react";

export default function ExerciseCardGrid(props) {
  return (
    <div class="my-2 px-2 w-1/2 overflow-hidden">
      <div class="flex flex-row mx-auto shadow-lg rounded-xl bg-gray-600">
        <a class="flex w-full no-underline" href="/helpful-exercises">
          <div class="flex flex-col justify-end w-2/3 pl-3">
            <h3 class="mb-3 font-semibold leading-tight text-white text-md">
              Exercise <br />
              One
            </h3>
          </div>
          <div
            class="block w-4/5 h-32 overflow-hidden rounded rounded-l-none rounded-r-xl"
            style={{
              background: `url(${props.sample.imagePreviewUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
        </a>
      </div>
    </div>
  );
}
