import parse from 'html-react-parser';

import { Button } from '../../components/Button';
import { RecipeCardMinimal } from '../../components/RecipeCard';

export const Recipe = () => {
  return (
    <>
      <div className="flex flex-col gap-4 px-4 pt-6">
        <img src="/hero-image-mobile.jpg" alt="" />

        <div className="flex flex-col gap-4">
          <h1 className="font-sans font-bold text-5xl">
            Whole Wheat Spaghetti with Basil Avocado Pesto
          </h1>
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-row gap-4 justify-between">
              <div>
                <p className="text-base text-black-100">Score</p>
                <p className="text-xl">92</p>
              </div>
              <div className="pl-4 border-l border-tomato-200">
                <p className="text-base text-black-100">Ready In</p>
                <p className="text-xl">20m</p>
              </div>
              <div className="pl-4 border-l border-tomato-200">
                <p className="text-base text-black-100">Serves</p>
                <p className="text-xl">4</p>
              </div>
              <div className="pl-4 border-l border-tomato-200">
                <p className="text-base text-black-100">Calorie</p>
                <p className="text-xl">200</p>
              </div>
            </div>

            <Button variant="primary" value="Go to Recipe" />
          </div>

          <p>
            {parse(
              'Easy and Delicious Taco Soup is a Mexican recipe that serves 6. One serving contains <b>600 calories</b>, <b>38g of protein</b>, and <b>23g of fat</b>. For <b>$3.02 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. It is perfect for <b>Autumn</b>. Not a lot of people really liked this main course. 2 people found this recipe to be delicious and satisfying. This recipe from Foodista requires cilantro, tomatoes, cayenne pepper, and olives. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you\'re following a <b>gluten free</b> diet. Overall, this recipe earns a <b>solid spoonacular score of 63%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/easy-and-delicious-taco-soup-1367343">Easy and Delicious Taco Soup</a>, <a href="https://spoonacular.com/recipes/taco-tuesday-easy-taco-soup-1360217">Taco Tuesday: Easy Taco Soup</a>, and <a href="https://spoonacular.com/recipes/taco-tuesday-easy-taco-soup-486617">Taco Tuesday: Easy Taco Soup</a>.'
            )}
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-2xl">Nutrition</h2>

            <div className="flex flex-row flex-wrap gap-2">
              <div>
                <p>
                  <b>Fat: </b>
                  <span>50</span>
                </p>
                <p></p>
              </div>
              <div>
                <p>
                  <b>Cholesterol: </b>
                  <span>50</span>
                </p>
                <p></p>
              </div>
              <div>
                <p>
                  <b>Sodium: </b>
                  <span>50</span>
                </p>
                <p></p>
              </div>
              <div>
                <p>
                  <b>Carbohydrate: </b>
                  <span>50</span>
                </p>
                <p></p>
              </div>
              <div>
                <p>
                  <b>Protein: </b>
                  <span>50</span>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4">
        <h2 className="font-sans font-bold text-3xl">Ingredients</h2>
        <ul style={{ listStyle: 'inside' }} className="flex flex-col gap-2">
          <li>1 cup Fresh Basil (packed)</li>
          <li>1/2 Ripe Avocado</li>
          <li>2 cloves garlic</li>
          <li>1/4 cup Cashew Nuts</li>
          <li>3 tbsp Water</li>
          <li>1/4 tsp Sea Salt</li>
          <li>8 oz whole wheat spaghetti</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 px-4">
        <h2 className="font-sans font-bold text-3xl">Instructions</h2>
        <ol
          style={{ listStyleType: 'decimal', listStylePosition: 'inside' }}
          className="flex flex-col gap-2"
        >
          <li>
            Place the fresh basil, avocado, garlic, cashews, and sea salt into a
            food processor and blitz until everything is smooth, scraping down
            the sides occasionally.
          </li>
          <li>
            While the food processor is running, add in the water 1 tbsp at a
            time until you have a creamy pesto.
          </li>
          <li>Cook whole wheat spaghetti according to package instructions.</li>
          <li>
            Drain the pasta, toss with pesto, serve with a little extra fresh
            basil and Parmesan.
          </li>
        </ol>

        <Button variant="secondary" value="Save This Recipe" />
      </div>

      <div className="flex flex-col gap-4 px-4">
        <h2 className="font-sans font-bold text-3xl">Similar Recipe</h2>

        <div className="grid grid-cols-1 sm:grid grid-flow-row gap-6">
          <RecipeCardMinimal />
          <RecipeCardMinimal />
          <RecipeCardMinimal />
          <RecipeCardMinimal />
        </div>
      </div>
    </>
  );
};
