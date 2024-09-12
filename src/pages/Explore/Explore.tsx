import { Outlet } from 'react-router-dom';
import SearchInput from '@components/SearchInput/SearchInput';

export const Explore = () => {
  return (
    <div className='col-span-full flex flex-col gap-6'>
      <h1 className='sr-only'>Explore</h1>

      <SearchInput />

      <Outlet />
    </div>
  );
};
