const CountryDetail = () => {
  fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Data:", data);
    });

  return <div>Country Details</div>;
};

export default CountryDetail;
