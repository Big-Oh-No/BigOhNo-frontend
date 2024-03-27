import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function AdminProfile(props) {
  const navigate = useNavigate();
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
  const [dept, setDept] = useState(user.department);
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

  const handleSave = async () => {
    try {
      const data = JSON.parse(localStorage.getItem("AuthCookie"));

      const d = new FormData();

      d.append("email", data["email"]);
      d.append("password", data["password"]);
      d.append("bio", userBio);
      d.append("gender", userGender);
      d.append("pronouns", userPronouns);
      if (userProfileImage) d.append("profile_image", userProfileImage);
      d.append("department", dept);
      d.append("year", year);
      d.append("degree", degree);

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/user/edit`,
        {
          method: "PATCH",
          body: d
        }
      );

      if (response.status === 200) {
        navigate("/");
        setEdit(false);
      } else {
        const detail = await response.json();
        alert(detail["detail"]);
      }
    } catch (error) {
      alert("Unexpected error occurred");
    }
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
                      setProfileImage(e.target.files[0])
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
                <select
                  className="focus:outline-none bg-light-theme border-[0.075rem] border-black p-2 text-lg rounded-xl"
                  id="department"
                  name="department"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                >
                  <option value="">Select Department</option>
                  <option value="science">Science</option>
                  <option value="management">Management</option>
                  <option value="arts">Arts</option>
                  <option value="engineering">Engineering</option>
                  <option value="nursing">Nursing</option>
                  <option value="medicine">Medicine</option>
                  <option value="law">Law</option>
                  <option value="creative_studies">Creative Studies</option>
                </select>
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
                <select
                  className="focus:outline-none bg-light-theme border-[0.075rem] border-black p-2 text-lg rounded-xl"
                  id="degree"
                  name="degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="">Select Degree</option>
                  <option value="bsc">BSc</option>
                  <option value="ba">BA</option>
                </select>
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
                <select
                  className="focus:outline-none bg-light-theme border-[0.075rem] border-black p-2 text-lg rounded-xl"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setUserGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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

