import NavBar from "../common/NavBar";
import {
  faHouse,
  faUser,
  faRightFromBracket,
  faCompass,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Loading from "../common/Loading";
import { useNavigate } from "react-router-dom";
import StudentHome from "./StudentHome";
import StudentProfile from "./StudentProfile";
import StudentDiscover from "./StudentDiscover";
import StudentRequest from "./StudentRequest";

export default function StudentDash(props) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("home");
  const OPTIONS = [
    ["logout", faRightFromBracket],
    ["discover", faCompass],
    ["home", faHouse],
    ["request", faTag],
    ["profile", faUser],
  ];
  const handleLogout = () => {
    localStorage.removeItem("AuthCookie");
    navigate("/");
  };
  return (
    <div className="w-full h-full">
      {selectedOption === "home" ? (
        <StudentHome />
      ) : selectedOption === "profile" ? (
        <StudentProfile user = {props.profile}/>
      ) : selectedOption === "discover" ? (
        <StudentDiscover />
      ) : selectedOption === "request" ? (
        <StudentRequest />
      ) : (selectedOption === "logout" && handleLogout()) ? (
        <Loading />
      ) : <Loading />}
      <div className="fixed bottom-8 w-full h-20 flex flex-row justify-center">
        <NavBar options={OPTIONS} default="home" onChange={setSelectedOption}/>
      </div>
    </div>
  );
}
