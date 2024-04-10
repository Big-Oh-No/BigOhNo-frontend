import StudentRequestCard from "./StudentRequestCard"; // Importing StudentRequestCard component
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import CourseRequest from "../../models/course_request"; // Importing CourseRequest model

// Functional component for rendering the student's enrollment requests page
export default function StudentRequest() {
  const [courses, setCourses] = useState([]); // Using useState hook to manage courses state
  const navigate = useNavigate(); // Using useNavigate hook to get navigation function

  useEffect(() => {
    init(); // Call init function on component mount
  }, []);

  // Function to initialize the component
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie")); // Getting user authentication data from local storage

    try {
      // Fetching course requests data from the backend
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/course/student_status`,
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
          // Creating CourseRequest objects from response data
          const current_course = new CourseRequest({
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
            teacher_name: response_json[i].teacher_name,
            status: response_json[i].status,
            comment: response_json[i].comment,
          });
          course_array.push(current_course); // Adding CourseRequest objects to course_array
        }
        setCourses(course_array); // Updating courses state with the fetched course requests
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
        Your Enrollment Requests
      </div>
      <div className="pt-10 w-screen h-screen">
        {/* Rendering message if the user doesn't have any ongoing requests */}
        {courses && courses.length === 0 && (
          <div className="w-full h-full flex justify-center items-center text-2xl">
            You don't have any ongoing requests
          </div>
        )}
        {/* Rendering course requests if available */}
        {courses && courses.length !== 0 && (
          <div className="flex w-full justify-center mt-[2.77rem]">
            <div className="grid grid-cols-4 w-[97%] overflow-auto p-10">
              {/* Mapping through course requests array and rendering StudentRequestCard for each request */}
              {courses.map((course) => {
                return (
                  <div
                    key={course.id}
                    className="w-full h-[37rem] flex justify-center items-center"
                  >
                    <StudentRequestCard course={course} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
