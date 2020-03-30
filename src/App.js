import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import ListBooks from "./ListBooks.js";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).concat(book)
    }));
    BooksAPI.update(book, shelf);
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.books}
              updateShelf={(book, shelf) => {
                this.updateShelf(book, shelf);
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
