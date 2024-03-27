import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AccessDenied from "./AccessDenied";
import SideBar from "../components/SideBar";
import Syllabus from "../components/course/Syllabus";
import Discussions from "../components/course/Discussions";
import StudentAssignments from "../components/course/StudentAssignments";
import TeacherAssignments from "../components/course/TeacherAssignments";
import Course from "../models/course";
import StudentAssignmentModel from "../models/student_assignment";
import StudentTeacherCourse from "../models/student_teacher_course";
import StudentSubmissionsModel from "../models/student_submissions";
import TeacherAssignmentModel from "../models/teacher_assignment";

export default function CoursePage(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [accessDenied, setAccessDenied] = useState(false);
  const [page, setPage] = useState("syllabus");
  const [role, setRole] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    if (data === null) {
      navigate("/");
      return;
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/course/${params.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );

      if (response.status === 200) {
        const api_data = await response.json();
        setAccessDenied(false);
        setRole(api_data["role"]);
        const course = new Course({
          id: api_data["meta"].id,
          dept: api_data["meta"].dept,
          code: api_data["meta"].code,
          name: api_data["meta"].name,
          description: api_data["meta"].description,
          syllabus_url: api_data["meta"].syllabus_url,
          image_url: api_data["meta"].image_url,
          term: api_data["meta"].term,
          year: api_data["meta"].year,
          credits: api_data["meta"].credits,
          total_seats: api_data["meta"].total_seats,
          taken_seats: api_data["meta"].taken_seats,
          status: api_data["meta"].status,
          teacher_name: api_data["meta"].teacher_name,
        });
        if (api_data["role"] === "student") {
          const student_assignments = [];
          for (let i = 0; i < api_data["assignments"].length; ++i) {
            student_assignments.push(
              new StudentAssignmentModel({
                id: api_data["assignments"][i].id,
                title: api_data["assignments"][i].title,
                file_url: api_data["assignments"][i].file_url,
                deadline: api_data["assignments"][i].deadline,
                total_grade: api_data["assignments"][i].total_grade,
                published: api_data["assignments"][i].published,
                grade: api_data["assignments"][i].grade,
                created_at: api_data["assignments"][i].created_at,
              })
            );
          }
          setData(
            new StudentTeacherCourse({
              meta: course,
              assignments: student_assignments,
              teacher_email: api_data["teacher_email"],
              teacher_profile_url: api_data["teacher_profile_url"],
              teacher_office: api_data["teacher_office"],
              teacher_contact: api_data["teacher_contact"],
            })
          );
        } else if (api_data["role"] === "teacher") {
          const teacher_assignments = [];
          for (let i = 0; i < api_data["assignments"].length; ++i) {
            const assignment_submissions = [];
            for (
              let j = 0;
              j < api_data["assignments"][i]["responses"].length;
              ++j
            ) {
              assignment_submissions.push(
                new StudentSubmissionsModel({
                  student_email:
                    api_data["assignments"][i]["responses"][j].student_email,
                  student_name:
                    api_data["assignments"][i]["responses"][j].student_name,
                  file_url: api_data["assignments"][i]["responses"][j].file_url,
                  grade: api_data["assignments"][i]["responses"][j].grade,
                  created_at:
                    api_data["assignments"][i]["responses"][j].created_at,
                })
              );
            }

            teacher_assignments.push(
              new TeacherAssignmentModel({
                id: api_data["assignments"][i].id,
                title: api_data["assignments"][i].title,
                file_url: api_data["assignments"][i].file_url,
                deadline: api_data["assignments"][i].deadline,
                total_grade: api_data["assignments"][i].total_grade,
                published: api_data["assignments"][i].published,
                responses: assignment_submissions,
              })
            );
          }
          setData(
            new StudentTeacherCourse({
              meta: course,
              assignments: teacher_assignments,
              teacher_email: api_data["teacher_email"],
              teacher_profile_url: api_data["teacher_profile_url"],
              teacher_office: api_data["teacher_office"],
              teacher_contact: api_data["teacher_contact"],
            })
          );
        }
      } else if (response.status === 401) {
        setAccessDenied(true);
      } else {
        const detail = await response.json();
        alert(detail["detail"]);
      }
    } catch (error) {
      alert("Unexpected error occurred");
    }
  };

  return (
    <div className="w-screen h-screen bg-light-theme">
      {accessDenied ? (
        <AccessDenied />
      ) : (
        <div className="w-full h-full flex flex-row">
          {data ? (
            <>
              <div className="h-[50%] w-[17%] left-0 top-1/4 fixed">
                <SideBar changeHandler={(e) => setPage(e)} />
              </div>
              <div className="w-full">
                {page === "syllabus" ? (
                  <Syllabus data={data} />
                ) : page === "discussions" ? (
                  <Discussions data={data} />
                ) : page === "assignments" ? (
                  role === "student" ? (
                    <StudentAssignments data={data} />
                  ) : (
                    <TeacherAssignments data={data} />
                  )
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}
