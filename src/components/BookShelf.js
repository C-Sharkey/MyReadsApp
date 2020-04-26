import React from 'react';
import BookCard from './BookCard.js';

// displays an individual shelf 
const BookShelf = props =>  {
    const {books, shelfTitle, category, moveBook} = props;
    // check to see if a book is on a shelf
    const isOnShelf = (book, card) => {
        if (category === book.shelf) {
            return card;
        }
    }
    return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            isOnShelf(book, <BookCard key={book.id} book={book} moveBook={moveBook}/>)   
                        ))}    
                    </ol>
                </div>
            </div>
    )
}

export default BookShelf;