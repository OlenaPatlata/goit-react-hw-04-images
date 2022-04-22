import { Switch, Redirect, Route } from 'react-router-dom';
import BigFoto from 'pages/BigFoto';
import PageNotFound from 'pages/PageNotFound';
import StartPage from 'pages/StartPage';

const App = () => {
  return (
    <Switch>
      <Route path="/images">
        <StartPage />
      </Route>
      <Route path="/images/search/:id">
        <BigFoto />
      </Route>
      <Route path="/pagenotfound">
        <PageNotFound />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
