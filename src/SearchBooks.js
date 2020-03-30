import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import Book from "./Book.js";

class SearchBooks extends Component {
  state = {
    query: "",
    searchedBooks: []
  };
  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
    this.searchBooks(query);
  };
  searchBooks = query => {
    BooksAPI.search(query).then(books => {
      if (books !== undefined && books.length > 0) {
        books.forEach(b => {
          const match = this.props.books.find(book => book.id === b.id);
          b.shelf = match ? match.shelf : "none";
        });
        this.setState({
          searchedBooks: books
        });
      }
    });
  };
  render() {
    const { query, searchedBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
