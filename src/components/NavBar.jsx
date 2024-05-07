import { NavLink } from "react-router-dom";
import { AuthContext } from "../Auth";
import { useContext } from "react";
import { Login } from "../Login";
import { Logout } from "../Logout";
import { Button } from "../Details/Button";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="m-4 flex flex-row gap-2 justify-between items-center min-w-[80vw]">
      <section className="flex-row flex items-center">
        <NavLink
          to="/"
          className="text-3xl font-bold px-1 hover:translate-y-[-1px] hover:animate-pulse"
        >
          OPENREFINERY.AI{" "}
        </NavLink>
        <p className="text-3xl font-thin">|</p>
        <Button>
          <NavLink to="/dashboard"> Dashboard</NavLink>{" "}
        </Button>
        <Button>
          <NavLink to="/marketplace"> Marketplace</NavLink>
        </Button>
      </section>
      {user !== undefined && user !== null ? (
        <div className="flex flex-row items-center justify-center">
          <p className="text-black">Logged In: {user && user.key.slice(-3)}</p>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </nav>
  );
};

export default NavBar;
