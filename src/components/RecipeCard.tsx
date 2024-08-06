interface RecipeCardDetailedProps {
  name: string;
  score: number;
  readyTime: number;
  serveAmount: number;
  calorieAmount: number;
}

interface RecipeCardMinimalProps {
  name: string;
  imagePath: string;
}

export const RecipeCardDetailed = ({
  name,
  score,
  readyTime,
  serveAmount,
  calorieAmount,
}: RecipeCardDetailedProps) => {
  return (
    <>
      <img className="h-56" src="./hero-image-mobile.jpg" alt="" />
      <div className="flex flex-col bg-black-950 gap-2 p-4">
        <a href="#" className="text-3xl font-bold hover:underline">
          {name}
        </a>
        <div className="flex flex-row flex-wrap gap-4 justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Score</p>
            <p>{score}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Ready In</p>
            <p>{readyTime}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Serves</p>
            <p>{serveAmount}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Calorie</p>
            <p>{calorieAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const RecipeCardMinimal = ({
  name,
  imagePath,
}: RecipeCardMinimalProps) => {
  return (
    <div className="flex flex-col rounded-sm overflow-hidden">
      <img className="h-56" src={imagePath} alt="" />
      <div className="flex flex-col bg-black-950 gap-2 p-4">
        <a href="#" className="text-3xl font-bold hover:underline">
          {name}
        </a>
      </div>
    </div>
  );
};
