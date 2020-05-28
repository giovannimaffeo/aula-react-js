import React, { Component } from "react";
import { Link } from "react-router-dom";

class Users extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <Link to="/details">Ir para detalhes</Link>
      </div>
    );
  }
}

export default Users;
