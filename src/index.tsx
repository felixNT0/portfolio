import posthog from "posthog-js";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import AppContextProvider from "./contexts/useAppContext";
import "./index.css";

posthog.init(process.env.REACT_APP_POSTHOG_KEY || "YOUR_POSTHOG_API_KEY", {
  api_host: process.env.REACT_APP_POSTHOG_HOST || "https://us.i.posthog.com",
  person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <ErrorBoundary>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </ErrorBoundary>,
);

// Service Worker registration disabled for development stability
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/service-worker.js").catch(() => {});
//   });
// }
