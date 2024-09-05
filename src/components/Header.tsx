import { Link } from 'react-router-dom';

import logo from '/logo.svg';
import { NavigationMenu } from './NavigationMenu';

export const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-50 bg-black-950'>
        <div className='relative m-auto flex max-w-7xl flex-row flex-wrap items-center justify-between gap-4 p-4 sm:px-8'>
          <Link to='/' aria-label='Homepage'>
            <img width={96} height={32} src={logo} alt='site logo' />
          </Link>

          <NavigationMenu />
        </div>
      </header>
    </>
  );
};
