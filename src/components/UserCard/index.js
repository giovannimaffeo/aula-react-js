import React, { Component } from "react";

import "./styles.css";

class UserCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div>
          <img
            className="user-picture"
            src={this.props.data.foto}
            alt="Estudante"
          />
        </div>
        <div className="information-container">
          <h2>{this.props.data.nome}</h2>
          <h3>E-mail: {this.props.data.email}</h3>
        </div>
      </div>
    );
  }
}

export default UserCard;
