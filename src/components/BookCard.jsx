// src/components/BookCard.jsx
import React from "react";

export default function BookCard({ title, author, genre, year, description }) {
  return (
    <article className="book-card">
      <header className="book-card-header">
        <h3 className="book-title">{title}</h3>
        <p className="book-year">({year})</p>
      </header>
      <p className="book-author"><strong>Author:</strong> {author}</p>
      <p className="book-genre"><strong>Genre:</strong> {genre}</p>
      <p className="book-desc">{description}</p>
    </article>
  );
}
