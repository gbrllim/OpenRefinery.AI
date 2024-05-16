//-----------Libraries-----------//
import { getDoc } from "@junobuild/core";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//-----------Providers-----------//
import { getLastUpdatedText } from "../../Utilities/formatting";

const ProjectDetails = ({ projectId, toggle }) => {
  const [item, setItem] = useState([]);

  const getProject = async () => {
    const item = await getDoc({
      collection: "projects",
      key: projectId,
    });

    console.log("Retrieve project", item.data);

    setItem(item.data);
  };

  useEffect(() => {
    getProject();
  }, [projectId, toggle]);

  return (
    <>
      {item.title ? (
        <div>
          <header className="m-3 flex w-11/12 flex-col">
            <h1 className="mb-2 text-2xl">Project: {item.title}</h1>
            {/* Project details */}
            <article className="mb-2 flex flex-row gap-2 text-xs">
              <figure className=" min-w-28 rounded-lg border-2 border-black p-2 text-center leading-snug hover:translate-y-[-2px]">
                Available Tasks:
                <br />
                {item.subjects && <div>{item.subjects.length} 💼</div>}
              </figure>
              <figure className=" min-w-28 rounded-lg border-2 border-black p-2 text-center leading-snug hover:translate-y-[-2px]">
                Paraphrases:
                <br />
                {item.paraphrases_needed} 💬
              </figure>
              <figure className=" min-w-28 rounded-lg border-2 border-black p-2 text-center leading-snug hover:translate-y-[-2px]">
                Inspections:
                <br />
                {item.validations_needed} 🔍
              </figure>
              <figure className=" min-w-28 rounded-lg border-2 border-black p-2 text-center leading-snug hover:translate-y-[-2px]">
                Miner Payout:
                <br />
                {item.miner_payout} 💎
              </figure>
              <figure className=" min-w-28 rounded-lg border-2 border-black p-2 text-center leading-snug hover:translate-y-[-2px]">
                Inspector Payout: <br />
                {item.inspector_payout} 💎
              </figure>
            </article>
            <p className="text-xs text-slate-700">
              Posted: {getLastUpdatedText(item.creation_date)}{" "}
            </p>
            <p className="text-md mt-2 font-bold">
              Task: Rephrase these requests for an FAQ page
            </p>
          </header>
          <main className="w-full overflow-y-scroll">
            {item.subjects &&
              item.subjects.map((subject, index) => {
                return (
                  <figure
                    key={subject.id}
                    className="my-1 flex flex-row items-center justify-between rounded-lg bg-slate-200 px-4 py-3"
                  >
                    <div className="flex flex-row items-center">
                      <p className="mr-4 bg-slate-400 px-2 text-lg font-bold text-white">
                        {index + 1}
                      </p>
                      {subject.title}
                    </div>
                    <article className="flex gap-4">
                      {toggle ? (
                        <figure className=" flex w-32 flex-col items-center justify-center">
                          <NavLink
                            to={`/project/${projectId}/mine`}
                            state={subject.id} // Send state to mine
                            className="btn mb-1 w-32 bg-slate-400 text-white hover:bg-slate-500"
                            disabled={false}
                          >
                            Export Data
                          </NavLink>
                        </figure>
                      ) : (
                        <>
                          <figure className=" flex w-28 flex-col items-center justify-center">
                            <NavLink
                              to={`/project/${projectId}/mine`}
                              state={subject.id} // Send state to mine
                              className="btn mb-1 w-28 bg-minerDark text-white hover:bg-minerLight"
                              disabled={false}
                            >
                              Mine 💬
                            </NavLink>
                          </figure>
                          <figure className=" flex w-28 flex-col items-center justify-center">
                            <NavLink
                              to={`/project/${projectId}/inspect`}
                              state={subject.id} // Send state to inspect
                              className="btn mb-1 w-28 bg-inspectorDark text-white hover:bg-inspectorLight"
                              disabled={false}
                            >
                              Inspect 🔍
                            </NavLink>
                          </figure>
                        </>
                      )}
                    </article>
                  </figure>
                );
              })}
          </main>
        </div>
      ) : (
        <p className="text-center text-sm">
          Select an ongoing project on the left to view more
        </p>
      )}
    </>
  );
};

export default ProjectDetails;
