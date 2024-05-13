import { useState } from "react";

const ToolBar = ({ toggleCreatorView, toggle }) => {
  const [message, setMessage] = useState("Switch to Creator View 🪨✨");
  const [isCreator, setIsCreator] = useState(false);

  const updateMessage = () => {
    if (!isCreator) {
      setMessage("Switch to Mine/Inspect 💬🔍");
    } else {
      setMessage("Switch to Creator View 🪨✨");
    }
    setIsCreator(!isCreator);
  };

  return (
    <header
      className={`mb-2 mt-24 flex w-[95%] flex-row items-center justify-between rounded-lg px-4 py-1 shadow-lg ${isCreator && `shadow-creatorDark`}`}
    >
      <div className="flex flex-row items-center">
        <p className="mx-4 font-medium tracking-tight">Quick Task:</p>
        <button className="btn w-28 bg-minerDark leading-4 text-white hover:bg-minerLight">
          Mine 💬
        </button>
        <button className="btn w-28 bg-inspectorDark leading-4 text-white hover:bg-inspectorLight">
          Inspect 🔍
        </button>
      </div>

      <div className="flex flex-row items-center gap-2">
        <h1 className="mx-4 font-medium tracking-tight">Lifetime Stats:</h1>
        <h2 className="rounded-lg border-2 px-3 text-center text-sm">
          Total Jobs Done:
          <br />
          3,423 💼
        </h2>
        <h2 className="rounded-lg border-2 px-3 text-center text-sm">
          Total Gems Earned:
          <br />
          13,921 💎
        </h2>
      </div>

      <button
        onClick={() => {
          toggleCreatorView();
          updateMessage();
        }}
        className={`btn min-w-60 bg-creatorDark text-white ${toggle && ` bg-gradient-to-r from-[#F58853] to-[#4C85FB]`}`}
      >
        {message}
      </button>
    </header>
  );
};

export default ToolBar;
