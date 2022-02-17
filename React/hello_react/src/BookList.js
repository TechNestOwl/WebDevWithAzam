import React, { Component } from "react";


class BookList extends Component {

    render() {

        const bookItems = this.props.books.map((book,index) => {
            return <li key = {index}>
            </li>
        })


        return(
            <div>
                <h1>Book List</h1>
                <ul>
                    {bookItems}
                </ul>
            </div>

        )
    }
}

export default BookList;