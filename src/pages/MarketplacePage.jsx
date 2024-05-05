import NavBar from "../components/NavBar";

const MarketplacePage = () => {
  return (
    <>
      <nav>{/* <NavBar /> */}</nav>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Marketplace</h1>
          {/* <p className="mt-4 text-lg">text</p> */}
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default MarketplacePage;
