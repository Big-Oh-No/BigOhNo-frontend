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
    <div className="flex flex-col w-full h-full px-20 pt-20 ">
      <div className="w-[45%]">
        <h2 className="text-5xl font-semibold mb-4 font-inter ">Course Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 space-y-2">
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

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
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

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
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

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Syllabus
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="file"
              id="syllabus"
              name="syllabus"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="courseImg"
            >
              Course Image
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="file"
              id="courseImg"
              name="courseImg"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Term</label>
            <select
              className="border border-gray-400 rounded px-3 py-2 w-full"
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

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Year</label>
            <input
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="credits"
            >
              Credits
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="number"
              id="credits"
              name="credits"
              value={formData.credits}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Total Seats
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="number"
              id="totalSeats"
              name="totalSeats"
              value={formData.totalSeats}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="teacherEmail"
            >
              Teacher Email
            </label>
            <input
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="email"
              id="teacherEmail"
              name="teacherEmail"
              value={formData.teacherEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-[25%] mt-16 rounded-full border-black font-inter text-2xl bg-dark-theme font-semibold hover:cursor-pointer py-3 hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:scale-125 select-none">
              <button type="submit" className="">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="h-[13%]"></div>
      </div>
    </div>
  );
}
