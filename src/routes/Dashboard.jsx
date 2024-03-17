import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import AdminDash from "../components/Admin/AdminDash";
import TeacherDash from "../components/Teacher/TeacherDash";
import StudentDash from "../components/Student/StudentDash";
import Loading from "../components/common/Loading";

export default function Dashboard() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    if (data === null) {
      navigate("/");
      return;
    }
    const email = data["email"];
    const password = data["password"];

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/user/check`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.status === 200) {
        const response_json = await response.json();
        setRole(response_json["role"]);
        // localStorage.setItem("RoleCookie", response_json["role"]);
        // Can use it if required in future
        return;
      } else if (response.status === 409) {
        localStorage.removeItem("AuthCookie");
        navigate("/");
        return;
      } else if (response.status === 417) {
        navigate("/hold");
        return;
      } else {
        localStorage.removeItem("AuthCookie");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("AuthCookie");
      navigate("/");
      return;
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        {
          role === "admin" ? (
            <AdminDash />
          ) : role === "teacher" ? (
            <TeacherDash />
          ) : role === "student" ? (
            <StudentDash />
          ) : <Loading />
        }
      </div>
    </div>
  );
}
