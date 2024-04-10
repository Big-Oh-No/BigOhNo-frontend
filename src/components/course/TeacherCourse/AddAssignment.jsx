import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import MCQAdd from './MCQAdd';

// AddAssignment component for creating new assignments
export default function AddAssignment(props) {
  // State variables for assignment details and MCQ toggle
  const [title, setTitle] = useState();
  const [deadline, setDeadline] = useState();
  const [file, setFile] = useState();
  const [grade, setGrade] = useState();
  const [mcq, setMACQ] = useState(false);

  // Function to submit the assignment details
  const submit = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    try {
      const d = new FormData();
      d.append("email", data["email"]);
      d.append("password", data["password"]);
      d.append("course_id", props.data.meta.id);
      d.append("title", title);
      d.append("deadline", deadline);
      d.append("total_grade", grade);
      d.append('assignment_file', file);
     
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/assignment`, {
        method: "POST",
        body: d,
      });
    
      if (response.status === 201) {
        window.location.reload();
      } else {
        const res = await response.json();
        alert(res.detail);
      }
    } catch (error) {
      alert("Unexpected Error Occurred!");
      console.error("Error:", error);
    }
  }

  // Rendering the AddAssignment component
  return (
    <div className='rounded-md bg-light-theme w-full h-full flex justify-center items-center'>
      <h2 className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">Add Assignment</h2>

      {/* Button to toggle between MCQ and File upload */}
      <div className="fixed bottom-10 right-10 flex justify-center items-center bg-dark-theme text-white text-2xl p-2 rounded-full w-[5.2rem] h-[5.2rem] hover:opacity-75 hover:cursor-pointer" onClick={() => setMACQ(!mcq)}>{mcq ? "File" : "MCQ"}</div>
      <div className="flex flex-col w-screen h-screen px-14 font-inter pt-32">
        {/* Rendering MCQAdd component if MCQ mode is active, else rendering file upload form */}
        {
          mcq ? <MCQAdd data={props.data}/> :
              <form className="flex justify-center items-center flex-col mt-10 space-y-2">
                <div className="flex flex-row justify-between w-[80%] mt-4">
                  <div className="w-[40%]">
                    {/* Input field for assignment title */}
                    <label className="block font-semibold text-xl">Assignment Title</label>
                    <input
                      className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
                      type="text"
                      id="title"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-[40%]">
                    {/* Input field for assignment deadline */}
                    <label className="block font-semibold text-xl">Deadline (PST)</label>
                    <input
                      className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
                      type="datetime-local"
                      id="deadline"
                      name="deadline"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-[80%] mt-4">
                  <div className="w-[40%]">
                    {/* File input for assignment file upload */}
                    <label className="block font-semibold text-xl">Assignment File</label>
                    <input
                      className="pt-3 px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
                      type="file"
                      id="assignment"
                      name="assignment"
                      onChange={(e) => setFile(e.target.files[0])}
                      required
                    />
                  </div>
                  <div className="w-[40%]">
                    <div className="mt-4 w-[40%]">
                      {/* Input field for maximum grade */}
                      <label className="block font-semibold mb-2 text-xl">Max Grade</label>
                      <input
                        className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
                        type="number"
                        id="grade"
                        name="grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Button to submit the assignment */}
                <div className="flex justify-center items-center w-[50%] pt-32">
                  <div onClick={submit} className="flex items-center justify-center w-[25%] rounded-full border-black font-inter text-2xl bg-dark-theme font-semibold hover:cursor-pointer py-3 hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:scale-105 select-none">
                    Submit
                  </div>
                </div>
              </form>
        }
        {/* Placeholder div */}
        <div className="h-[13%]"></div>
      </div>
    </div>
  );
}
