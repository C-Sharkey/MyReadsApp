import React, { Component }  from 'react';

class BookChanger extends Component {
    
    
    handleChange = (event) => {
         const newShelf = event.target.value;
         this.props.moveBook(this.props.book, newShelf)
    }; 

      
    render () {
        const {book} = this.props;

            return (
                <div className="book-shelf-changer">
                    <select 
                        onChange={this.handleChange}
                        value={book.shelf}
                        defaultValue={book.shelf}>

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
