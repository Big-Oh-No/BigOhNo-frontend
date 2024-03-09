export default function OnHold() {
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
            src={require("../assets/verif1.jpg")}
            alt="Verification Pending"
            className="absolute right-10 bottom-2 h-[90%] z-0"
          />
        </div>
      </div>
    </div>
  );
}


