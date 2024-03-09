export default function OnHold() {
  return <div className="h-screen w-screen flex justify-center items-center">
    <div  className="text-7xl font-bold absolute top-36 left-32 font-inter"/>
    <Verification Pending/>
    <img
    src={require("../assets/verifff.png")}
    alt="Verification Pending"
    className="h-full"/>
    </div>;
}
