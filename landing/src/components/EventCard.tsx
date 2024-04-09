import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { chicagoRed } from "../styles/constants";

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
  return (
    <Card sx={{ width: "30%" }} style={{ margin: 20, borderRadius: 20 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color={chicagoRed} gutterBottom>
          {location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
