import { useState } from "react";

function App(){
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [email, setEmail] = useState();
  const [user, setUser] = useState({});
  
  function handleRegister(e){
    e.preventDefault(); //Prevenindo o comportamento padrão do form

    alert('Usuario registrado com sucesso');

    setUser({ //Trabalhando com um objeto, associando as variaveis ao objeto.
      nome: nome,
      idade: idade,
      email: email
    });
  }

  return (
    <div>
      <h1>Cadastrando Usuario</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br />
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br />

        <label>E-mail:</label><br />
        <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label>Idade:</label><br />
        <input
        type="number"
        placeholder="Digite seu idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        /><br />

        <button>Enviar</button>
      </form>

      <div>
        <span>Bem vindo: {user.nome}</span><br />
        <span>Idade: {user.idade}</span><br />
        <span>Email: {user.email}</span><br />
      </div>
    </div>
  );
}

export default App;

