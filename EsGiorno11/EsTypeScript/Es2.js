var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var consumi = [];
var Automobile = /** @class */ (function () {
    function Automobile(velocita, ruote, cilindrata, alimentazione) {
        this.velocita = velocita;
        this.ruote = ruote;
        this.cilindrata = cilindrata;
        this.alimentazione = alimentazione;
    }
    Automobile.prototype.accellera = function () {
        if (this.velocita >= 0 && this.velocita <= 150) {
            this.velocita += 5;
        }
        console.log(this.velocita);
        return this.velocita;
    };
    Automobile.prototype.frena = function () {
        if (this.velocita >= 0) {
            this.velocita -= 5;
        }
        console.log(this.velocita);
        return this.velocita;
    };
    Automobile.prototype.sterzaADx = function () {
        console.log("hai sterzato a destra");
    };
    Automobile.prototype.sterzaASx = function () {
        console.log("hai sterzato a sinistra");
    };
    return Automobile;
}());
var AutomobileEcologica = /** @class */ (function (_super) {
    __extends(AutomobileEcologica, _super);
    function AutomobileEcologica(velocita, ruote, cilindrata, alimentazione, consumosu110km) {
        var _this = _super.call(this, velocita, ruote, cilindrata, alimentazione) || this;
        _this.consumosu110km = consumosu110km;
        return _this;
    }
    AutomobileEcologica.prototype.consumoIstantaneo = function () {
        var consumo = (this.velocita * this.consumosu110km) / 100;
        consumi.push(consumo);
        console.log(consumo);
        return consumo >= 0 ? consumo : 0;
    };
    AutomobileEcologica.prototype.consumoMedio = function () {
        var result = 0;
        if (consumi.length > 0) {
            for (var i = 0; i < consumi.length; i++) {
                result += consumi[i];
            }
            result = result / consumi.length;
        }
        console.log(result);
        return result;
    };
    return AutomobileEcologica;
}(Automobile));
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
