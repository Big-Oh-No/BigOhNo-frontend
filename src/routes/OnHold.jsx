import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

// Component to display the on hold page
export default function OnHold() {
  const navigate = useNavigate();
  useEffect(() => {
    init();
  },[])
const init = async() => {
  const data = JSON.parse(localStorage.getItem('AuthCookie'));
    if(data === null){
      navigate("/");
      return;
    }const email = data["email"];
      const password = data["password"];

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/get_user`, {
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
          navigate("/dashboard")
          return;
        } else if(response.status === 409){
          localStorage.removeItem("AuthCookie");
          navigate("/");
          return;
        } else if(response.status === 417){
          return;
        }else{
          localStorage.removeItem("AuthCookie");
          navigate("/");
        }
      } catch (error) {
        console.log(error)
        localStorage.removeItem("AuthCookie");
        navigate("/");
        return;
      }
}
  return (
    <div className="">
      <div className="font-semibold font-inter h-screen w-screen flex flex-row pl-16 pt-16">
        <div className="flex flex-col z-10">
          <div className="text-dark-theme text-6xl">
            Verification Pending ...{" "}
          </div>

          <div className="text-dark-theme mt-10 font-inter text-5xl">
            Will take up to 3-5 business days
          </div>

          <div className="absolute bottom-36  text-inter text-5xl font-semibold">
            Contact Us:
          </div>
          <div className="text-inter underline absolute bottom-20 text-4xl mt-8 hover:cursor-pointer">
            admin@korse.com
          </div>
        </div>
        <div>
          <img
            src={require("../assets/unverified.jpg")}
            alt="Verification Pending"
            className="absolute right-10 bottom-2 h-[90%] z-0"
          />
        </div>
      </div>
      <div className="absolute text-white top-10 hover:text-black border-transparent hover:border-black hover:bg-light-theme border-2 transition duration-200 right-28 w-28 h-28 rounded-full bg-dark-theme flex justify-center items-center" onClick={() => {localStorage.removeItem('AuthCookie'); navigate("/")}}><FontAwesomeIcon icon={faRightFromBracket} className="text-5xl" /></div>
    </div>
  );
}