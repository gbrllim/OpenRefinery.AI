import { Footer } from "../Footer";
//-----------Components-----------//
import NavBar from "../Components/NavBar";
import { Button } from "../Details/Button";
import FaqPage from "../Components/Home/faqPage";
import APNG from "../Media/apngcrop.png";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <NavBar />
      <div className="flex flex-col items-center justify-center"></div>
      <div className="flex flex-col items-center justify-center md:pt-24">
        <img src={APNG} alt="OPENREFINERY" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <header className="flex min-h-[45vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <figure className="flex flex-row gap-4 py-4">
            <Button>Explore Tasks</Button>
            <Button>Start Earning</Button>
          </figure>
          <h1 className="py-2 text-center text-5xl font-bold tracking-tight md:pt-2 md:text-5xl">
            Add your human touch<br></br>to tomorrow's AI Chatbots
          </h1>
          <p className="tracking-tight">
            OpenRefinery.AI: Empowering AI training through crowd-sourced data{" "}
          </p>
        </header>
        <section className="flex min-h-[80vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-5xl font-bold tracking-tight md:pt-24 md:text-5xl">
            Improve Your Chatbots in 3 Steps
          </h1>{" "}
          <br></br>
          <p className="tracking-tight">
            1. Upload Your Questions for Your Chatbot<br></br>
            2. Control the Rewards<br></br>
            3. Collect the Nuanced Data<br></br>
          </p>
          <h2
            className="font-bold tracking-tight md:pt-5
          "
          >
            Beta Release in:
          </h2>{" "}
          <br></br>
          <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
            <div className="flex flex-col rounded-[10px] bg-neutral p-2 text-white">
              <span className="font-roboto countdown text-5xl">
                <span style={{ "--value": 4 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col rounded-[10px] bg-neutral p-2 text-white">
              <span className="font-roboto countdown text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col rounded-[10px] bg-neutral p-2 text-white">
              <span className="font-roboto countdown text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col rounded-[10px] bg-neutral p-2 text-white">
              <span className="font-roboto countdown text-5xl">
                <span style={{ "--value": 38 }}></span>
              </span>
              sec
            </div>
          </div>{" "}
          <br></br>
          <p className="tracking-tight">
            ↓ Join our mailing list for Beta access ↓
          </p>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="text"
              className="grow"
              placeholder="YourEmail@AI.com"
            />
          </label>
        </section>
        <section className="flex min-h-[80vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-center text-5xl font-bold tracking-tight md:pt-12 md:text-5xl">
            {" "}
            Humanise Data
          </h1>
          <p className="text-center tracking-tight">
            Our goal is to be leaders in decentralised and transparent AI data
            crowdsourcing that is powered by blockchain. <br></br>
          </p>
          <h1 className="py-2 font-bold tracking-tight md:pt-2 md:text-3xl">
            {" "}
            About OpenRefinery.AI{" "}
          </h1>
          <p className="text-center tracking-tight">
            We aim to produce top-tier training data, driving AI technology
            forward<br></br> and enabling smooth human-AI interaction
          </p>
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
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
