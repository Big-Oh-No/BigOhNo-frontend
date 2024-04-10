import React, { useState } from "react"; // Importing React and useState hook
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

export default function AdminAdd() {
  const navigate = useNavigate(); // Accessing the navigate function from React Router
  const [course_image_file, set_course_image_file] = useState(); // State to manage course image file
  const [syllabus_file, set_syllabus_file] = useState(); // State to manage syllabus file
  const [formData, setFormData] = useState({ // State to manage form data
    email: localStorage.getItem("AuthCookie").email,
    password: localStorage.getItem("AuthCookie").password,
    dept: "",
    code: "",
    name: "",
    desc: "",
    term: "",
    year: 2024,
    credits: 0,
    totalSeats: 0,
    teacherEmail: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // If the input is a file input and has files
    if (files && files.length) {
      const file = files[0]; // Assume single file upload for simplicity
      const reader = new FileReader();

      // Read the file as bytes
      reader.readAsArrayBuffer(file);

      // Once the file is loaded, set it in the state
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result, // Set the file content as bytes
        }));
      };
    } else {
      // If not a file input or no files selected, set the value normally
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("AuthCookie"));

    try {
      const d = new FormData(); // Creating FormData object for sending form data
      d.append("email", data["email"]);
      d.append("password", data["password"]);
      d.append("dept", formData.dept);
      d.append("code", formData.code);
      d.append("course_name", formData.name);
      d.append("description", formData.desc);
      d.append("term", formData.term);
      d.append("year", formData.year);
      d.append("credits", formData.credits);
      d.append("total_seats", formData.totalSeats);
      d.append("teacher_email", formData.teacherEmail);

      d.append('syllabus_file', syllabus_file);
      d.append('course_img', course_image_file);

      // Sending POST request to backend API for creating a new course
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/create`, {
        method: "POST",
        body: d,
      });

      // Handling response from the server
      if (response.status === 201) {
        navigate("/"); // Navigating user to the home page after successful submission
      } else {
        const res = await response.json(); // Parsing response body
        alert(res.detail); // Displaying error message
      }
    } catch (error) {
      alert("Unexpected Error Occurred!"); // Handling unexpected errors
      console.error("Error:", error);
    }
  };

  // JSX code for rendering AdminAdd component
  return (
    <div className="flex flex-col w-screen h-screen px-14 pt-10 font-inter">
      <h2 className="text-5xl font-semibold">Course Form</h2>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col mt-10 space-y-2">
        {/* Form inputs */}
      </form>
      <div className="h-[13%]"></div>
    </div>
  );
}
