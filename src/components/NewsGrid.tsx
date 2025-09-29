import type { Article } from "../types/Article";
import { NewsCard } from "./NewsCards";
import "./newsGrid.scss";

interface NewsGridProps {
  articles: Article[];
  loading: boolean;
}

export function NewsGrid({ articles, loading }: NewsGridProps) {
  if (loading) {
    return (
      <div className="news-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="loading-card">
            <div className="loading-title"></div>
            <div className="loading-meta"></div>
            
            <div className="loading-description">
              <div className="loading-line"></div>
              <div className="loading-line short"></div>
            </div>
            <div className="loading-button"></div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="no-articles">
        <p>No articles found.</p>
      </div>
    );
  }

  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
