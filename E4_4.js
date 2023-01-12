// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

// Общие требования:

// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.



// родительский класс электроприборов. По умолчанию выключены. 
const ElectricalAppliance = new Object(
    {
        power: 0,
        plugIn: function () {
            console.log(`Прибор ${this.name} включен`);
            return true;
        },
        unPlug: function () {
            console.log(`Прибор ${this.name} выключен`);
            return true;
        },
        showPower: function () {
            console.log(`${this.power} W`);
        }
    }
)

// создадим электроприборы. Комп, лампа и фен. Каждому прибору добавим по дополнительному свойству. 
// начнем с компа. 
const Comp = Object.create(ElectricalAppliance);
Comp.name = 'Комп';

Comp.power = 75; 
Comp.size = function () {
    size = 24;
    console.log(`Диагональ экрана ${size} дюймов`);
}

// теперь лампа
const Lamp = Object.create(ElectricalAppliance);
Lamp.name = 'Лампа';

Lamp.power = 12; 
Lamp.lumen = function () {
    lumen = 100;
    console.log(`Светимость лампы ${lumen} люменов`);
}

// и фен
const HairDryer = Object.create(ElectricalAppliance);
HairDryer.name = 'Фен';

HairDryer.power = 60;
HairDryer.heat = function() {
    heat = 130
    console.log(`Фен нагрелся до ${heat} градусов`)
}

// включаем электроприборы при помощи булевых значений и считаем, сколько они потратят энергии.
// например, включим комп и фен, а лампу выключим
const collection = [Lamp, Comp, HairDryer];
let item = 0;
const sumPower = function () {
    Lamp.plugIn = false;
    Comp.plugIn = true;
    HairDryer.plugIn = true;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].plugIn === true) {
            item += collection[i].power;
        }
    }
    console.log(`Потрачено электроэнергии ${item}`);
}

sumPower();
