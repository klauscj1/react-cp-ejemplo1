import React, { useEffect, useState } from "react";

export const MultiplicadorReact = () => {
  //de acuerdo al limite armo un array desde cero hasta el limite
  function getArray() {
    let limites = [];
    for (let i = 0; i < formValues.limite; i++) {
      limites[i] = i + 1;
    }
    return limites;
  }

  function handlerOnChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div>
      <h1>Multiplicador reactivo</h1>
      {/* <code>{JSON.stringify(formValues, null, 2)}</code> */}

      <div>
        <div>
          <label htmlFor="numero">Tabla del </label>
          <input
            type="number"
            id="numero"
            name="numero"
            value={formValues.numero}
            onChange={handlerOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="limite">Limite </label>
          <input
            type="number"
            id="limite"
            name="limite"
            value={formValues.limite}
            onChange={handlerOnChange}
          />
        </div>
      </div>
      {formValues.numero && formValues.numero > 0 ? (
        formValues.limite && formValues.limite > 0 ? (
          <div>
            <h1>TABLA DEL {formValues.numero}</h1>
            <br />
            <h2>Resultado</h2>
            {getArray().map((i) => {
              return (
                <div key={i}>
                  {formValues.numero} * {i} = {formValues.numero * i}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>Limite debe ser mayor 0</h1>
          </div>
        )
      ) : (
        <div>
          <h1>Numero de la tabla debe ser mayor a 0</h1>
        </div>
      )}
    </div>
  );
};
