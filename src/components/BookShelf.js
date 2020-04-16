import React from 'react';
import BookCard from './BookCard.js';


const BookShelf = props =>  {
const {books, shelfTitle} = props;
 
        return (
                
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelfTitle}</h2>
                    <div className="bookshelf-books">
                
                        <ol className="books-grid">
                            
                        {books.map(book => (
                                 
                            <BookCard key={book.id} book={book} />      
                        
                        ))}    
                        </ol>

                    </div>
                </div>

        )
    }


export default BookShelf;