//-----------Libraries-----------//

//-----------Components-----------//

import NavBar from "../Components/NavBar";
import Projects from "../Components/marketplace/Projects";

const MarketplacePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <NavBar />
      <header className="mt-24 text-start">
        <h1 className="text-4xl font-bold">Marketplace</h1>
      </header>
      <Projects />
    </div>
  );
};

export default MarketplacePage;
