/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect } from "react";
import { ThemeContext } from "./context/Themecontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [theme, setTheme] = React.useState<any>("dark");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div
          className={`${theme} ${
            theme == "dark" && "bg-VDarkBlue"
          } min-h-[100vh]`}
        >
          <Header />

          <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NoPage />} />
            <Route path='/country/:countryName' element={<CountryDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
