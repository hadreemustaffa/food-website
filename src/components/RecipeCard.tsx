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
    <div className="flex flex-col text-center rounded-sm overflow-hidden">
      <img className="h-56" src={imagePath} alt="" />
      <div className="flex flex-col items-center bg-black-950 gap-4 p-4">
        <Link
          to={`/recipe/${id}`}
          className="text-3xl hover:text-tomato-100 transition-colors"
        >
          {name}
        </Link>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base text-black-100">Score</p>
            <p className="text-2xl">{score}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base text-black-100">Ready In</p>
            <p className="text-2xl">{readyTime}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base text-black-100">Serves</p>
            <p className="text-2xl">{serveAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecipeCardMinimal = ({
  id,
  name,
  imagePath,
}: RecipeCardMinimalProps) => {
  return (
    <div className="flex flex-col text-center rounded-sm overflow-hidden">
      <img className="h-56" src={imagePath} alt="" />
      <div className="flex flex-col bg-black-950 gap-2 p-4">
        <Link
          to={`/recipe/${id}`}
          className="text-3xl hover:text-tomato-100 transition-colors"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};
