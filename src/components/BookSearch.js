import React, { Component } from 'react';
import BookCard from './BookCard.js';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';

class BookSearch extends Component {
   
    state = {
        query: '',
        bookSearch: [],
    }
    
    saveQuery = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({query: ''});
            return;
        } else {
            this.setState({query: query});
        }
    }



render () {
        console.log('Booksearch::: ' + this.state.bookSearch);
        
        const { query, bookSearch } = this.state;
        
        const showResults = query === ''
            ? bookSearch
            : BooksAPI.search(this.state.query)
                .then((bookSearch) => {
                this.setState(() => ({
                    bookSearch
            }))
        })
                  
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/">
                            <button className="close-search">
                                Close
                            </button>
                        </Link>
                        <div className="search-books-input-wrapper">
 
                        <DebounceInput
                            type="text" 
                            placeholder="Search by title or author"
                            minLength={4}
                            debounceTimeout={500}
                            onChange={this.saveQuery} />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <h2 className="bookshelf-title">Results</h2>
                        <ol className="books-grid">
                            { showResults?
                            bookSearch.map(result => (
                                <BookCard key={result.id} book={result} />  
                            )) : <p> No results found </p> }    
                        </ol>
                    </div>
                </div>
        )
    }
}

export default BookSearch;