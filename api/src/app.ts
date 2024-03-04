import bodyParser from "body-parser";
import express, { Express } from "express";
import { DB } from "./db/connect";
import { checkInUserEndpoint } from "./endpoints/event/checkinUser";
import { createEventEndpoint } from "./endpoints/event/createEvent";
import { getEventsEndpoint } from "./endpoints/event/getEvents";
import { registerForEventEndpoint } from "./endpoints/event/registerForEvent";
import { createUserEndpoint } from "./endpoints/user/createUser";
import { loginUserEndpoint } from "./endpoints/user/loginUser";

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.post("/api/users", createUserEndpoint);
app.post("/api/auth/login", loginUserEndpoint);
app.post("/api/events", createEventEndpoint);
app.get("/api/events", getEventsEndpoint);
app.post("/api/events/:eventId/registrations", registerForEventEndpoint);
app.get("/api/events/:eventId/checkin/:userId", checkInUserEndpoint);

// Start server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await DB.authenticate();
  console.log("Database Connection has been established successfully.");
  await DB.sync();
});
