import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center w-full h-full pt-32 pl-8">
      <div className=" flex flex-col text-4xl font-bold ">Sign Up</div>
      <div className="flex flex-row justify-between text-xl font-semibold pr-52">
        <div className="">First Name</div>
        <div className=" ">Last Name</div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[40%] focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></div>
        <div className="w-[40%] focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></div>
      </div>
      <div className="text-xl font-semibold">
        <div>Email</div>
        <div className="w-full focus:outline bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl "></div>
      </div>
      <div className="flex flex-row justify-between text-xl font-semibold pr-32">
        <div>Create Password</div>
        <div>Confirm Password</div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[40%] focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></div>
        <div className="w-[40%] focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></div>
      </div>
    </div>
  );
}
