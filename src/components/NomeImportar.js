// function NomeImportar(props){ //Recebendo os props passado de um componente para outro
function NomeImportar({aluno, idade}){ //Desestruturando o objeto e recebendo apenas aluno
    return (
        <span>Bem-vindo: {aluno}, Idade: {idade}</span>
    );
}

export default NomeImportar;