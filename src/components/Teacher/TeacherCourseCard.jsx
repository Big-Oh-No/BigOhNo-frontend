import { useState } from "react"; // Importing useState hook from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

// Functional component for rendering a card for teacher's course
export default function TeacherCourseCard(props) {
  const navigate = useNavigate(); // Using useNavigate hook to get navigation function
  const [isHovered, setIsHovered] = useState(false); // Using useState hook to manage hover state

  // Rendering JSX for the component
  return (
    <div
      className="bg-white border-[2.9px] border-neutral-200 w-[85%] h-[85%] rounded-2xl hover:scale-110 hover:shadow-2xl p-2 transition duration-500"
      style={{ boxShadow: isHovered ? "0 0 50px rgba(0, 0, 0, 0.25)" : "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/course/${props.course.id}`)}
    >
      <div className="h-[60%] overflow-clip flex items-center justify-center rounded-xl">
        {/* Rendering course image */}
        {props.course.image_url ? (
          <img className="rounded-xl" src={props.course.image_url} alt="course_image"/>
        ) : (
          <img className="rounded-xl" src={require("../../assets/course.jpeg")} alt="course_image"/>
        )}
      </div>
      <div className="text-2xl p-2 mt-5 font-semibold font-inter truncate w-full">
        {/* Rendering course name */}
        {props.course.name}
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-2xl px-2 font-semibold font-inter truncate text-neutral-500 flex flex-col">
          {/* Rendering course department, code, year, and term */}
          <div className="">{props.course.dept} {props.course.code}</div>
          <div className="text-lg">{props.course.year} {props.course.term}</div>
        </div>
        <div className="text-lg px-2 font-semibold font-inter truncate text-neutral-500 flex flex-col items-center">
          {/* Rendering number of students */}
          <div className="">Students</div>
          <div className="">{props.course.taken_seats} / {props.course.total_seats}</div>
        </div>
      </div>
    </div>
  );
}
