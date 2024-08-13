import { Link } from 'react-router-dom';
import logo from '/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-black-950 flex flex-col px-4 py-8 gap-6 items-center">
      <img src={logo} alt="" />

      <div className="flex flex-col gap-2 items-center">
        <Link to={'/explore'}>Explore</Link>
      </div>
    </footer>
  );
};
