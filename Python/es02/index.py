def somma(a):
    result = 0   
    x = a.split(" ")
    for i in x:
        numero = int(i)
        result += numero
    print(result)

def moltiplicazione(a):
    result = 1  
    x = a.split(" ")
    for i in x:
        numero = int(i)
        result *= numero
    print(result)    

def divisione(a, b):
    x = int(a)
    y = int(b)
    risultato = x // y
    resto = x % y
    print("Divisione intera:", risultato)
    print("Resto:", resto)

def concatena(a):
    risultato = ""
    x = a.split(" ")
    for i in x:
        risultato += i
    print(risultato)

while True:
    scelta = input("Scrivi: 1 per la somma, 2 per la moltiplicazione, 3 per la concatenazione, 4 per la divisione, -1 per uscire: ")

    if scelta == "-1":
        print("Hai scelto di uscire. Arrivederci!")
        break

    if scelta == "1":
        numeri = input("Inserisci i numeri che vuoi sommare, separati da spazi: ")
        if "-1" in numeri.split():
            print("Bentornato al menu iniziale.")
        else:
            somma(numeri)

    elif scelta == "2":
        numeri = input("Inserisci i numeri che vuoi moltiplicare, separati da spazi: ")
        if "-1" in numeri.split():
            print("Bentornato al menu iniziale.")
        else:
            moltiplicazione(numeri)

    elif scelta == "3":
        numeri = input("Inserisci i numeri che vuoi concatenare, separati da spazi: ")
        if "-1" in numeri.split():
           print("Bentornato al menu iniziale.")
        else:
            concatena(numeri)

    elif scelta == "4":
        numer01 = input("Inserisci il primo numero: ")
        numer02 = input("Inserisci il secondo numero: ")
        if "-1" in [numer01, numer02]:
            print("Bentornato al menu iniziale.")
        else:
            divisione(numer01, numer02)

    else:
        print("Opzione non valida. Riprova.")
