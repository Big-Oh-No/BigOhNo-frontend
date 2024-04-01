import React, { useState } from "react";
import StudentAssignmentCard from "./StudentCourse/StudentAssignmentCard";
import StudentMCQCard from "./StudentCourse/StudentMCQCard";
import StudentMCQ from "./StudentCourse/StudentMCQ";

export default function StudentAssignments(props) {
  const [mcq, setMcq] = useState(false);
  const [assignment, setAssignment] = useState();
  const mcqClickHandler = (assignment) => {
    setAssignment(assignment);
    setMcq(true);
  };

  return (
    <div>
      {mcq ? (
        <StudentMCQ mcq={assignment}/>
      ) : (
        <div>
          <div className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
            Assignments
          </div>
          <div className="h-screen w-screen pt-11">
            <div className="flex h-full w-full justify-center pt-[7rem]">
              <div className="flex flex-col items-center h-full w-full px-32 space-y-5">
                {props.data.assignments.map((e) => {
                  if (e.file_url.substr(e.file_url.length - 4) !== "json")
                    return (
                      <div className="w-[70%] h-[20%] flex justify-center items-center">
                        <StudentAssignmentCard assignment={e} />
                      </div>
                    );
                  else
                    return (
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
