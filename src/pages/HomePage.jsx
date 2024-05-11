import { Background } from "../Media/LPbg.png";
import { Table } from "../Table";
import { Modal } from "../Modal";
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
      <div className="flex flex-col justify-center items-center">
      </div>
      <div className="flex flex-col justify-center items-center md:pt-24">
      <img src ={APNG} alt="OPENREFINERY"/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <header className="shadow-lg min-w-[80vw] min-h-[45vh] rounded-[60px] flex flex-col justify-center items-center">
        <figure className="flex flex-row py-4 gap-4">
            <Button>Explore Tasks</Button>
            <Button>Start Earning</Button>
          </figure>
          <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-2 text-center">
            Add your human touch<br></br>to tomorrow's AI Chatbots
          </h1>
          <p className="tracking-tight">OpenRefinery.AI: Empowering AI training through crowd-sourced data  </p>

        </header> 
                    <section className="shadow-lg min-w-[80vw] min-h-[80vh] rounded-[60px] flex flex-col justify-center items-center">
                    <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-24">
            Improve Your Chatbots in 3 Steps 
          </h1> <br></br>
          <p className="tracking-tight">
            1. Upload Your Questions for Your Chatbot<br></br>
            2. Control the Rewards<br></br>
            3. Collect the Nuanced Data<br></br>
          </p> 
          <h2 className="tracking-tight font-bold tracking-tight md:pt-5
          ">
            Beta Release in: 
          </h2>    <br></br>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-[10px] text-white">
                <span className="countdown font-roboto text-5xl">
                  <span style={{"--value":4}}></span>
                </span>
                days
              </div> 
              <div className="flex flex-col p-2 bg-neutral rounded-[10px] text-white">
                <span className="countdown font-roboto text-5xl">
                  <span style={{"--value":10}}></span>
                </span>
                hours
              </div> 
              <div className="flex flex-col p-2 bg-neutral rounded-[10px] text-white">
                <span className="countdown font-roboto text-5xl">
                  <span style={{"--value":24}}></span>
                </span>
                min
              </div> 
              <div className="flex flex-col p-2 bg-neutral rounded-[10px] text-white">
                <span className="countdown font-roboto text-5xl">
                  <span style={{"--value":38}}></span>
                </span>
                sec
              </div>
            </div>     <br></br>
          <p className="tracking-tight">
          ↓ Join our mailing list for Beta access ↓
          </p>
          <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="YourEmail@AI.com"/>
</label>
        </section>
        <section className="shadow-lg min-w-[80vw] min-h-[80vh] rounded-[60px] flex flex-col justify-center items-center">
          
          <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-12 text-center"> Humanise Data</h1>
          <p className="tracking-tight text-center">Our goal is to be leaders in decentralised and transparent AI data crowdsourcing that is powered by blockchain. <br></br></p>
          <h1 className="py-2 md:text-3xl font-bold tracking-tight md:pt-2"> About OpenRefinery.AI  </h1>
          <p className="tracking-tight text-center">We aim to produce top-tier training data, driving AI technology forward<br></br> and enabling smooth human-AI interaction</p>
        </section> 

        <section className="shadow-lg min-w-[80vw] max-w-[80vw] min-h-[80vh] rounded-[60px] flex flex-col justify-center items-center">
          <h1 className="py-2 text-5xl md:text-5xl font-bold tracking-tight md:pt-24">
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
