//-----------Libraries-----------//
import { initJuno } from "@junobuild/core";
import { useEffect } from "react";

//-----------Providers-----------//
import Routes from "./providers/routerProvider.jsx";
import { Auth } from "./Auth.jsx";

const App = () => {
  // TODO: STEP_1_INITIALIZATION
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "vzxr6-nqaaa-aaaal-aja7q-cai",
      }))();
  }, []);

  return (
    <Auth>
      <Routes />
    </Auth>
  );
};

export default App;
