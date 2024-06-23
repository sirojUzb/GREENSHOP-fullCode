import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

const authStore = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider store={authStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
// 2nd lesson's 1st video 8th minute
