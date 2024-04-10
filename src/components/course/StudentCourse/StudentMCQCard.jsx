import React from "react";

// StudentMCQCard component for displaying multiple-choice question assignment details
export default function StudentMCQCard(props) {
  return (
    <div
      className="bg-lime-200 border-[2.9px] border-neutral-200 w-full h-full rounded-3xl p-2 transition duration-500 flex flex-row justify-between pr-5"
    >
      <div className="mt-5  w-full flex flex-col p-5">
        <div className="flex flex-row justify-between">
          {/* Displaying assignment title with (MCQ) prefix */}
          <div className="text-3xl font-semibold font-inter truncate">
            (MCQ) {props.assignment.title}
          </div>

          {/* Displaying assignment deadline */}
          <div className="font-semibold text-red-600 text-xl">
            Deadline: {props.assignment.deadline}
          </div>
        </div>
        {/* Displaying assignment published date */}
        <div className="pt-1">Published on: {props.assignment.published}</div>
        <div className="flex flex-row justify-between items-end h-full">
          <div className="mt-4">
            {/* Button to start MCQ assignment */}
            <button className="bg-black text-white p-2 rounded-xl text-xl px-5 mr-2 hover:opacity-75" onClick={() => props.onClick(props.assignment)}>Start</button>                  
          </div>
          {/* Displaying assignment grade if available */}
          <div className="font-inter text-xl font-semibold">
            {props.assignment.grade ? (
              <div>
                {props.assignment.grade} / {props.assignment.total_grade}{" "}
              </div>
            ) : (
              <div>Not graded yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
