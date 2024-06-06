
import React, { useState } from 'react';
import Input from './Input';
import Botao from './Botao';


export function Formulario() {


        const [valorInput, setValorInput] = useState('');
      
        const handleInputChange = (event) => {
          setValorInput(event.target.value);
        };
      
        const handleSubmit = () => {
          console.log(`Valor do Input: ${valorInput}`);
        };
      
        return (
          <div>
            <h1>Formulário</h1>
            <Input value={valorInput} onChange={handleInputChange} />
            <Botao onClick={handleSubmit} />
          </div>
        );
      };      

        
    
        
        

