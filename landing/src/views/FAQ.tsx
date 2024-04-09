import { useTheme } from "@mui/material";
import Faq from "react-faq-component";
import FAQData from "../content/faq.json";
import { chicagoRed } from "../styles/constants";

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
    title: "", //
    rows: items.map((q) => {
      return {
        title: q["question"],
        content: q["answer"],
      };
    }),
  };
  const theme = useTheme();

  console.log("hi", theme.palette.background.default);
  const styles = {
    bgColor: theme.palette.background.default,
    titleTextColor: theme.palette.text.primary,
    rowTitleColor: theme.palette.text.primary,
    rowContentColor: theme.palette.text.secondary,
    arrowColor: chicagoRed,
  };

  console.log("data", data);

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
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default FAQ;
