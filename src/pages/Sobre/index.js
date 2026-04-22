import { Link } from "react-router-dom"
export default function Sobre(){
    return(
        <div>
            <h1>Bem-vindo a página Sobre</h1>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}