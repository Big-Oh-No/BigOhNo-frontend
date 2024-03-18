import TeacherCourseCard from "./TeacherCourseCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../models/course";

export default function TeacherHome() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => init, []);
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/course/teacher`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
          }),
        }
      );

      if (response.status === 200) {
        const response_json = await response.json();
        console.log(response_json.length);
        let course_array = [];
        for (let i = 0; i < response_json.length; ++i) {
          const current_course = new Course({
            id: response_json[i].id,
            dept: response_json[i].dept,
            code: response_json[i].code,
            name: response_json[i].name,
            description: response_json[i].description,
            syllabus_url: response_json[i].syllabus_url,
            image_url: response_json[i].image_url,
            term: response_json[i].term,
            year: response_json[i].year,
            credits: response_json[i].credits,
            total_seats: response_json[i].total_seats,
            taken_seats: response_json[i].taken_seats,
            status: response_json[i].status,
            teacher_id: response_json[i].teacher_id,
          });
          course_array.push(current_course);
        }
        setCourses(course_array);
      } else {
        localStorage.removeItem("AuthCookie");
        navigate("/");
        return;
      }
    } catch (error) {
      localStorage.removeItem("AuthCookie");
      navigate("/");
      return;
    }
  };
  return (
    <div className="pt-10 w-screen h-screen">
      <div className="absolute text-5xl font-bold font-inter top-14 left-10">Your Courses</div>
      {courses && courses.length === 0 && <div className="w-full h-full flex justify-center items-center text-2xl">You are not instructing any courses</div>}
      {courses && courses.length !== 0 && <div className="flex w-full justify-center mt-[2.77rem]">
        <div className="grid grid-cols-4 w-[97%] overflow-auto p-10">
          {courses.map((course) => {
            return (
              <div className="w-full h-[26rem] flex justify-center items-center">
                <TeacherCourseCard course={course} />
              </div>
            );
          })}
        </div>
      </div>}
    </div>
  );
}
