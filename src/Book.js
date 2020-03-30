import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  onUpdateShelf = event => {
    const shelf = event.target.value;
    this.props.updateShelf(this.props.book, shelf);
  };
  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : null
              })`
            }}
          ></div>
          <BookShelfChanger
            value={book.shelf ? book.shelf : "none"}
            onUpdateShelf={this.onUpdateShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}
export default Book;
