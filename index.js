import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionários/Gerente.js"
import {Diretor} from "./Funcionários/Diretor.js"
import {SistemaAutenticação} from "./SistemaAutenticação.js"



const diretor = new Diretor ("Rodrigo" , 10000 , 333444555);
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Bruno" , 5000 , 444555666);
gerente.cadastrarSenha("1234")

const cliente1 = new Cliente("Lélis" , 111222333444 , "456");

const gerenteEstaLogado = SistemaAutenticação.login(gerente , "1234");
const diretorEstaLogado = SistemaAutenticação.login(diretor , "123456");
const cliente1EstaLogado = SistemaAutenticação.login(cliente1 , "456");

console.log( diretor)