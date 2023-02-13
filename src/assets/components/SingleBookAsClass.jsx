import { Component } from "react";
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBookAsClass extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col xs="4" lg="3" className="p-2 d-flex justify-content-center cardContainer">
          <Card className={this.state.selected === true ? "active" : "inactive"}>
            <Card.Img
              variant="top"
              src={this.props.data.img}
              className="cardImage"
              onClick={() => {
                const selection = this.state.selected === false ? true : false;
                this.setState({
                  selected: selection,
                });
              }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">{this.props.data.title}</Card.Title>
              <Card.Text className="cardCategory">
                <span>Category: </span>
                {this.props.data.category}
              </Card.Text>
              {this.state.selected === true ? <CommentArea elementID={this.props.data.asin} /> : <></>}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBookAsClass;
