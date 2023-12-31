/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";
import { HiMoon } from "react-icons/hi2";
import { RiSunLine } from "react-icons/ri";
import { ThemeContext } from "../context/Themecontext";
function Header() {
  const { theme, setTheme }: any = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, []);

  return (
    <div className='flex items-center bg-white outline-2 p-5 dark:bg-darkBlue text-veryDarkBlue dark:text-white h-14 z-10 shadow-sm '>
      <div className='ml-3 md:text-xl text-base '>Where in the world?</div>
      <div className='ml-auto mt-0  p-5'>
        {theme == "light" ? (
          <div className='flex items-center gap-1'>
            <HiMoon
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
            <p className='text-base md:text-xl'>Dark Mode</p>
          </div>
        ) : (
          <div className='dark:text-yellow-300 flex items-center gap-1'>
            <RiSunLine
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
            <p className='text-base text-Mwhite md:text-xl'>Light Mode</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
