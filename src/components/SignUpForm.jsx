import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-full px-20 pt-24">
      <div className="text-5xl font-bold font-inter">
        Welcome to <div className="text-dark-theme inline">Korse!</div>
      </div>
      <div className=" flex flex-col text-4xl font-bold mt-20">Sign Up</div>
      <div className="flex flex-row justify-between mt-8">
        <div className="w-[45%] space-y-1">
          <div className="text-xl font-semibold">First Name</div>
          <input className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></input>
        </div>
        <div className="w-[45%] space-y-1">
          <div className="text-xl font-semibold">Last Name</div>
          <input className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></input>
        </div>
      </div>
      <div className="mt-5 flex flex-col space-y-1">
        <div className="text-xl font-semibold">Email</div>
        <input className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl "></input>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-col w-[45%] space-y-1">
          <div className="text-xl font-semibold">Create Password</div>
          <input type="password" className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></input>
        </div>
        <div className="flex flex-col w-[45%] space-y-1">
          <div className="text-xl font-semibold">Confirm Password</div>
          <input type="password" className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"></input>
        </div>
      </div>
    </div>
  );
}
