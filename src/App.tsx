import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import { Collection } from './pages/Collection';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/recipe/:recipeId" element={<Recipe />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
