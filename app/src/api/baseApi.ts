import { API, EndpointDefinition, apiConfig } from "./endpoints";

export async function api<K extends keyof API>(
  key: K,
  params: API[K] extends EndpointDefinition<infer RequestType, any>
    ? RequestType
    : never
): Promise<
  API[K] extends EndpointDefinition<any, infer ResponseType>
    ? ResponseType
    : never
> {
  const baseUrl = "http://localhost:3000";
  const configItem = apiConfig[key];

  let url = baseUrl + configItem.endpoint;
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const config: RequestInit = {
    method: configItem.method,
    headers,
  };

  // Dynamically replace path parameters or set the request body
  if (configItem.method === "GET" || configItem.method === "DELETE") {
    url = Object.keys(params).reduce(
      (currentUrl, param) =>
        currentUrl.replace(`:${param}`, encodeURIComponent(params[param])),
      configItem.endpoint
    );
    url = baseUrl + url;
  } else {
    config.body = JSON.stringify(params);
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}
