import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleBookAsClass from "./SingleBookAsClass";

class BookList extends Component {
  state = {
    query: "",
  };

  filterBookList(e) {
    this.setState({
      query: e.target.value,
    });
    console.log(this.state.query);
  }

  render() {
    return (
      <>
        <input type="text" className="mb-3" onChange={(event) => this.filterBookList(event)} />
        <Row className="justify-content-center">
          {this.props.props
            .filter((books) => {
              return books.title.toLowerCase().includes(this.state.query.toLocaleLowerCase());
            })
            .map((book) => {
              return <SingleBookAsClass key={book.asin} data={book} />;
            })}
        </Row>
      </>
    );
  }
}

export default BookList;
