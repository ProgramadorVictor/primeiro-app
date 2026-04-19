import NomeImportar from "./components/NomeImportar";

//Isso aqui é um componente
function App() { //Criação de componentes em mode de função primeira letra
  return (
    <div>
      <h1 className="">Componente App</h1>
      <Nome/> {/* Como esta no mesmo arquivo o componente podemos reutilizar sem importar  */}
      <br />
      <NomeImportar aluno="Victor" idade="30"/> {/* Trabalhando com propriedades */}
    </div>
  )
}

export default App; //Exportando para outras partes do site possam utiliazar este componente.

function Nome(){
  return (
    <span>Bem-vindo: Victor</span>
  );
}