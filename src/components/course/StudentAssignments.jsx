import React, { useState } from "react";
import StudentAssignmentCard from "./StudentCourse/StudentAssignmentCard";
import StudentMCQCard from "./StudentCourse/StudentMCQCard";
import StudentMCQ from "./StudentCourse/StudentMCQ";

export default function StudentAssignments(props) {
  // State to manage whether the user is viewing an MCQ or not
  const [mcq, setMcq] = useState(false);
  // State to store the currently selected assignment
  const [assignment, setAssignment] = useState();

  // Function to handle the click event on an MCQ assignment card
  const mcqClickHandler = (assignment) => {
    setAssignment(assignment); // Set the selected assignment
    setMcq(true); // Set the view mode to MCQ
  };

  return (
    <div>
      {mcq ? ( // Conditional rendering based on the view mode
        <StudentMCQ mcq={assignment}/> // Render the StudentMCQ component if viewing MCQ
      ) : (
        <div>
          <div className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
            Assignments
          </div>
          <div className="h-screen w-screen pt-11">
            <div className="flex h-full w-full justify-center pt-[7rem]">
              <div className="flex flex-col items-center h-full w-full px-32 space-y-5">
                {props.data.assignments.map((e) => {
                  // Conditional rendering based on file type of the assignment
                  if (e.file_url.substr(e.file_url.length - 4) !== "json")
                    return (
                      // Render StudentAssignmentCard for non-MCQ assignments
                      <div className="w-[70%] h-[20%] flex justify-center items-center">
                        <StudentAssignmentCard assignment={e} />
                      </div>
                    );
                  else
                    return (
                      // Render StudentMCQCard for MCQ assignments
                      <div className="w-[70%] h-[20%] flex justify-center items-center">
                        <StudentMCQCard
                          assignment={e}
                          onClick={mcqClickHandler}
                        />
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
