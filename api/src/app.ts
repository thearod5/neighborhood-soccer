import bodyParser from "body-parser";
import cors from "cors";
import { DB } from "db/connect";
import { UserSchema } from "db/userSchema";
import { checkInUserEndpoint } from "endpoints/event/checkinUser";
import { createEventEndpoint } from "endpoints/event/createEvent";
import { getEventsEndpoint } from "endpoints/event/getEvents";
import { registerForEventEndpoint } from "endpoints/event/registerForEvent";
import { createUserEndpoint } from "endpoints/user/createUser";
import { hasUserEndpoint } from "endpoints/user/hasUser";
import { loginUserEndpoint } from "endpoints/user/loginUser";
import express, { Express } from "express";

const corsOptions = {
  origin: "http://localhost:8081", // or the specific domain of your React Native app
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Endpoints
app.post("/api/users", createUserEndpoint);
app.get("/api/users/:username", hasUserEndpoint);
app.post("/api/auth/login", loginUserEndpoint);
app.post("/api/events", createEventEndpoint);
app.get("/api/events", getEventsEndpoint);
app.post("/api/events/:eventId/registrations", registerForEventEndpoint);
app.get("/api/events/:eventId/checkin/:userId", checkInUserEndpoint);

// Start server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await DB.authenticate();
  await UserSchema.sync({ force: true }); // Using 'force: false' to prevent data loss by not dropping tables
  await DB.sync();
  console.log("Database Connection has been established successfully.");
});
