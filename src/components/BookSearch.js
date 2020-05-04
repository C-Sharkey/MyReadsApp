import React, { Component} from 'react';
import BookCard from './BookCard.js';
import { Link } from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';
// Used debouce to help with search field


class BookSearch extends Component {
    // stores the search query
    state = { 
        query: '',
     };

    // handles changes to input
     // sets query state to new input
     // calls searchForBook function and passed query
     eventHandler = (e) => {
        const searchQuery = e.target.value;
        this.setState({ query: searchQuery }, () => {
            this.props.searchForBooks(searchQuery);
        });
    }

render(){
    const { books, clearSearch, moveBook , bookSearch} = this.props;
    
    // maps through bookSearch array and returns books match book ID    
    const searchResults = bookSearch.map(book => {
        books.map(b => {
            if (b.id === book.id) {
                book.shelf = b.shelf;
            }
            return b;
        });
        return book;
    });

        return (
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/">
                            <button 
                                className="close-search"
                                onClick={clearSearch}
                            >
                                    Close
                            </button>
                        </Link>
                        <div className="search-books-input-wrapper">
 
                        <DebounceInput
                            type="text" 
                            placeholder="Search by title or author"
                            minLength={3}
                            debounceTimeout={300}
                            onChange={this.eventHandler}
                             />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <h2 className="bookshelf-title">Results</h2>
                        <ol className="books-grid">
                        { searchResults.map(book => (
                            <BookCard
                                key={book.id}
                                book={book}
                                shelf={book.shelf ? book.shelf : 'none'}
                                moveBook={moveBook}
                            />    
                        ))}
                    
                                 
                        </ol>
                    </div>
                </div>
        )
    }
}


export default BookSearch;