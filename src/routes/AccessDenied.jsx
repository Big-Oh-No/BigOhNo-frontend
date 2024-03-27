import React from "react";

function AccessDenied() {
  return (
    <div className="flex flex-row-reverse w-screen h-screen">
      <div className="relative h-full w-[70%]">
        <img
          src={require("../assets/page_notfound.png")}
          alt="404 Page"
          className="absolute top-20 right-0 h-full w-full -mr-60 "
        />
      </div>
      <div className="h-full w-[50%]">
        <div className="font-inter font-bold text-3xl pt-20 pl-10 flex flex-col">
          <div>You don't have access to this resource!</div>
          <div className=" mt-32 text-dark-theme text-9xl pl-16 inline">
            Access Denied
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessDenied;
