// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./views/AboutUs";
import EventsPage from "./views/Events";
import FAQPage from "./views/FAQ";

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
