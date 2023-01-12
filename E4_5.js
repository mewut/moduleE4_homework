// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.



// родительский класс электроприборов. По умолчанию выключены. А включать их можно в розетку на 220

function ElectricalAppliance(name) {
    this.voltage = 220,
    this.plug = false 
}
// связь прототипами
// включение и выключение
ElectricalAppliance.prototype.socket = function(socket) { 
    if (socket === 'on') {
      this.plug = true;
    } else {
      this.plug = false;
    }
}

// потребление энергии включенным прибором
// умножим мощность прибора на время его работы. И на 0.01, чтобы переводить из амперов
ElectricalAppliance.prototype.energyConsumption = function(time) { 
    let energy = this.power * time * 0.01;
    console.log('Электроприбор ${this.name} за время работы ${time} потратил ${energy} кВт*ч');
}


// создадим электроприборы. Лампа, комп и фен
class Lamp {
    constructor(name, amperage, luminous) {
        this.name = name;
        this.luminous = luminous;
        this.amperage = amperage;
        this.devicePower = Math.round(this.voltage * amperage);
    }
    getInfo() {
        console.log(`Параметры осветительного прибора ${this.name}`);
        for (const key in this) {
            if (typeof this[key] !== "function") { 
                console.log(`${key}: ${this[key]}`);
            }
        }
        console.log('\n'); 
    }
}
Lamp.prototype = new ElectricalAppliance() 

class Comp {
    constructor(name, amperage, size) {
        this.name = name;
        this.size = size + " Дюймов";
        this.amperage = amperage;
        this.devicePower = Math.round(this.voltage * amperage);
    }
    getInfo() {
        console.log(`Параметры компьютера ${this.name}`);
        for (const key in this) {
            if (typeof this[key] !== "function") { // чтобы вместе с параметрами не выводил методы экземпляра
                console.log(`${key}: ${this[key]}`);
            }
        }
        console.log('\n'); // для читабельности данных в консоли
    }
}

Comp.prototype = new ElectricalAppliance()

// и фен. Имя, амперы и температура
class HairDryer {
    constructor(name, amperage, heat) {
        this.name = name;
        this.sheat = heat;
        this.amperage = amperage;
        this.devicePower = Math.round(this.voltage * amperage);
    }
}
HairDryer.prototype = new ElectricalAppliance(); 
HairDryer.prototype.getInfo = function() { 
    console.log(`Параметры компьютера ${this.name}`);
    for (const key in this) {
      if (typeof this[key] !== "function") { 
        console.log(`${key}: ${this[key]}`);
      }
    }
}

HairDryer.prototype = new ElectricalAppliance()
