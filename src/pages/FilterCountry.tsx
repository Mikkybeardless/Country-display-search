const FilterCountry = ({ onSelect }) => {
  const handleSelect = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };
  return (
    <select
      className='flex flex-col   py-[10px] px-[25] 
            outline-none bg-Mwhite dark:bg-darkBlue pl-4
            ml-auto mr-8 mt-3 w-[150px] h-fit md:top-0  top-16 left-3 cursor-pointer items-center text-veryDarkBlue dark:text-white text-xs
      p-2 rounded-sm'
      onChange={handleSelect}
    >
      <option>Filter by region</option>
      <option value='afica'>Africa</option>
      <option value='america'>America</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </select>
  );
};

export default FilterCountry;
