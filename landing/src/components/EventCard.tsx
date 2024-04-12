import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useConstants } from "../context/constants";

interface EventCardProps {
  name: string;
  link: string;
  location: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  link,
  location,
  description,
}) => {
  const constants = useConstants();
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        width: constants.isMobile ? "90%" : "30%",
      }}
      style={{ margin: 20, borderRadius: 20 }}
    >
      <CardContent>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Typography variant="h5" color="text.primary">
            {name}
          </Typography>
        </a>

        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
