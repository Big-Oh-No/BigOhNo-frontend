import SignUpForm from "../components/SignUpForm";
export default function SignUp() {
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
      <div className="w-full h-10 absolute bottom-0 flex flex-row justify-center">
        Already have an account?{" "}
        <div className="text-dark-theme inline font-semibold ml-1 hover:underline hover:cursor-pointer">Sign In</div>
      </div>
    </div>
  );
}
