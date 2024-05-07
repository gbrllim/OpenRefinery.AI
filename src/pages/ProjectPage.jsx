//-----------Libraries-----------//
import { useContext, useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { listDocs, getDoc } from "@junobuild/core";

//-----------Components-----------//
import { Button } from "../Details/Button";
import NavBar from "../Components/NavBar";

//-----------Providers-----------//
import { AuthContext } from "../Auth";
import { getLastUpdatedText } from "../Utilities/formatting";
import ProgressBar from "../Details/ProgressBar";

const ProjectPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [item, setItem] = useState([]);

  const getProject = async () => {
    // TODO: STEP_6_LIST_DOCS
    // const items = [];
    const item = await getDoc({
      collection: "projects",
      key: id,
    });

    console.log("Retrieve project", item.data);

    setItem(item.data);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <NavBar />
      <head className="mt-24 flex w-11/12 flex-col m-3">
        <h1 className="text-3xl mb-2">Project: {item.title}</h1>
        {/* Project details */}
        <article className="flex flex-row gap-2 mb-2">
          <figure className=" border-2 border-black p-2 leading-snug min-w-36 rounded-lg text-center hover:translate-y-[-2px]">
            Available Tasks:
            <br />
            {item.subjects && <div>{item.subjects.length} 💼</div>}
          </figure>
          <figure className=" border-2 p-2 border-black leading-snug min-w-36 rounded-lg text-center hover:translate-y-[-2px]">
            Paraphrases:
            <br />
            {item.paraphrases_needed} 💬
          </figure>
          <figure className=" border-2 p-2 border-black leading-snug min-w-36 rounded-lg text-center hover:translate-y-[-2px]">
            Inspections:
            <br />
            {item.validations_needed} 🔍
          </figure>
          <figure className=" border-2 p-2 border-black leading-snug min-w-36 rounded-lg text-center hover:translate-y-[-2px]">
            Miner Payout:
            <br />
            {item.miner_payout} 💎
          </figure>
          <figure className=" border-2 p-2 border-black leading-snug min-w-36 rounded-lg text-center hover:translate-y-[-2px]">
            Inspector Payout: <br />
            {item.inspector_payout} 💎
          </figure>
        </article>
        <p className="text-sm text-slate-700">
          Posted: {getLastUpdatedText(item.creation_date)}{" "}
        </p>
        <p className="font-bold text-lg mt-2">
          Task: Rephrase these requests for an FAQ page
        </p>
      </head>
      <body className="w-11/12 overflow-y-scroll">
        {item.subjects &&
          item.subjects.map((subject, index) => {
            return (
              <figure
                key={subject.id}
                className="bg-slate-200 my-1 py-4 px-4 rounded-lg flex flex-row justify-between items-center"
              >
                <div className="flex flex-row items-center">
                  <p className="text-lg mr-4 bg-slate-400 text-white font-bold px-2">
                    {index + 1}
                  </p>
                  {subject.title}
                </div>
                <article className="flex gap-4">
                  <figure className=" flex w-36 flex-col items-center justify-center">
                    <NavLink
                      to="mine"
                      className="btn w-36 mb-1 text-white bg-minerDark hover:bg-minerLight"
                      disabled={false}
                    >
                      Mine 💬
                    </NavLink>
                    <ProgressBar
                      progress={20}
                      color="bg-minerDark"
                      bar="bg-minerLight"
                    />
                  </figure>
                  <figure className=" flex w-36 flex-col items-center justify-center">
                    <button
                      className="btn w-36 mb-1 text-white bg-inspectorDark hover:bg-inspectorLight"
                      disabled={true}
                    >
                      Inspect 🔍
                    </button>
                    <ProgressBar
                      progress={100}
                      color="bg-inspectorDark"
                      bar="bg-inspectorLight"
                    />
                  </figure>
                </article>
              </figure>
            );
          })}
      </body>
      <Outlet />
    </div>
  );
};

export default ProjectPage;
