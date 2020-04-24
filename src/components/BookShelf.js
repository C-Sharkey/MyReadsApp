import React from 'react';
import BookCard from './BookCard.js';

const BookShelf = props =>  {
    const {books, shelfTitle, category} = props;
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
                            isOnShelf(book, <BookCard key={book.id} book={book} />)   
                        ))}    
                    </ol>
                </div>
            </div>
    )
}

export default BookShelf;