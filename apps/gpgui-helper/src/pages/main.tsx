import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { premiumTheme } from "../theme";
import App from "../components/App/App";

const rootApp = createRoot(document.getElementById('root') as HTMLElement);

rootApp.render(
  <ThemeProvider theme={premiumTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
