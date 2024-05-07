import { Background } from "../Background";
import { Table } from "../Table";
import { Modal } from "../Modal";
import { Footer } from "../Footer";
//-----------Components-----------//
import NavBar from "../Components/NavBar";
import { Button } from "../Details/Button";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <header className="shadow-lg min-w-[80vw] min-h-[80vh] rounded-[60px] flex flex-col justify-center items-center">
          <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-24">
            Train AI. Earn Gems
          </h1>
          <p className="tracking-tight">Top decentralised crowdsourcing app</p>
          <figure className="flex flex-row py-4">
            <Button>Explore Projects</Button>
            <Button>Start Earning</Button>
          </figure>

          <p className="text-sm">Join 42,069 other users on board </p>
          <p className="text-sm">
            Total of $3,532,231 paid out to users to date
          </p>
        </header>
        <section className="shadow-lg min-w-[80vw] min-h-[80vh] rounded-[60px] flex flex-col justify-center items-center">
          <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-24">
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
        <section className="shadow-lg min-w-[80vw] min-h-[80vh] rounded-[60px] flex flex-col justify-center items-center">
          <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-24">
            About us
          </h1>
          <p className="tracking-tight">Team, dream, mission</p>
        </section>
        <section className="shadow-lg min-w-[80vw] min-h-[80vh] rounded-[60px] flex flex-col justify-center items-center">
          <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-24">
            FAQ
          </h1>
          <p className="tracking-tight">Frequently asked qns</p>
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
