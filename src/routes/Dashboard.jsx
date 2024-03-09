import { useNavigate } from "react-router-dom";
import DasboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="">
      <DasboardLayout />
    </div>
  );
}
