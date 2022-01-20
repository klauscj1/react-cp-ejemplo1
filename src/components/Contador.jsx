import { useEffect, useState } from "react";

function Contador({ intervalo, contadorInicial }) {
  const [contador, setContador] = useState(contadorInicial);

  function sumarContador(intervalo) {
    console.log("debe sumar uno al contador");
    let nuevoContador = contador + intervalo;
    setContador(nuevoContador);
  }

  const restarContador = (intervalo) => {
    console.log("debe restar uno al contador");
    let nuevoContador = contador - intervalo;
    setContador(nuevoContador);
  };

  return (
    <>
      <h1>Contador {contador}</h1>
      <button onClick={() => sumarContador(intervalo)}>+{intervalo}</button>
      <button onClick={() => restarContador(intervalo)}>-{intervalo}</button>
      <hr />
    </>
  );
}

export default Contador;
