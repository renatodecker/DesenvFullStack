class ValidarCPF{
    static TAMANHO_CPF = 11;
    static validar(tamanho){
        if (tamanho == this.TAMANHO_CPF){
            return true;
        }
        return false;
    }
}

console.log(ValidarCPF.validar('04583147902'.length));