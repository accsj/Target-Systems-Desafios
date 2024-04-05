class InversorDeFrase:
    def __init__(self, string):
        self.string = string

    def inverter(self):
        string_invertida = ""

        for i in range(len(self.string) - 1, -1, -1):
            string_invertida += self.string[i]

        return string_invertida

string_original = str(input(f"Digite uma frase: "))
inversor = InversorDeFrase(string_original)
string_invertida = inversor.inverter()
print(f"String original: {string_original}")
print(f"String invertida: {string_invertida}")