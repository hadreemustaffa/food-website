import { lazy } from 'react';
import { Link } from 'react-router-dom';

const LazySearchInput = lazy(
  () => import('@components/SearchInput/SearchInput')
);

export const NotFound = () => {
  return (
    <div className='col-span-full flex flex-col items-center justify-center gap-4'>
      <h1 className='font-sans text-5xl font-bold leading-none'>404</h1>
      <p className='font-semibold'>Sorry, we were unable to find that page</p>

      <LazySearchInput />

      <Link to='/'>Back to Homepage</Link>
    </div>
  );
};
