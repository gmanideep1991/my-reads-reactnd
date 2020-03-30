import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import { Link } from "react-router-dom";

class ListBooks extends Component {
  render() {
    const readBooks = this.props.books.filter(b => b.shelf === "read");
    const currentlyReadingBooks = this.props.books.filter(
      b => b.shelf === "currentlyReading"
    );
    const wantToReadBooks = this.props.books.filter(
      b => b.shelf === "wantToRead"
    );
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={currentlyReadingBooks}
              title="Currently Reading"
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              books={wantToReadBooks}
              title="Want to Read"
              updateShelf={this.props.updateShelf}
            />
            <BookShelf
              books={readBooks}
              title="Read"
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default ListBooks;
