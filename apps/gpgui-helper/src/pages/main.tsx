import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { premiumTheme } from "../theme";
import App from "../components/App/App";

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Unable to mount GPConnect Premium.');
}

const rootApp = createRoot(rootElement);

rootApp.render(
  <ThemeProvider theme={premiumTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
