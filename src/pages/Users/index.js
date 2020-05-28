import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserCard from "../../components/UserCard";

class Users extends Component {
  render() {
    const users = [
      {
        id: 1,
        nome: "João",
        idade: 18,
        curso: "Engenharia Elétrica",
        email: "joao.silva@gmail.com",
        foto:
          "https://abrilguiadoestudante.files.wordpress.com/2016/08/estudante.jpg?quality=100&strip=info&w=680&h=453&crop=1",
        nascimento: "19/02/2002"
      },
      {
        id: 2,
        nome: "Maria",
        idade: 19,
        curso: "Engenharia da Computação",
        email: "maria.rodrigues@gmail.com",
        foto:
          "https://www.cref8.org.br/wp-content/uploads/2018/11/estudante-alia-estudos-com-hipnose-para-ter-mais-concentracao-no-enem-867x578.jpg",
        nascimento: "20/03/2001"
      },
      {
        id: 3,
        nome: "Júlio",
        idade: 22,
        curso: "Engenharia de controle e automação",
        email: "juliocosta@gmail.com",
        foto:
          "https://eduportugal.eu/wp-content/uploads/2019/07/Capa-Guia-do-estudante-brasileiro.jpg",
        nascimento: "30/04/1998"
      },
      {
        id: 4,
        nome: "Carolina",
        idade: 24,
        curso: "Design",
        email: "carolina.almeida@gmail.com",
        foto:
          "https://santosbancarios.com.br/uploads/images/2017/12/bancario-estudante-tem-direito-a-falta-abonada-em-dia-de-prova-1512564874.jpg",
        nascimento: "02/05/1996"
      },
      {
        id: 5,
        nome: "Juliana",
        idade: 20,
        curso: "Direito",
        email: "juliana.maia@gmail.com",
        foto:
          "https://www.documentodoestudante.com.br/blog/wp-content/uploads/2019/03/cie-documento-do-estudante.jpg",
        nascimento: "15/01/2000"
      }
    ];

    const listUsers = users.map(user => (
      <UserCard key={user.id.toString()} data={user} />
    ));
    return (
      <div>
        <div>
          <h1>Users</h1>
          <Link to="/details">Ir para detalhes</Link>
        </div>
        {listUsers}
      </div>
    );
  }
}

export default Users;
