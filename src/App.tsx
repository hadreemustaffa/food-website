import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Navigate,
  Route,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import { Collection } from './pages/Collection';
import { Search } from './pages/Search';

export function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);

  return (
    <div className='col-span-full m-auto flex w-fit flex-col gap-4 text-left'>
      <h1>Oops! There seem to be an error while fetching the data!</h1>
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
        element={<Explore />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path='/recipe/:recipeId'
        element={<Recipe />}
        errorElement={<ErrorBoundary />}
      />
      <Route path='/collection' element={<Collection />} />
      <Route
        path='/search?q=:query'
        element={<Search />}
        errorElement={<ErrorBoundary />}
      />
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<Navigate to='/404' replace />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
