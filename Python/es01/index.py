nome = ""
somma = 0
while not nome:    
    nome = input("Inserisci il tuo nome")

print(f"Ciao {nome}")

numeri = input("Inserisci dei numeri separati da spazi")  

lista = numeri.split(" ")

print(lista)

for idx in lista:
    numero = int(idx)
    somma += numero

print(f"La somma dei numeri che hai inserito è {somma}")
