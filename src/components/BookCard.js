import React from 'react';
import BookChanger from './BookChanger.js';

const BookCard = props => {
const {book} = props;

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
                            moveBook={props.moveBook}/>            
                    </div>         
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>             
                </div>   
            </li>             
        )
    }

export default BookCard;