import { Link } from 'react-router-dom';
import logo from '/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-black-950 flex flex-row px-4 py-4 gap-4 items-start justify-between">
      <div className="h-full">
        <img src={logo} alt="" />
      </div>

      <div className="flex flex-col gap-4">
        <p className="">Lapoar</p>

        <div className="flex flex-col gap-4">
          <Link to={'/'}>Home</Link>
          <Link to={'/explore'}>Explore</Link>
          <Link to={'/collection'}>Collection</Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="">API</p>

        <div className="flex flex-col gap-4">
          <a href="https://spoonacular.com/food-api">spoonacular</a>
        </div>
      </div>
    </footer>
  );
};
