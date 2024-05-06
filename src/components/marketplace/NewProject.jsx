//-----------Library-----------//
import { useContext, useState } from "react";
// import axios from "axios";
import { setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";

//-----------Components-----------//
import InputText from "../../Details/InputText.jsx";
// import InputDate from "../../Details/InputDate.jsx";
import { Button } from "../../Button.jsx";
import InputNumber from "../../Details/InputNumber.jsx";

//-----------Utilities-----------//
import { AuthContext } from "../../Auth.jsx";

const NewProject = () => {
  const { user } = useContext(AuthContext);

  const [formInfo, setFormInfo] = useState({
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

  const textChange = (e) => {
    const name = e.target.id;
    let value = e.target.value;
    value = value.replace("$", "");
    setFormInfo((prevState) => {
      return { ...prevState, [name]: value };
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
        sponsor_id: user.key, // Update with the sponsor id
        creation_date: new Date().toISOString(), // Set creation_date to current date and time
      };

      console.log("Running");

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
      <dialog id="new_project_modal" className="modal  ">
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
              id="builder_payout"
              type="number"
              step="0.01"
              min="0.01"
              handleChange={textChange}
              value={formInfo.builder_payout}
            />

            <p>Validator Payout: *</p>
            <InputNumber
              id="validator_payout"
              type="number"
              step="0.01"
              min="0.01"
              handleChange={textChange}
              value={formInfo.validator_payout}
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
            <InputText
              id="subjects"
              placeholder="e.g. Singapore"
              handleChange={textChange}
              value={formInfo.subjects}
            />
          </form>

          <div className="mt-2 flex w-full justify-center">
            <Button
              onClick={postNewProject}
              // disabled={!isFilled()}
            >
              Create
            </Button>
            <div
              className={`flex items-center justify-center ${
                formInfo.isBookmarked ? "text-red-500" : "text-text"
              }  hover:text-primary`}
            >
              {/* <button
                className=" text-[28px] leading-none"
                onClick={toggleIsBookmarked}
              >
                ♥︎
              </button> */}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NewProject;
