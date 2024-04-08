import StudentCourseCard from "./StudentCourseCard"; // Importing StudentCourseCard component
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import Course from "../../models/course"; // Importing Course model

// Functional component for rendering the student's home page
export default function StudentHome() {
  const [courses, setCourses] = useState([]); // Using useState hook to manage courses state
  const navigate = useNavigate(); // Using useNavigate hook to get navigation function

  useEffect(() => {
    init(); // Call init function on component mount
  }, []);

  // Function to initialize the component
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie")); // Getting user authentication data from local storage

    try {
      // Fetching courses data from the backend
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/course/student`,
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
        const response_json = await response.json(); // Parsing response JSON data
        let course_array = [];
        for (let i = 0; i < response_json.length; ++i) {
          // Creating Course objects from response data
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
          course_array.push(current_course); // Adding Course objects to course_array
        }
        setCourses(course_array); // Updating courses state with the fetched courses
      } else {
        localStorage.removeItem("AuthCookie"); // Removing authentication token from local storage
        navigate("/"); // Navigating to home page
        return;
      }
    } catch (error) {
      return;
    }
  };

  // Rendering JSX for the component
  return (
    <>
      {/* Header */}
      <div className="text-5xl font-bold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Your Courses
      </div>
      <div className="pt-10 w-screen h-screen">
        {/* Rendering message if the user is not enrolled in any courses */}
        {courses && courses.length === 0 && (
          <div className="w-full h-full flex justify-center items-center text-2xl">
            You are not enrolled in any courses
          </div>
        )}
        {/* Rendering courses if available */}
        {courses && courses.length !== 0 && (
          <div className="flex w-full justify-center mt-[2.77rem]">
            <div className="grid grid-cols-4 w-[97%] overflow-auto p-10">
              {/* Mapping through courses array and rendering StudentCourseCard for each active course */}
              {courses.map((course) => {
                return (
                  course.status === "active" && (
                    <div
                      key={course.id}
                      className="w-full h-[26rem] flex justify-center items-center"
                    >
                      <StudentCourseCard course={course} />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
