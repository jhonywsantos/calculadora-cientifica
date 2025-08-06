// Lógica da calculadora (versão corrigida)
function calcular(opcao, valores) {
    try {
        if (opcao >= "1" && opcao <= "5") {
            const num1 = parseFloat(valores.num1);
            const num2 = parseFloat(valores.num2);
            
            if (isNaN(num1) || isNaN(num2)) {
                throw new Error("Valores inválidos!");
            }

            switch(opcao) {
                case "1": return num1 + num2;
                case "2": return num1 - num2;
                case "3": return num1 * num2;
                case "4": 
                    if (num2 === 0) throw new Error("Divisão por zero!");
                    return num1 / num2;
                case "5": return Math.pow(num1, num2);
                default: throw new Error("Operação inválida!");
            }
        } 
        else if (opcao === "6") {
            const num = parseFloat(valores.num);
            if (isNaN(num)) throw new Error("Valor inválido!");
            if (num < 0) throw new Error("Não existe raiz de número negativo!");
            return Math.sqrt(num);
        } 
        else if (opcao === "7") {
            const num = parseInt(valores.num);
            if (isNaN(num)) throw new Error("Valor inválido!");
            if (num < 0) throw new Error("Não existe fatorial de número negativo!");
            if (num > 170) throw new Error("Número muito grande para cálculo de fatorial!");
            
            let resultado = 1;
            for (let i = 2; i <= num; i++) {
                resultado *= i;
            }
            return resultado;
        }
        else {
            throw new Error("Operação inválida!");
        }
    } catch (error) {
        throw error;
    }
}