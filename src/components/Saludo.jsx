export const Saludo = (props) => {
  const { nombre, apellido } = props;
  return (
    <>
      <h2>
        Hola {apellido} {nombre}, bienvenido
      </h2>
    </>
  );
};
