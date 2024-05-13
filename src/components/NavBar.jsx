import { NavLink } from "react-router-dom";
import { setDoc, uploadFile, listDocs, signOut } from "@junobuild/core";

import { AuthContext } from "../Auth";
import { useContext, useEffect, useState } from "react";
import { Login } from "../Login";
import { Button } from "../Details/Button";
import UploadImage from "../Details/UploadImage";

import gemIcon from "../Media/gem.png";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  const [file, setFile] = useState(null);

  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    profile_pic: "",
    isValidator: false,
    job_count: 0,
    total_gems: 0,
    current_gems: 0,
  });

  useEffect(() => {
    checkUserRegistrationStatus();
  }, []);

  const checkUserRegistrationStatus = async () => {
    const userData = await listDocs({
      collection: "users",
    });

    const filteredData = userData.items.find((data) => data.key === user.key);

    // If user data found
    if (!filteredData) {
      console.log("New user found");
      document.getElementById("onboardingModal").showModal();
    } else {
      console.log("Existing user found");
      setUserInfo(filteredData);
    }
  };

  const addNewUser = async () => {
    console.log("Adding User");
    try {
      await setDoc({
        collection: "users",
        doc: {
          key: user.key,
          data: userInfo,
        },
      });
      console.log("User added");
    } catch (error) {
      console.error("Error adding users:", error);
    }
  };

  const uploadProfilePic = async () => {
    try {
      const url = await uploadFile({
        collection: "images",
        data: file,
      });
      console.log("Uploaded Profile pic", url);
      setUserInfo({ ...userInfo, profile_pic: url.downloadUrl });
      setFile(null);
    } catch (error) {
      console.log("Error uploading profile image", error);
    }
  };

  const handleImageUpload = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      uploadProfilePic();
    }
  }, [file]);

  const textChange = (e) => {
    const name = e.target.id;
    let value = e.target.value;
    setUserInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

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
      <dialog id="onboardingModal" className="modal">
        <div className="modal-box">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">
              👋 Welcome,
              <span className="rounded-lg bg-creatorLight px-3">
                {user && user.key.slice(-8)}
              </span>{" "}
            </h3>
            <p className="pb-2 text-sm">Tell us more about yourself</p>
            <div
              className="tooltip tooltip-right tooltip-open"
              data-tip="Upload Picture"
            >
              <label htmlFor="profile_pic" style={{ cursor: "pointer" }}>
                <UploadImage
                  src={userInfo.profile_pic ? userInfo.profile_pic : gemIcon}
                  alt="Profile photo"
                />
              </label>
            </div>
            <input
              type="file"
              id="profile_pic"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <input
              id="username"
              placeholder="Username"
              type="text"
              value={userInfo.userName}
              onChange={textChange}
              className="input m-2 border-2 border-minerDark"
            />
            <input
              id="email"
              placeholder="Email address"
              type="email"
              autoComplete="email"
              value={userInfo.email}
              onChange={textChange}
              className="input m-2 border-2 border-inspectorDark"
            />
            <button
              onClick={addNewUser}
              className="btn border-0 bg-creatorLight hover:translate-y-[-1px] hover:bg-green-300"
            >
              Save details
            </button>
          </div>
          <div className="modal-action flex flex-row items-center">
            <p className="text-xs">
              You can update these details later on{" "}
              <span className="font-bold">Settings</span>
            </p>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-slate-200 hover:translate-x-1 hover:animate-pulse hover:bg-slate-300">
                Skip
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </nav>
  );
};

export default NavBar;
