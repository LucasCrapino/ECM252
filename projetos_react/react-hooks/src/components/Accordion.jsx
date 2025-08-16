import React, {useState} from "react";
import { Card } from "primereact/card";
import "./Accordion.css";

const Accordion = ({ itens }) => {
    const [indiceAtivo, setIndiceAtivo] = useState(null);

  const itemClicado = (indice) => {
    if(indiceAtivo === indice){
    setIndiceAtivo(null);  
    }
    else 
    setIndiceAtivo(indice);
  };

  const expressaoJSX = itens.map((item, indice) => {
   // escolher entre down ou right, comparando o índice da vez com o indiceAtivo, usando um ternario
    const classExbirIcone = indice === indiceAtivo ? "pi pi-angle-down" : "pi pi-angle-right"
   // decidir se o p fica oculto (hidden) ou não (classe nenhuma)
   const classeExibirConteudo = indice === indiceAtivo ? "" : "hidden"
   return (
      <Card id="accordion" key={indice} className="border-1 border-400">
      <div className="" onClick={() => itemClicado(indice)}>
        <i className={`pi pi-angle-${classExbirIcone}`}></i>
        <h5 className="ml-3 inline">{item.titulo}</h5>
      </div>
      <p className={classeExibirConteudo}>
        {item.conteudo}
      </p>
    </Card>
   )
});

  return <div>
    <p>{indiceAtivo}</p>
    {expressaoJSX}
    </div>;
};

export default Accordion;