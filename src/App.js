// import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import { themeDark, themeLight } from "./theme";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import LoginUser from "./pages/auth/LoginUser";
import './App.css'
import RegisterUser from "./pages/auth/RegisterUser";

function App() {
  const [themeMode, setThemeMode] = useState(true);
  return (
    <ThemeProvider theme={themeMode ? themeLight : themeDark}>
      <CssBaseline />
      <Router>
        <Navigation setThemeMode={setThemeMode} currentTheme={themeMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/register" element={<RegisterUser />} />
          </Routes>
        </Navigation>
      </Router>
    </ThemeProvider>
  );
}

export default App;
