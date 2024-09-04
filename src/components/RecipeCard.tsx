import { Link } from 'react-router-dom';
import { RecipeCardImage } from './RecipeCardImage';

import fallbackImgUrl from '../../public/image-fallback.svg';
interface RecipeCardDetailedProps {
  id: number;
  title: string;
  score: number;
  readyTime: number;
  serveAmount: number;
  imagePath: string;
}

interface RecipeCardMinimalProps {
  id: number;
  title: string;
  imagePath: string;
}

export const RecipeCardDetailed = ({
  title,
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
        <RecipeCardImage
          src={imagePath}
          fallbackSrc={fallbackImgUrl}
          alt={title.toLowerCase()}
        />
      </div>

      <div className='flex w-full flex-col justify-center gap-4 bg-black-950 p-4 md:p-8'>
        <p className='text-xl font-bold hover:text-tomato-300 lg:text-2xl'>
          {title}
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
  title,
  imagePath,
}: RecipeCardMinimalProps) => {
  return (
    <Link
      to={`/recipe/${id}`}
      className='flex h-full flex-row overflow-hidden rounded-sm bg-black-950 text-left text-white shadow-sm shadow-black-100 sm:flex-col'
    >
      <div className='basis-1/2'>
        <RecipeCardImage
          src={imagePath}
          fallbackSrc={fallbackImgUrl}
          alt={title}
        />
      </div>

      <div className='flex basis-1/2 flex-col gap-2 p-4'>
        <p className='font-bold hover:text-tomato-300'>{title}</p>
      </div>
    </Link>
  );
};
