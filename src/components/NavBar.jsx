import { NavLink } from "react-router-dom";
import { AuthContext } from "../Auth";
import { useContext } from "react";
import { Login } from "../Login";
import { Logout } from "../Logout";
import { Button } from "../Button";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="m-2 flex flex-row gap-2">
      <h1 className="text-4xl font-bold">OPENREFINERY.AI</h1>
      <Button>
        <NavLink to="/"> Home</NavLink>
      </Button>
      <Button>
        <NavLink to="/dashboard"> Dashboard</NavLink>{" "}
      </Button>
      <Button>
        <NavLink to="/marketplace"> Marketplace</NavLink>
      </Button>

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
