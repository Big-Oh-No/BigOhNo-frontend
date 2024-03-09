import DasboardLayout from "../components/DashboardLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(async () => {
    const data = await (localStorage.getItem("AuthCookie")).JSON;
    if (data == null) {
      navigate("/");
    } else {
      const email = data["email"];
      const password = data["password"];

      try {
        const response = await fetch("http://142.231.92.61:8000/user/login", {
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
        } else {
          localStorage.removeItem("AuthCookie");
          navigate("/");
        }
      } catch (error) {
        localStorage.removeItem("AuthCookie");
        navigate("/");
      }
    }
  }, []);
  return (
    <div className="">
      <DasboardLayout />
    </div>
  );
}
