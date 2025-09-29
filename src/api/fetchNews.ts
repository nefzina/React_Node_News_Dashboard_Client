import axios from "axios";
import type { Article } from "../types/Article";

type ArticlesResponse = {
  category: string;
  articles: Article[];
};

export async function fetchNews(category: string): Promise<Article[]> {
  try {
    const res = await axios.get<ArticlesResponse>(
      `http://localhost:5000/api/${category}`
    );
    return res.data.articles ?? [];
  } catch (err) {
    console.error("fetchNews error:", err);
    return [];
  }
}

