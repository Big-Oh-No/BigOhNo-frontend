import React, { useState } from "react";

export default function AdminAdd() {
  const [formData, setFormData] = useState({
    dpt: "",
    code: "",
    name: "",
    desc: "",
    syllabus: null,
    courseImg: null,
    term: "",
    year: 2024,
    credits: 0,
    totalSeats: 0,
    teacherEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col w-screen h-screen px-14 pt-10 font-inter">
      <h2 className="text-5xl font-semibold">Course Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between w-[80%] mt-4">
          <div className="w-[40%]">
            <label className="block font-semibold text-xl">Department</label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="text"
              id="dpt"
              name="dpt"
              value={formData.dpt}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

        <div className="flex justify-center items-center pb-12 pr-56">
          <div className="flex items-center justify-center w-[25%] mt-10 rounded-full border-black font-inter text-2xl bg-dark-theme font-semibold hover:cursor-pointer py-3 hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:scale-125 select-none">
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
