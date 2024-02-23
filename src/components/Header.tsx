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
          <div  onClick={() => {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
          }} className='flex items-center cursor-pointer gap-1'>
            <HiMoon
             
            />
            <p className='text-base md:text-xl'>Dark Mode</p>
          </div>
        ) : (
          <div  onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }} className='dark:text-yellow-300 flex cursor-pointer items-center gap-1'>
            <RiSunLine
             
            />
            <p className='text-base text-Mwhite md:text-xl'>Light Mode</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
