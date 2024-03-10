import SignUpForm from "../components/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("AuthCookie")){
      navigate("/dashboard");
    }
  }, [])
  return (
    <div className="w-screen h-screen bg-white">
      <img
        src={require("../assets/sign_up.png")}
        alt="SignUp Page"
        className="absolute bottom-40 right-0"
      />
      <div className="h-full w-[57%]">
        <SignUpForm />
      </div>
      <div className="w-full h-10 absolute bottom-0 flex flex-row justify-center text-xl">
        Already have an account?{" "}
        <div className="text-dark-theme inline font-semibold ml-1 hover:underline hover:cursor-pointer" onClick={() => navigate("/")}>Sign In</div>
      </div>
    </div>
  );
}
