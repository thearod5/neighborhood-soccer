import FAQData from "../content/faq.json";

const FAQ = () => {
  const questions = FAQData["questions"];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1>Frequently Asked Questions</h1>
      </div>
      {questions.map((q) => {
        return (
          <div key={q["question"]} style={{ padding: "20px" }}>
            <h2>{q["question"]}</h2>
            <div className="faq_answer">{q["answer"]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
