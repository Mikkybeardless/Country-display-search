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
    <div className=' md:mx-20 mx-6 md:mt-[5rem] text-veryDarkBlue  md:w-full mt-5 dark:text-white '>
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
              <strong> Native name:</strong> {countryDetail.name.common}
            </h1>
            <p>
              <strong> Population:</strong>
              <span className='ml-1'>
                {countryDetail.population.toLocaleString()}
              </span>
            </p>
            <p>
              <strong>Region: </strong> <span>{countryDetail.region} </span>
            </p>
            <p>
              <strong>Subregion:</strong>{" "}
              <span>{countryDetail.subregion} </span>
            </p>
            <p className='mb-1'>
              <strong>Capital: </strong>
              <span>{countryDetail.capital}</span>
            </p>
          </div>
          <div className='mt-16 shadow-sm '>
            <p>
              <strong>Top level Domain:</strong>{" "}
              <span>{countryDetail.tld} </span>
            </p>
            <p>
              <strong>Currencies:</strong>
              {/* {new Intl.ListFormat(undefined, {
                style: "long",
                type: "conjuction",
              }).format(
                Object.values(countryDetail.currencies).map((c) => c.name)
              )} */}
            </p>
            {/* <p>
              Languages: <span>{countryDetail.languages[0]} </span>
            </p> */}
          </div>
          {countryDetail.borders && (
            <div>
              <h2 className='mb-3 font-bold'>Border Countries:</h2>

              <div className='flex gap-4'>
                <p className='  px-10 py-1 bg-Mwhite dark:bg-darkBlue'>
                  {countryDetail.borders[0]}
                </p>
                <p className='bg-Mwhite  px-10 py-1 dark:bg-darkBlue'>
                  {countryDetail.borders[1]}
                </p>
                <p className='bg-Mwhite  px-10 py-1 dark:bg-darkBlue'>
                  {countryDetail.borders[2]}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
