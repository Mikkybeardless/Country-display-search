import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

const BackBtn = () => {
  return (
    <div className='flex items-center justify-center bg-Mwhite dark:bg-darkBlue w-fit md  mb-3'>
      <HiArrowLongLeft className='ml-3' />
      <button className='w-[100px] bg-darkBlue h-10 shadow-md'>
        <Link to='/'>Back</Link>
      </button>
    </div>
  );
};

export default BackBtn;
