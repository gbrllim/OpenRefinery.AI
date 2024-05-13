//-----------Libraries-----------//

//-----------Components-----------//
import NavBar from "../Components/NavBar";
import Chart from "../Components/Dashboard/Chart";
import Wallet from "../Components/Dashboard/Wallet";
import ToolBar from "../Components/Dashboard/Toolbar";
import OngoingProjects from "../Components/Dashboard/OngoingProjects";
import ProjectDetails from "../Components/Dashboard/ProjectDetails";
import { useEffect, useState } from "react";
import NewProject from "../Components/marketplace/NewProject";
import CreatorChart from "../Components/Dashboard/CreatorChart";

const DashboardPage = () => {
  const [projectKey, setProjectKey] = useState(null);
  const [isCreator, setIsCreator] = useState(false);

  useEffect(() => {
    console.log("toggle creator");
    setProjectKey(null);
  }, [isCreator]);

  const selectProjectDetails = (key) => {
    setProjectKey(key);
  };

  const toggleCreatorView = () => {
    setIsCreator(!isCreator);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <NavBar />
      <ToolBar toggleCreatorView={toggleCreatorView} toggle={isCreator} />
      <main className=" flex h-screen w-[95%] flex-row gap-2 rounded-lg py-1">
        <body className="flex w-full flex-row ">
          <section
            className={`flex w-[30%] flex-col items-center rounded-lg p-2 shadow-lg ${isCreator && `shadow-creatorDark`}`}
          >
            {isCreator && <NewProject />}
            <OngoingProjects
              selectProjectDetails={selectProjectDetails}
              toggle={isCreator}
            />
          </section>
          <section
            className={`${isCreator && `shadow-creatorDark`} ml-2 w-[70%] rounded-lg p-2 shadow-lg`}
          >
            <ProjectDetails projectId={projectKey} toggle={isCreator} />
          </section>
        </body>
        {!isCreator ? (
          <aside className="w-[40%]">
            <section className="mb-4 flex flex-col items-center rounded-lg p-2 shadow-lg">
              <p className="mt-2 font-medium tracking-tight">
                Job History (7D)
              </p>
              <Chart />
            </section>
            <Wallet />
          </aside>
        ) : (
          <aside className="w-[40%]">
            <section className="mb-4 flex flex-col items-center rounded-lg p-2 shadow-lg shadow-creatorDark">
              <p className="mt-2 font-medium tracking-tight">
                Progress History (7D)
              </p>
              <CreatorChart />
            </section>
          </aside>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
