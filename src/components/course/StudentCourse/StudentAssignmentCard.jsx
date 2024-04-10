import React from "react";
import { useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

// StudentAssignmentCard component for displaying assignment details and handling submission
export default function StudentAssignmentCard(props) {
  // State variables to manage file input and confetti explosion animation
  const [file, setFile] = useState();
  const [isExploding, setIsExploding] = useState(false);

  // Function to handle assignment submission
  const submit = async () => {
    // Retrieving user authentication data from local storage
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    try {
      // Creating form data to send assignment details
      const formData = new FormData();
      formData.append("email", data["email"]);
      formData.append("password", data["password"]);
      formData.append("assignment_id", props.assignment.id);
      formData.append("assignment_file", file);

      // Sending a POST request to the backend with assignment data
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/submit`, {
        method: "POST",
        body: formData,
      });

      // Handling different response statuses
      if (response.status === 201) {
        // Triggering confetti explosion animation upon successful submission
        setIsExploding(true);
      } else {
        // Displaying error message from the server if submission fails
        const res = await response.json();
        alert(res.detail);
      }
    } catch (error) {
      // Alerting users about unexpected errors
      alert("Unexpected Error Occurred!");
      console.error("Error:", error);
    }
  }

  // Rendering assignment card with details and submission options
  return (
    <div
      className="bg-white border-[2.9px] border-neutral-200 w-full h-full rounded-3xl p-2 transition duration-500 flex flex-row justify-between pr-5"
    >
      {/* Rendering confetti explosion animation if isExploding is true */}
      <>{isExploding && <ConfettiExplosion />}</>
      <div className="mt-5  w-full flex flex-col p-5">
        <div className="flex flex-row justify-between">
          {/* Displaying assignment title */}
          <div className="text-3xl font-semibold font-inter truncate">
            {props.assignment.title}
          </div>

          {/* Displaying assignment deadline */}
          <div className="font-semibold text-red-600 text-xl">
            Deadline: {props.assignment.deadline}
          </div>
        </div>
        {/* Displaying assignment published date */}
        <div className="pt-1">Published on: {props.assignment.published}</div>
        <div className="flex flex-row justify-between items-end h-full">
          {/* Button to download assignment file */}
          <a
            href={props.assignment.file_url}
            target="_blank"
            className="flex justify-center items-center text-white bg-dark-theme px-5 py-2 z-10 rounded-xl text-xl hover:text-black hover:bg-light-theme border hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:border-black border-transparent transition duration-200"
          >
            Download
          </a>
        
          <div className="mt-4">
            {/* File input and submit button for assignment submission */}
            <button className="bg-black text-white p-2 rounded-xl mr-2" onClick={submit}>Submit</button>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
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
