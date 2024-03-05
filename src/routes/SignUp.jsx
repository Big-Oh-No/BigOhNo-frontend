import SignUpForm from "../components/SignUpForm"
export default function SignUp() {
  return (
  <div className="w-screen h-screen bg-white">
    <div className="text-5xl font-bold absolute top-10 left-10 font-inter">
        Welcome to <div className="text-dark-theme inline">Korse!</div>
    </div>
    <img src={require("../assets/sign_up.png")} alt="SignUp Page" className="absolute bottom-40 right-0"/>
    <div className="h-full w-[57%]">
        <SignUpForm/>
    </div>
  </div>
  
  );
}
