import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="m-2">
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/dashboard"> Dashboard</NavLink>
      <NavLink to="/marketplace"> Marketplace</NavLink>
    </nav>
  );
};

export default NavBar;
