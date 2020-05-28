import React, { Component } from "react";

class Details extends Component {
  render() {
    const data = this.props.match.params;
    return (
      <div>
        <h1>Detalhes do usuário {data.nome}</h1>
        <h3>E-mail: {data.email}</h3>
      </div>
    );
  }
}

export default Details;
