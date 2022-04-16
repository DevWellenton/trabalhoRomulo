var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.dadosFuncionarios = {};
    }
    Funcionario.prototype.setNome = function (novoNome) {
        this.dadosFuncionarios.nome = novoNome;
    };
    Funcionario.prototype.setSalarioBruto = function (novoSalarioBruto) {
        this.dadosFuncionarios.salarioBruto = novoSalarioBruto;
    };
    Funcionario.prototype.setValorTotalHorasExtra = function (novoValorTotalHorasExtra) {
        this.dadosFuncionarios.valorTotalHorasExtra = novoValorTotalHorasExtra;
    };
    Funcionario.prototype.setFaixaDescontoINSS = function (novoFaixaDescontoINSS) {
        this.dadosFuncionarios.faixaDescontoINSS = novoFaixaDescontoINSS;
    };
    Funcionario.prototype.setValorDescontoINSS = function (novoValorDescontoINSS) {
        this.dadosFuncionarios.valorDescontoINSS = novoValorDescontoINSS;
    };
    Funcionario.prototype.setHoraExtra = function (novoHoraExtra) {
        this.dadosFuncionarios.horaExtra = novoHoraExtra;
    };
    Funcionario.prototype.setFaixaDescontoIR = function (novoFaixaDescontoIR) {
        this.dadosFuncionarios.faixaDescontoIR = novoFaixaDescontoIR;
    };
    Funcionario.prototype.setValorDescontoIR = function (novoValorDescontoIR) {
        this.dadosFuncionarios.valorDescontoIR = novoValorDescontoIR;
    };
    Funcionario.prototype.setSalarioLiquido = function (novoSalarioLiquido) {
        this.dadosFuncionarios.salarioLiquido = novoSalarioLiquido;
    };
    //
    Funcionario.prototype.getNome = function () {
        return this.dadosFuncionarios.nome;
    };
    Funcionario.prototype.getSalarioBruto = function () {
        return this.dadosFuncionarios.salarioBruto;
    };
    Funcionario.prototype.getValorTotalHorasExtra = function () {
        return this.dadosFuncionarios.valorTotalHorasExtra;
    };
    return Funcionario;
}());
function modelo(nome, salarioBruto, horasExtras) {
    console.log(nome);
    console.log(salarioBruto);
    console.log(horasExtras);
    var funcionario = new Funcionario();
    funcionario.setNome(nome);
    funcionario.setSalarioBruto(salarioBruto);
    console.log(funcionario.getNome());
    console.log(funcionario.getSalarioBruto());
}
modelo(process.argv[2], process.argv[3], process.argv[4]);
