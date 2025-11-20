// src/App.jsx
import React from "react";
import BookCard from "./components/BookCard";
import books from "./data/books";
import "./styles/App.css";

function mostCommonGenre(booksArr) {
  const counts = booksArr.reduce((acc, b) => {
    acc[b.genre] = (acc[b.genre] || 0) + 1;
    return acc;
  }, {});
  let top = null;
  let max = 0;
  for (const [genre, count] of Object.entries(counts)) {
    if (count > max) { max = count; top = genre; }
  }
  return top || "N/A";
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Book Collection</h1>
        <p className="subtitle">Books That Changed My Perspective</p>
      </header>

      <main className="main">
        <section className="books-grid">
          {books.map(book => (
            // unique key prop: use book.id
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              year={book.year}
              description={book.description}
            />
          ))}
        </section>

        <aside className="summary">
          <h2>Collection Summary</h2>
          <p><strong>Total books:</strong> {books.length}</p>
          <p><strong>Most common genre:</strong> {mostCommonGenre(books)}</p>
        </aside>
      </main>

      <footer className="footer">
        <p>Your Name — your.email@example.com</p>
        <p>© {new Date().getFullYear()} Book Lover</p>
      </footer>
    </div>
  );
}
