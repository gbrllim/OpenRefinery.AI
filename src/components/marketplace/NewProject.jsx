//-----------Library-----------//
import { useContext, useState } from "react";
// import axios from "axios";
import { setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";

//-----------Components-----------//
import InputText from "../../Details/InputText.jsx";
import { Button } from "../../Details/Button.jsx";
import InputNumber from "../../Details/InputNumber.jsx";
import InputSubjects from "../../Details/InputSubjects.jsx";

//-----------Utilities-----------//
import { AuthContext } from "../../Auth.jsx";

const NewProject = () => {
  const { user } = useContext(AuthContext);

  const [formInfo, setFormInfo] = useState({
    title: "",
    creator_id: "",
    miners_id: [], // user_id
    inspectors_id: [],
    subjects: [],
    languages: [],
    miner_payout: 0,
    inspector_payout: 0,
    paraphrases_needed: 0,
    validations_needed: 0,
    creation_date: "", // Set to current date
  });

  const [subject, setSubject] = useState({
    id: "",
    title: "",
    paraphrases: [],
    isMined: false,
    isValidated: false,
    completion_date: "",
  });

  const textChange = (e) => {
    const name = e.target.id;
    let value = e.target.value;
    // value = value.replace("$", "");
    setFormInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const subjectTextChange = (e) => {
    const name = e.target.id;
    let value = e.target.value;

    const key = nanoid(); // Not an efficent way of adding id - changes with each text input

    setSubject((prevState) => {
      return { ...prevState, [name]: value, id: key };
    });
  };

  const addSubject = (e) => {
    e.preventDefault();

    setFormInfo((prevState) => {
      return { ...prevState, subjects: [...prevState.subjects, subject] };
    });
    console.log("Project", formInfo);

    // Set to blank
    setSubject({
      id: "",
      title: "",
      paraphrases: [],
      isMined: false,
      isValidated: false,
      completion_date: "",
    });
  };

  // Input validation to prevent empty subjects
  const isFilled = () => {
    return subject.title.trim() !== "";
  };

  // Remove subject yet to push as a project
  const deleteSubject = (id) => {
    // Filter out the subject with the matching id
    const updatedSubjects = formInfo.subjects.filter(
      (subject) => subject.id !== id,
    );

    // Update formInfo with the filtered subjects
    setFormInfo((prevState) => {
      return { ...prevState, subjects: updatedSubjects };
    });
  };

  // const selectChange = (e) => {
  //   const value = e.target.value;
  //   setFormInfo((prevState) => {
  //     return { ...prevState, statusId: value };
  //   });
  // };

  // Data validation
  // const isFilled = () => {
  //   return (
  //     formInfo.title.trim() !== "" &&
  //     formInfo.subjects.trim() !== "" &&
  //     formInfo.languages.trim() !== "" &&
  //     formInfo.builder_payout.trim() !== "" &&
  //     formInfo.validator_payout.trim() !== "" &&
  //     formInfo.time_required_min.trim() !== ""
  //   );
  // };

  // const toggleIsBookmarked = () => {
  //   setFormInfo((prevState) => ({
  //     ...prevState,
  //     isBookmarked: !prevState.isBookmarked,
  //   }));
  // };

  const postNewProject = async () => {
    try {
      // Generate random id
      const key = nanoid();

      const updatedFormInfo = {
        ...formInfo,
        creator_id: user.key, // Update with the sponsor id
        creation_date: new Date().toISOString(), // Set creation_date to current date and time
      };

      await setDoc({
        collection: "projects",
        doc: {
          key,
          data: updatedFormInfo,
        },
      });
      document.getElementById("new_project_modal").close(); // Close modal if successful
      //Set form to blank
      setFormInfo({
        title: "",
        sponsor_id: "",
        builders_id: [], // user_id
        validators_id: [],
        subjects: [],
        languages: [],
        builder_payout: 0,
        validator_payout: 0,
        creation_date: "", // Set to current date
      });
      console.log("Uploaded Project", updatedFormInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("new_project_modal").showModal()}
      >
        Create Project
      </button>
      <dialog id="new_project_modal" className="modal ">
        <div className="modal-box bg-slate-950 shadow-lg">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 ">
              ✕
            </button>
          </form>
          <h1 className=" text-[20px] font-bold ">Create New Project</h1>
          <h2 className=" mb-2 text-[10px] ">* indicates a required field</h2>
          <form className="grid grid-cols-2 gap-y-1 text-black">
            <p>Project title:*</p>
            <InputText
              id="title"
              placeholder="Fintech Chatbot"
              handleChange={textChange}
              value={formInfo.title}
            />

            <p>Builder Payout: *</p>
            <InputNumber
              id="miner_payout"
              type="number"
              step="0.01"
              min="0.01"
              handleChange={textChange}
              value={formInfo.miner_payout}
            />

            <p>Validator Payout: *</p>
            <InputNumber
              id="inspector_payout"
              type="number"
              step="0.01"
              min="0.01"
              handleChange={textChange}
              value={formInfo.inspector_payout}
            />

            <p>Paraphrases Needed: *</p>
            <InputNumber
              id="paraphrases_needed"
              type="number"
              step="10"
              min="20"
              handleChange={textChange}
              value={formInfo.paraphrases_needed}
            />

            <p>Validations Needed: *</p>
            <InputNumber
              id="validations_needed"
              type="number"
              step="1"
              min="10"
              handleChange={textChange}
              value={formInfo.validations_needed}
            />

            <p>Time Required (min): *</p>
            <InputNumber
              id="time_required_min"
              type="number"
              step="5"
              min="5"
              handleChange={textChange}
              value={formInfo.time_required_min}
            />

            <p>Languages: *</p>

            <InputText
              id="languages"
              placeholder="english"
              handleChange={textChange}
              value={formInfo.languages}
            />

            {/* <select
              className="h-12 w-full rounded-lg border-[1px] border-text bg-transparent p-2 text-text hover:translate-y-[-2px] hover:border-[2px]"
              onChange={(e) => selectChange(e)}
              id="statusId"
              defaultValue="0" // Set the defaultValue to an empty string
            >
              <option value="0" disabled>
                Choose One
              </option>
              <option value="1">Wishlist</option>
              <option value="2">Applied</option>
              <option value="3">Screening</option>
              <option value="4">Interview</option>
              <option value="5">Offer</option>
            </select> */}

            <p className="">Subjects:</p>
            <InputSubjects
              id="title"
              placeholder="e.g. Singapore"
              handleChange={subjectTextChange}
              value={subject.title}
              onClick={addSubject}
              disabled={!isFilled()}
            />
            <div></div>
            {/* Display list of subjects adding */}
            <ul>
              {formInfo.subjects.map((subject) => {
                return (
                  <li
                    key={subject.id}
                    className="flex justify-between bg-lavender-blue-200 rounded-lg px-2 my-1"
                  >
                    <label>{subject.title}</label>
                    <button
                      onClick={() => deleteSubject(subject.id)}
                      className="text-sm hover:font-semibold"
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </form>

          <div className="mt-2 flex w-full justify-center">
            <Button
              onClick={postNewProject}
              // disabled={!isFilled()}
            >
              Create
            </Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NewProject;
