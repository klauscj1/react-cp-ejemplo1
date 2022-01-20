import React from "react";

export const Multiplicador = ({ numero, limite }) => {
  //de acuerdo al limite armo un array desde cero hasta el limite
  function getArray() {
    let limites = [];
    for (let i = 0; i < limite; i++) {
      limites[i] = i + 1;
    }
    return limites;
  }

  return (
    <div>
      <h1>TABLA DEL {numero}</h1>
      {getArray().map((i) => {
        return (
          <div key={i}>
            {numero} * {i} = {numero * i}
          </div>
        );
      })}
    </div>
  );
};
