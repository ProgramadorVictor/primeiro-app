import { useState } from "react";

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz'
  ]);

  
  function handleRegister(e){
    e.preventDefault();
    
    setTarefas([...tarefas, input]) //Spread Operador 
    setInput('')

  }

  return (
    <div>
      <h1>Cadastrando Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br />
        <input
          type="text"
          placeholder="Nome da Tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />

        <button>Cadastrar</button>
      </form>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li> //Toda lista deve ter um id/key para o react não se perder.
        ))}
      </ul>
    </div>
  );
}

export default App;

