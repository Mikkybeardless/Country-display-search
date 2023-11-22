import { IoIosSearch } from "react-icons/io";
import { HiChevronDown } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [countryInfo, setCountryInfo] = useState();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCountryName(e.target.value);
      fetchCountryInfo(countryName);
      <Redirect to='/Countrydetails' />;
    }
  };
  const fetchCountryInfo = (n) => {
    fetch(`https://restcountries.com/v3.1/name/${n}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        setCountryInfo(data);
      });
  };

  return (
    <div className='flex items-center relative '>
      <div className='flex items-center p-2 w-[100%] h-14 md:w-[50%] lg:w-[45rem] ml-3 mr-3 md:ml-8  bg-white dark:bg-darkBlue   rounded-sm mt-3 gap-2'>
        <IoIosSearch className='dark:text-white text-veryDarkBlue' />
        <input
          onChange={(e) => {
            setCountryName(e.target.value);
            console.log(countryName);
          }}
          onKeyDown={handleKeyDown}
          className='outline-none text-veryDarkBlue bg-white dark:bg-darkBlue  text-xl w-full md:w-[10em] lg:w-[10em]  h-fit dark:text-white'
          type='text'
          placeholder='Search for a country...'
          value={countryName}
        />
      </div>

      <div
        className='ml-auto mr-8 mt-3 w-fit h-fit md:relative absolute md:top-0  top-16 left-3 cursor-pointer gap-3 items-center text-veryDarkBlue bg-Mwhite dark:bg-darkBlue dark:text-white text-xs
      p-2 rounded-sm'
      >
        <button
          onClick={() => {
            setDropDown(!dropDown);
          }}
          className='flex gap-5 h-10 items-center pl-2 text-lg'
        >
          Filter by region
          <HiChevronDown />
        </button>
        {dropDown && (
          <div className='flex flex-col gap-3 absolute top-16  right-0 py-3 rounded-sm bg-Mwhite dark:bg-darkBlue w-full pl-4'>
            <nav>
              <ul>
                <li>
                  <Link to='/africa'>Africa</Link>
                </li>
                <li>
                  <Link to='/america'>America</Link>
                </li>
                <li>
                  <Link to='/asia'>Asia</Link>
                </li>
                <li>
                  <Link to='/europe'>Europe</Link>
                </li>
                <li>
                  <Link to='/oceania'>Oceania</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
