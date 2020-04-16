import React from 'react';
import BookShelf from './BookShelf.js';

const BookShelves = props => {
const {books} = props;

        return (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content"> 
                        <div>
                            <BookShelf books={books} shelfTitle='Currently Reading'/>
                            <BookShelf books={books} shelfTitle='Want to Read'/>
                            <BookShelf books={books} shelfTitle='Read'/>
                        </div>
                    </div>
                    <div className="open-search">
                        <button 
                            onClick={() => this.setState({ showSearchPage: true })}>
                                Add a book
                        </button>
                    </div>
                </div>
        )
    }



export default BookShelves;