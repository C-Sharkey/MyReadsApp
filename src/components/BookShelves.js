import React from 'react';
import BookShelf from './BookShelf.js';
import { Link } from 'react-router-dom';


const BookShelves = props => {
    const {books} = props;
   
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
                                shelfTitle='Currently Reading'/>
                            <BookShelf 
                                books={books} 
                                category='wantToRead' 
                                shelfTitle='Want to Read'/>
                            <BookShelf 
                                books={books} 
                                category='read' 
                                shelfTitle='Read'/>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/add">
                            <button> 
                                Add Book
                            </button>
                        </Link>                        
                    </div>
                </div>
        )
    }



export default BookShelves;