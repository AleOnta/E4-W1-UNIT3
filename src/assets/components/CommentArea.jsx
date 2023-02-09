import { Component } from "react";
import { Card } from "react-bootstrap";

class CommentArea extends Component {
  render() {
    return (
      <Card.Text>
        <ul className="mb-0">
          <li>Commento:</li>
          <li>Valutazione:</li>
          <li>ID Elemento:</li>
        </ul>
      </Card.Text>
    );
  }
}

export default CommentArea;
