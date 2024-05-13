const GuidelineModal = () => {
  return (
    <>
      <button
        className="btn text-xs"
        onClick={() => document.getElementById("guideline_modal").showModal()}
      >
        See Additional Examples
      </button>
      <dialog id="guideline_modal" className="modal">
        <div className="modal-box flex w-full min-w-[55vw] flex-col items-center justify-center">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="mb-2 w-full text-left text-lg font-bold">
            Additional Examples
          </h3>
          <table className="w-full border-2">
            <tr>
              <th className="min-w-36 border-2 text-sm">Original Subject</th>
              <th className="text-sm">Paraphrases</th>
            </tr>
            {/* Example 1 */}
            <tr className="border-2">
              <td className=" px-2 text-left text-xs">
                <span className="font-bold">Example 1:</span> I want to order
                bak chor mee.
              </td>
              <td className="border-2 px-2 text-xs">
                ✅ Can I have a plate of bak chor mee?
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ I want to eat chicken rice. (not relevant)
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ I am consumed by the great desire to devour some bak chor mee
                now. (not natural)
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ I would like some bad chor me. (incorrect spelling)
              </td>
            </tr>
            {/* Example 2 */}
            <tr className="border-2">
              <td className=" px-2 text-left text-xs">
                <span className="font-bold">Example 2:</span> I want to find
                more information about the sequin encrusted cocktail dress.
              </td>
              <td className="border-2 px-2 text-xs">
                ✅ May I have more details about the sequined dress?
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ I want more information about this dress. (not accurate
                enough)
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ Give me more info about the sequin encrusted pants. (original
                meaning is lost)
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ I need details regarding the clothes with shiny things.
                (keywords not present)
              </td>
            </tr>
            {/* Example 3 */}
            <tr className="border-2">
              <td className=" px-2 text-left text-xs">
                <span className="font-bold">Example 3:</span> Do you have the
                new running sneakers in size 9?
              </td>
              <td className="border-2 px-2 text-xs">
                ✅ Can I find the latest running shoes in size 9?
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ✅ I’m looking for the latest size 9 running sneakers.
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ Are there new running shoes in other sizes? (not accurate
                enough)
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 px-2 text-xs">
                ❌ I want to know if you have the new running shorts. (original
                meaning is lost)
              </td>
            </tr>
          </table>
        </div>
      </dialog>
    </>
  );
};

export default GuidelineModal;
