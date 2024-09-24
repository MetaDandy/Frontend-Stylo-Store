import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets.js";
import { toast } from "react-toastify";

const AdminNavbar = () => {
  const location = useNavigate();
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img src={assets.logo} className="w-[max(10%,80px)]" alt="" />
      <button
        onClick={() => {
          localStorage.removeItem("token");
          location("/");
          toast.success("Logout");
        }}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminNavbar;
