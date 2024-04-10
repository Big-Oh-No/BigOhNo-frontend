import TeacherCourseCard from "./TeacherCourseCard"; // Importing TeacherCourseCard component
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import Course from "../../models/course"; // Importing Course model

export default function TeacherHome() {
  const [courses, setCourses] = useState([]); // State to manage courses data
  const navigate = useNavigate(); // Accessing the navigate function from React Router

  // Function to initialize data on component mount
  useEffect(() => init, []);

  // Initialization function
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie")); // Retrieving user authentication data from localStorage

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

      // Handling response from the server
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
        setCourses(course_array); // Setting courses state with fetched data
      } else {
        localStorage.removeItem("AuthCookie"); // Removing invalid authentication data from localStorage
        navigate("/"); // Redirecting user to the home page
        return;
      }
    } catch (error) {
      return; // Handling unexpected errors
    }
  };

  // JSX code for rendering TeacherHome component
  return (
    <>
      <div className="text-5xl font-bold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Your Courses
      </div>
      <div className="pt-10 w-screen h-screen">
        {courses && courses.length === 0 && (
          <div className="w-full h-full flex justify-center items-center text-2xl">
            You are not instructing any courses
          </div>
        )}
        {courses && courses.length !== 0 && (
          <div className="flex w-full justify-center mt-[2.77rem]">
            <div className="grid grid-cols-4 w-[97%] overflow-auto p-10">
              {courses.map((course) => {
                return course.status === "active" ? (
                  <div className="w-full h-[26rem] flex justify-center items-center">
                    <TeacherCourseCard course={course} />
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
