import WarningIcon from '@mui/icons-material/Warning';
import Link from 'next/link';
export default function notFound() {
  return <div className="flex w-full h-[90vh] justify-center items-center text-2xl text-white">
    <WarningIcon className='text-yellow-300' />
    <span className='ml-2'>Page not found,{" "}<Link href={"/"} className='text-primary-active'>Click here to Go to homepage</Link></span>
  </div>;
}
