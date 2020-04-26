import React from 'react';
import BookShelves from './components/BookShelves.js';
import BookSearch from './components/BookSearch.js';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';


  // Most of the functionality is working but there were a few issues I noticed but could not fix
  //     1 - The search throws an error if no results are found
  //     2 - The search books do move to the home page but the state is not updated (you have to refresh)
  //     3 - The books are still in search if they are on your shelf

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  // gets reading list and stores in state
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  // Moves books to shelves
  moveBook = (book, shelf) => {
       this.setState(state => ({
        book: book.shelf = shelf 
      }))
      BooksAPI.update(book, shelf);
    } 
  

  render() {
    const moveBook = this.moveBook;
    return (
      <div className="app">
        <Route 
          exact path='/' 
          render = {() => (
            <BookShelves 
              books={this.state.books}
              moveBook = {moveBook}
               />
          )}
        />
        <Route 
          path='/search' 
          render={() => (
            <BookSearch 
              books={this.state.books}
              moveBook = {moveBook}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
