//-----------Libraries-----------//
import { useContext, useState, useEffect } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { getDoc, listDocs, setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";

//-----------Components-----------//
import { MineProgressBar } from "../Details/ProgressBar";
import InputSubjects from "../Details/InputSubjects";

//-----------Providers-----------//
import { AuthContext } from "../Auth";
import FeedbackButton from "../Components/FeedbackButton";

const MinePage = () => {
  const { user } = useContext(AuthContext);

  // Project Data
  const { id } = useParams(); // Project ID
  const [paraphraseCount, setParaphraseCount] = useState(0); // Parapharse_needed for proj
  const [projectTitle, setProjectTitle] = useState("");

  // Subject data
  const [subject, setSubject] = useState([]);
  const [paraphrases, setParaphrases] = useState([]);
  const location = useLocation(); // Subject ID

  // Other variables
  const [message, setMessage] = useState("temp response message");
  const [progress, setProgress] = useState(0);

  // Miner transaction format
  const [transaction, setTransaction] = useState({
    project_title: "",
    miner_id: "", // UserId
    subject_id: location.state,
    paraphrase: "",
    gem_payout: 0,
    isApproved: null,
    approvalCount: 0,
    rejectionCount: 0,
  });

  // Get subject data - for title
  const getSubject = async () => {
    const item = await getDoc({
      collection: "projects",
      key: id,
    });

    setParaphraseCount(item.data.paraphrases_needed);
    setProjectTitle(item.data.title);

    const filteredData = item.data.subjects.find(
      (subject) => subject.id === location.state,
    );

    console.log("subject data", filteredData);

    setSubject(filteredData);
  };

  useEffect(() => {
    getSubject();
    getParaphrase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Method - Add paraphases to subject and refresh list
  const updateParaphrase = async () => {
    try {
      const para_id = nanoid();

      const updatedData = {
        ...transaction,
        miner_id: user.key,
      };

      await setDoc({
        collection: "paraphrases",
        doc: {
          key: para_id,
          data: updatedData,
        },
      });

      console.log("Paraphrase updated successfully", updatedData);

      // Reset form to blank
      setTransaction({
        miner_id: "",
        subject_id: location.state,
        paraphrase: "",
        isApproved: null,
      });

      getParaphrase();
    } catch (error) {
      console.error("Error updating paraphrases:", error);
    }
  };

  // get parahrase and check progress
  const getParaphrase = async () => {
    try {
      const data = await listDocs({
        collection: "paraphrases",
      });

      const filteredData = data.items.filter(
        (item) => item.data.subject_id === location.state,
      );

      console.log("filter paraphrases", filteredData);

      const taskProgress = filteredData.length / paraphraseCount;
      console.log(taskProgress);

      if (taskProgress !== Infinity) setProgress(taskProgress);

      setParaphrases(filteredData);
    } catch (error) {
      console.error("Error retrieving paraphrases:", error);
    }
  };

  // Table status for approval
  const getApprovalStatus = (isApproved) => {
    if (isApproved === null) {
      return "Pending";
    } else if (isApproved === true) {
      return "Approved ✅";
    } else {
      return "Rejected ❌";
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
          <section className="ml-20 mr-8 flex w-2/3 flex-col">
            <h1 className="text-xl tracking-tight">{projectTitle}</h1>
            <p className=" text-3xl font-bold">
              Task: Rephrase these requests for an FAQ page
            </p>
            <figure className="my-6 rounded-md bg-orange-100 px-4 py-2">
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
              {progress * 100}% mining complete
            </p>
            <MineProgressBar
              progress={progress * 100}
              color="bg-minerDark"
              bar="bg-minerLight"
            />
            <p className="mt-1 text-[10px] text-slate-600">
              Subject ID:{subject.id}
            </p>
            <div className=" mt-2 overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Responses</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {paraphrases.map((paraphrase) => {
                    return (
                      <tr key={paraphrase.key}>
                        <td className="text-xs tracking-tight">
                          {paraphrase.data.paraphrase}
                        </td>
                        <td className="text-xs">
                          {getApprovalStatus(paraphrase.data.isApproved)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </side>
          <FeedbackButton id={location.state} />
        </body>
      </div>
    </motion.div>
  );
};

export default MinePage;
