//-----------Components-----------//

import NavBar from "../Components/NavBar";
import NewProject from "../Components/marketplace/NewProject";
import Projects from "../Components/marketplace/Projects";

const MarketplacePage = () => {
  return (
    <>
      <nav>{/* <NavBar /> */}</nav>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Marketplace</h1>
          {/* <p className="mt-4 text-lg">text</p> */}
          <NavBar />
        </div>
        <NewProject />
        <Projects />
      </div>
    </>
  );
};

export default MarketplacePage;