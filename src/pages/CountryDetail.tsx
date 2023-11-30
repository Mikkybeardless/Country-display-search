import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../Utility/Api";

import BackBtn from "../components/BackBtn";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${ApiUrl}/name/${countryName}`);
        if (!res.ok) throw new Error("Country not found");
        const data = await res.json();
        console.log(data);
        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className=' md:mx-20 mx-8 md:mt-[5rem] text-veryDarkBlue w-[20rem] md:w-full mt-5 dark:text-white '>
      <BackBtn />
      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && <h4>{error}</h4>}
      {country?.map((countryDetail, index) => (
        <div
          className='w-full items-center h-[250px] md:h-[320px] content-center md:flex md:items-center gap-20   rounded-lg'
          key={countryDetail.flags.png}
        >
          <img
            className=' w-full h-[15rem] md:w-[450px] md:h-[300px] object-cover '
            src={countryDetail.flags.png}
            alt=''
          />

          <div className='mt-[40px] shadow-sm'>
            <h1 className='text-lg font-bold mb-1 md:mb-3 '>
              Native name: {countryDetail.name.common}
            </h1>
            <p>
              Population:
              <span className='ml-1'>
                {new Intl.NumberFormat().format(countryDetail.population)}
              </span>
            </p>
            <p>
              Region: <span>{countryDetail.region} </span>
            </p>
            <p>
              Subregion: <span>{countryDetail.subregion} </span>
            </p>
            <p>
              Capital: <span>{countryDetail.capital}</span>
            </p>
          </div>
          <div className='mt-16 shadow-sm '>
            <p>
              Top level Domain: <span>{countryDetail.tld} </span>
            </p>
            <p>
              Currencies: <span>{countryDetail.currencies.name} </span>
            </p>
            {/* <p>
              Languages: <span>{countryDetail.languages} </span>
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
