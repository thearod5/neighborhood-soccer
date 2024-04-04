import FAQData from "../content/faq.json";
import "../styles/FAQ.css";
const FAQ = () => {
  const questions = FAQData["questions"];

  return (
    <div>
      {questions.map((q) => {
        return (
          <div key={q["question"]}>
            <div className="faq_question">{q["question"]}</div>
            <div className="faq_answer">{q["answer"]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
