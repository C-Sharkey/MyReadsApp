import React from 'react';
import BookShelves from './components/BookShelves.js';
import BookSearch from './components/BookSearch.js';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  // stores three values:
    // 1: 'books' which is the current books on each shelf
    // 2. 'bookSearch' which is the books returned from a book search
    // 3. 'error' which is a boolean that controls displaying logs if there is an error with API
  state = {
    books: [],
    bookSearch: [],
    error: false,
  };

  // gets reading list and stores in state
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      })
      .catch(error => {
        console.log('API Error: ', error);
        this.setState({ error: true });
      });
  };

  // Moves books to shelves
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(error => {
      console.log('API error: ', error);
      this.setState({error : true });
    });
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };

  
  // Search for books
  searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ bookSearch: [] });
        } else {
          this.setState({ bookSearch: books });
        }
      });
    } else {
      this.clearSearch();
    }
  };

  // Clears Search when back button is clicked
  clearSearch = () => {
    this.setState({ bookSearch: [] });
  }

  render() {
    const {books, bookSearch } = this.state;
    return (
      <div className="app">
        <Route 
          exact path='/' 
          render = {() => (
            <BookShelves 
              books={books}
              moveBook = {this.moveBook}
               />
          )}
        />
        <Route 
          path='/search' 
          render={() => (
            <BookSearch 
              bookSearch = {bookSearch}
              searchForBooks = {this.searchForBooks}
              clearSearch = {this.clearSearch}
              moveBook = {this.moveBook}
              books={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
