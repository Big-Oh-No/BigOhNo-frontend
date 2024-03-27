import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AccessDenied from "./AccessDenied";
import SideBar from "../components/SideBar";
import Syllabus from "../components/course/Syllabus";
import Discussions from "../components/course/Discussions";
import StudentAssignments from "../components/course/StudentAssignments";
import TeacherAssignments from "../components/course/TeacherAssignments";

export default function Course(props) {
  const params = useParams();
  const navigate = useNavigate();
  const role = "teacher";
  const [accessDenied, setAccessDenied] = useState(false);
  const [page, setPage] = useState("syllabus");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="w-screen h-screen bg-light-theme">
      {accessDenied ? (
        <AccessDenied />
      ) : (
        <div className="w-full h-full flex flex-row">
          <div className="h-full w-[17%] left-0 fixed">
            <SideBar changeHandler={(e) => setPage(e)} />
          </div>
          <div className="w-full">
            {page === "syllabus" ? (
              <Syllabus />
            ) : page === "discussions" ? (
              <Discussions />
            ) : page === "assignments" ? (
              role === "student" ? (
                <StudentAssignments />
              ) : (
                <TeacherAssignments />
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
