/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoIosSearch } from "react-icons/io";
import {  FormEvent, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Nav({ onSearch }: any) {
  const [countryName, setCountryName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(countryName);
  };
const handleClick = () =>{
  onSearch(countryName);
}
  return (
    
      <div className='flex items-center p-2 w-[100%] h-12 md:w-[50%] lg:w-[45rem] ml-3 mr-3 md:ml-8  bg-white dark:bg-darkBlue shadow-sm   rounded-sm mt-3 gap-2'>
        <IoIosSearch className='dark:text-white text-veryDarkBlue text-xl ' />
        <form onSubmit={handleSubmit} action=''>
          <input
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
            className='outline-none text-veryDarkBlue bg-white dark:bg-darkBlue  text-xl w-full lg:w-[10em]  h-fit dark:text-white'
            type='text'
            placeholder='Search for a country...'
            value={countryName}
          />
        </form>
        <button
          className='bg-Mwhite dark:bg-darkBlue ml-auto ' type="submit"
          onClick={handleClick}
        >
          <FaLongArrowAltRight className="text-darkBlue dark:text-Mwhite" />
        </button>
      </div>
    
  );
}

export default Nav;
