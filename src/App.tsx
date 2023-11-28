import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ThemeContext } from "./components/Themecontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [theme, setTheme] = useState("dark");
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
