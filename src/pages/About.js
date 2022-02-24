import React, { lazy, Suspense, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";

//React.lazy takes a function that must call a dynamic import(). i.e. calling import as a function.
//This must return a Promise which resolves to a module with a default export containing a React component.
//Lazily loaded components must be wrapped in <Suspense></Suspense> with a fallback.
const One = lazy(() => import("./One"));
const Two = lazy(() => import("./Two"));
const Three = lazy(() => import("./Three"));

export const About = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>About</h1>
      <button onClick={() => setShow((show) => !show)}>show components</button>
      {show && (
        <Suspense fallback={<p>Loading Components...</p>}>
          <ErrorBoundary>
            <One />
          </ErrorBoundary>
          <ErrorBoundary>
            <Two />
          </ErrorBoundary>
          <ErrorBoundary>
            <Three />
          </ErrorBoundary>
        </Suspense>
      )}
    </>
  );
};

export default About;
