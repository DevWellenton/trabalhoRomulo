interface Funcionario {
    nome: string;
    salario: number;
    horaExtra: number;
}

class Funcionario {
    constructor() {}
    
    private dadosFuncionarios = {} as Funcionario;

    setNome(novoNome: string){
        this.dadosFuncionarios.nome = novoNome;
    }
    getNome(): string {
        return this.dadosFuncionarios.nome;
    }
}

function modelo(nome, salario, horasExtras) {
    console.log(nome);
    console.log(salario);
    console.log(horasExtras);
    const funcionario = new Funcionario();
    funcionario.setNome(nome);
    console.log(funcionario.getNome());
}

modelo(process.argv[2], process.argv[3], process.argv[4]);