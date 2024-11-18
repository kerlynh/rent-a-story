import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App/App.tsx";
import ReactQueryProvider from "./providers/query.tsx";
import "./i18n";
import { Login } from "./pages/Login/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AuthProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </AuthProvider>
    </ReactQueryProvider>
  </StrictMode>
);
