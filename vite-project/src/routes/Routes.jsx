import { Routes, Route } from "react-router-dom";
import { Relogio } from "../pages/relogio/Relogio";
import { HomePage } from "../pages/homePage/HomePage";
import { ListaDeAliensBen10 } from "../pages/listaDeAliensBen10/ListaDeAlienBen10";
import { Formulario } from "../pages/formulario/Formulario";
import { ListaDeBusca } from "../pages/listaDeBusca/ListaDeBusca"
import { MudarCores } from "../pages/cores/MudarCores"

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/relogio" element={<Relogio />} />
      <Route path="/lista-de-aliens" element={<ListaDeAliensBen10 />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/lista-de-busca" element={<ListaDeBusca />} />
      <Route path="/mudar-cor" element={<MudarCores />} />
    </Routes>
  );
}
