import { NavLink } from "react-router";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();
  const logout = useLogout();
  const navItems = [
    { id: 1, icon: "bi-house-door-fill", route: "/" },
    { id: 2, icon: "bi-caret-right-square-fill", route: "/play" },
    { id: 3, icon: "bi-gear-fill", route: "/settings" },
    { id: 4, icon: "bi-box-arrow-left", route: "/logout", action: "logout" },
  ];

  return (
    <nav className="navbar flex gap-4 list-none fixed">
      <ul className="list-none">
        {navItems.map((item) => {
          const isLogout = item.action === "logout";

          if (isLogout) {
            return (
              <li
                key={item.id}
                className="p-4 hover:bg-amber-50 cursor-pointer"
                onClick={async () => {
                  await logout();
                  navigate("/login", { replace: true });
                }}
              >
                <i className={`bi ${item.icon} text-3xl`} />
              </li>
            );
          }

          return (
            <NavLink key={item.id} to={item.route}>
              <li className="p-4 hover:bg-amber-50">
                <i className={`bi ${item.icon} text-3xl`} />
              </li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}
