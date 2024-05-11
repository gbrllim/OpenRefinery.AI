import { NavLink } from "react-router-dom";
import { signOut } from "@junobuild/core";

import { AuthContext } from "../Auth";
import { useContext } from "react";
import { Login } from "../Login";
import { Button } from "../Details/Button";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="fixed top-0 flex min-w-[100vw] flex-row items-center justify-between gap-2 bg-white px-8 py-4 opacity-95">
      <section className="flex flex-row items-center gap-3">
        <NavLink
          to="/"
          className="px-1 text-3xl font-bold hover:translate-y-[-1px] hover:animate-pulse"
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
          <summary className="btn m-1 px-12 font-medium">
            Wallet: {user && user.key.slice(-8)}
          </summary>
          <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
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
