import { User, UserInfo } from "./user";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface EndpointDefinition<RequestType, ResponseType> {
  endpoint: string;
  method: RequestMethod;
  inputType?: RequestType; // Optional, for documentation and type-checking purpose
  responseType?: ResponseType; // Optional, for documentation and type-checking purpose
}

export interface API {
  createUser: {
    inputType: User;
    responseType: UserInfo;
  };
  // Define other endpoints here
}

export const APIPaths: Record<keyof API, string> = {
  createUser: "/api/users",
};

export const APIMethods: Record<keyof API, RequestMethod> = {
	createUser: "POST"
}