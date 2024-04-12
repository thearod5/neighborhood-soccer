import { Typography, useTheme } from "@mui/material";
import Faq from "react-faq-component";
import FAQData from "../content/faq.json";
import { useConstants } from "../context/constants";
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
  const constants = useConstants();
  const faqWidth = constants.isMobile ? "90%" : "75%";

  const styles = {
    bgColor: theme.palette.background.default,
    titleTextColor: theme.palette.text.primary,
    rowTitleColor: theme.palette.text.primary,
    rowContentColor: theme.palette.text.secondary,
    arrowColor: chicagoRed,
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" padding={3} textAlign="center">
          Frequently Asked Questions
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ width: faqWidth }}>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
