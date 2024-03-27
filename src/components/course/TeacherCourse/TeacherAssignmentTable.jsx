import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherAssignmentTable(props) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        {props.assignment.title} Grades
      </div>
      <div className="pt-[13rem] flex flex-col justify-center w-full p-10">
        <table className="border border-gray-400">
          <thead className="text-2xl text-white bg-dark-theme">
            <tr>
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
            {props.assignment.responses.map((e) => {
              return (
                <tr className="hover:bg-light-theme">
                  <td className="border border-gray-400 px-4 py-2">
                    {e.student_name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {e.student_email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <a
                      href={e.file_url}
                      target="_blank"
                      className="text-dark-theme hover:underline"
                    >
                      Download File
                    </a>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {e.created_at}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <div className="flex flex-row">
                      <input
                        value={e.grade}
                        className="bg-transparent text-right px-2"
                      />
                      <div> / {props.assignment.total_grade}</div>
                    </div>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 flex justify-center items-center">
                    <div className="font-semibold font-inter flex justify-center bg-green-700 text-white rounded-full w-[70%] hover:cursor-pointer">
                      Submit
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
