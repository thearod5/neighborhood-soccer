import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

interface EventCardProps {
  name: string;
  location: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  location,
  description,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  return (
    <Card
      sx={{ bgcolor: "background.paper", width: isMobile ? "90%" : "30%" }}
      style={{ margin: 20, borderRadius: 20 }}
    >
      <CardContent>
        <Typography variant="h5" component="div" color="text.primary">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default EventCard;
