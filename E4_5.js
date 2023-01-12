// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.



// родительский класс электроприборов. По умолчанию выключены. А включать их можно в розетку на 220

class ElectricalAppliance {
    static equipmentType = 'Devices';

    constructor(options) {
        this.title = options.title
        this.power = options.power
    }

    plugIn() {
        this.pluggedIn = true
        this.power = this.power
    }

    plugOff() {
        this.pluggedIn = false
        this.power = 0
    }

    showPower() {
        return `Электроэнергия: ${this.power} Вт`
    };

    get powerInfo() {
        return this.power + 'W'
    };

    set powerInfo(newValue) {
        this.power = newValue;
    };
};



// теперь наши приборы. Комп, лампа и фен 
// Комп
class Comp extends ElectricalAppliance {
    static name = 'Комп'

    constructor(options) {
        super(options)
        this.size = options.size
        this.power = options.power
    };

    showSize () {
        return `Диагональ монитора ${this.title} ${this.size} дюймов`
    }
};

const LocalMachine = new Comp(
    {
        title: 'Домашняя машина',
        power: 75,
        screen: 24,
    }
)

// Лампа
class Lamp extends ElectricalAppliance {
    static name = 'Лампа'

    constructor(instance) {
        super(instance)
        this.lumen = instance.lumen
    }

    showLight() {
        return `Светимость ${this.title} ${this.lumen} люменов`
    }

}

const TableLamp = new Lamp(
    {
        title: 'Настольная лампа',
        power: 12,
        lumen: 100,
    }
)

// и фен

class HairDryer extends ElectricalAppliance {
    static name = 'Фен'

    constructor(options) {
        super(options)
        this.heat = options.heat
    }

    showHeat() {
        return `${this.title} нагрелся до ${this.heat} градусов`
    }

}

const SmallHairDryer = new HairDryer(
    {
        title: 'Маленький фен',
        power: 60,
        heat: 130,
    }
)


// считаем потребление электроэнергии
devices = [LocalMachine, TableLamp, SmallHairDryer]


const sumPower = function () {
    let item = 0
    for (let i = 0; i < devices.length; i++) {
            item += devices[i].power;
            console.log(`${devices[i].title}, power: ${devices[i].power} W`)
    }
    console.log(`Потрачено электроэнергии: ${item} W`);
}

console.log('Вкл: комп и лампа')
LocalMachine.plugIn()
TableLamp.plugIn()
sumPower();

console.log('Выкл: комп. Вкл: фен')
LocalMachine.plugOff()
SmallHairDryer.PlugIn()
sumPower();

console.log('Выкл: лампа и фен')
TableLamp.PlugOff()
SmallHairDryer.plugOff()
sumPower();




// // создадим электроприборы. Лампа, комп и фен
// class Lamp {
//     constructor(name, amperage, luminous) {
//         this.name = name;
//         this.luminous = luminous;
//         this.amperage = amperage;
//         this.devicePower = Math.round(this.voltage * amperage);
//     }
//     getInfo() {
//         console.log(`Параметры осветительного прибора ${this.name}`);
//         for (const key in this) {
//             if (typeof this[key] !== "function") { 
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//         console.log('\n'); 
//     }
// }
// Lamp.prototype = new ElectricalAppliance() 

// class Comp {
//     constructor(name, amperage, size) {
//         this.name = name;
//         this.size = size + " Дюймов";
//         this.amperage = amperage;
//         this.devicePower = Math.round(this.voltage * amperage);
//     }
//     getInfo() {
//         console.log(`Параметры компьютера ${this.name}`);
//         for (const key in this) {
//             if (typeof this[key] !== "function") { // чтобы вместе с параметрами не выводил методы экземпляра
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//         console.log('\n'); // для читабельности данных в консоли
//     }
// }

// Comp.prototype = new ElectricalAppliance()

// // и фен. Имя, амперы и температура
// class HairDryer {
//     constructor(name, amperage, heat) {
//         this.name = name;
//         this.sheat = heat;
//         this.amperage = amperage;
//         this.devicePower = Math.round(this.voltage * amperage);
//     }
// }
// HairDryer.prototype = new ElectricalAppliance(); 
// HairDryer.prototype.getInfo = function() { 
//     console.log(`Параметры компьютера ${this.name}`);
//     for (const key in this) {
//       if (typeof this[key] !== "function") { 
//         console.log(`${key}: ${this[key]}`);
//       }
//     }
// }

// HairDryer.prototype = new ElectricalAppliance()
