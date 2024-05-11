//-----------Libraries-----------//
import { useContext, useState, useEffect } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { getDoc, listDocs, setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";

//-----------Components-----------//
import FeedbackButton from "../Components/FeedbackButton";

//-----------Providers-----------//
import { AuthContext } from "../Auth";

const InspectPage = () => {
  const { user } = useContext(AuthContext);

  // Project Data
  const { id } = useParams(); // Project ID
  const [projectTitle, setProjectTitle] = useState("");

  // Subject data
  const [subject, setSubject] = useState([]);
  const [paraphrases, setParaphrases] = useState([]);
  const location = useLocation(); // Subject ID

  // Other variables
  let [index, setIndex] = useState(0);
  const [message, setMessage] = useState("temp response message");

  // Inspector transaction format
  const [transaction, setTransaction] = useState({
    inspector_id: "", // UserId
    project_title: "",
    subject_id: location.state,
    paraphrase_id: "", // paraphrase being reviewed
    gem_payout: 0,
    isValid: null,
  });

  // Rewards transaction format
  // const [reward, setReward] = useState({
  //   project_title: "",
  //   subject_id: location.state,
  //   miner_id: "",
  //   inspector_id: "",
  //   paraphrase_id: "", // paraphrase being reviewed
  //   gem_payout: 0,
  // });

  // Get subject data - for title
  const getSubject = async () => {
    const item = await getDoc({
      collection: "projects",
      key: id,
    });

    setProjectTitle(item.data.title);

    const filteredData = item.data.subjects.find(
      (subject) => subject.id === location.state,
    );

    console.log("getSubject", filteredData);

    setSubject(filteredData);
  };

  // get parahrase and check progress
  const getParaphrase = async () => {
    try {
      const data = await listDocs({
        collection: "paraphrases",
      });
      // Find paraphrases with the subject
      const filteredData = data.items.filter(
        (item) => item.data.subject_id === location.state,
      );

      let results = [];

      filteredData.forEach((item) => {
        results.push([item.data.paraphrase, item.key]);
      });

      setParaphrases(results);

      console.log("getParaphrases", results);
    } catch (error) {
      console.error("Error retrieving paraphrases:", error);
    }
  };

  // Initial page call
  useEffect(() => {
    getSubject();
    getParaphrase();
  }, []);

  // Method - Add paraphases to subject and refresh list

  // Step 2: Paraphrase - Update approval count and check for isApproved
  const updateInspection = async (booleanInput) => {
    try {
      const key = nanoid();

      const updatedData = {
        ...transaction,
        inspector_id: user.key,
        isValid: booleanInput,
        paraphrase_id: paraphrases[index][1],
      };

      // Step 1: Inspections - Add transaction validation
      await setDoc({
        collection: "inspections",
        doc: {
          key,
          data: updatedData,
        },
      });

      console.log(`${booleanInput ? "Approved" : "Rejected"}`, updatedData);

      // Reset tx input to blank
      setTransaction({
        paraphrase_id: "",
        isValid: null,
      });

      // Shift to next para
      setIndex(index + 1);

      // Step 3: Rewards - Create transaction reward (KIV)
    } catch (error) {
      console.error("Error updating paraphrases:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }} //animation
    >
      <div className="absolute left-1/2 top-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-[50%] transform flex-col items-center rounded-lg bg-white shadow-lg">
        <NavLink
          to={`/project/${id}`}
          className="btn btn-ghost btn-sm absolute left-2 top-3 flex bg-blue-100 shadow-lg hover:bg-minerLight "
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
          <section className="chat-end ml-20 mr-8 flex w-2/3 flex-col items-center">
            <h1 className="w-full text-left text-xl tracking-tight">
              {projectTitle}
            </h1>
            <p className=" w-full text-left text-3xl font-bold">
              Task: Rephrase these requests for an FAQ page
            </p>
            <label className="mt-6 w-full text-left">Original Subject:</label>
            <figure className=" chat-bubble w-full rounded-md bg-inspectorLight px-4 py-2 text-black">
              <p className="text-3xl italic tracking-tight">{subject.title}</p>
            </figure>
            <label className="mt-6 w-full text-left">Paraphrase:</label>
            <figure className=" chat-bubble w-full rounded-md bg-inspectorDark px-4 py-2">
              <p className=" animate-pulse text-3xl italic tracking-tight">
                {paraphrases.length > 0 ? paraphrases[index][0] : "Loading..."}
              </p>
            </figure>
            <figure className="mt-6 flex flex-row justify-center gap-4">
              <button
                value={true}
                onClick={() => updateInspection(true)}
                className="btn w-36 bg-inspectorDark text-white hover:translate-y-[-2px] hover:bg-inspectorLight"
              >
                Approve ✅
              </button>
              <button
                value={false}
                onClick={() => updateInspection(false)}
                className="btn w-36 bg-inspectorDark text-white hover:translate-y-[-2px] hover:bg-inspectorLight "
              >
                Reject ❌
              </button>
            </figure>
            <p className="mt-1 text-[10px] text-slate-600">
              Subject ID:{subject.id}
            </p>

            <p className="mt-2 text-sm">{message}</p>
            <p className="mt-2 text-sm">% logged</p>
          </section>
          <side className="mr-20 flex w-1/3 flex-col items-center ">
            <h1 className="mb-2 text-xl font-medium">
              Guidelines for Inspecting 🔍
            </h1>
            <figure className="w-full rounded-lg border-2 p-4 shadow-lg">
              <h2 className="underline">What should I approve?</h2>
              <ul className="list-inside list-disc">
                <li>Main idea is present ✅</li>
                <li>The paraphrase should reference to ✅ </li>
                <li>Unique Expression ✅</li>
              </ul>
              <h2 className="mt-4 underline">What should I reject?</h2>
              <ul className="list-inside list-disc">
                <li>Poor grammar ❌</li>
                <li>Parapharse does not match subject ❌</li>
                <li>Different train of thought ❌</li>
              </ul>
            </figure>
          </side>
        </body>
        <FeedbackButton id={location.state} />
      </div>
    </motion.div>
  );
};

export default InspectPage;
