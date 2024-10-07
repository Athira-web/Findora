/*// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@/common/NotFound.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const HomePage = (await import("@/pages/home")).default; // Accessing the default export correctly
      return { Component: HomePage };
    },
  },
  
  {
    path: "*",
    element: <NotFound />,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}*/

// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@/common/NotFound.tsx"; // Import NotFound component
import { pageRoutes } from "./page-routes"; // Importing routes from page-routes.tsx

export const router = createBrowserRouter([
  ...pageRoutes, // Spread the routes defined in page-routes.tsx
  {
    path: "*",
    element: <NotFound />, // Fallback route for any unknown routes
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

