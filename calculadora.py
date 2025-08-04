import math

def menu():
    print("\n=== Calculadora Científica ===")
    print("1. Soma")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Divisão")
    print("5. Potência")
    print("6. Raiz Quadrada")
    print("7. Fatorial")
    print("0. Sair")

def calcular():
    while True:
        menu()
        opcao = input("Escolha uma operação (0-7): ")
        
        if opcao == "0":
            print("Até logo!")
            break
        
        if opcao in ["1", "2", "3", "4", "5"]:
            num1 = float(input("Digite o primeiro número: "))
            num2 = float(input("Digite o segundo número: "))
        
        if opcao == "1":
            print(f"Resultado: {num1 + num2}")
        elif opcao == "2":
            print(f"Resultado: {num1 - num2}")
        elif opcao == "3":
            print(f"Resultado: {num1 * num2}")
        elif opcao == "4":
            print(f"Resultado: {num1 / num2}")
        elif opcao == "5":
            print(f"Resultado: {num1 ** num2}")
        elif opcao == "6":
            num = float(input("Digite um número: "))
            print(f"Resultado: {math.sqrt(num)}")
        elif opcao == "7":
            num = int(input("Digite um número inteiro: "))
            print(f"Resultado: {math.factorial(num)}")
        else:
            print("Opção inválida!")

if __name__ == "__main__":
    calcular()
