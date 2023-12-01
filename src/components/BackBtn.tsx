import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

const BackBtn = () => {
  return (
    <div className='flex items-center justify-center shadow-sm bg-Mwhite dark:bg-darkBlue w-fit md  mb-3'>
      <HiArrowLongLeft className='ml-3' />
      <button className='w-[100px] bg-Mwhite dark:bg-darkBlue h-10 '>
        <Link to='/'>Back</Link>
      </button>
    </div>
  );
};

export default BackBtn;
