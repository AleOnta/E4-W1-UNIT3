import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleBookAsClass extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col xs="4" lg="3" className="p-0 mb-3 mx-3 mx-xl-0 d-flex justify-content-center cardContainer">
          <Card
            style={{ width: "15rem" }}
            onClick={() => {
              const selection = this.state.selected === false ? true : false;
              this.setState({
                selected: selection,
              });
            }}
            className={this.state.selected === true ? "active" : "inactive"}
          >
            <Card.Img variant="top" src={this.props.data.img} className="cardImage" />
            <Card.Body>
              <Card.Title className="cardTitle">{this.props.data.title}</Card.Title>
              <Card.Text className="cardCategory">
                <span>Category: </span>
                {this.props.data.category}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBookAsClass;
