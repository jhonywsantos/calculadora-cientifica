from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    data = request.get_json()
    opcao = data['opcao']
    
    try:
        if opcao in ["1", "2", "3", "4", "5"]:
            num1 = float(data['num1'])
            num2 = float(data['num2'])
            
            if opcao == "1":
                resultado = num1 + num2
            elif opcao == "2":
                resultado = num1 - num2
            elif opcao == "3":
                resultado = num1 * num2
            elif opcao == "4":
                resultado = num1 / num2
            elif opcao == "5":
                resultado = num1 ** num2
                
        elif opcao == "6":
            num = float(data['num'])
            resultado = math.sqrt(num)
            
        elif opcao == "7":
            num = int(data['num'])
            resultado = math.factorial(num)
            
        else:
            return jsonify({"error": "Opção inválida!"}), 400
            
        return jsonify({"resultado": resultado})
        
    except ValueError as e:
        return jsonify({"error": "Valor inválido inserido!"}), 400
    except ZeroDivisionError:
        return jsonify({"error": "Divisão por zero não permitida!"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)