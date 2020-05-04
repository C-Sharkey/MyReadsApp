import React from 'react';
import BookShelf from './BookShelf.js';
import { Link } from 'react-router-dom';


// Displays the 3 shelves
const BookShelves = props => {
    const {books, moveBook} = props;
    
        return (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content"> 
                        <div>
                            <BookShelf 
                                books={books} 
                                category='currentlyReading' 
                                shelfTitle='Currently Reading'
                                moveBook={moveBook}
                                />

                            <BookShelf 
                                books={books} 
                                category='wantToRead' 
                                shelfTitle='Want to Read'
                                moveBook={moveBook}
                                />
                            <BookShelf 
                                books={books} 
                                category='read' 
                                shelfTitle='Read'
                                moveBook={moveBook}
                                />
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