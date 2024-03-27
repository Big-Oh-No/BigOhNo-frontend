import { useState } from 'react';

export default function AssignmentCard() {

    const [showFileUpload, setShowFileUpload] = useState(false);

  const handleFileUpload = () => {
    setShowFileUpload(true);
  };

  return (
    <>
      <div className = "text-5xl font-semibold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">Assignment Name</div>
      <div className="pt-44 pl-16 text-3xl font-inter">
            <div>Due Date:  </div>
            <div>Your Grade: </div>
        </div>
        <div className="pt-10 flex justify-around">
            <button onClick="" className="bg-blue-500 hover:bg-blue-700 hover:scale-105 transition duration-500 hover:delay-200 text-white text-xl font-inter font-semibold py-5 px-6 rounded-xl">
                Download Assignment
            </button>
            <button onClick={handleFileUpload} className="bg-green-700 hover:bg-green-900 hover:scale-105 hover:delay-200 text-white text-xl font-inter font-semibold py-5 px-6 rounded-xl">
                Submit Assignment
            </button>
            {/* <button onClick="" className="bg-gray-500 hover:bg-gray-700 hover:scale-105 hover:delay-200 text-white text-xl font-inter font-semibold py-5 px-6 rounded-xl">
                View Latest Submission
            </button> */}
        </div>
        {showFileUpload && (
        <div className="pt-10 flex justify-center">
          <input type="file" accept=".pdf" className="text-xl font-inter font-semibold py-5 px-6 rounded-xl" />
        </div>
      )}
        <div className = "pt-16 w-11/12 mx-auto">
            <hr className = "border-gray-400 border-2" />
        </div>


    </>
  );
}
