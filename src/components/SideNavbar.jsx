import { useSelector, useDispatch } from "react-redux";
import { image } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../api/auth";
import { logout } from "../redux/slices/authSlice";
import { routes } from "../routes/routes";
import { resetAllTasks } from "../redux/slices/alltasksSlice";
import { NewTask } from "./NewTask";
import { FiMenu, FiX } from "react-icons/fi";
import PropTypes from "prop-types";

export default function SideNavbar({ isOpen, onToggle }) {
  const userName = useSelector((state) => state.auth.user.name);
  const userInitial = userName ? userName.charAt(0).toUpperCase() : "U";
  const dispatch = useDispatch();

  /* Handles User Logout */
  const handleLogout = () => {
    logoutUser();
    dispatch(resetAllTasks());
    dispatch(logout());
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-green-900 text-white rounded-lg shadow-lg"
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      <nav
        className={`bg-green-900 text-white p-4 flex flex-col 
        md:w-[300px] justify-between shadow-lg fixed md:relative h-full z-40
        transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
      <div className="flex flex-col items-start gap-5">
        <Link to={routes.inbox} className="flex flex-row items-center gap-3">
          <img
            src={image.logo}
            alt="Logo"
            className="w-10 h-10 cursor-pointer"
            aria-label="to-do"
          />
          <h1 className="text-xl font-bold">To Do</h1>
        </Link>

        <NavLink
          to={routes.inbox}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-white text-green-900 "
                : "hover:bg-white hover:text-green-900"
            } w-full font-bold py-3 rounded pl-5 text-lg cursor-pointer block mt-5`
          }
        >
          Inbox
        </NavLink>
        <NavLink
          to={routes.today}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-white text-green-900 "
                : " hover:bg-white hover:text-green-900"
            } w-full font-bold py-3 rounded pl-5 text-lg cursor-pointer block `
          }
        >
          Today
        </NavLink>
        <NavLink
          to={routes.priority}
          className={({ isActive }) =>
            `${
              isActive ? "bg-white text-green-900 " : ""
            } w-full hover:bg-white hover:text-green-900 font-bold py-3 rounded pl-5 text-lg cursor-pointer block `
          }
        >
          Priority
        </NavLink>
        <NavLink
          to={routes.pending}
          className={({ isActive }) =>
            `${
              isActive ? "bg-white text-green-900 " : ""
            } w-full hover:bg-white hover:text-green-900 font-bold py-3 rounded pl-5 text-lg cursor-pointer block `
          }
        >
          Pending
        </NavLink>
        <NewTask
          className={
            "font-bold text-lg  hover:bg-white hover:text-green-900 w-full text-left py-3 rounded pl-5 "
          }
        />
      </div>

      <div className="relative flex flex-row items-center group hover:bg-white hover:text-green-900  rounded">
        <div
          className=" w-10 h-10 m-2 flex items-center justify-center rounded-full bg-white
           group-hover:bg-green-800 group-hover:text-white
         text-green-900 cursor-pointer text-lg font-bold"
        >
          {userInitial}
        </div>

        <button
          className="block w-full text-left px-4 py-2 text-xl font-bold cursor-pointer "
          type="button"
          aria-label="logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
    </>
  );
}

SideNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
