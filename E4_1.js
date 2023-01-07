// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

const corps = {
    Japan: 'Arasaka',
    NUSA: 'Militech', 
    China: 'Kang Tao',
}

const CorpWar = (x) => {
    for (let key in x) {
        if (x.hasOwnProperty(key)) {
            console.log(key);
        }
      }
    }

CorpWar(corps)
