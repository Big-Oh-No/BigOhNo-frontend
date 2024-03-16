import AdminNavBar from "./AdminNavBar";
export default function AdminDash() {
  return (
    <div>
      <div className="text-5xl font-inter font-semibold absolute top-10 left-10">
        Dashboard
      </div>
      <div className="absolute bottom-8 w-full h-20 flex flex-row justify-center">
        <AdminNavBar />
      </div>
    </div>
  );
}
