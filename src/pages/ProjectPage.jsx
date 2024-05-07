//-----------Libraries-----------//
import { useContext, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { listDocs, getDoc } from "@junobuild/core";

//-----------Components-----------//
import { Button } from "../Details/Button";

//-----------Providers-----------//
import { AuthContext } from "../Auth";

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
    console.log("helloo");
    getProject();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="absolute items-center left-1/2 top-1/2 z-30 flex h-full max-h-[90%] w-full max-w-[95%] -translate-x-1/2 -translate-y-[50%] transform flex-col rounded-lg bg-white shadow-lg">
        <NavLink
          to="/marketplace"
          className="btn btn-ghost btn-sm absolute left-2 top-3 "
        >
          Back to Marketplace
        </NavLink>
        <head className="mt-16 flex w-full flex-col m-4">
          <h1 className="text-3xl mb-2">{item.title}</h1>
          {/* Project details */}
          <article className="flex flex-row gap-2 mb-2">
            <figure className=" border-2 p-2 leading-snug min-w-36 rounded-lg text-center bg-[#F5BC73]">
              Miner Payout:
              <br />
              {item.miner_payout} 💎
            </figure>
            <figure className=" border-2 p-2 leading-snug min-w-36 rounded-lg text-center bg-[#94B5FC]">
              Inspector Payout: <br />
              {item.inspector_payout} 💎
            </figure>
          </article>
          <p>Date Posted: {item.creation_date} </p>
        </head>
        <body className="w-11/12">
          {item.subjects.map((subject) => {
            return (
              <figure key={subject.id} className="bg-slate-200 my-1">
                {subject.title}
              </figure>
            );
          })}
        </body>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
