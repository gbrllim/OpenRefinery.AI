const Wallet = () => {
  return (
    <section className="mb-4 flex flex-col items-center rounded-lg p-2 shadow-lg">
      <p className="font-medium tracking-tight">Wallet</p>
      <p className="mt-1 rounded-full bg-creatorLight px-2 text-xs">
        This week's earnings: 302 💎
      </p>
      <div className="flex flex-row gap-2">
        <button className="my-2 rounded-full bg-slate-100 px-6 py-1 text-sm font-bold shadow-lg">
          42,039 💎
        </button>
        <button className="text- my-2 rounded-full px-4 py-1 text-sm shadow-lg">
          Buy Gems ⬇️
        </button>
        <button className="my-2 rounded-full px-4 py-1 text-sm shadow-lg">
          Withdraw ⬆️
        </button>
      </div>
      <figure className="mt-1 flex w-full flex-row items-center justify-between rounded-lg bg-slate-100 p-2 text-xs">
        <div className="flex min-w-48 flex-col">
          <h1 className="font-bold">Fashion E-commerce FAQ </h1>
          <p>Can I get a discount on this item?</p>
        </div>
        <p className="ml-2 font-bold">10 💎</p>
        <p className="mr-2">Pending</p>
      </figure>
      <figure className="mt-1 flex w-full flex-row items-center justify-between rounded-lg bg-slate-100 p-2 text-xs">
        <div className="flex min-w-48 flex-col">
          <h1 className="font-bold">AI/ML Research </h1>
          <p>What does AI stand for?</p>
        </div>
        <p className="ml-2 font-bold">2 💎</p>
        <p className="mr-2">Pending</p>
      </figure>
      <figure className="mt-1 flex w-full flex-row items-center justify-between rounded-lg bg-slate-100 p-2 text-xs">
        <div className="flex min-w-48 flex-col">
          <h1 className="font-bold">Cafe Chatbot </h1>
          <p>Can I add almond milk to my latte?</p>
        </div>
        <p className="ml-2 font-bold">20 💎</p>
        <p className="mr-2">Pending</p>
      </figure>
    </section>
  );
};

export default Wallet;
