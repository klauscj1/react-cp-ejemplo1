import Contador from "./components/Contador";
import { Multiplicador } from "./components/Multiplicador";
import { MultiplicadorReact } from "./components/MultiplicadorReact";

import { Saludo } from "./components/Saludo";

const App = () => {
  return (
    <div>
      {/* <Saludo nombre={"Claus"} apellido={"Chocho"} />
      <Saludo nombre={"Cristina"} apellido={"Cabrera"} />
      <Saludo nombre={"Gabriel"} apellido={"Cuenca"} />
      <hr />
      <Contador intervalo={2} contadorInicial={2} />
      <Contador intervalo={1} contadorInicial={1} />
      <Contador intervalo={3} contadorInicial={3} /> */}
      {/* <Multiplicador numero={3} limite={20} /> */}
      <MultiplicadorReact />
    </div>
  );
};

/*
function App() {
  return (
    <div>
      <h1>hola</h1>
      <h2>hola 2</h2>
    </div>
  );
}*/

export default App;
