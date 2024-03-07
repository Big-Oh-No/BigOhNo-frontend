import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "../components/SignUpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
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
      <div>

          <FontAwesomeIcon className="absolute bottom-10 right-20 w-10 h-10 bg-dark-theme flex flex-col justify-center items-center rounded-full hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:cursor-pointer p-5 hover:scale-125" icon={faArrowRight} />


      </div>
    </div>
  );
}
