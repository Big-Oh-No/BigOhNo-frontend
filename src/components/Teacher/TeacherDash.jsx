import NavBar from "../common/NavBar"; // Importing NavBar component
import { faHouse, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons
import { useState } from "react"; // Importing useState hook from React
import Loading from "../common/Loading"; // Importing Loading component
import TeacherHome from "./TeacherHome"; // Importing TeacherHome component
import TeacherProfile from "./TeacherProfile"; // Importing TeacherProfile component
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

// Functional component for rendering teacher dashboard
export default function TeacherDash(props) {
  const navigate = useNavigate(); // Using useNavigate hook to get navigation function
  const [selectedOption, setSelectedOption] = useState("home"); // Using useState hook to manage selectedOption state

  // Array of options for NavBar
  const OPTIONS = [
    ["logout", faRightFromBracket],
    ["home", faHouse],
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
      {/* Rendering content based on selectedOption */}
      {selectedOption === "home" ? (
        <TeacherHome />
      ) : selectedOption === "profile" ? (
        <TeacherProfile user={props.profile}/>
      ) : (selectedOption === "logout" && handleLogout()) ? (
        <Loading />
      ) : <Loading />}
      {/* Rendering NavBar */}
      <div className="bottom-8 w-full h-20 flex flex-row justify-center fixed">
        <NavBar options={OPTIONS} default="home" onChange={setSelectedOption}/>
      </div>
    </div>
  );
}
