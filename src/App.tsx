"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { NewsGrid } from "./components/NewsGrid";
import { Footer } from "./components/Footer";
import { fetchNews } from "./api/fetchNews";
import "./app.scss";
import type { Article } from "./types/Article";
import CustomPagination from "./components/CustomPagination";

export type NewsCategory = "react" | "node" | "express";

function App() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("react");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const nbArticlesPerPage: number = 15;
  const visibleArticles: Article[] = articles.slice(
    (pageNumber - 1) * nbArticlesPerPage,
    pageNumber * nbArticlesPerPage
  );

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const data: Article[] = await fetchNews(activeCategory);
        setArticles(data);
        console.log("articles length = ", data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [activeCategory]);

  return (
    <div className="app">
      <div className="gradient-background">
        <div className="gradient-layer-1"></div>
        <div className="gradient-layer-2"></div>
      </div>

      <div className="app-content">
        <Header />
        <Navigation
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <main className="main-content">
          <NewsGrid articles={visibleArticles} loading={loading} />
        </main>
        <CustomPagination
          totItems={articles.length}
          setPageNumber={setPageNumber}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
