import { useParams } from "react-router-dom";

export default function Produto(){
    const { id } = useParams();

    return(
        <header>
            <h2>Produto {id}</h2>
        </header>
    )
}