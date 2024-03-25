import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function AdminProfile(props) {
  // destructure
  const { user } = props;
  const {
    first_name,
    last_name,
    email,
    role,
    bio,
    gender,
    pronouns,
    profile_image,
  } = user.user;

  // state management
  const [dpt, setDpt] = useState(user.department);
  const [year, setYear] = useState(user.year);
  const [userBio, setUserBio] = useState(bio);
  const [userPronouns, setUserPronouns] = useState(pronouns);
  const [userGender, setUserGender] = useState(gender);
  const [userProfileImage, setProfileImage] = useState(profile_image);
  const [degree, setDegree] = useState(user.degree);
  const [edit, setEdit] = useState(false);


  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="w-screen h-screen">
      <div className="absolute font-inter font-bold text-5xl pl-12 pt-10">
        Profile
      </div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="bg-light-theme rounded-2xl shadow-lg h-[75%] w-[30%]">
          <div className="flex flex-col justify-center items-center">
            <div className="mt-10">
              <img
                src={
                  profile_image
                    ? profile_image
                    : require("../../assets/pfp.png")
                }
                alt="Profile"
                className="rounded-full h-40 w-40"
              />
              {edit && (
                <div className="mt-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setProfileImage(URL.createObjectURL(e.target.files[0]))
                    }
                  />
                </div>
              )}
            </div>
            <div className="flex flex-row justify-between items-center mt-10 w-[50%]">
              <div className="flex items-center justify-center font-semibold font-inter text-3xl w-full">
                {first_name} {last_name}
              </div>
            </div>
            <p className="font-inter">{role}</p>
            <p className="font-inter">{email}</p>
          </div>
          <div className="flex flex-col justify-between pl-7 mt-10 font-inter text-lg space-y-4">
            <div>
              <div className="font-semibold inline">Department:</div>{" "}
              {edit ? (
                <input
                  type="text"
                  value={dpt}
                  onChange={(e) => setDpt(e.target.value)}
                />
              ) : (
                user.department
              )}
            </div>
            <div>
              <div className="font-semibold inline">Year:</div>{" "}
              {edit ? (
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              ) : (
                user.year
              )}
            </div>
            <div>
              <div className="font-semibold inline">Degree:</div>{" "}
              {edit ? (
                <input
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              ) : (
                user.degree
              )}
            </div>
            <div>
              <div className="font-semibold inline">Pronouns:</div>{" "}
              {edit ? (
                <input
                  type="text"
                  value={userPronouns}
                  onChange={(e) => setUserPronouns(e.target.value)}
                />
              ) : (
                user.user.pronouns
              )}
            </div>
            <div>
              <div className="font-semibold inline">Gender:</div>{" "}
              {edit ? (
                <input
                  type="text"
                  value={userGender}
                  onChange={(e) => setUserGender(e.target.value)}
                />
              ) : (
                user.user.gender
              )}
            </div>
            <div>
              <div className="font-semibold inline">Bio:</div>{" "}
              {edit ? (
                <textarea
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                />
              ) : (
                user.user.bio
              )}
            </div>
            {edit ? (
              <div className="flex flex-row justify-between items-center pl-10 pr-14 pt-7">
                <div className="w-[30%] rounded-full">
                  <div
                    className="rounded-full bg-dark-theme font-inter text-white font-semibold flex justify-center h-10 pt-2 hover:cursor-pointer"
                    onClick={handleSave}
                  >
                    Save
                  </div>
                </div>
                <div className="w-[30%] rounded-ful">
                  <div
                    className="rounded-full bg-dark-theme font-inter text-white font-semibold flex justify-center h-10 pt-2 hover:cursor-pointer"
                    onClick={() => setEdit(false)}
                  >
                    Cancel
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute top-32 right-[36%]">
                <div
                  className="flex justify-end pr-5 pt-5 text-3xl hover:cursor-pointer transition duration-500 select-none"
                  onClick={handleEditClick}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

