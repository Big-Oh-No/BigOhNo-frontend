import NavBar from "../common/NavBar"; // Importing NavBar component
import {
  faHouse,
  faUser,
  faRightFromBracket,
  faCompass,
  faTag
} from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons
import { useState } from "react"; // Importing useState hook from React
import Loading from "../common/Loading"; // Importing Loading component
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import StudentHome from "./StudentHome"; // Importing StudentHome component
import StudentProfile from "./StudentProfile"; // Importing StudentProfile component
import StudentDiscover from "./StudentDiscover"; // Importing StudentDiscover component
import StudentRequest from "./StudentRequest"; // Importing StudentRequest component

// Functional component for rendering the student dashboard
export default function StudentDash(props) {
  const navigate = useNavigate(); // Using useNavigate hook to get navigation function
  const [selectedOption, setSelectedOption] = useState("home"); // Using useState hook to manage selected option
  const OPTIONS = [
    ["logout", faRightFromBracket], // Options array containing option names and corresponding icons
    ["discover", faCompass],
    ["home", faHouse],
    ["request", faTag],
    ["profile", faUser],
  ];

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("AuthCookie"); // Removing authentication token from local storage
    navigate("/"); // Navigating to home page
  };

  // Rendering JSX for the component
  return (
    <div className="w-full h-full">
      {/* Conditional rendering based on the selected option */}
      {selectedOption === "home" ? (
        <StudentHome />
      ) : selectedOption === "profile" ? (
        <StudentProfile user={props.profile} />
      ) : selectedOption === "discover" ? (
        <StudentDiscover />
      ) : selectedOption === "request" ? (
        <StudentRequest />
      ) : (selectedOption === "logout" && handleLogout()) ? ( // Handling logout action
        <Loading />
      ) : <Loading />}
      {/* Rendering NavBar component at the bottom */}
      <div className="fixed bottom-8 w-full h-20 flex flex-row justify-center">
        <NavBar options={OPTIONS} default="home" onChange={setSelectedOption} /> {/* Passing options and onChange function to NavBar */}
      </div>
    </div>
  );
}
