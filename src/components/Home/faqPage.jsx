import faqs from "./faqs.json";

export default function FaqPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      {faqs.map((faq) => {
        return (
          <div
            className="collapse collapse-arrow bg-base-200 mb-2"
            key={faq.question}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-md font-medium">
              {faq.question}
            </div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        );
      })}
    </div>
  );
}
