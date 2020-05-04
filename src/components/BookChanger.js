import React, { Component }  from 'react';

// Displays the changer button and options
class BookChanger extends Component {

    // stores shelf value
    state = {
        value: this.props.shelf,
    };

    // sets default to none if book doesnt have a shelf prop
    checkShelf (shelf) {
      if(shelf != null){
        return shelf
      } else {
          return 'none'
      } 
    } 
    // handles change to shelf
    eventHandler = (e) => {
        const { newValue } = e.target;
        this.setState({ newValue });
        this.props.moveBook(this.props.book, e.target.value);
    };

    
    render () {
        const {book} = this.props;

            return (
                <div className="book-shelf-changer">
                    <select 
                        onChange={this.eventHandler}
                        value={this.checkShelf(book.shelf )}>

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
