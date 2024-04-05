import bodyParser from "body-parser";
import cors from "cors";
import { API, APIMethods, APIPaths } from "domain/api";
import { User } from "domain/user";
import { createUserEndpoint } from "endpoints/user/createUser";
import express, { Express, Request, Response } from "express";

const corsOptions = {
  origin: "http://localhost:8081", // or the specific domain of your React Native app
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

type EndpointMapType = {
  [Prop in keyof API]: (
    input: API[Prop]["inputType"]
  ) => Promise<API[Prop]["responseType"]>;
};

const endpointMap: EndpointMapType = {
  createUser: createUserEndpoint
};

// Initialize routes
for (let key in endpointMap) {
  const endpoint = APIPaths[key];
  const method = APIMethods[key].toLowerCase();
  app[method](endpoint, (req: Request, res: Response) => {
    const inputData = req.body;
    const response = endpointMap[key](inputData);
    res.status(200).json(response);
  });
}

// Start server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  // await DB.authenticate();
  // await UserSchema.sync({ force: true }); // Using 'force: false' to prevent data loss by not dropping tables
  // await DB.sync();
  console.log("Database Connection has been established successfully.");
});
