import { useNavigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { useEffect } from "react";

// Component to display the Sign In page
export default function SignIn() {
    const navigate = useNavigate();
    useEffect(() => {
      if(localStorage.getItem("AuthCookie")){
        navigate("/dashboard");
      }
    }, [])

  return (
    <div className="w-screen h-screen bg-white">
      <div className="text-7xl font-bold absolute top-36 left-32 font-inter">
        Welcome to <div className="text-dark-theme inline">Korse!</div>
      </div>
      <img
        src={require("../assets/sign_in.png")}
        alt="Homepage"
        className="absolute bottom-16 left-0 z-0"
      />
      <div className="w-[32%] h-full absolute right-24 z-1">
        <SignInForm />
      </div>
    </div>
  );
}
