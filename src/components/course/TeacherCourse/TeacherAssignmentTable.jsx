import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherSubmissionRow from "./TeacherSubmissionRow";

// TeacherAssignmentTable component for displaying submissions and grades for a particular assignment
export default function TeacherAssignmentTable(props) {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Title of the assignment */}
      <div className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        {props.assignment.title} Grades
      </div>
      {/* Table displaying submission details */}
      <div className="pt-[13rem] flex flex-col justify-center w-full p-10">
        <table className="border border-gray-400">
          <thead className="text-2xl text-white bg-dark-theme">
            <tr>
              {/* Table headers */}
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">
                Submission File
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Submission Time
              </th>
              <th className="border border-gray-400 px-4 py-2">Marks</th>
              <th className="border border-gray-400 px-4 py-2">Submit</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {/* Mapping through each submission row */}
            {props.assignment.responses.map((e) => {
              return (
                <TeacherSubmissionRow e={e} assignment={props.assignment}/>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
