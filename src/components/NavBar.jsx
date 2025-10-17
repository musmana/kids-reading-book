import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-navy border border-white rounded-lg p-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="logo.png" alt="logo" className="w-10 h-10 mr-2" />
        </Link>
      </div>

      {/* Menu */}
      <div className="flex gap-8 items-center">
        <NavLink
          to="/"
          end // ✅ ensures exact match for home
          className={({ isActive }) =>
            isActive
              ? "text-lightblue font-bold"
              : "text-white font-bold hover:text-lightblue"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/schools"
          className={({ isActive }) =>
            isActive
              ? "text-lightblue font-bold"
              : "text-white font-bold hover:text-lightblue"
          }
        >
          SCHOOLS
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            isActive
              ? "text-lightblue font-bold"
              : "text-white font-bold hover:text-lightblue"
          }
        >
          LIBRARY
        </NavLink>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? "text-lightblue font-bold"
              : "text-white font-bold hover:text-lightblue"
          }
        >
          PRICING
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-lightblue font-bold"
              : "text-white font-bold hover:text-lightblue"
          }
        >
          ABOUT
        </NavLink>

        <Link
          to="/login"
          className="bg-orange text-white font-bold py-1.5 px-4 rounded-md hover:bg-orange/90"
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
