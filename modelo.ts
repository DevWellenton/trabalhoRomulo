
class Funcionario {
    constructor() { }
    nome: string = ""
    salarioBruto: number = 0
    horasExtras: number = 0
    valorTotalHorasExtra: number = 0
    faixaDescontoINSS: number = 0
    valorDescontoINSS: number = 0;
    faixaDescontoIRRF: number = 0
    valorDescontoIRRF: number = 0
    salarioLiquido: number = 0

    calcularHorasExtras() {
        console.log("calculando Horas Extras:");

        const valorHora = (this.salarioBruto / 200) * 1.5;
        this.valorTotalHorasExtra = valorHora * this.horasExtras;

        console.log("valor de horas extras: " + this.valorTotalHorasExtra);
    }

    get salarioComHoras() {
        return this.salarioBruto + this.valorTotalHorasExtra;
    }

    calcularINSS() {
        console.log("calculando INSS:");

        const aliquotas = [
            { limite: 1212, taxa: 7.5 / 100 },
            { limite: 2427.35, taxa: 9 / 100 },
            { limite: 3641.03, taxa: 12 / 100 },
            { limite: 7087.22, taxa: 14 / 100 },
        ];
        let descontados = 0;

        for (const aliquota of aliquotas) {
            if (this.salarioComHoras > aliquota.limite) {
                this.valorDescontoINSS += (aliquota.limite - descontados) * aliquota.taxa;
                descontados = aliquota.limite;
            } else {
                this.valorDescontoINSS += (this.salarioComHoras - descontados) * aliquota.taxa;
                descontados = this.salarioComHoras;
            }
        }
        this.faixaDescontoINSS = (this.valorDescontoINSS * 100) / this.salarioComHoras

        console.log("valor de desconto de INSS: " + this.valorDescontoINSS);
        console.log("faixa de desconto do INSS: " + this.faixaDescontoINSS);

    }

    calcularIRRF() {
        console.log("calculando IRRF:");

        const aliquotas = [
            { limite: 1903.98, taxa: 0, dedutivel: 0 },
            { limite: 2826.65, taxa: 7.5 / 100, dedutivel: 142.80 },
            { limite: 3751.05, taxa: 15 / 100, dedutivel: 354.80 },
            { limite: 4664.68, taxa: 22.5 / 100, dedutivel: 636.13 },
            { limite: Number.MAX_SAFE_INTEGER, taxa: 27.5 / 100, dedutivel: 869.36 }];

        for (const aliquota of aliquotas) {
            if (this.salarioComHoras < aliquota.limite && this.valorDescontoIRRF === 0) {

                this.valorDescontoIRRF += ((this.salarioComHoras - this.valorDescontoINSS) * aliquota.taxa) - aliquota.dedutivel;
                this.faixaDescontoIRRF = aliquota.taxa * 100;
            }
        }
        console.log("valor de desconto de IRRF: " + this.valorDescontoIRRF);
        console.log("faixa de desconto do IRRF: " + this.faixaDescontoIRRF);
    }

    calcularSalarioLiquido() {
        console.log("calculando salário líquido:");
        this.salarioLiquido = this.salarioComHoras - this.valorDescontoINSS - this.valorDescontoIRRF;
        console.log("salário líquido: " + this.salarioLiquido);
    }
}

export function modelo(nome: string, salarioBruto: number, horasExtras: number) {
    // console.log(nome);
    // console.log(salarioBruto);
    // console.log(horasExtras);
    const funcionario = new Funcionario();
    funcionario.nome = nome;
    funcionario.salarioBruto = salarioBruto;
    funcionario.horasExtras = horasExtras;


    funcionario.calcularHorasExtras();
    funcionario.calcularINSS();
    funcionario.calcularIRRF();
    funcionario.calcularSalarioLiquido();
    console.log(funcionario);
}

modelo(process.argv[2], parseFloat(process.argv[3]), parseFloat(process.argv[4]));