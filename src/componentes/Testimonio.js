import React from "react";
import '../hojas-de-estilo/Testimonio.css'; 

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      {/*Para las imagenes se tiene que colocar la palabra require adelante*/}
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={props.alt}
      />
      <div className="contenedor-texto-testimonio">
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}


