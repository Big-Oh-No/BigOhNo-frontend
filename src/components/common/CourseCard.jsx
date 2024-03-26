import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseCard(props) {
  const navigate = useNavigate();

  const enrollHandler = async (course_id) => {
    try {
        const data = JSON.parse(localStorage.getItem("AuthCookie"));
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/course/enroll/${course_id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: data["email"],
              password: data["password"]
            }),
          }
        );
  
        if (response.status === 201) {
          showAlert(`Enrollment Request Sent to Admin!`);
        } else {
          const detail = await response.json();
          showAlert(detail["detail"]);
        }
      } catch (error) {
        showAlert("Unexpected error occurred");
      }
    };
  
    const showAlert = (message) => {
      alert(`${message}`);
    };

  return (
    <div
      className="bg-white border-[2.9px] border-neutral-200 w-[100%] h-[90%] rounded-2xl p-2 transition duration-500 flex flex-row justify-between pr-5"
    >
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
            <div className="font-semibold text-dark-theme text-xl pb-2 pl-2">{props.course.teacher_name} <div className="text-neutral-400">Currently Enrolled: {props.course.taken_seats}/{props.course.total_seats}</div></div>
            <div className="flex justify-center items-center text-white bg-dark-theme px-5 py-2 z-10 rounded-xl text-xl hover:text-black hover:bg-light-theme border hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:border-black border-transparent transition duration-200" onClick={() => enrollHandler(props.course.id)}>Enroll</div>
        </div>
      </div>
    </div>
  );
}
