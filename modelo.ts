interface Funcionario {
    nome: string;
    salarioBruto: number;
    valorTotalHorasExtra: number;
    faixaDescontoINSS: number;
    valorDescontoINSS: number;
    horaExtra: number;
    faixaDescontoIR: number;
    valorDescontoIR: number;
    salarioLiquido: number;
}
class Funcionario {
    constructor() {}
    
    private dadosFuncionarios = {} as Funcionario;

    setNome(novoNome: string){
        this.dadosFuncionarios.nome = novoNome;
    }
    setSalarioBruto(novoSalarioBruto: number){
        this.dadosFuncionarios.salarioBruto = novoSalarioBruto;
    }
    setValorTotalHorasExtra(novoValorTotalHorasExtra: number){
        this.dadosFuncionarios.valorTotalHorasExtra = novoValorTotalHorasExtra;
    }
    setFaixaDescontoINSS(novoFaixaDescontoINSS: number){
        this.dadosFuncionarios.faixaDescontoINSS = novoFaixaDescontoINSS;
    }
    setValorDescontoINSS(novoValorDescontoINSS: number){
        this.dadosFuncionarios.valorDescontoINSS = novoValorDescontoINSS;
    }
    setHoraExtra(novoHoraExtra: number){
        this.dadosFuncionarios.horaExtra = novoHoraExtra;
    }
    setFaixaDescontoIR(novoFaixaDescontoIR: number){
        this.dadosFuncionarios.faixaDescontoIR = novoFaixaDescontoIR;
    }
    setValorDescontoIR(novoValorDescontoIR: number){
        this.dadosFuncionarios.valorDescontoIR = novoValorDescontoIR;
    }
    setSalarioLiquido(novoSalarioLiquido: number){
        this.dadosFuncionarios.salarioLiquido = novoSalarioLiquido;
    }
    //
    getNome(): string {
        return this.dadosFuncionarios.nome;
    }
    getSalarioBruto(): number {
        return this.dadosFuncionarios.salarioBruto;
    }
    getValorTotalHorasExtra(): number{
        return this.dadosFuncionarios.valorTotalHorasExtra;
    }
}

function modelo(nome: string, salarioBruto: number, horasExtras: number) {
    console.log(nome);
    console.log(salarioBruto);
    console.log(horasExtras);
    const funcionario = new Funcionario();
    funcionario.setNome(nome);
    funcionario.setSalarioBruto(salarioBruto);
    console.log(funcionario.getNome());
    console.log(funcionario.getSalarioBruto());
}

modelo(process.argv[2], process.argv[3], process.argv[4]);