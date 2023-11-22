import { useState, useEffect } from "react";

const Oceania = () => {
  const [ocean, setOcean] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/ocean")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setOcean(data);
      });
  }, []);
  return (
    <div className='my-10 mx-auto w-full md:w-[90%] grid grid-cols-1 sm:grid-cols-2 sm:w-4/5 md:grid-cols-3 lg:grid-cols-4 gap-20 text-veryDarkBlue dark:text-white '>
      {ocean.length
        ? ocean.map((country) => (
            <div
              className='w-fit items-center h-[250px] md:h-[300px] content-center  mx-auto bg-Mwhite  dark:bg-darkBlue rounded-lg'
              key={country.flags.png}
            >
              <img
                className=' w-[250px] h-[120px] md:w-[370px] md:h-[160px] object-cover rounded-t-md'
                src={country.flags.png}
                alt=''
              />
              <div className='ml-4 mt-3 mb-2 md:ml-5 md:mt-4 md:mb-3'>
                <h1 className='text-lg font-bold mb-1 md:mb-3 '>
                  {country.name.common}
                </h1>
                <p>
                  Population: <span>{country.population}</span>
                </p>
                <p>
                  Region: <span>{country.region} </span>
                </p>
                <p>
                  Capital: <span>{country.capital[0]}</span>{" "}
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Oceania;
