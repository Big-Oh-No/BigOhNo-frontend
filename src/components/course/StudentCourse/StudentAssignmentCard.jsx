import React from "react";
import { useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';


export default function StudentAssignmentCard(props) {
  const [file, setFile] = useState();
  const [isExploding, setIsExploding] = useState(false);

  const submit = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
        try {
          const d = new FormData();
          d.append("email", data["email"]);
          d.append("password", data["password"]);
          d.append("assignment_id", props.assignment.id);
          d.append("assignment_file", file);
         
          const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/submit`, {
            method: "POST",
            body: d,
          });
        
          if (response.status === 201) {
            setIsExploding(true);
          } else {
            const res = await response.json();
            alert(res.detail);
          }
        } catch (error) {
          alert("Unexpected Error Occurred!");
          console.error("Error:", error);
        }
  }
  return (
    <div
      className="bg-white border-[2.9px] border-neutral-200 w-full h-full rounded-3xl p-2 transition duration-500 flex flex-row justify-between pr-5"
    >
      <>{isExploding && <ConfettiExplosion />}</>
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
          <a
            href={props.assignment.file_url}
            target="_blank"
            className="flex justify-center items-center text-white bg-dark-theme px-5 py-2 z-10 rounded-xl text-xl hover:text-black hover:bg-light-theme border hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:border-black border-transparent transition duration-200"
          >
            Download
          </a>
        
          <div className="mt-4">
                  <button className="bg-black text-white p-2 rounded-xl mr-2" onClick={submit}>Submit</button>

                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
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
