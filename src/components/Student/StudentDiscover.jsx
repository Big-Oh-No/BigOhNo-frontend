import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import Course from "../../models/course"; // Importing Course model
import CourseCard from "../common/CourseCard"; // Importing CourseCard component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Functional component for rendering the student's discover page
export default function StudentDiscover() {
  const [courses, setCourses] = useState([]); // Using useState hook to manage courses state
  const [display, setDisplay] = useState([]);

  const searchHandler = (search) => {
    if (search === "") {
      setDisplay(courses);
      return;
    }
    var result_array = [];
    for (let i = 0; i < courses.length; ++i) {
      if (
        courses[i].name.includes(search) ||
        courses[i].code.includes(search) ||
        courses[i].dept.includes(search)
      )
        result_array.push(courses[i]);
    }
    setDisplay(result_array);
  };
  const navigate = useNavigate(); // Using useNavigate hook to get navigation function

  // useEffect hook to initialize component
  useEffect(() => {
    init(); // Call init function on component mount
  }, []);

  // Function to initialize the component
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie")); // Getting user authentication data from local storage

    try {
      // Fetching courses data from the backend
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
        setDisplay(course_array);
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
        Discover Courses
      </div>
      {/* Search Bar */}
      <div className="pt-36 w-full flex justify-center">
        <div className="border border-black w-1/2 rounded-xl pl-5 flex flex-row justify-between items-center">
        <input
          placeholder="Seach for"
          className="py-5 px-5 w-[90%] text-2xl focus:outline-none"
          onChange={(e) => searchHandler(e.target.value)}
        />
        <div className="p-5 pr-10">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl text-dark-theme"/>
        </div>
        </div>
        
      </div>
      <div className="w-screen h-screen">
        {/* Rendering message if there are no available active courses */}
        {display && display.length === 0 && (
          <div className="w-full h-full flex justify-center items-center text-2xl">
            No available active courses
          </div>
        )}
        {/* Rendering courses if available */}
        {display && display.length !== 0 && (
          <div className="flex w-full justify-center">
            <div className="flex flex-col w-full px-32">
              {/* Mapping through courses array and rendering CourseCard for each course */}
              {display.map((course) => {
                return (
                  <div
                    key={course.id}
                    className="w-full h-[19rem] flex justify-center items-center"
                  >
                    <CourseCard course={course} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="h-[13%]"></div> {/* Placeholder */}
      </div>
    </>
  );
}
