import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAdd() {
  const navigate = useNavigate();
  const [course_image_file, set_course_image_file] = useState();
  const [syllabus_file, set_syllabus_file] = useState();
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    console.log(formData)
    try {
      const d = new FormData();
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
     
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/create`, {
        method: "POST",
        body: d,
      });
    
      if (response.status === 201) {
        navigate("/");
      } else {
        const res = await response.json();
        alert(res.detail);
      }
    } catch (error) {
      alert("Unexpected Error Occurred!");
      console.error("Error:", error);
    }    
  };
  

  return (
    <div className="flex flex-col w-screen h-screen px-14 pt-10 font-inter">
      <h2 className="text-5xl font-semibold">Course Form</h2>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col mt-10 space-y-2">
        <div className="flex flex-row justify-between w-[80%] mt-4">
          <div className="w-[40%]">
            <label className="block font-semibold text-xl">Department</label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="text"
              id="dept"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
              required
            />
          </div>
          <div className=" w-[40%]">
            <label className="block font-semibold text-xl">
              Course Code
            </label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="w-[80%]">
          <label className="block font-semibold text-xl">
            Course Name
          </label>
          <input
            className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-[80%]">
          <label className="block font-semibold text-xl">
            Description
          </label>
          <textarea
            className=" pt-3 px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row justify-between w-[80%]">
          <div className="w-[40%]">
            <label className="block font-semibold text-xl">Syllabus</label>
            <input
              className="pt-3 px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="file"
              id="syllabus"
              name="syllabus"
              onChange={(e) => set_syllabus_file(e.target.files[0])}
              required
            />
          </div>

          <div className="w-[40%]">
            <label className="block font-semibold text-xl">
              Course Image
            </label>
            <input
              className="pt-3 px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="file"
              id="courseImg"
              name="courseImg"
              onChange={(e) => set_course_image_file(e.target.files[0])}
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-[80%]">
          <div className=" w-[40%]">
            <label className="block font-semibold text-xl">Term</label>
            <select
              className="pt-3 px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              id="term"
              name="term"
              value={formData.term}
              onChange={handleChange}
              required
            >
              <option value="">Select Term</option>
              <option value="W1">W1</option>
              <option value="W2">W2</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
            </select>
          </div>

          <div className="mt-4 w-[40%]">
            <label className="block font-semibold mb-2 text-xl">Year</label>
            <input
              className=" px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-[80%]">
            <div className="mt-4 w-[40%]">
            <label
            className="block font-semibold mb-2 text-xl" 
          >
            Credits
          </label>
          <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="number"
            id="credits"
            name="credits"
            value={formData.credits}
            onChange={handleChange}
            required
          />
            </div>
         

          <div className="mt-4 w-[40%]">
            <label className="block  font-semibold mb-2 text-xl">
              Total Seats
            </label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="number"
              id="totalSeats"
              name="totalSeats"
              value={formData.totalSeats}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-4 w-[80%]">
          <label
            className="block font-semibold mb-2 text-xl"
          >
            Teacher Email
          </label>
          <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="email"
            id="teacherEmail"
            name="teacherEmail"
            value={formData.teacherEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-center items-center w-[50%] mt-5">
          <div className="flex items-center justify-center w-[25%] rounded-full border-black font-inter text-2xl bg-dark-theme font-semibold hover:cursor-pointer py-3 hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:scale-105 select-none">
            <button type="submit" className="">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="h-[13%]"></div>
    </div>
  );
}
