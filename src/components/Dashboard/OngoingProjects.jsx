//-----------Libraries-----------//
import { listDocs } from "@junobuild/core";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Auth";

const OngoingProjects = ({ selectProjectDetails, toggle }) => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const getProjects = async () => {
    let { items } = await listDocs({
      collection: "projects",
    });
    console.log("Retrieved Projects", items, toggle);

    // If toggle = true, creator filter
    if (toggle) {
      items = items.filter((item) => item.data.creator_id === user.key);
    }

    setItems(items);
  };

  useEffect(() => {
    getProjects();
  }, [toggle]);

  return (
    <div>
      <h1 className="mt-2 font-medium tracking-tight">Ongoing Projects</h1>
      {items.map((item) => {
        const {
          key,
          data: { title },
        } = item;

        return (
          <button
            onClick={() => selectProjectDetails(key)}
            key={key}
            className="mt-2 flex w-full flex-row justify-between rounded-lg px-4 py-2 tracking-tight shadow-lg"
          >
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default OngoingProjects;
