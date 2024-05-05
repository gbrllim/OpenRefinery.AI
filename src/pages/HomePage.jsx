import { Background } from "../Background";
import { Table } from "../Table";
import { Modal } from "../Modal";
import { Footer } from "../Footer";
//-----------Components-----------//
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="relative isolate bg-white h-[100dvh]">
        <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight md:pt-24">
            OPENJIO.AI
          </h1>
          <p className="py-4">Earn now</p>
          <Table />
          <Modal />
        </main>

        <Footer />

        {/* <Background /> */}
      </div>
    </>
  );
};

export default HomePage;
