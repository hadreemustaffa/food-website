import {
  createBrowserRouter,
  createRoutesFromElements,
  isRouteErrorResponse,
  Link,
  Navigate,
  Route,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { Home } from './pages/Home/Home';
import { Explore } from './pages/Explore/Explore';
import { Recipe } from './pages/Recipe/Recipe';
import { NotFound } from './pages/NotFound/NotFound';
import { Layout } from './components/Layout/Layout';
import { Collection } from './pages/Collection/Collection';
import { Search, loader as searchLoader } from './pages/Explore/Search/Search';
import {
  CardList,
  loader as cardListLoader,
} from './pages/Explore/CardList/CardList';

export function ErrorBoundary() {
  let error = useRouteError();
  console.log(error);

  return isRouteErrorResponse(error) ? (
    <div className='col-span-full m-auto flex w-fit flex-col gap-4 text-left'>
      {error.status} {error.statusText}
      <Link to='/'>Back to Homepage</Link>
    </div>
  ) : (
    <div className='col-span-full m-auto flex w-fit flex-col gap-4 text-left'>
      {error.response.status === 402 ? (
        <h1>
          It looks like the daily quota has been reached, please try again
          tomorrow
        </h1>
      ) : (
        <>
          <h1>Oops! There seem to be an error while fetching the data!</h1>
        </>
      )}
      <Link to='/'>Back to Homepage</Link>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} errorElement={<ErrorBoundary />} />

      <Route
        path='/explore'
        errorElement={<ErrorBoundary />}
        element={<Explore />}
      >
        <Route
          index
          loader={cardListLoader}
          errorElement={<ErrorBoundary />}
          element={<CardList />}
        />
        <Route
          path='/explore/search'
          loader={searchLoader}
          errorElement={<ErrorBoundary />}
          element={<Search />}
        />
      </Route>

      <Route
        path='/recipe/:recipeId'
        errorElement={<ErrorBoundary />}
        element={<Recipe />}
      />

      <Route path='/collection' element={<Collection />} />

      <Route path='/404' element={<NotFound />} />

      <Route path='*' element={<Navigate to='/404' replace />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <SpeedInsights />
    </>
  );
}

export default App;
