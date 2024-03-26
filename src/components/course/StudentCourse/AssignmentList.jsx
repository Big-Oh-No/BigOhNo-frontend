import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

export default function AssignmentList() {
  const navigate = useNavigate();
  const [showFileUpload, setShowFileUpload] = useState({});
  const [buttonVisibility, setButtonVisibility] = useState({});

  const handleClick = (assignmentId) => {
    // navigate to the assignment card
    navigate("/assignments");

    // Toggle button visibility for the clicked assignment
    setButtonVisibility((prevState) => ({
      prevState,
      [assignmentId]: !prevState[assignmentId],
    }));
  };

  const handleFileUpload = (assignmentId) => {
    setShowFileUpload((prevState) => ({
      prevState,
      [assignmentId]: true,
    }));
  };

  return (
    <>
      <div className="text-5xl font-semibold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Your Assignments{" "}
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-2xl pt-44">
          <ul className="list-none p-0">
            <li
              className="py-6 px-8 border-b shadow-xl cursor-pointer flex flex-col justify-between"
              onClick={() => handleClick(1)}
            >
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-semibold mb-2">
                    Assignment 1
                  </div>
                  <div className="text-lg">Due date: </div>
                </div>
                <div className="text-xl text-right">Grade: </div>
              </div>
              {buttonVisibility[1] && (
                <div className="pt-6 flex justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-inter  py-3 px-4 rounded-xl">
                    Download Assignment
                  </button>
                  <button
                    onClick={() => handleFileUpload(1)}
                    className="bg-green-700 hover:bg-green-900 text-white text-xl font-inter  py-3 px-4 rounded-xl"
                  >
                    Submit Assignment
                  </button>
                </div>
              )}
              {showFileUpload[1] && (
                <div className="pt-6 flex justify-center">
                  <input
                    type="file"
                    accept=".pdf"
                    className="text-xl font-inter font-semibold py-5 px-6 rounded-xl"
                  />
                </div>
              )}
            </li>

            <li
              className="py-6 px-8 border-b shadow-xl cursor-pointer flex flex-col justify-between"
              onClick={() => handleClick(2)}
            >
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-semibold mb-2">
                    Assignment 2
                  </div>
                  <div className="text-lg">Due date: </div>
                </div>
                <div className="text-xl text-right">Grade: </div>
              </div>
              {buttonVisibility[2] && (
                <div className="pt-6 flex justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-inter  py-3 px-4 rounded-xl">
                    Download Assignment
                  </button>
                  <button
                    onClick={() => handleFileUpload(2)}
                    className="bg-green-700 hover:bg-green-900 text-white text-xl font-inter  py-3 px-4 rounded-xl"
                  >
                    Submit Assignment
                  </button>
                </div>
              )}
              {showFileUpload[2] && (
                <div className="pt-6 flex justify-center">
                  <input
                    type="file"
                    accept=".pdf"
                    className="text-xl font-inter font-semibold py-5 px-6 rounded-xl"
                  />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AssignmentCard from "./AssignmentCard";
// export default function AssignmentList() {
//   const navigate = useNavigate();
//   const handleClick = (assignmentId) => {
//     // navigate to the assignment card
//     navigate("/assignments");
//   };
//   const [showFileUpload, setShowFileUpload] = useState(false);

//   const handleFileUpload = () => {
//     setShowFileUpload(true);
//   };

//   return (
//     <>
//       <div className="text-5xl font-semibold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
//         Your Assignments{" "}
//       </div>
//       <div className="flex justify-center">
//         <div className="w-full max-w-screen-2xl pt-44">
//           <ul className="list-none p-0">
//           <li
//               className="py-6 px-8 border-b shadow-xl cursor-pointer flex flex-col justify-between"
//               onClick={() => handleClick(1)}
//             >
//               <div className="flex justify-between">
//                 <div>
//                   <div className="text-3xl font-semibold mb-2">
//                     Assignment 1
//                   </div>
//                   <div className="text-xl">Due date: </div>
//                 </div>
//                 <div className="text-2xl text-right">Grade: </div>
//               </div>
//               <div className="pt-6 flex justify-between">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-inter  py-3 px-4 rounded-xl">
//                   Download Assignment
//                 </button>
//                 <button
//                   onClick={handleFileUpload}
//                   className="bg-green-700 hover:bg-green-900 text-white text-xl font-inter  py-3 px-4 rounded-xl"
//                 >
//                   Submit Assignment
//                 </button>
//               </div>
//               {showFileUpload && (
//                 <div className="pt-6 flex justify-center">
//                   <input
//                     type="file"
//                     accept=".pdf"
//                     className="text-xl font-inter font-semibold py-5 px-6 rounded-xl"
//                   />
//                 </div>
//               )}
//             </li>

//             <li
//               className="py-6 px-8 border-b shadow-xl cursor-pointer flex flex-col justify-between"
//               onClick={() => handleClick(1)}
//             >
//               <div className="flex justify-between">
//                 <div>
//                   <div className="text-3xl font-semibold mb-2">
//                     Assignment 2
//                   </div>
//                   <div className="text-xl">Due date: </div>
//                 </div>
//                 <div className="text-2xl text-right">Grade: </div>
//               </div>
//               <div className="pt-6 flex justify-between">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-inter  py-3 px-4 rounded-xl">
//                   Download Assignment
//                 </button>
//                 <button
//                   onClick={handleFileUpload}
//                   className="bg-green-700 hover:bg-green-900 text-white text-xl font-inter  py-3 px-4 rounded-xl"
//                 >
//                   Submit Assignment
//                 </button>
//               </div>
//               {showFileUpload && (
//                 <div className="pt-6 flex justify-center">
//                   <input
//                     type="file"
//                     accept=".pdf"
//                     className="text-xl font-inter font-semibold py-5 px-6 rounded-xl"
//                   />
//                 </div>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

