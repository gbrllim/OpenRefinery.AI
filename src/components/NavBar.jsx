import { NavLink } from "react-router-dom";
import { signOut } from "@junobuild/core";

import { AuthContext } from "../Auth";
import { useContext } from "react";
import { Login } from "../Login";
import { Logout } from "../Logout";
import { Button } from "../Details/Button";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    
    <nav className="m-4 fixed top-0 flex flex-row gap-2 justify-between items-center min-w-[80vw]">
      <section className="flex-row flex items-center gap-3">
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
        <details className="dropdown dropdown-end ">
          <summary className="m-1 btn px-12 font-medium">
            Wallet: {user && user.key.slice(-8)}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={signOut}>Disconnect</button>
            </li>
          </ul>
        </details>
      ) : (
        <Login />
      )}
    </nav>
  );
};

export default NavBar;
