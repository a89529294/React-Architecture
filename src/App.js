import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Articles = React.lazy(() => import("./pages/Articles"));
const About = React.lazy(() => import("./pages/About"));

const App = () => {
  return (
    <BrowserRouter>
      <h1>Server-Side Rendering Example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
