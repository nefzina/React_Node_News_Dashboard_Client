import "./scss/header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Tech News Hub</h1>
        <p className="header-subtitle">
          Stay updated with the latest in React, Node.js, and Express
        </p>
      </div>
    </header>
  );
}
