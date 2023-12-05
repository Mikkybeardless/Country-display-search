/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../Utility/Api";
import BackBtn from "../components/BackBtn";
import { Country } from "../Types";

const CountryDetail = () => {
  const [country, setCountry] = React.useState<Country[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
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
      } catch (error: any) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className=' md:mx-16 mx-6 md:mt-[5rem] text-veryDarkBlue  md:w-full mt-5 dark:text-white '>
      <BackBtn />
      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && <h4>{error}</h4>}
      {country?.map((countryDetail) => (
        <div
          className='w-full items-center h-[250px] md:h-[320px] content-center md:flex md:items-center gap-20 md:gap-9   rounded-lg'
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
              <strong>Subregion:</strong>
              <span> {countryDetail.subregion} </span>
            </p>
            <p className='mb-1'>
              <strong>Capital: </strong>
              <span>{countryDetail.capital}</span>
            </p>
          </div>
          <div className='mt-16 shadow-sm '>
            <p>
              <strong>Top level Domain:</strong>
              <span>{countryDetail.tld} </span>
            </p>
            <p>
              <strong>Currencies:</strong>
            </p>
            <p>
              <strong>Languages:</strong>
              <span> {Object.values(countryDetail.languages).join(", ")} </span>
            </p>
          </div>

          <div>
            <h2 className='mb-3 font-bold'>Border Countries:</h2>
            {countryDetail.borders ? (
              <div className='flex gap-4'>
                {countryDetail.borders.map(
                  (border: any, index: number) =>
                    index < 3 && (
                      <p className='  px-10 py-1 bg-Mwhite dark:bg-darkBlue'>
                        {border}
                      </p>
                    )
                )}
              </div>
            ) : (
              <p>No border countries around this country</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
