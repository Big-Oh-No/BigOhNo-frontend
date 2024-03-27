import React from 'react';

export default function AddAssignment() {
 
  return (
    <div className='rounded-md bg-light-theme w-screen h-screen flex justify-center items-center '>
        <div className="flex flex-col w-screen h-screen px-14 pt-10 font-inter">
      <h2 className="text-5xl font-semibold">Add Assignment</h2>
      <form className="flex justify-center items-center flex-col mt-10 space-y-2">
        <div className="flex flex-row justify-between w-[80%] mt-4">
          <div className="w-[40%]">
            <label className="block font-semibold text-xl">Assignment Title</label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div className="w-[40%]">
            <label className="block font-semibold text-xl">Deadline</label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="text"
              id="date"
              name="date"
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-[80%] mt-4">
        <div className="w-[40%]">
          <label className="block font-semibold text-xl">Assignment File</label>
          <input
            className="pt-3 px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            type="file"
            id="assignment"
            name="assignment"
            required
          />
        </div>
        <div className="w-[40%]">
          <div className="mt-4 w-[40%]">
            <label className="block font-semibold mb-2 text-xl">Grade</label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="number"
              id="grade"
              name="grade"
              required
            />
          </div>
        </div>
        </div>
        
       
        <div className="flex justify-center items-center w-[50%] pt-32">
          <div className="flex items-center justify-center w-[25%] rounded-full border-black font-inter text-2xl bg-dark-theme font-semibold hover:cursor-pointer py-3 hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:scale-105 select-none">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div className="h-[13%]"></div>
    </div>
    </div>
    
  );
}
