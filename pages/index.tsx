import React, { useState, useEffect } from "react";
import { Article } from "../types";
import { apiClient } from "../lib/apiClient";

const Home = () => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleId = 1;
      const userId = 2;
      const res = await apiClient.articles
        ._articleId(articleId)
        .$get({ query: { user: userId } });
      setArticle(res);
    };
    fetchArticle();
  }, []);

  return <div />;
};

export default Home;
