"use strict";
exports.__esModule = true;
exports.modelo = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.nome = "";
        this.salarioBruto = 0;
        this.horasExtras = 0;
        this.valorTotalHorasExtra = 0;
        this.faixaDescontoINSS = 0;
        this.valorDescontoINSS = 0;
        this.faixaDescontoIRRF = 0;
        this.valorDescontoIRRF = 0;
        this.salarioLiquido = 0;
    }
    Funcionario.prototype.calcularHorasExtras = function () {
        console.log("calculando Horas Extras:");
        var valorHora = (this.salarioBruto / 200) * 1.5;
        this.valorTotalHorasExtra = valorHora * this.horasExtras;
        console.log("valor de horas extras: " + this.valorTotalHorasExtra);
    };
    Object.defineProperty(Funcionario.prototype, "salarioComHoras", {
        get: function () {
            return this.salarioBruto + this.valorTotalHorasExtra;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.calcularINSS = function () {
        console.log("calculando INSS:");
        var aliquotas = [
            { limite: 1212, taxa: 7.5 / 100 },
            { limite: 2427.35, taxa: 9 / 100 },
            { limite: 3641.03, taxa: 12 / 100 },
            { limite: 7087.22, taxa: 14 / 100 },
        ];
        var descontados = 0;
        for (var _i = 0, aliquotas_1 = aliquotas; _i < aliquotas_1.length; _i++) {
            var aliquota = aliquotas_1[_i];
            var aliquotaLimite = aliquota.limite;
            var aliquotaTaxa = aliquota.taxa;
            if (this.salarioComHoras > aliquotaLimite) {
                this.valorDescontoINSS += (aliquotaLimite - descontados) * aliquotaTaxa;
                descontados = aliquotaLimite;
            }
            else {
                this.valorDescontoINSS += (this.salarioComHoras - descontados) * aliquotaTaxa;
                descontados = this.salarioComHoras;
            }
        }
        this.faixaDescontoINSS = (this.valorDescontoINSS * 100) / this.salarioComHoras;
        console.log("valor de desconto de INSS: " + this.valorDescontoINSS);
        console.log("faixa de desconto do INSS: " + this.faixaDescontoINSS);
    };
    Funcionario.prototype.calcularIRRF = function () {
        console.log("calculando IRRF:");
        var aliquotas = [
            { limite: 1903.98, taxa: 0, dedutivel: 0 },
            { limite: 2826.65, taxa: 7.5 / 100, dedutivel: 142.80 },
            { limite: 3751.05, taxa: 15 / 100, dedutivel: 354.80 },
            { limite: 4664.68, taxa: 22.5 / 100, dedutivel: 636.13 },
            { limite: Number.MAX_SAFE_INTEGER, taxa: 27.5 / 100, dedutivel: 869.36 }
        ];
        for (var _i = 0, aliquotas_2 = aliquotas; _i < aliquotas_2.length; _i++) {
            var aliquota = aliquotas_2[_i];
            var aliquotaTaxa = aliquota.taxa;
            if (this.salarioComHoras < aliquota.limite && this.valorDescontoIRRF === 0) {
                this.valorDescontoIRRF += ((this.salarioComHoras - this.valorDescontoINSS) * aliquotaTaxa) - aliquota.dedutivel;
                this.faixaDescontoIRRF = aliquotaTaxa * 100;
            }
        }
        console.log("valor de desconto de IRRF: " + this.valorDescontoIRRF);
        console.log("faixa de desconto do IRRF: " + this.faixaDescontoIRRF);
    };
    Funcionario.prototype.calcularSalarioLiquido = function () {
        console.log("calculando salário líquido:");
        this.salarioLiquido = this.salarioComHoras - this.valorDescontoINSS - this.valorDescontoIRRF;
        console.log("salário líquido: " + this.salarioLiquido);
    };
    return Funcionario;
}());
function modelo(nome, salarioBruto, horasExtras) {
    var funcionario = new Funcionario();
    funcionario.nome = nome;
    funcionario.salarioBruto = salarioBruto;
    funcionario.horasExtras = horasExtras;
    funcionario.calcularHorasExtras();
    funcionario.calcularINSS();
    funcionario.calcularIRRF();
    funcionario.calcularSalarioLiquido();
    console.log(funcionario);
}
exports.modelo = modelo;
modelo(process.argv[2], parseFloat(process.argv[3]), parseFloat(process.argv[4]));
