import React from "react";
import { useState } from "react";
import TeacherAssignmentTable from "./TeacherAssignmentTable";

function TeacherAssignmentCard(props) {

  return (
    <div className="bg-white border-[2.9px] border-neutral-200 w-full h-full rounded-3xl p-2 transition duration-500 flex flex-row justify-between pr-5" >
      <div className="mt-5  w-full flex flex-col p-5">

        <div className="flex flex-row justify-between">
            
          <div className="text-3xl font-semibold font-inter truncate">
            {props.assignment.title}
          </div>
          
          <div className="font-semibold text-red-600 text-xl">
            Deadline: {props.assignment.deadline}
          </div>
        </div>
        <div className="pt-1">Published on: {props.assignment.published}</div>
        <div className="flex flex-row justify-between items-end h-full">
        <a href={props.assignment.file_url}
        className="flex justify-center items-center text-white bg-dark-theme px-5 py-2 z-10 rounded-xl text-xl hover:text-black hover:bg-light-theme border hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:border-black border-transparent transition duration-200" >Download</a>
          <div className="font-inter text-xl font-semibold">
            {props.assignment.total_grade} marks
          </div>

        </div>
      </div>
    </div>
  );
}

export default TeacherAssignmentCard;
