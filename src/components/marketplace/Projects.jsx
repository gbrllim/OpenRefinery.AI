//-----------Libraries-----------//
import { useContext, useEffect, useState } from "react";
import { listDocs, deleteDoc } from "@junobuild/core";
import { NavLink } from "react-router-dom";

//-----------Providers-----------//
import { AuthContext } from "../../Auth";

//-----------Utilities-----------//
import { getLastUpdatedText } from "../../Utilities/formatting";

const Projects = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  // Retrieve projects
  const getProjects = async () => {
    // TODO: STEP_6_LIST_DOCS
    // const items = [];
    const { items } = await listDocs({
      collection: "projects",
    });
    console.log("Retrieved Projects", items);

    setItems(items);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const deleteProj = async (item) => {
    console.log("delete", item);
    try {
      // Delete item based on key
      await deleteDoc({
        collection: "projects",
        doc: item,
      });
      // Refresh list
      await getProjects();
    } catch (err) {
      console.error("Catch", err);
    }
  };

  return (
    <div className="mt-8 w-full max-w-[95%]">
      <h1 className="text-xl font-medium tracking-tight">Ongoing Projects</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => {
          const {
            key,
            data: { title, miner_payout, inspector_payout, creation_date },
          } = item;

          return (
            <div key={key} className="">
              <NavLink
                to={"/project/" + key}
                className="flex min-h-[150px] flex-col items-center justify-center rounded-lg border-slate-600 bg-white px-3 shadow-lg hover:translate-y-[-2px]"
              >
                <div
                  role="cell"
                  className=" mt-3 line-clamp-3 w-full overflow-hidden text-left tracking-tight"
                >
                  <span className="font-medium">Project:</span> {title}
                </div>
                <p className="mb-auto w-full animate-pulse text-left text-xs tracking-tight">
                  Posted: {getLastUpdatedText(creation_date)}
                </p>
                <p className="mb-2 min-w-56 rounded-md bg-creatorLight px-2 text-center text-sm">
                  English
                </p>
                <figure className="flex flex-row gap-2">
                  <div className="btn mb-3 w-28 bg-minerDark leading-4 text-white hover:bg-minerDark">
                    Mine 💬
                    <br />
                    {miner_payout} 💎
                  </div>
                  <div className="btn mb-3 w-28 bg-inspectorDark leading-4 text-white hover:bg-inspectorDark">
                    Inspect 🔍 <br />
                    {inspector_payout} 💎
                  </div>
                </figure>
              </NavLink>
              <button
                className="text-xs text-red-600"
                onClick={async () => await deleteProj(item)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
