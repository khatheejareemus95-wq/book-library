import React from "react";
import BookCard from "./components/BookCard";
import books from "./data/books";

function mostCommonGenre(booksArray) {
  const counts = {};
  booksArray.forEach(b => {
    counts[b.genre] = (counts[b.genre] || 0) + 1;
  });
  let maxCount = 0;
  let common = "";
  for (const [genre, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      common = genre;
    }
  }
  return common || "N/A";
}

export default function App() {
  const totalBooks = books.length;
  const commonGenre = mostCommonGenre(books);

  return (
    <div className="app-container">
      <header className="header">
        <h1>My Book Collection</h1>
        <p className="subtitle">Books That Changed My Perspective</p>
      </header>

      <main>
        <section className="summary">
          <p>Total books: <strong>{totalBooks}</strong></p>
          <p>Most common genre: <strong>{commonGenre}</strong></p>
        </section>

        <section className="books-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}        // unique key prop
              title={book.title}
              author={book.author}
              genre={book.genre}
              year={book.year}
              description={book.description}
            />
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Book Lover</p>
        <p>Your Name • your.email@example.com</p>
      </footer>
    </div>
  );
}
