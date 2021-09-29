import React, {Component} from "react";
import BookRow from "../row/BookRow";
import {Container, Table} from "react-bootstrap";

class BookTable extends Component {

    state = {
        books: []
    }

    async componentDidMount() {
        const response = await fetch("/book");
        const body = await response.json();
        this.setState({books: body})
    }

    render() {
        const {books, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div>
                <Container fluid>
                    <h3>Books</h3>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books.map(book => {
                            return <BookRow book={book}/>
                        })}
                        </tbody>
                    </table>
                </Container>
            </div>
        );
    }
}

export default BookTable;