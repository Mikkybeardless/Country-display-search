import { useContext, useEffect, useState } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi2";
import { ThemeContext } from "./Themecontext";
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [themeText, setThemeText] = useState("Dark Mode");

  useEffect(() => {
    console.log("theme", theme);
  }, []);

  return (
    <div className='flex items-center bg-white outline-2 p-5 dark:bg-darkBlue text-veryDarkBlue dark:text-white h-14 z-10 '>
      <div className='ml-3 text-xl'>Where in the world?</div>
      <div className='ml-auto mt-0 flex items-center p-5 gap-2'>
        {theme == "light" ? (
          <HiOutlineMoon
            onClick={() => {
              setTheme("dark");
              setThemeText("Dark Mode");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiMoon
            onClick={() => {
              setTheme("light");
              setThemeText("Light Mode");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
        <p className='text-xl'>{themeText}</p>
      </div>
    </div>
  );
}

export default Header;
