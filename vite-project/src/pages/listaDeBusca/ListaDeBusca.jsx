import React, { useState } from 'react';

export function ListaDeBusca() {
  // Lista de dados interna
  const dadosIniciais = [
    'Homem Aranha',
    'As Branquelas',
    'Titanic',
    'Vovozona',
    'Meninas Malvadas',
    'Alvin e os Esquilos',
    'As vantagens de ser invisivel',
    'De volta para o futuro',
    'Vingadores',
    'Homem de ferro',
    'Panico',
    'Deadpool',
    'Todo mundo em panico',
    'Superbad: é hoje',
    'Sexta feira 13',
    'Halloween'
  ];

  const [dados, setDados] = useState(dadosIniciais);
  const [busca, setBusca] = useState('');


  const handleBuscaChange = (event) => {
    const valor = event.target.value;
    setBusca(valor);
    const dadosFiltrados = dadosIniciais.filter(item =>
      item.toLowerCase().includes(valor.toLowerCase())
    );
    setDados(dadosFiltrados);
  };

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={busca}
        onChange={handleBuscaChange}
      />
      <ul>
        {dados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

