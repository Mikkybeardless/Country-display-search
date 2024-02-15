/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent,} from "react";
import { Regions } from "../Types";

type Onselect = "africa"| "america"| "asia"| "europe" | 'oceania' | string;


const FilterCountry = ({ onSelect }:any) => {
  const handleSelect = (e:ChangeEvent<HTMLSelectElement>) => {
    const regionName:Onselect = e.target.value;
    onSelect(regionName);
  };
  const regions:Regions = [
    { dir: "africa", place: "Africa" },
    { dir: "america", place: "America" },
    { dir: "asia", place: "Asia" },
    { dir: "europe", place: "Europe" },
    { dir: "oceania", place: "Oceania" },
  ];
 
  return (
    <select
      className='flex flex-col   py-[12px] px-[25] 
            outline-none bg-Mwhite dark:bg-darkBlue pl-4
            ml-auto mr-8 mt-3 w-[150px] h-fit md:top-0  top-16 left-3 hover:cursor-pointer items-center text-[14px] text-veryDarkBlue dark:text-white text-xs
      p-2 rounded-sm'
      onChange={handleSelect}
    >
      <option className='hidden'>Filter by region</option>
      {regions.map((region, index) => (
        <option key={index} value={`${region.dir}`}>{region.place}</option>
      ))}
    </select>)
};

export default FilterCountry;
