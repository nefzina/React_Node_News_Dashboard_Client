import type { Article } from "../App"
import "./NewsCard.scss"

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="news-card">
      <div className="card-header">
        <h3 className="card-title">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        <div className="card-meta">
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <span>{formatDate(article.date)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">👤</span>
            <span>{article.author}</span>
          </div>
        </div>
      </div>

      <div className="card-content">
        <p className="card-description">{article.description}</p>
      </div>

      <div className="card-footer">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-button">
          Read more
          <span className="external-icon">↗</span>
        </a>
      </div>
    </div>
  )
}
89