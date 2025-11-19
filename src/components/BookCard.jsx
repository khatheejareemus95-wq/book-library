import React from "react";
import PropTypes from "prop-types";

export default function BookCard({ title, author, genre, year, description }) {
  return (
    <article className="book-card">
      <h2 className="book-title">{title}</h2>
      <p className="book-meta">{author} • {genre} • {year}</p>
      <p className="book-desc">{description}</p>
    </article>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
};
