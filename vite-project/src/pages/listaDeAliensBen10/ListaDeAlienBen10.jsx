import { useState } from "react";

export function ListaDeAliensBen10() {
  const initialAliens = [
    { id: 1, name: 'Quatro-braços' },
    { id: 2, name: 'Chama' },
    { id: 3, name: 'XLR8' },
  ];

  const [listaDeAliensBen10, setListaDeAliensBen10] = useState(initialAliens);
  const [novoAlien, setNovoAlien] = useState('');

  function adicionarAlien() {
    if (novoAlien.trim() !== '') {
      const EntradaNovoAlien = {
        id: listaDeAliensBen10.length + 1,
        name: novoAlien,
      };
      setListaDeAliensBen10([...listaDeAliensBen10, EntradaNovoAlien]);
      setNovoAlien('');
    }
  }

  return (
    <>
      <h1>Meus aliens favoritos</h1>

      <div>
        <ul>
          {listaDeAliensBen10.map((alien) => (
            <li key={alien.id}>{alien.name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={novoAlien}
          onChange={(e) => setNovoAlien(e.target.value)}
          placeholder="Adicionar novo alien"
        />
        <br />
        <br />
        <button onClick={adicionarAlien}>Adicionar</button>
      </div>
    </>
  );
}