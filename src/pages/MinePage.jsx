//-----------Libraries-----------//
import { useContext, useState, useEffect } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { listDocs, getDoc, setDoc } from "@junobuild/core";

//-----------Components-----------//
import { Button } from "../Details/Button";
import { MineProgressBar } from "../Details/ProgressBar";

//-----------Providers-----------//
import { AuthContext } from "../Auth";
import { getLastUpdatedText } from "../Utilities/formatting";
import InputText from "../Details/InputText";
import InputSubjects from "../Details/InputSubjects";

const MinePage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [subject, setSubject] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [message, setMessage] = useState("temp response message");

  const location = useLocation();

  // Miner transaction format
  const [transaction, setTransaction] = useState({
    id: "", // Tx id
    miner_id: "", // UserId
    subject_id: location.state,
    paraphrase: "",
    isApproved: false,
  });

  const getSubject = async () => {
    console.log("Getting subject", location.state);
    const item = await getDoc({
      collection: "projects",
      key: id,
    });

    setProjectTitle(item.data.title);

    const filteredData = item.data.subjects.find(
      (subject) => subject.id === location.state,
    );

    console.log("Retrieve subject", filteredData);

    setSubject(filteredData);
  };

  useEffect(() => {
    getSubject();
  }, []);

  // Method - Add paraphases to subject
  const updateParaphrase = async (myDoc, myNewData) => {
    try {
      // Retrieve the document from the collection
      const item = await getDoc({
        collection: "my_collection_key",
        key: myDoc.key, // Assuming myDoc contains the document key
      });

      // Update the 'subjects' array in the document
      const updatedItem = {
        ...item,
        data: {
          ...item.data,
          subjects: myNewData,
        },
      };

      // Save the updated document back to the collection
      await setDoc({
        collection: "my_collection_key",
        doc: updatedItem,
      });

      // add transaction as well

      console.log("Paraphrase updated successfully");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  // Helper function text change for transaction
  const textChange = (e) => {
    const name = e.target.id;
    let value = e.target.value;
    // value = value.replace("$", "");
    setTransaction((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const isFilled = () => {
    return transaction.paraphrase.trim() !== "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="absolute left-1/2 top-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-[50%] transform flex-col items-center rounded-lg bg-white shadow-lg">
        <NavLink
          to={`/project/${id}`}
          className="btn btn-ghost btn-sm absolute left-2 top-3 flex bg-orange-100 shadow-lg hover:bg-minerLight "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <p className="translate-x-[-6px]">Project</p>
        </NavLink>
        <body className="m-28 flex w-full flex-row">
          <section className="ml-20 flex w-2/3 flex-col">
            <h1 className="text-xl tracking-tight">{projectTitle}</h1>
            <p className=" text-3xl font-bold">
              Task: Rephrase these requests for an FAQ page
            </p>
            <figure className="my-6 max-w-[95%] rounded-md bg-orange-100 px-4 py-2">
              <p className=" animate-pulse text-3xl italic tracking-tight">
                {subject.title}
              </p>
            </figure>
            <p className="">Enter your response:</p>
            <InputSubjects
              id="paraphrase"
              placeholder="Enter your parapharse"
              handleChange={textChange}
              value={transaction.paraphrase}
              onClick={updateParaphrase}
              disabled={!isFilled()}
              color="bg-minerDark text-white"
            />
            <p className="mt-2 text-sm">{message}</p>
          </section>
          <side className="mr-20 w-1/3 ">
            <h1 className="text-xl font-bold">Task Progress</h1>
            <p className="text-sm tracking-tight text-minerDark">
              20% mining complete
            </p>
            <MineProgressBar
              progress={30}
              color="bg-minerDark"
              bar="bg-minerLight"
            />
            <p className="mt-1 text-[10px] text-slate-600">
              Subject ID:{subject.id}
            </p>
            <figure>Responses</figure>
          </side>
        </body>
      </div>
    </motion.div>
  );
};

export default MinePage;
