import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div>
            <h1>Bem vindo a rota Home</h1>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}