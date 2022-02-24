import React, { useState, useEffect, useContext } from "react";
import { useDataSSR } from "../useDataSSR";

export const Articles = () => {
  console.log(Date.now());
  const articles = useDataSSR("articles", () =>
    fetch("http://localhost:8080/api/articles").then((resp) => resp.json())
  );

  return (
    <>
      <h1>Articles</h1>
      {articles &&
        articles.map((article) => (
          <div key={article.title}>
            <h3>{article.title}</h3>
            <p>by {article.author}</p>
          </div>
        ))}
    </>
  );
};
