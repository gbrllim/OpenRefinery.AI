import faqs from "./faqs.json";

export default function FaqPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {Object.keys(faqs).map((category) => {
        return (
          <div key={category}>
            <h1 className="my-1 pl-1 text-lg font-medium tracking-tight">
              {category}
            </h1>
            {faqs[category].map((faq) => {
              return (
                <div
                  className="collapse collapse-arrow mb-2 bg-base-200"
                  key={faq.question}
                >
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="text-md collapse-title font-medium">
                    {faq.question}
                  </div>
                  <div className="collapse-content text-sm">{faq.answer}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
{
  /* {faqs.map((faq) => {
        return (
          <div
            className="collapse collapse-arrow mb-2 bg-base-200"
            key={faq.question}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="text-md collapse-title font-medium">
              {faq.question}
            </div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        );
      })} */
}
