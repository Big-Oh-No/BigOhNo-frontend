import React from 'react';

function StudentProfile(props) {
    const { user } = props;
    const { first_name, last_name, email, role, bio, gender, pronouns, profile_image } = user.user;
    const { contact, office } = user;

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="bg-light-theme rounded-xl shadow-md flex flex-row space-x-10 p-8 w-3/4">
                <div className="flex-shrink-0 mr-8">
                    <img
                        src={profile_image ? profile_image : require("../../assets/pfp.png")}
                        alt="Profile"
                        className="rounded-full h-40 w-40"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{first_name} {last_name}</h1>
                    <p className="text-lg text-gray-700 mb-4">{role}</p>
                    <p className="text-gray-700 mb-4">{email}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Contact:</span> {contact}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Office:</span> {office}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Pronouns:</span> {pronouns}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Gender:</span> {gender}</p>
                    <p className="text-gray-700">{bio}</p>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;
