import React from "react";
import { useState } from "react";
import TeacherAssignmentTable from "./TeacherAssignmentTable";

// TeacherAssignmentCard component for displaying details of an assignment for teachers
function TeacherAssignmentCard(props) {
  return (
    // Card displaying assignment details, clickable to view more details
    <div className="bg-white border-[2.9px] border-neutral-200 w-full h-full rounded-3xl p-2 transition duration-500 flex flex-row justify-between pr-5" onClick={() => props.onClick(props.assignment)}>
      <div className="mt-5  w-full flex flex-col p-5">
        {/* Assignment title and deadline */}
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-semibold font-inter truncate">
            {props.assignment.title}
          </div>
          <div className="font-semibold text-red-600 text-xl">
            Deadline: {props.assignment.deadline}
          </div>
        </div>
        {/* Published date */}
        <div className="pt-1">Published on: {props.assignment.published}</div>
        <div className="flex flex-row justify-between items-end h-full">
          {/* Download button */}
          <a href={props.assignment.file_url} target="_blank" className="flex justify-center items-center text-white bg-dark-theme px-5 py-2 z-10 rounded-xl text-xl hover:text-black hover:bg-light-theme border hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:border-black border-transparent transition duration-200">
            Download
          </a>
          {/* Total marks */}
          <div className="font-inter text-xl font-semibold">
            {props.assignment.total_grade} marks
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherAssignmentCard;
