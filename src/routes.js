import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Erro from "./pages/Erro";
import Produto from  "./pages/Produto";
import Header from "./components/Header";
import StyledComponent from "./pages/StyledComponent";

const Routes = () => { //Utilizando o React Route Dom v5
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/> {/* exact={true} ou exact, é um atributo que vai renderizar somente a página especifica */}
            <Switch> {/* Ele vai fazer com que apenas uma página seja executado. */}
                <Route exact path="/sobre" component={Sobre}/>
                <Route exact path="/contato" component={Contato}/>
                <Route exact path="/produto/:id" component={Produto}/>
                <Route path="/styled" component={StyledComponent}/>
                <Route path="*" component={Erro}/> {/* Rota de fallback/erro, tem que ser sempre a ultima */}
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;

// import { BrowserRouter, Route, Routes as Router} from "react-router-dom";
// const Routes = () => { //Utilizando o React Route Dom v7
//     return(
//         <BrowserRouter>
//             <Router>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/sobre" element={<Sobre/>}/>
//             </Router>
//         </BrowserRouter>
//     )
// }
