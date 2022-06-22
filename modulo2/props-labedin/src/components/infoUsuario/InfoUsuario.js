import React from "react";

function InfoUsuario(props) {
    return (
        <>
          <h1>informação do usuário </h1>
          <p> endereço: {props.endereco}</p>
          <p> e-mail: {props.email}</p>
          <a> href=link do github{props.link}</a>
        </>
    )
}

export default InfoUsuario