import React from "react";

/**
 * Component to display a loading indicator
 */
export default function Loading() {
    return (
        <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
            {/* Loading GIF */}
            <img
                src={require("../../assets/loading.gif")}
                alt="loading..."
            />
            {/* Loading Text */}
            <div className="text-5xl">Loading...</div>
        </div>
    );
}
