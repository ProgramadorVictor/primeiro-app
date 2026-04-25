import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-color: ${props => props.cor || "#000000"}
    /* background-color: ${({cor}) => (cor ? cor : '#000000')}; */
    /* background-color: ${props => (props.cor ? props.cor : '#000000')}; */
`
/* `#${props.cor}` */
// ${(cor) => (cor ? cor : 'black')}

export const Head = styled.header`
    width: 100%;
    height: 70px;
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: center;
`




//     <div className="container">
//         <header className="header">
//             <a className="titulo">Projketo Styled</a>
//         </header>
//         <h1>Bem vindo ao sistema!</h1>
//     </div>