function showOperation(opcao) {
    const operationForm = document.getElementById('operation-form');
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';
    
    let formHTML = '';
    
    switch(opcao) {
        case '1':
            formHTML = `
                <h3>Soma</h3>
                <div class="input-group">
                    <label for="num1">Primeiro número:</label>
                    <input type="number" id="num1" step="any" required>
                </div>
                <div class="input-group">
                    <label for="num2">Segundo número:</label>
                    <input type="number" id="num2" step="any" required>
                </div>
                <button class="calculate-btn" onclick="executarCalculo('1')">Calcular</button>
            `;
            break;
            
        case '2':
            formHTML = `
                <h3>Subtração</h3>
                <div class="input-group">
                    <label for="num1">Primeiro número:</label>
                    <input type="number" id="num1" step="any" required>
                </div>
                <div class="input-group">
                    <label for="num2">Segundo número:</label>
                    <input type="number" id="num2" step="any" required>
                </div>
                <button class="calculate-btn" onclick="executarCalculo('2')">Calcular</button>
            `;
            break;
            
        case '3':
            formHTML = `
                <h3>Multiplicação</h3>
                <div class="input-group">
                    <label for="num1">Primeiro número:</label>
                    <input type="number" id="num1" step="any" required>
                </div>
                <div class="input-group">
                    <label for="num2">Segundo número:</label>
                    <input type="number" id="num2" step="any" required>
                </div>
                <button class="calculate-btn" onclick="executarCalculo('3')">Calcular</button>
            `;
            break;
            
        case '4':
            formHTML = `
                <h3>Divisão</h3>
                <div class="input-group">
                    <label for="num1">Numerador:</label>
                    <input type="number" id="num1" step="any" required>
                </div>
                <div class="input-group">
                    <label for="num2">Denominador:</label>
                    <input type="number" id="num2" step="any" required>
                </div>
                <button class="calculate-btn" onclick="executarCalculo('4')">Calcular</button>
            `;
            break;
            
        case '5':
            formHTML = `
                <h3>Potência</h3>
                <div class="input-group">
                    <label for="num1">Base:</label>
                    <input type="number" id="num1" step="any" required>
                </div>
                <div class="input-group">
                    <label for="num2">Expoente:</label>
                    <input type="number" id="num2" step="any" required>
                </div>
                <button class="calculate-btn" onclick="executarCalculo('5')">Calcular</button>
            `;
            break;
            
        case '6':
            formHTML = `
                <h3>Raiz Quadrada</h3>
                <div class="input-group">
                    <label for="num">Número:</label>
                    <input type="number" id="num" step="any" min="0" required>
                </div>
                <button class="calculate-btn" onclick="executarCalculo('6')">Calcular</button>
            `;
            break;
            
        case '7':
            formHTML = `
                <h3>Fatorial</h3>
                <div class="input-group">
                    <label for="num">Número inteiro:</label>
                    <input type="number" id="num" step="1" min="0" required>
                </div>
                <button class="calculate-btn" onclick="executarCalculo('7')">Calcular</button>
            `;
            break;
    }
    
    operationForm.innerHTML = formHTML;
}

function executarCalculo(opcao) {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';
    
    try {
        let valores = {};
        let resultado;
        
        if (opcao >= '1' && opcao <= '5') {
            valores.num1 = document.getElementById('num1').value;
            valores.num2 = document.getElementById('num2').value;
            
            if (!valores.num1 || !valores.num2) {
                throw new Error("Por favor, preencha todos os campos.");
            }
        } else if (opcao === '6' || opcao === '7') {
            valores.num = document.getElementById('num').value;
            
            if (!valores.num) {
                throw new Error("Por favor, preencha o campo.");
            }
        }
        
        resultado = calcular(opcao, valores);
        
        resultDiv.textContent = `Resultado: ${resultado}`;
        resultDiv.className = 'result';
        resultDiv.style.display = 'block';
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
        resultDiv.className = 'result error';
        resultDiv.style.display = 'block';
        console.error(error);
    }
}
