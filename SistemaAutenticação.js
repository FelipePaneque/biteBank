/*
Ser autenticavel significa ter a Função autenticar;

duck type;
*/

export class SistemaAutenticação{
    static login(autenticado , senha){
        if(SistemaAutenticação.ehAutenticavel(autenticado)){
             return autenticado.autenticar(senha);
        }
       return false;
    }

    static ehAutenticavel(autenticado){
        return "autenticar" in autenticado && autenticado.autenticar instanceof Function ;
}
}