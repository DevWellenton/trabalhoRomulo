var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.dadosFuncionarios = {};
    }
    Funcionario.prototype.setNome = function (novoNome) {
        this.dadosFuncionarios.nome = novoNome;
    };
    Funcionario.prototype.getNome = function () {
        return this.dadosFuncionarios.nome;
    };
    return Funcionario;
}());
function modelo(nome, salario, horasExtras) {
    console.log(nome);
    console.log(salario);
    console.log(horasExtras);
    var funcionario = new Funcionario();
    funcionario.setNome(nome);
    console.log(funcionario.getNome());
}
modelo(process.argv[2], process.argv[3], process.argv[4]);
