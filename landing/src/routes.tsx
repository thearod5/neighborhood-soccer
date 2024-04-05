// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./views/AboutUs";
import Error from "./views/Error";
import EventsPage from "./views/Events";
import FAQPage from "./views/FAQ";
import Landing from "./views/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        index: true,
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
    ],
  },
]);
export default router;
