//-----------Libraries-----------//

//-----------Components-----------//
import NavBar from "../Components/NavBar";
import Chart from "../Components/Dashboard/Chart";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <NavBar />
      <header className="m-4 flex w-[95%] flex-row items-center justify-between rounded-lg px-4 py-1 shadow-lg">
        <button className="btn bg-creatorDark text-white">
          Switch to Creator View 🪨✨
        </button>
        <div className="flex flex-row items-center gap-2">
          <h1 className="mx-4 font-medium tracking-tight">Lifetime Stats:</h1>
          <h2 className="rounded-lg border-2 px-3 text-center">
            Total Jobs Done:
            <br />
            3,423 💼
          </h2>
          <h2 className="rounded-lg border-2 px-3 text-center">
            Total Gems Earned:
            <br />
            13,921 💎
          </h2>
        </div>
        <div className="flex flex-row items-center">
          <p className="mx-4 font-medium tracking-tight">Quick Task:</p>
          <button className="btn w-28 bg-minerDark leading-4 text-white hover:bg-minerLight">
            Mine 💬
          </button>
          <button className="btn w-28 bg-inspectorDark leading-4 text-white hover:bg-inspectorLight">
            Inspect 🔍
          </button>
        </div>
      </header>
      <main className=" flex w-[95%]  flex-row gap-2 rounded-lg px-4 py-1 shadow-lg">
        <aside className="w-1/3 bg-green-200">
          <section>
            <p>Job Historyy</p>
            <Chart />
          </section>
          <section>Wallet</section>
        </aside>
        <body className="flex w-full flex-row bg-red-200">
          <section>Ongoing Tasks</section>
          <section>Project details</section>
        </body>
      </main>
    </div>
  );
};

export default DashboardPage;
