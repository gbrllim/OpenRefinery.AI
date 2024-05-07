//-----------Libraries-----------//
import { useContext, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { listDocs, getDoc } from "@junobuild/core";

//-----------Components-----------//
import { Button } from "../Details/Button";

//-----------Providers-----------//
import { AuthContext } from "../Auth";
import { getLastUpdatedText } from "../Utilities/formatting";

const MinePage = () => {
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
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="absolute items-center left-1/2 top-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-[50%] transform flex-col rounded-lg bg-white shadow-lg">
        <NavLink
          to={`/marketplace`}
          className="btn btn-ghost btn-sm absolute left-2 top-3 "
        >
          Back to Marketplace
        </NavLink>
        <NavLink
          to={`/project/${id}`}
          className="btn btn-ghost btn-sm absolute left-40 top-3 "
        >
          Back to Project
        </NavLink>
        <head className="mt-16 flex w-11/12 flex-col m-3">
          <h1 className="text-3xl mb-2">
            Task: Rephrase this request for an FAQ
          </h1>
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
      </div>
    </motion.div>
  );
};

export default MinePage;
