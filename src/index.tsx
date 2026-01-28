import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import AppContextProvider from "./contexts/useAppContext";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <ErrorBoundary>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ErrorBoundary>
);

// Service Worker registration disabled for development stability
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/service-worker.js").catch(() => {});
//   });
// }
