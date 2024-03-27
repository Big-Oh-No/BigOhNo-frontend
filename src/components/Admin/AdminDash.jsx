import NavBar from "../common/NavBar";
import AdminAdd from "./AdminAdd";
import AdminHome from "./AdminHome";
import {
  faHouse,
  faUser,
  faGraduationCap,
  faShieldHalved,
  faPlus,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AdminVerify from "./AdminVerify";
import AdminEnroll from "./AdminEnroll";
import AdminProfile from "./AdminProfile";
import Loading from "../common/Loading";
import { useNavigate } from "react-router-dom";

export default function AdminDash(props) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("home");
  const OPTIONS = [
    ["logout", faRightFromBracket],
    ["enroll", faGraduationCap],
    ["verify", faShieldHalved],
    ["home", faHouse],
    ["add", faPlus],
    ["profile", faUser],
  ];
  const handleLogout = () => {
    localStorage.removeItem("AuthCookie");
    navigate("/");
  };
  return (
    <div className="w-full h-full">
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
      <div className="fixed bottom-8 w-full h-20 flex flex-row justify-center">
        <NavBar options={OPTIONS} default="home" onChange={setSelectedOption}/>
      </div>
    </div>
  );
}
