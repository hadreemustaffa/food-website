export const RecipeDisplayCardDetailed = () => {
  return (
    <div className="flex flex-col rounded-sm overflow-hidden">
      <img className="h-56" src="./hero-image-mobile.jpg" alt="" />
      <div className="flex flex-col bg-black-950 gap-2 p-4">
        <h3 className="text-3xl font-bold">Food Title Here</h3>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Score</p>
            <p>92</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Ready In</p>
            <p>20m</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Serves</p>
            <p>4</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-black-100">Calorie</p>
            <p>286</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecipeDisplayCardMinimal = () => {
  return (
    <div className="flex flex-col rounded-sm overflow-hidden">
      <img className="h-56" src="./hero-image-mobile.jpg" alt="" />
      <div className="flex flex-col bg-black-950 gap-2 p-4">
        <h3 className="text-3xl font-bold">Food Title Here</h3>
      </div>
    </div>
  );
};
