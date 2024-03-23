import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDash from "../components/Admin/AdminDash";
import TeacherDash from "../components/Teacher/TeacherDash";
import StudentDash from "../components/Student/StudentDash";
import Loading from "../components/common/Loading";
import User from "../models/user";
import Admin from "../models/admin";
import Teacher from "../models/teacher";
import Student from "../models/student";

export default function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    if (data === null) {
      navigate("/");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/user/get_user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
          }),
        }
      );

      if (response.status === 200) {
        const response_json = await response.json();
        const userProfile = new User({
          id: response_json.user.id,
          first_name: response_json.user.first_name,
          last_name: response_json.user.last_name,
          bio: response_json.user.bio,
          email: response_json.user.email,
          gender: response_json.user.gender,
          pronouns: response_json.user.pronouns,
          profile_image: response_json.user.profile_image,
          role: response_json.user.role,
          verified: response_json.user.verified
        });

        let roleProfile;
        if (userProfile.role === "admin") {
          roleProfile = new Admin({
            user: userProfile,
            admin_id: response_json.admin_id,
            contact: response_json.contact,
            office: response_json.office,
          });
        } else if (userProfile.role === "teacher") {
          roleProfile = new Teacher({
            user: userProfile,
            teacher_id: response_json.teacher_id,
            faculty: response_json.faculty,
            office: response_json.office,
            contact: response_json.contact
          });
        } else if (userProfile.role === "student") {
          roleProfile = new Student({
            user: userProfile,
            student_id: response_json.student_id,
            department: response_json.department,
            year: response_json.year,
            degree: response_json.degree
          });
        } else {
          localStorage.removeItem("AuthCookie");
          navigate("/");
          return;
        }
        setProfile(roleProfile);
      } else if (response.status === 409) {
        localStorage.removeItem("AuthCookie");
        navigate("/");
        return;
      } else if (response.status === 417) {
        navigate("/hold");
        return;
      } else {
        localStorage.removeItem("AuthCookie");
        navigate("/");
      }
    } catch (error) {
      return;
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        {profile && profile.user.role === "admin" ? (
          <AdminDash profile={profile}/>
        ) : profile && profile.user.role === "teacher" ? (
          <TeacherDash profile={profile}/>
        ) : profile && profile.user.role === "student" ? (
          <StudentDash profile={profile}/>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
