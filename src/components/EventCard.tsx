import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import ReactMarkdown from "react-markdown";
import { MeetupEvent } from "../api/event";
import { useConstants } from "../context/constants";

interface EventCardProps {
  event: MeetupEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, link, dateTime, location, description, imageUrl } = event;
  const constants = useConstants();
  const isMobile = constants.isMobile;
  const formattedDate = dateTime
    ? new Date(dateTime).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "";
  const height = isMobile ? constants.eventCardSize : 400;
  const width = isMobile ? 300 : "60%";
  const handleCardClick = () => {
    const options = "noopener,noreferrer";
    window.open(link, "_blank", options);
  };
  const ticketsLeft = event["spots"] - event["spotsTaken"];
  const ticketsLabel =
    ticketsLeft > 0
      ? event["spotsTaken"] + " Going. " + ticketsLeft + " Left."
      : "Sold Out.";
  return (
    <Card
      sx={{
        minWidth: width,
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
        marginBottom: 2,
      }}
      style={{ borderRadius: 10 }}
      variant="outlined"
      onClick={handleCardClick}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flex: 1,
          }}
        >
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: 14, color: "text.secondary" }}
              gutterBottom
            >
              {formattedDate}
            </Typography>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{
                fontWeight: "bold",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "grey",
              }}
            >
              <LocationOnIcon
                sx={{ marginRight: 1, verticalAlign: "middle" }}
              />
              <Typography
                sx={{ fontSize: 16, verticalAlign: "middle" }}
                gutterBottom
                noWrap
              >
                {location}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "grey",
              }}
            >
              <LocalActivityIcon
                sx={{ marginRight: 1, verticalAlign: "middle" }}
              />
              <Typography
                sx={{ fontSize: 16, verticalAlign: "middle" }}
                gutterBottom
                noWrap
              >
                {ticketsLabel}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {event.hosts.map((host, index) => (
                <Tooltip key={index} title={host.name} arrow>
                  <Avatar
                    src={host.imageUrl}
                    alt={host.name}
                    sx={{
                      width: 40,
                      height: 40,
                      border: "2px solid white",
                      marginRight: 1,
                    }}
                  />
                </Tooltip>
              ))}
            </Box>
          </Box>
          {!isMobile && imageUrl && (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                style={{
                  borderRadius: 20,
                  maxHeight: height,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
        </Box>
        {!isMobile && (
          <Box sx={{ marginTop: 2 }}>
            <Typography
              sx={{
                mb: 1.5,
                padding: 1,
                color: "text.primary",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <ReactMarkdown>{description}</ReactMarkdown>
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;
