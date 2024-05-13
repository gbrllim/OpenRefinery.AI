// import { Background } from "../Media/LPbg.png";
import { Table } from "../Table";
import { Modal } from "../Modal";
import { Footer } from "../Footer";
//-----------Components-----------//
import NavBar from "../Components/NavBar";
import { Button } from "../Details/Button";
import FaqPage from "../Components/Home/faqPage";
import APNG from "../Media/apngcrop.png";
import ICPlogo from "../Media/ICPlogo.png";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <NavBar />
      <div className="flex flex-col items-center justify-center"></div>
      <div className="flex w-full flex-col items-center justify-center md:pt-24">
        <img
          src={APNG}
          alt="OPENREFINERY"
          className="max-h-[250px] w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <header className="mb-3 flex min-h-[45vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-center text-5xl font-bold tracking-tight md:pt-2 md:text-5xl">
            Add your human touch<br></br>to tomorrow's AI Chatbots
          </h1>
          <p className="tracking-tight">
            OpenRefinery.AI: Crowdsourcing and refining data on the blockchain
            to empower AI{" "}
          </p>
          <figure className="flex flex-row gap-4 py-4">
            <Button>Explore Tasks</Button>
            <Button>Start Earning</Button>
          </figure>
          <div className="flex flex-row items-center justify-center md:pt-3">
            <h1 className="text-xl font-bold">Powered by </h1>
            <img
              src={ICPlogo}
              alt="ICPlogo"
              className="mr-2 h-5"
              style={{ marginLeft: "14px" }}
            ></img>
          </div>
        </header>
        <section className="glass-effect flex min-h-[80vh] min-w-[80vw] flex-col items-center justify-center rounded-[60px] bg-gray-100 shadow-lg">
          <h1 className="py-2 text-5xl font-bold tracking-tight md:pt-24 md:text-5xl">
            Improving Your Chatbots in 3 Steps
          </h1>{" "}
          <br></br>
          <div className="stats stats-vertical text-center shadow lg:stats-horizontal">
            <div className="stat">
              <div className="stat-title text-creatorDark">Creators</div>
              <div className="stat-value text-2xl">1. Launch Project</div>
              <div className="stat-desc">
                Upload your chatbot data and define tasks.
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-minerDark">Miners</div>
              <div className="stat-value text-2xl">2. Create Data</div>
              <div className="stat-desc">Miners create varied paraphrases.</div>
            </div>

            <div className="stat">
              <div className="stat-title text-inspectorDark">Inspectors</div>
              <div className="stat-value text-2xl">3. Ensure Quality</div>
              <div className="stat-desc">
                Inspectors approve, or reject submissions.
              </div>
            </div>
          </div>
          <br></br>
          <p className="tracking-tight">
            ↓ Join our mailing list for Beta access ↓{" "}
          </p>
          <label
            className="input input-bordered flex items-center gap-2"
            style={{ margin: "15px" }}
          >
            {" "}
            Email
            <input
              type="text"
              className="grow"
              placeholder="YourEmail@AI.com"
            />
          </label>
        </section>
        <section className="flex min-h-[80vh] min-w-[80vw] max-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
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
            Imagine a world where access to unbiased and <br></br> large-scale
            training data is not a bottleneck for AI development.{" "}
          </p>
        </section>

        <section className="flex min-h-[80vh] min-w-[80vw] max-w-[80vw] flex-col items-center justify-center rounded-[60px] shadow-lg">
          <h1 className="py-2 text-5xl font-bold tracking-tight md:pt-24 md:text-5xl">
            FAQ
          </h1>
          <p className="mb-2 tracking-tight">Frequently Asked Questions</p>
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
