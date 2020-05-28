import React, { Component } from "react";
import { Link } from "react-router-dom";

class Users extends Component {
  render() {
    const users = [
      {
        id: 1,
        user: "João"
      },
      {
        id: 2,
        user: "Maria"
      },
      {
        id: 3,
        user: "Júlia"
      },
      {
        id: 4,
        user: "Felipe"
      },
      {
        id: 5,
        user: "João"
      }
    ];
    const usersList = users.map(item => (
      <li key={item.id.toString()}>{item.user}</li>
    ));
    return (
      <div>
        <div>
          <h1>Users</h1>
          <Link to="/details">Ir para detalhes</Link>
        </div>
        <ul>{usersList}</ul>
      </div>
    );
  }
}

export default Users;
