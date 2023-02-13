import { Component } from "react";
import CommentList from "./CommentList";
import CommentAdd from "./CommentAdd";

class CommentArea extends Component {
  state = {
    elementID: this.props.elementID,
    commentRes: [],
  };

  retrieveComment = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state.elementID}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDBlM2EyNDc4ZDAwMTNhMDU4MTkiLCJpYXQiOjE2NzU5NTIzNTUsImV4cCI6MTY3NzE2MTk1NX0.Ln3eAqehZAIVpPhaldSeEREpYr8LnYz8dldMcHR1EXg",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          commentRes: data,
        });
      } else {
        alert("errore nel caricamento dei contenuti");
      }
    } catch (error) {
      alert("c'è stato un errore:", error.message);
    }
  };

  componentDidMount() {
    this.retrieveComment();
  }

  render() {
    return (
      <>
        <CommentList data={this.state.commentRes} />
        <CommentAdd elementID={this.state.elementID} />
      </>
    );
  }
}

export default CommentArea;
