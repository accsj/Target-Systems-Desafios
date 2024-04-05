# 2° Desafio, eu optei por fazer orientado a objetos então criei uma classe Chamada Fibonacci, onde dentro do metódo init eu defini os valores previous, current como os dois números anteriores e o valor next como a soma dos dois números. Sendo assim no metódo nextValue ele realiza a atualização dos valores em forma de loop. E por último o metódo Verifier que verifica se o número inserido pelo usuário é pertencente ou não a sequência.

class Fibonacci:
    def __init__(self):
        self.previous = 0
        self.current = 1
        self.next = self.previous + self.current

    def nextValue(self):
        new_value = self.current + self.next
        self.previous = self.current
        self.current = self.next
        self.next = new_value

    def verifier(self, number):
        while self.current < number:
            self.nextValue()
        return self.current == number

def IsOrNot():
    fibonacci = Fibonacci()
    number = int(input("Digite um número para realizar a verificação: "))
    
    if fibonacci.verifier(number):
        print(f"\nO número {number} pertence à sequência.\n")

    else:
        print(f"\nO número {number} não pertence à sequência\n")

if __name__ == "__main__":
    IsOrNot();