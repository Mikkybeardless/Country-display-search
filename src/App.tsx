import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ThemeContext } from "./components/Themecontext";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Africa from "./pages/Africa";
import America from "./pages/America";
import Asia from "./pages/Asia";
import Europe from "./pages/Europe";
import Oceania from "./pages/Oceania";
import NoPage from "./pages/NoPage";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    localStorage.getItem("theme"), [];
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div
          className={`${theme} ${
            theme == "dark" && "bg-VDarkBlue"
          } min-h-[100vh]`}
        >
          <Header />
          <Nav countryInfo={(countryInfo) => countryInfo} />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/africa' element={<Africa />} />
            <Route path='/america' element={<America />} />
            <Route path='/asia' element={<Asia />} />
            <Route path='/europe' element={<Europe />} />
            <Route path='/oceania' element={<Oceania />} />
            <Route path='*' element={<NoPage />} />
            <Route path='/countrydetails' element={<CountryDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
