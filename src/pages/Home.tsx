import { useEffect, useState } from "react";
import { ApiUrl } from "../Utility/Api";
import Nav from "../components/Nav";
import FilterCountry from "./FilterCountry";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${ApiUrl}/all`);
      if (!res.ok) throw new Error("something went wrong!");
      const data = await res.json();
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  const getCountryByName = async (countryName: string) => {
    try {
      const res = await fetch(`${ApiUrl}/name/${countryName}`);
      if (!res.ok) throw new Error("Country not found!");
      const data = await res.json();
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (countryRegion: string) => {
    try {
      const res = await fetch(`${ApiUrl}/region/${countryRegion}`);
      if (!res.ok) throw new Error("Error fetching country");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div>
      <div className='flex items-center relative '>
        <Nav onSearch={getCountryByName} />
        <FilterCountry onSelect={getCountryByRegion} />
      </div>

      <div
        className='my-10 mx-auto w-full md:w-[90%] grid grid-cols-1 sm:grid-cols-2 sm:w-4/5 md:grid-cols-3
       lg:grid-cols-4 gap-20 text-veryDarkBlue dark:text-white '
      >
        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}
        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div
              className='w-fit items-center h-[250px] md:h-[320px] content-center shadow-lg   mx-auto bg-Mwhite  dark:bg-darkBlue rounded-lg'
              key={country.flags.png}
            >
              <img
                className=' hover:scale-105 transition-all ease-out duration-300 w-[250px] h-[120px] md:w-[370px] md:h-[160px] object-cover rounded-t-md'
                src={country.flags.png}
                alt=''
              />

              <div className='ml-4 mt-3 mb-2 md:ml-5 md:mt-4 md:mb-3'>
                <h1 className='text-lg font-bold mb-1 md:mb-3 '>
                  {country.name.common}
                </h1>
                <p>
                  Population:
                  <span>
                    {" "}
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </p>
                <p>
                  Region: <span>{country.region} </span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
