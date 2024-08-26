import { Link } from 'react-router-dom';

interface RecipeCardDetailedProps {
  id: number;
  name: string;
  score: number;
  readyTime: number;
  serveAmount: number;
  imagePath: string;
}

interface RecipeCardMinimalProps {
  id: number;
  name: string;
  imagePath: string;
}

export const RecipeCardDetailed = ({
  name,
  score,
  readyTime,
  serveAmount,
  imagePath,
  id,
}: RecipeCardDetailedProps) => {
  return (
    <Link
      to={`/recipe/${id}`}
      className='flex flex-col overflow-hidden rounded-sm text-left text-white shadow-sm shadow-black-100 sm:flex-row'
    >
      <div className='h-48 w-full lg:w-1/3'>
        <img className='h-full w-full object-cover' src={imagePath} alt='' />
      </div>
      <div className='flex w-full flex-col justify-center gap-4 bg-black-950 p-4 md:p-8'>
        <p className='text-xl font-bold hover:text-tomato-300 lg:text-2xl'>
          {name}
        </p>
        <div className='flex flex-row gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>Score</p>
            <p className='font-bold'>{score}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>Ready In</p>
            <p className='font-bold'>{readyTime}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>Serves</p>
            <p className='font-bold'>{serveAmount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const RecipeCardMinimal = ({
  id,
  name,
  imagePath,
}: RecipeCardMinimalProps) => {
  return (
    <Link
      to={`/recipe/${id}`}
      className='flex h-full flex-col overflow-hidden rounded-sm bg-black-950 text-left text-white shadow-sm shadow-black-100'
    >
      <div className='h-48 w-full'>
        <img className='h-full w-full object-cover' src={imagePath} alt='' />
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <p className='font-bold hover:text-tomato-300'>{name}</p>
      </div>
    </Link>
  );
};
