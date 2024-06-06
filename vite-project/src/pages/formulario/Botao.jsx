import React from 'react';

const Botao = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Enviar
    </button>
  );
};

export default Botao;