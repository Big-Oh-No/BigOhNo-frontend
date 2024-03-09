import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SignInForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (email, password) => {
    warn(email,password);
    console.log(email);
    console.log(password);
  };

  const warn = (email, password) => {
    if (!email) {
      setErrorMessage("Please enter a valid email!");
      // console.log("Email Missing!")
      return;
    } else if (!password) {
      setErrorMessage("Please enter a valid password!");
      // console.log("Password Missing!")
      return;
    }
    navigate("/Dashboard");
  }

  return (
    <div className="w-full h-full flex flex-col justify-center ">
      <div className="text-5xl font-bold">Sign In</div>
      <div className="flex flex-col mt-10 space-y-3 pl-3">
        <div className="text-xl font-semibold">Email</div>
        <input
          type="email"
          className="focus:outline-none w-full bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl p-2 px-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5 space-y-3 pl-3">
        <div className="text-xl font-semibold">Password</div>
        <div className="w-full bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl flex flex-row">
          <input
            className="w-[92.5%] p-2 px-4 focus:outline-none bg-light-theme rounded-xl "
            type={showPassword ? "" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="w-[7.5%]h-full flex justify-center items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-dark-theme text-2xl"
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className="text-dark-theme text-2xl"
              />
            )}
          </div>
        </div>
      </div>
      <div className="pl-3 mt-2 text-lg select-none">
        Don't have an account?{" "}
        <div
          className="inline text-dark-theme font-semibold hover:underline hover:cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </div>
      </div>
      <div className="flex flex-row justify-center mt-12">
        <div
          className="flex justify-center items-center text-white bg-dark-theme text-2xl w-[25%] py-3 rounded-full border-[0.075rem] border-transparent hover:bg-light-theme hover:border-[0.075rem] hover:border-black font-semibold hover:cursor-pointer hover:text-dark-theme transition duration-500"
          onClick={() => {
            submitForm(email, password);
          }}
        >
          Sign In
        </div>
      </div>
      {errorMessage && (
        <div className="flex justify-center items-center mt-4 text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}
