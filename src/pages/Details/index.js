import React, { Component } from "react";

class Details extends Component {
  render() {
    const data = this.props.location.state;
    return (
      <div>
        <h1>Detalhes do usuário {data.nome}</h1>
        <h3>E-mail: {data.email}</h3>
        <h3>Idade: {data.idade}</h3>
        <h3>Curso: {data.curso}</h3>
        <h3>Curso: {data.nascimento}</h3>
      </div>
    );
  }
}

export default Details;
