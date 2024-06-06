import React, { useState, useEffect } from 'react';

export function MudarCores() {

  const cores = ['magenta', 'purple', 'blue', 'red','green','yellow','brown'];
  

  const [corAtual, setCorAtual] = useState(cores[0]);


  useEffect(() => {
    document.body.style.backgroundColor = corAtual;
  }, [corAtual]);

  
  const mudarCor = () => {
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    setCorAtual(novaCor);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Clique no botão e veja a mágica acontecer</h1>
      <button onClick={mudarCor} style={{ padding: '10px 20px', fontSize: '16px' }}>Mudar Cor</button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>Cor atual: {corAtual}</p>
    </div>
  );
};

