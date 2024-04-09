import Faq from "react-faq-component";
import FAQData from "../content/faq.json";
import { backgroundColor, chicagoBlue, chicagoRed } from "../styles/constants";

const styles = {
  bgColor: backgroundColor,
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: chicagoBlue,
  // rowContentColor: 'grey',
  arrowColor: chicagoRed,
};

interface FAQItem {
  question: string;
  answer: string;
}

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const FAQ = () => {
  const items: FAQItem[] = FAQData["questions"];
  const data = {
    title: "Frequently Asked Questions",
    rows: items.map((q) => {
      return {
        title: q["question"],
        content: q["answer"],
      };
    }),
  };

  console.log("data", data);

  return (
    <div>
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1>Frequently Asked Questions</h1>
      </div>
    </div>
  );
};

export default FAQ;
