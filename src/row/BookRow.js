import React, {Component} from "react";

class BookRow extends Component {

    book;

    constructor({book}) {
        super();
        this.book = book;
    }

    render() {
        return (
            <tr key={this.book.id}>
                <td>{this.book.id}</td>
                <td>{this.book.title}</td>
                <td>{this.book.author}</td>
            </tr>
        )
    }
}

export default BookRow;