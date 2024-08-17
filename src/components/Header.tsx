import { Link } from 'react-router-dom';

import logo from '/logo.svg';
import { NavigationMenu } from './NavigationMenu';
import { Search } from './Search';

export const Header = () => {
  return (
    <>
      <header className="bg-black-950 flex flex-row items-center p-4 justify-between sticky top-0 z-50">
        <Link to="/">
          <img className="h-5" src={logo} alt="" />
        </Link>

        <div className="flex flex-row gap-4">
          <Search />
          <NavigationMenu />
        </div>
      </header>
    </>
  );
};
