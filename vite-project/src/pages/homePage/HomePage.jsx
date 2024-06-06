import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/Button/Button";

export function HomePage() {
  const navigate = useNavigate();

  // function handleNavigate() {
  //   navigate("/relogio");
  // }
  
  return (
    <>
      <Botao
        onclick={() => navigate("/lista-de-aliens")}
        valor={"lista"}
      />
     <Botao
        onclick={() => navigate("/relogio")}
        valor={"relogio"}
      />

       <Botao
        onclick={() => navigate("/formulario")}
        valor={"formulario"}
      />
        <Botao
        onclick={() => navigate("/lista-de-busca")}
        valor={"listadebusca"}
      />
        <Botao
        onclick={() => navigate("/mudar-cor")}
        valor={"mudarcor"}
      />
    </>
  );
}
