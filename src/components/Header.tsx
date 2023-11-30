import { useContext, useEffect, useState } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi2";
import { RiSunLine } from "react-icons/ri";
import { ThemeContext } from "./Themecontext";
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [themeText, setThemeText] = useState("Switch Mode");

  useEffect(() => {
    console.log("theme", theme);
  }, []);

  return (
    <div className='flex items-center bg-white outline-2 p-5 dark:bg-darkBlue text-veryDarkBlue dark:text-white h-14 z-10 '>
      <div className='ml-3 md:text-xl text-base '>Where in the world?</div>
      <div className='ml-auto mt-0 flex items-center p-5 gap-2'>
        {theme == "light" ? (
          <HiMoon
            onClick={() => {
              setTheme("dark");
              setThemeText("Dark Mode");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <div className='dark:text-amber-200'>
            <RiSunLine
              onClick={() => {
                setTheme("light");
                setThemeText("Light Mode");
                localStorage.setItem("theme", "light");
              }}
            />
          </div>
        )}
        <p className='text-base md:text-xl'>{themeText}</p>
      </div>
    </div>
  );
}

export default Header;
