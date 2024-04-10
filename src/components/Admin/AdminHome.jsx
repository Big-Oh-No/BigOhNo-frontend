import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import Course from "../../models/course"; // Importing Course model
import AdminCourseCard from "./AdminCourseCard"; // Importing AdminCourseCard component

export default function AdminHome() {
  const [courses, setCourses] = useState([]); // State to manage courses
  const navigate = useNavigate(); // Accessing the navigate function from React Router

  // Function to initialize courses
  useEffect(() => init, []);
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie")); // Retrieving authentication cookie from local storage

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data["email"],
          password: data["password"],
        }),
      });

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
            teacher_name: response_json[i].teacher_name,
          });
          course_array.push(current_course);
        }
        setCourses(course_array); // Updating state with courses
      } else {
        localStorage.removeItem("AuthCookie");
        navigate("/"); // Navigating user to the home page if authentication fails
        return;
      }
    } catch (error) {
      return;
    }
  };

  // JSX code for rendering AdminHome component
  return (
    <>
      {/* Header */}
      <div className="text-5xl font-bold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Courses
      </div>
      {/* Main content */}
      <div className="pt-10 w-screen h-screen">
        {/* Conditional rendering based on availability of courses */}
        {courses && courses.length === 0 && (
          <div className="w-full h-full flex justify-center items-center text-2xl">
            No available active courses
          </div>
        )}
        {courses && courses.length !== 0 && (
          <div className="flex w-full justify-center mt-[7rem]">
            <div className="flex flex-col w-full px-32">
              {/* Mapping through courses and rendering AdminCourseCard for each */}
              {courses.map((course) => {
                return (
                  <div key={course.id} className="w-full h-[19rem] flex justify-center items-center">
                    <AdminCourseCard course={course} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="h-[13%]"></div>
      </div>
    </>
  );
}
