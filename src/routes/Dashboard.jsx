import DasboardLayout from "../components/DashboardLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  
  useEffect(() => {
      init();
      }, []);

  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    if (data == null) {
      navigate("/");
      return;
    } else {
      const email = data["email"];
      const password = data["password"];

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (response.status === 200) {
          return;
        } else {
          localStorage.removeItem("AuthCookie");
          navigate("/");
          return;
        }
      } catch (error) {
          console.log(error)
        localStorage.removeItem("AuthCookie");
        navigate("/");
        return;
      }
    }
  } 
  return (
    <div className="">
      <DasboardLayout />
    </div>
  );
}
