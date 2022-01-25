import React, { useState } from "react";
import loginImage from "../../assets/images/login1.jpg";
import "./styles.css";
import Swal from "sweetalert2";

export const Login = () => {
  const [valores, setValores] = useState({
    email: "",
    password: "",
  });

  const handlerOnChange = ({ target }) => {
    const { name, value } = target;
    const nuevosValores = {
      ...valores,
      [name]: value,
    };
    setValores(nuevosValores);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (valores.email === "clauschochoe@gmail.com") {
      if (valores.password === "123456") {
        Swal.fire(":)", "Login correcto", "success");
      } else {
        Swal.fire(":(", "Error en la contraseña", "error");
      }
    } else {
      Swal.fire(":(", "Error en el correo", "error");
    }
  };

  return (
    <div className="login_container">
      <div className="izquierda">
        <img src={loginImage} alt="login image" className="image_login" />
      </div>
      <div className="derecha">
        <div className="form_container">
          <h1 className="titulo">Login page</h1>
          <p className="descripcion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            laudantium
          </p>
          <form className="formulario" onSubmit={handlerSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correco electrónico"
              required
              value={valores.email}
              onChange={handlerOnChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              required
              value={valores.password}
              onChange={handlerOnChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
