import { Link } from "react-router-dom"

export default function Contato(){
    return(
        <div>
            <h1>Bem vindo a página Contatos</h1>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}