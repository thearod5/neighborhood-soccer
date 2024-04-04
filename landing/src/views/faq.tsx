import FAQData from "../content/faq.json";

const FAQ = () => {
  const questions = FAQData["questions"];

  return (
    <div>
      {questions.map((q) => {
        return (
          <div key={q["question"]} style={{ color: "white", padding: "10px" }}>
            <h1>{q["question"]}</h1>
            <div className="faq_answer">{q["answer"]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
