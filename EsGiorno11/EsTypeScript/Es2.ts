var consumi: number[] = [];

class Automobile {
  velocita: number;
  ruote: number;
  cilindrata: number;
  alimentazione: string;
  constructor(
    velocita: number,
    ruote: number,
    cilindrata: number,
    alimentazione: string
  ) {
    this.velocita = velocita;
    this.ruote = ruote;
    this.cilindrata = cilindrata;
    this.alimentazione = alimentazione;
  }
  accellera(): number {
    if (this.velocita >= 0 && this.velocita <= 150) {
      this.velocita += 5;
    }
    console.log(this.velocita);
    return this.velocita;
  }
  frena(): number {
    if (this.velocita >= 0) {
      this.velocita -= 5;
    }
    console.log(this.velocita);
    return this.velocita;
  }

  sterzaADx(): void {
    console.log("hai sterzato a destra");
  }

  sterzaASx(): void {
    console.log("hai sterzato a sinistra");
  }
}

class AutomobileEcologica extends Automobile {
  consumosu110km: number;
  constructor(
    velocita: number,
    ruote: number,
    cilindrata: number,
    alimentazione: string,
    consumosu110km: number
  ) {
    super(velocita, ruote, cilindrata, alimentazione);
    this.consumosu110km = consumosu110km;
  }

  consumoIstantaneo(): number {
    var consumo = (this.velocita * this.consumosu110km) / 100;
    consumi.push(consumo);
    console.log(consumo);
    return consumo >= 0 ? consumo : 0;
  }

  consumoMedio(): number {
    let result: number = 0;
    if (consumi.length > 0) {
      for (let i: number = 0; i < consumi.length; i++) {
        result += consumi[i];
      }
      result = result / consumi.length;
    }
    console.log(result);
    return result;
  }
}

var auto1 = new Automobile(56, 4, 1000, "benzina");
var auto2 = new AutomobileEcologica(65, 4, 2000, "hybrid", 30);

console.log(auto1);

auto1.accellera();
auto1.accellera();
auto1.frena();
auto1.sterzaADx();
auto1.sterzaASx();

console.log(auto2);

auto2.accellera();
auto2.accellera();
auto2.frena();
auto2.sterzaADx();
auto2.sterzaASx();
auto2.consumoIstantaneo();
auto2.consumoIstantaneo();
auto2.consumoIstantaneo();
auto2.consumoMedio();
