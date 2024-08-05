import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon } from './Buttons';
import { RecipeCardWithButton } from './RecipeCard';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

export const RandomRecipe = () => {
  const detail = {
    name: 'Tomato Pizza',
    score: 95,
    readyTime: '15m',
    serveAmount: 3,
    calorieAmount: 700,
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Random</h2>
      <div className="flex flex-col gap-4">
        <RecipeCardWithButton
          name={detail.name}
          score={detail.score}
          readyTime={detail.readyTime}
          serveAmount={detail.serveAmount}
          calorieAmount={detail.calorieAmount}
        >
          <ButtonIcon onClick={() => alert('clicked')}>
            <FontAwesomeIcon
              icon={faArrowsRotate}
              className="text-tomato-200"
            />
          </ButtonIcon>
        </RecipeCardWithButton>
      </div>
    </div>
  );
};
