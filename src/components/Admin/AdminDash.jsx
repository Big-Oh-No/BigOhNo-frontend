import NavBar from "../common/NavBar"; // Importing NavBar component
import AdminAdd from "./AdminAdd"; // Importing AdminAdd component
import AdminHome from "./AdminHome"; // Importing AdminHome component
import { faHouse, faUser, faGraduationCap, faShieldHalved, faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // Importing font awesome icons
import { useState } from "react"; // Importing useState hook from React
import AdminVerify from "./AdminVerify"; // Importing AdminVerify component
import AdminEnroll from "./AdminEnroll"; // Importing AdminEnroll component
import AdminProfile from "./AdminProfile"; // Importing AdminProfile component
import Loading from "../common/Loading"; // Importing Loading component
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

export default function AdminDash(props) {
  const navigate = useNavigate(); // Accessing the navigate function from React Router
  const [selectedOption, setSelectedOption] = useState("home"); // State to manage selected option in the navbar
  const OPTIONS = [ // Array of options for the navbar
    ["logout", faRightFromBracket],
    ["enroll", faGraduationCap],
    ["verify", faShieldHalved],
    ["home", faHouse],
    ["add", faPlus],
    ["profile", faUser],
  ];

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("AuthCookie"); // Removing authentication cookie from local storage
    navigate("/"); // Navigating user to the home page
  };

  // JSX code for rendering AdminDash component
  return (
    <div className="w-full h-full">
      {/* Conditional rendering based on selectedOption */}
      {selectedOption === "home" ? (
        <AdminHome />
      ) : selectedOption === "add" ? (
        <AdminAdd />
      ) : selectedOption === "verify" ? (
        <AdminVerify />
      ) : selectedOption === "enroll" ? (
        <AdminEnroll />
      ) : selectedOption === "profile" ? (
        <AdminProfile user={props.profile}/>
      ) : (selectedOption === "logout" && handleLogout()) ? (
        <Loading />
      ) : (
        <Loading />
      )}
      
      {/* Navbar */}
      <div className="fixed bottom-8 w-full h-20 flex flex-row justify-center">
        <NavBar options={OPTIONS} default="home" onChange={setSelectedOption}/>
      </div>
    </div>
  );
}
