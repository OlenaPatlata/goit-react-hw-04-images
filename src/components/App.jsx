import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import BigFoto from 'pages/BigFoto';
import PageNotFound from 'pages/PageNotFound';
import StartPage from 'pages/StartPage';

const LazyCollection = lazy(() => {
  return import('./Collection/Collection');
});

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<StartPage />}>
          <Route
            path="/images/search/:searchQuery"
            element={<LazyCollection />}
          />
        </Route>
        <Route path="/images/search/:searchQuery/:id" element={<BigFoto />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
