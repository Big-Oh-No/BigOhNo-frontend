import DasboardLayout from "../components/Admin/AdminDash";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import AdminDash from "../components/Admin/AdminDash";

export default function Dashboard() {
  const navigate = useNavigate();
  const role = "admin";
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
    <div className="">
      <div
        className="absolute text-white top-10 hover:text-black border-transparent hover:border-black hover:bg-light-theme border-2 transition duration-200 right-28 w-28 h-28 rounded-full bg-dark-theme flex justify-center items-center"
        onClick={() => {
          localStorage.removeItem("AuthCookie");
          navigate("/");
        }}
      >
        <FontAwesomeIcon icon={faRightFromBracket} className="text-5xl" />
      </div>
      <div className="">
        {role === "admin" ? <AdminDash /> : <></>}
      </div>
    </div>
  );
}
