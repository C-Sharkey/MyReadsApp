import React from 'react';
import BookChanger from './BookChanger.js';

// Displays a book card
const BookCard = props => {
const {book, moveBook} = props;
        return (
            <li>
                <div className="book">                   
                    <div className="book-top">
                        <div className="book-cover" 
                            style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                                }}>
                        </div>
                        <BookChanger 
                            book={book}
                            moveBook={moveBook}/>            
                    </div>         
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>             
                </div>   
            </li>             
        )
    }

export default BookCard;