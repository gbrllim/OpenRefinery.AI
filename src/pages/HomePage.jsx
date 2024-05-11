import { Footer } from "../Footer";
//-----------Components-----------//
import NavBar from "../Components/NavBar";
import { Button } from "../Details/Button";
import FaqPage from "../Components/Home/faqPage";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <header className="flex min-h-[80vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-5xl font-bold tracking-tight md:pt-24 md:text-5xl">
            Train AI. Earn Gems. Refine. Beautify
          </h1>
          <p className="tracking-tight">Top decentralised crowdsourcing app</p>
          <figure className="flex flex-row gap-2 py-4">
            <Button>Explore Projects</Button>
            <Button>Start Earning</Button>
          </figure>

          <p className="text-sm">Join 42,069 other users on board </p>
          <p className="text-sm">
            Total of $3,532,231 paid out to users to date
          </p>
        </header>
        <section className="flex min-h-[80vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-5xl font-bold tracking-tight md:pt-24 md:text-5xl">
            Refine your data
          </h1>
          <p className="tracking-tight">
            Your gem of a dataset has to be refined. Your data your control
          </p>
          <figure className="flex flex-row py-4">
            <Button>Explore Projects</Button>
            <Button>Start Earning</Button>
          </figure>
        </section>
        <section className="flex min-h-[80vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-5xl font-bold tracking-tight md:pt-24 md:text-5xl">
            About us
          </h1>
          <p className="tracking-tight">Team, dream, mission</p>
        </section>
        <section className="flex min-h-[80vh] min-w-[80vw] max-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-5xl font-bold tracking-tight md:pt-24 md:text-5xl">
            FAQ
          </h1>
          <p className="mb-2 tracking-tight">Frequently asked qns</p>
          <figure className="mb-4 max-h-[500px] w-3/4 overflow-y-scroll">
            <FaqPage />
          </figure>
        </section>
        {/* <body>
          <Table />
          <Modal />
        </body> */}

        <Footer />

        {/* <Background /> */}
      </div>
    </div>
  );
};

export default HomePage;
