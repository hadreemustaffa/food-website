import { Link } from 'react-router-dom';

import logo from '/logo.svg';
import { NavigationMenu } from './NavigationMenu';
import { SearchInput } from './SearchInput';

export const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-50 bg-black-950'>
        <div className='m-auto flex max-w-7xl flex-row items-center justify-between p-4 sm:px-8'>
          <Link to='/'>
            <img className='h-8' src={logo} alt='' />
          </Link>

          <div className='flex flex-row gap-4'>
            <SearchInput />
            <NavigationMenu />
          </div>
        </div>
      </header>
    </>
  );
};
