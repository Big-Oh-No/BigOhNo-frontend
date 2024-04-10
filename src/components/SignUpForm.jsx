import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Sign-up form component
 * @returns {JSX.Element} Sign-up form component
 */
export default function SignUpForm() {
  // State variables for form fields and error message
  const [buttonValue, setButtonValue] = useState("none");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  // Function to submit the form
  const formSubmit = async () => {
    if (isValid()) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/user/signup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              email: email,
              password: password,
              role: buttonValue,
            }),
          }
        );
        if (response.status === 201) {
          localStorage.setItem(
            "AuthCookie",
            JSON.stringify({ email: email, password: password })
          );
          navigate("/dashboard");
        } else {
          const detail = await response.json();
          setErrMessage(detail["detail"]);
        }
      } catch (error) {
        setErrMessage("Unexpected error occurred");
      }
    }
  };

  // Function to validate the form fields
  const isValid = () => {
    if (password !== confirmPassword) {
      setErrMessage("Passwords do not match!");
      return false;
    }
    if (!firstName) {
      setErrMessage("Please enter a name");
      return false;
    } else if (!email) {
      setErrMessage("Please enter a valid email!");
      return false;
    } else if (!password) {
      setErrMessage("Please enter a valid password!");
      return false;
    } else if (!confirmPassword) {
      setErrMessage("Please confirm your password");
      return false;
    } else if (buttonValue === "none") {
      setErrMessage("Please choose a role!");
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col w-full h-full px-20 pt-24">
      {/* Sign-up form */}
      <div className="text-5xl font-bold font-inter">
        Welcome to <div className="text-dark-theme inline">Korse!</div>
      </div>
      <div className="flex flex-col text-4xl font-bold mt-20">Sign Up</div>
      {/* First name and last name fields */}
      <div className="flex flex-row justify-between mt-8">
        <div className="w-[45%] space-y-1">
          <div className="text-xl font-semibold">First Name</div>
          <input
          testname="firstname"
            className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
        </div>
        <div className="w-[45%] space-y-1">
          <div className="text-xl font-semibold">Last Name</div>
          <input
          testname="lastname"
            className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      {/* Email field */}
      <div className="mt-5 flex flex-col space-y-1">
        <div className="text-xl font-semibold">Email</div>
        <input
        testname="email"
          className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      {/* Password fields */}
      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-col w-[45%] space-y-1">
          <div className="text-xl font-semibold">Create Password</div>
          <input
          testname="password"
            type="password"
            className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col w-[45%] space-y-1">
          <div className="text-xl font-semibold">Confirm Password</div>
          <input
          testname="confirmpassword"
            type="password"
            className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          ></input>
        </div>
      </div>
      {/* Role selection */}
      <div className="flex flex-col">
        <div className="text-xl font-semibold mt-5">Your Role</div>
        <div className="flex flex-row justify-between mt-2">
          <div
          testname="teacher"
            className={`hover:cursor-pointer select-none flex flex-col w-[30%] h-14 border ${
              buttonValue === "teacher"
                ? "bg-dark-theme text-white border-transparent scale-125"
                : "bg-white text-black border-black"
            } rounded-xl text-2xl justify-center items-center transition duration-300`}
            onClick={() => setButtonValue("teacher")}
          >
            Teacher
          </div>
          <div
          testname="student"
            className={`hover:cursor-pointer select-none flex flex-col w-[30%] h-14 border ${
              buttonValue === "student"
                ? "bg-dark-theme text-white border-transparent scale-125"
                : "bg-white text-black border-black"
            } rounded-xl text-2xl justify-center items-center transition duration-300`}
            onClick={() => setButtonValue("student")}
          >
            Student
          </div>
          <div
          testname="admin"
            className={`hover:cursor-pointer select-none flex flex-col w-[30%] h-14 border ${
              buttonValue === "admin"
                ? "bg-dark-theme text-white border-transparent scale-125"
                : "bg-white text-black border-black"
            } rounded-xl text-2xl justify-center items-center transition duration-300`}
            onClick={() => setButtonValue("admin")}
          >
            Admin
          </div>
        </div>
      </div>
      {/* Submit button */}
      <div className="flex flex-row justify-center">
        <div
          testname="submit-button"
          className="flex items-center justify-center w-[25%] mt-16 rounded-full border-black font-inter text-2xl bg-dark-theme font-semibold hover:cursor-pointer py-3 hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:scale-125 select-none"
          onClick={() => {
            formSubmit();
          }}
        >
          Submit
        </div>
      </div>
      {/* Error message display */}
      {errMessage && (
        <div className="flex justify-center items-center mt-8 text-1xl text-red-500" testname="warn">
          {errMessage}
        </div>
      )}
    </div>
  );
}
