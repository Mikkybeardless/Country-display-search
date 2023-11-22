import { useContext, useEffect } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi2";
import { ThemeContext } from "./Themecontext";
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, []);

  return (
    <div className='flex items-center bg-white outline-2 p-5 dark:bg-darkBlue text-veryDarkBlue dark:text-white h-14 '>
      <div className='ml-3 text-xl'>Where in the world?</div>
      <div className='ml-auto mt-0 flex items-center p-5 gap-2'>
        {theme == "light" ? (
          <HiOutlineMoon
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiMoon
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
        <p className='text-xl'>Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
