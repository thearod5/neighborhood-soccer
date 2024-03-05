import { User, UserInfo } from "domain/user";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface EndpointDefinition<RequestType, ResponseType> {
  endpoint: string;
  method: RequestMethod;
  requestType?: RequestType; // Optional, for documentation and type-checking purpose
  responseType?: ResponseType; // Optional, for documentation and type-checking purpose
}

export interface API {
  hasUserName: EndpointDefinition<{ username: string }, { hasUser: boolean }>;
  createUser: EndpointDefinition<User, UserInfo>;
  // Define other endpoints here
}

// Define the API configuration according to the contract
export const apiConfig: API = {
  hasUserName: {
    endpoint: "/api/users/:username",
    method: "GET",
  },
  createUser: {
    endpoint: "/api/users",
    method: "POST",
  },
};
