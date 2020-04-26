import React, { Component } from 'react';
import BookCard from './BookCard.js';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';

// Used debouce to help with search field

class BookSearch extends Component {
    
    state = {
        query: '',
        bookSearch: [],
    }
    // updates the search query
    saveQuery = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({query: ''});
            return;
        } else {
            this.setState({query: query});
        }
    }
    // takes the query and searches if not empty 
    showResults (query, moveBook) {
        if (query === '') {
            return (<p> Sorry. No results found... </p>);
        } else {
            BooksAPI.search(query)
                .then((bookSearch) => {
                this.setState(() => ({
                    bookSearch
                }))
            })
            // Tried to stop the error if no search results were found but didnt work
            if (this.state.bookSearch != null) {
                console.log('this.state.bookSearch: ' + this.state.bookSearch)
                return (
                    this.state.bookSearch.map(result => (
                    <BookCard 
                        key={result.id} 
                        book={result}
                        moveBook={moveBook} />  
                    ))
                )   
            } else {
                return (<p> Sorry. No results found for: {query} </p>)
            }            
        }
    }


render () {        
        const { query } = this.state;
        const {moveBook} = this.props;
                  
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
                            minLength={3}
                            debounceTimeout={350}
                            onChange={this.saveQuery} />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <h2 className="bookshelf-title">Results</h2>
                        <ol className="books-grid">
                            {this.showResults (query, moveBook)}      
                        </ol>
                    </div>
                </div>
        )
    }
}

export default BookSearch;