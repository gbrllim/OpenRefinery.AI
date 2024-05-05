import { Background } from "../Background";
import { Table } from "../Table";
import { Modal } from "../Modal";
import { initJuno } from "@junobuild/core";
import { Auth } from "../Auth";
import { useEffect } from "react";
import { Footer } from "../Footer";
//-----------Components-----------//
import NavBar from "../components/NavBar";

const HomePage = () => {
  // TODO: STEP_1_INITIALIZATION
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "vzxr6-nqaaa-aaaal-aja7q-cai",
      }))();
  }, []);

  return (
    <>
      <NavBar />
      <div className="relative isolate bg-white h-[100dvh]">
        <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight md:pt-24">
            OPENJIO.AI
          </h1>
          <p className="py-4">Earn now</p>

          <Auth>
            <Table />

            <Modal />
          </Auth>
        </main>

        <Footer />

        <Background />
      </div>
    </>
  );
};

export default HomePage;
