import React from 'react';
import BookShelves from './components/BookShelves.js';
import BookSearch from './components/BookSearch.js';
import * as BooksAPI from './BooksAPI';
import './App.css';
import PropTypes from 'prop-types';
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


  render() {
    console.log(this.state.books);

    return (
      <div className="app">
        <Route 
          exact path='/' 
          render = {() => (
            <BookShelves books={this.state.books} />
          )}
        />
        <Route 
          path='/add' 
          render={() => (
            <BookSearch />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
