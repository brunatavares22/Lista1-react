import { useState, useEffect } from "react";

import './relogioDigital.css';

export function Relogio() {

          const [time, setTime] = useState({
            horas: '00',
            minutos: '00',
            segundos: '00',
          });
        
          useEffect(() => {
            const relogio = setInterval(() => {
              const dateToday = new Date();
              let hr = dateToday.getHours();
              let min = dateToday.getMinutes();
              let seg = dateToday.getSeconds();
        
              if (hr < 10) hr = '0' + hr;
              if (min < 10) min = '0' + min;
              if (seg < 10) seg = '0' + seg;
        
              setTime({ horas: hr, minutos: min, segundos: seg });
            }, 1000);
        
            return () => clearInterval(relogio);
          }, []);
        
          return (
            <div className="App">
              <div className="relogio">
                <div>
                  <span id="horas">{time.horas}</span>
                  <span className="tempo">Horas</span>
                </div>
                <div>
                  <span id="minutos">{time.minutos}</span>
                  <span className="tempo">Minutos</span>
                </div>
                <div>
                  <span id="segundos">{time.segundos}</span>
                  <span className="tempo">Segundos</span>
                </div>
              </div>
            </div>
          );
        }
        
    
        
        

