import React, { Component }  from 'react';

// Displays the changer button and options
class BookChanger extends Component {
    // sets default to none if book doesnt have a shelf prop
    checkShelf (shelf) {
      if(shelf != null){
        return shelf
      } else {
          return 'none'
      } 
    } 
    
    render () {
        const {book, moveBook} = this.props;

            return (
                <div className="book-shelf-changer">
                    <select 
                        onChange={event => moveBook(book, event.target.value)}
                        defaultValue={this.checkShelf(book.shelf )}>

                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div> 
            )
        }
    }

export default BookChanger;
