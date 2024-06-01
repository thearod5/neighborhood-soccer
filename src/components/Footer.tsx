import { Typography } from "@mui/material";
import { FaDiscord, FaInstagram, FaMeetup } from "react-icons/fa"; // Importing icons
import { chicagoRed } from "../styles/constants";

interface FooterProps {
  // Define props here if needed
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        {/* Icons with links */}
        <a
          href="https://www.instagram.com/nbhdsoccer/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <FaInstagram size={50} color={chicagoRed} />
        </a>
        <a
          href="https://www.meetup.com/nbhdsoccer/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <FaMeetup size={50} color={chicagoRed} />
        </a>
        <a
          href="https://discord.gg/UApYXNmR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={50} color={chicagoRed} />
        </a>
      </div>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Chicago Neighborhood Soccer. All
        rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
