import { useNavigate } from "react-router-dom";

export default function DashboardLayout(){
    const navigate = useNavigate();
    return (
        <div className="text-5xl font-inter font-semibold absolute top-10 left-10 " onClick={() => {localStorage.removeItem("AuthCookie"); navigate("/");}}>Dashboard
        
        </div>
    );
}