import React, { useState } from "react";
import TeacherAssignmentCard from "./TeacherCourse/TeacherAssignmentCard";
import TeacherAssignmentTable from "./TeacherCourse/TeacherAssignmentTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import AddAssignment from "./TeacherCourse/AddAssignment";

export default function TeacherAssignments(props) {
  // State variables to manage visibility of submission table and assignment addition form
  const [showSubmission, setShowSubmission] = useState(false);
  const [addAssignment, setAddAssignment] = useState(false);
  const [assignment, setAssignment] = useState(); // State variable to hold selected assignment

  // Function to handle card click and display submission table
  const cardClickHandler = (assignment) => {
    setAssignment(assignment);
    setShowSubmission(true);
  };

  // Function to close submission table
  const cardCloseHandler = () => {
    setAssignment(null);
    setShowSubmission(false);
  };

  // Function to close assignment addition form
  const closeAssignmentAdder = () => {
    setAddAssignment(false);
  }

  return (
    <div>
      {showSubmission && assignment !== null ? (
        // Display submission table if submission is shown and an assignment is selected
        <TeacherAssignmentTable assignment={assignment} onClick={cardCloseHandler}/>
      ) : (
        // Display assignments list or add assignment form based on addAssignment state
        !addAssignment ?  (
          <div>
            {/* Assignments List */}
            <div className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
              Assignments
            </div>
            <div className="h-screen w-screen pt-11">
              <div className="z-20 bottom-10 right-10 w-20 h-20 rounded-full flex items-center justify-center fixed bg-dark-theme text-white text-3xl hover:bg-opacity-80 hover:cursor-pointer" onClick={() => {setAddAssignment(true); }}>
                {/* Add Assignment Button */}
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="flex h-full w-full justify-center pt-[7rem]">
                <div className="flex flex-col items-center h-full w-full px-32 space-y-5">
                  {/* Render TeacherAssignmentCard component for each assignment */}
                  {props.data.assignments.map((e) => {
                    return (
                      <div className="w-[70%] h-[20%] flex justify-center items-center">
                        <TeacherAssignmentCard
                          assignment={e}
                          onClick={cardClickHandler}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : 
        // Display AddAssignment form if addAssignment state is true
        <AddAssignment data={props.data} onClick={closeAssignmentAdder}/>
      )}
    </div>
  );
}
