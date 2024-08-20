import { Link } from 'react-router-dom';

import logo from '/logo.svg';
import { NavigationMenu } from './NavigationMenu';
import { SearchInput } from './SearchInput';

export const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-50 flex flex-row items-center justify-between bg-black-950 p-4'>
        <Link to='/'>
          <img className='h-5' src={logo} alt='' />
        </Link>

        <div className='flex flex-row gap-4'>
          <SearchInput />
          <NavigationMenu />
        </div>
      </header>
    </>
  );
};
