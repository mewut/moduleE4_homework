// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.


const obj = {
    Japan: 'Arasaka',
    NUSA: 'Militech', 
    China: 'Kang Tao',
}

let str = 'Arasaka'

const str_and_obj = (a, s) => {
    for (let key in a) {
        if (key == s) {
            return true
        }
    }
    return false
}

let result = str_and_obj(obj, str)
console.log(result)
