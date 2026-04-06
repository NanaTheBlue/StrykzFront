import { NavLink } from "react-router";

export default function NavBar() {
  const navItems = [
    { id: 1, icon: "bi-house-door-fill", route: "/" },
    { id: 2, icon: "bi-caret-right-square-fill", route: "/play" },
    { id: 3, icon: "bi-gear-fill", route: "/settings" },
    { id: 4, icon: "bi-box-arrow-left", route: "/logout" },
  ];

  return (
    <nav className="navbar flex flex-col gap-4">
      <ul>
        {navItems.map((item) => (
          <NavLink to={item.route}>
            <li className="p-4" key={item.id}>
              <i className={`bi ${item.icon} text-3xl`}></i>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
