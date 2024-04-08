import { useState } from "react"; // Importing useState hook from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

export default function AdminCourseCard(props) {
  const navigate = useNavigate(); // Accessing the navigate function from React Router

  // Function to handle deactivating a course
  const submit = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));

    try {
      const d = new FormData(); // Creating FormData object for sending data
      d.append("email", data["email"]);
      d.append("password", data["password"]);
      d.append("course_id", props.course.id);

      // Sending POST request to backend API for deactivating a course
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/deactivate`, {
        method: "POST",
        body: d,
      });

      // Handling response from the server
      if (response.status === 200) {
        window.location.reload(); // Reloading the page after successful deactivation
      } else {
        const res = await response.json(); // Parsing response body
        alert(res.detail); // Displaying error message
      }
    } catch (error) {
      alert("Unexpected Error Occurred!"); // Handling unexpected errors
      console.error("Error:", error);
    }
  };

  // JSX code for rendering AdminCourseCard component
  return (
    <div className="bg-white border-[2.9px] border-neutral-200 w-[100%] h-[90%] rounded-2xl p-2 transition duration-500 flex flex-row justify-between pr-5 hover:cursor-pointer">
      {/* Image */}
      <div className="h-full w-1/3 overflow-clip flex items-center justify-center rounded-xl ml-5">
        {props.course.image_url ? (
          <img className="rounded-xl" src={props.course.image_url} alt="course_image"/>
        ) : (
          <img className="rounded-xl" src={require("../../assets/course.jpeg")} alt="course_image"/>
        )}
      </div>

      <div className="mt-5  w-full flex flex-col p-5">
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-semibold font-inter truncate">{props.course.dept} {props.course.code} {props.course.name}</div>
          <div className="font-semibold text-dark-theme text-xl">{props.course.year} {props.course.term}</div>
        </div>
        <div className="text-lg font-inter overflow-y-auto h-28 max-h-28 mt-5">{props.course.description}</div>
        <div className="flex flex-row justify-between items-end h-full">
          <div className="font-semibold text-dark-theme text-xl pb-2 pl-2">{props.course.teacher_name}</div>
          <div className="flex justify-center items-center text-white bg-red-500 px-5 py-2 z-10 rounded-xl text-xl" onClick={submit}>Deactivate</div>
        </div>
      </div>
    </div>
  );
}
