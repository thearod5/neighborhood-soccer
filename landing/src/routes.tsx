// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./views/aboutus";
import EventsPage from "./views/events";
import FAQPage from "./views/faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Uh oh, we made a mistake.</div>,
    children: [
      {
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
