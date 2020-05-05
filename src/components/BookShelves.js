import React from 'react';
import BookShelf from './BookShelf.js';
import { Link } from 'react-router-dom';


// Displays the 3 shelves
const BookShelves = props => {
    const {books, moveBook} = props;
    const shelfNames = [
        {
            shelfName: 'Currently Reading',
            category: 'currentlyReading'
        },
        {
            shelfName: 'Want To Read',
            category: 'wantToRead'
        },
        {
            shelfName: 'Read',
            category: 'read'
        },        
    ];

        return (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content"> 
                        <div>
                        { shelfNames.map(shelf =>
                            <BookShelf 
                                books={books} 
                                category={shelf.category} 
                                shelfTitle={shelf.shelfName}
                                moveBook={moveBook}
                            />                          
                        )}
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">
                            <button> 
                                Add Book
                            </button>
                        </Link>                        
                    </div>
                </div>
        )
    }



export default BookShelves;