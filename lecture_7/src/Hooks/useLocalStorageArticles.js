import { useEffect, useState } from 'react';

function useLocalStorageArticles() {
  const [articles, setArticles] = useState(() => {
    const storedArticles = localStorage.getItem("articulos");
    return storedArticles ? JSON.parse(storedArticles) : [];
  });

  
  const addArticle = (newArticle) => {
    const updatedArticles = [{ ...newArticle, id: Date.now() }, ...articles];
    setArticles(updatedArticles);
    localStorage.setItem("articulos", JSON.stringify(updatedArticles));
  };

  useEffect(() => {
    localStorage.setItem("articulos", JSON.stringify(articles));
  }, [articles]);

  

  return {
    articles,
    addArticle,
  };
}

export default useLocalStorageArticles;