import React, { useState } from "react";
import StudentAssignmentCard from "./StudentCourse/StudentAssignmentCard";


export default function StudentAssignments(props) {
 
  return (
    <div>
        <div>
          <div className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
            Assignments
          </div>
          <div className="h-screen w-screen pt-11">
            <div className="flex h-full w-full justify-center mt-[7rem]">
              <div className="flex flex-col items-center h-full w-full px-32 space-y-5">
                {props.data.assignments.map((e) => {
                  return (
                    <div className="w-[70%] h-[20%] flex justify-center items-center">
                      <StudentAssignmentCard
                        assignment={e}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
