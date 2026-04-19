import { useState } from "react"; //Importanto o hook para trabalhar com estado reativas.

import NomeImportar from "./components/NomeImportar";

//Isso aqui é um componente
function App() { //Criação de componentes em mode de função primeira letra
  const [aluno, setAluno] = useState('Sujeito Programador');
  //[Nome do useState/Estado, set + nome do estado que vai ser trocado] = useState('Valor padrão')

  function handleChangeName(nome){ //Definindo uma função a ser usada no componente.
    setAluno(nome);
  }

  return (
    <div>
      <h1 className="">Componente App</h1>
      <NomeImportar aluno="Victor" idade="30"/> {/* Como esta no mesmo arquivo o componente podemos reutilizar sem importar  */}
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName('Victor')}> {/* Criação de uma função para disparar a troca do useState de aluno */}
        Mudar nome
      </button>
      {/* <button onClick={ handleChangeName('Lucas') }></button> Vai renderizar muitas vezes e causar erros para corrigir, utilize abaixo */}
      <button onClick={ () => handleChangeName('Lucas') }>{/* Utilizando a função anonima para corrigir o problema acima */}
        Mudar nome
      </button>
    </div>
  )
}
export default App; //Exportando para outras partes do site possam utiliazar este componente.

function Nome(){
  return (
    <span>Bem-vindo: Victor</span>
  );
}