import React, { Component } from "react";
import Book from "./Book.js";

class BookShelf extends Component {
  render() {
    const { books, title, updateShelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book className="book" book={book} updateShelf={updateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
