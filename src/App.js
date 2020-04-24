import React from 'react';
import BookShelves from './components/BookShelves.js';
import BookSearch from './components/BookSearch.js';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  moveBook = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, shelf)
  }


  render() {
    console.log(this.state.books);

    return (
      <div className="app">
        <Route 
          exact path='/' 
          render = {() => (
            <BookShelves 
              books={this.state.books}
               />
          )}
        />
        <Route 
          path='/add' 
          render={() => (
            <BookSearch 
              books={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
