"use client";

import { useState } from "react";
import type { NewsCategory } from "../App";
import "./navigation.scss";

interface NavigationProps {
  activeCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
}

const categories: { value: NewsCategory; label: string }[] = [
  { value: "react", label: "React" },
  { value: "node", label: "Node.js" },
  { value: "express", label: "Express" },
];

export function Navigation({
  activeCategory,
  onCategoryChange,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`nav-button ${
                activeCategory === category.value ? "active" : ""
              }`}
              onClick={() => onCategoryChange(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="nav-mobile">
          <div className="nav-mobile-header">
            <span className="nav-mobile-current">
              {categories.find((c) => c.value === activeCategory)?.label}
            </span>
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="nav-mobile-menu">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`nav-mobile-button ${
                    activeCategory === category.value ? "active" : ""
                  }`}
                  onClick={() => {
                    onCategoryChange(category.value);
                    setMobileMenuOpen(false);
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
