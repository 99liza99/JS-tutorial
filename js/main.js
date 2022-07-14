let name = 30; /*Создание переменной*/
let str = '150px';
let str1 = '150px';
let str2 = '200px';
let str3 = '200px';
let boolean = true;
let boolean2 = false;
let color = 'yellow';
console.log('Text');
console.log(5 + 7); /*если хотим чтобы числа сложились, то пишем без ковычек. Comment: cntr+slash*/


/*
let liza = document.getElementById('test');

liza.addEventListener('click', event => {
    if (boolean == true) {
        liza.style.backgroundColor = color;
        liza.style.width = str2;
        liza.style.height = str3;
        boolean = false;
        color = 'red';
    } else {
        liza.style.backgroundColor = color;
        liza.style.width = str;
        liza.style.height = str1;
        boolean = true;
        color = 'yellow';
    }
});

let a = 9
a++

9
let a = 9
++a
10
let a = 9
a = a + 1
10
let a = 9
a += 1
10
let a = 9
a += 1 // a = a+1 // a++
10
let a = 9
a += 5
14
let a = 9
a += 5 // a = a + 5
14
let a = 9
a -= 4
5
let a = 9
a -= 4 // a = a -4
5
/*Канкотинация (склеивание строк)
"str"+"str1"
"strstr1"
5+"str"
"5str"
*/
let bohdan = 'hi bohdan';
console.log('length = ' + bohdan.length); /**считает количество символов */
console.log(bohdan[4]);
console.log(bohdan.slice(0, 4)) /**hi b */
console.log(bohdan.toUpperCase());/**все большие буквы */
console.log(bohdan.toLowerCase());
let string1 = ' string ';
console.log(string1.toLocaleUpperCase().trim());/**trim-забирает лишние пробелы вначале и вконце */
console.log(bohdan[0].toLocaleUpperCase() + string1.slice(1))
/**false and true */
console.log(true && false);/**&& и */
console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log(true || false);/**|| или */
console.log(false || false);
console.log(false || true);
console.log(true || true);
console.log(!true);
console.log(!false);
/**null and unfinded */
/*let a;
a = null;
/**Шаблонные строки, Случайные числа, Округление чисел */
let a = 7;
console.log(`Text
on two line ${a}`); /**Такие ковычки помогают нам писать на несколько строк и самое главное что внутри этих ковычек сразу можно встраивать переменную*/
/**В консоле вставилась переменная a которая равна 7 */
/**library Math */
console.log(Math.random()); /**При помощи Math.random генерируется любое рандомное число от 0 до 1 (невключительно 1) */
console.log(Math.max(1, 3, 2, 0, 5, 4)); /**Показывает в консоле максимальное число из предложеных нами */
console.log(Math.pow(5, 2));/**pow используется для возведения числа в степень, то есть 5 во второй степени будет равен 25*/
console.log(Math.sqrt(16));/**Извлекаем корень квадратный от 16 */
/**Округление чисел */
console.log(Math.floor(3.2));/**Округляет число к меньшему, то есть к 3 и в консоле высвечивает 3 */
console.log(Math.ceil(3.2));  /**Округляет число к большему, то есть 4 */
console.log(Math.floor(3.45327865489458321));
console.log(Math.round(3.2));/**Округляет к ближайшему целому,то есть 3.2 = 3; 3.9 = 4 */
console.log(Math.round(3.5));/**4 */
console.log(Math.trunc(3.5));/**Все что после точки убирает и оставляет только целую часть (3) */
console.log(4.758.toFixed(2));/**Округляется до 2-х знаков после точки (4.76) */
console.log(4.758.toFixed(1));/**4.8 */
/**"4"+2    выйдет "42" , произошла конкатинация, а если написать +"4"+2 происходит числовая опперация и в консоле высвечивает 6*/
console.log(+"4" + 2);/**Строка превратилась в числовую опперацию */
let b = 5;
console.log(+b + 5);
/**function */


function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
console.log(isNumber(5));/**В консоле высвечивает тру, так как 5 является числом. Эта функция применяется когда нужно распознать число это или нет */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
console.log(isNumber("good"));/**false */
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);/**Эта функция отображает рандомные числа от одного до пяти включительно. */
}
console.log(randomInteger(1, 5));

/**Массивы */

let arg = [5, 2, 6, "str2", false]
console.log(arg.length)/**В консоле высвечивается число-индекс,которое указывает количество элементов в скобках */
console.log(arg[2])/**Отображвется элемент в скобке,который под индексом 2(и это 6) */
console.log(arg[4]);/**false */
let arr = [5, 2, "str1", true]
console.log(arr.length)
arr[1] = "str0"/**Таким образом мы поменяли элемент, находящийся под индексом 1 на другой(строковый) */
console.log(arr)
arr[4] = 7
console.log(arr);/**Мы добавили ещё один индекс */

let matrix = [
    [1, 2, 4],
    [4, 7, 9],
    [0, 1, 3] /**Получились массивы,которые имеюют свои индексы, но и элементы внутри кажного массива имеют свои индексы. К примеру нам нужно извлечь число 9 из 1-го массива... */
]
console.log(matrix[1][2]); /**Первое число в кв. скобках это индекс массива, а второе - индкс элемента в самом массиве ??????????????????? */
/**Очередь (Массивы) shift and push */
let arr12 = [5, 2, "str1", true]
console.log(arr12.shift())/**Выводится нулевой индекс - 5! */
console.log(arr12.shift())/**2 */
console.log(arr12.shift())/**str1 */

console.log(arr12.push(9))/**Добавление индекса в !конец! то есть остались true и 9*/

console.log(arr12.pop())
console.log(arr12)/**stack заирает 9 */

console.log(arr12.unshift(6))/**unshift добавляет в начало очереди элемент */
console.log(arr12)

/**Выводы: shift - первый,а точнее нулевой элемент забирают из очереди; push - ставит последним элементом в очередь; stack/pop - берёт последний элемент с очереди(стопка книг ;) */
let arr2 = [6, 4, "str2", true]
let arr3 = [1, 2, 3]
console.log(arr2.concat(arr3));/**arr3 присоединился к arr2 и стал в конец очереди. Произошла конкатинация */
/**Так же мы можем перести этот образовавшийся массив в другой массив. Например
 * let arr4 =  arr2.concat(arr3);
 */
console.log(arr2.indexOf("str2")) /**str2 находится под индексом 2 и в консоле вывелась 2. indexOf показывает индекс элемента */

console.log(arr2.join())/**Элементы выстраиваются в ряд */
console.log(arr2.join(""))/**Все элементы склеиваются */
console.log(arr2.join("-"))/**Элементы через дефис. Можно ставить любой символ. Вплоть до пробела */

/**Splice удаляет элементы и символы */
console.log(arr2.splice(2, 1))/*Первое число в скобках это номер элемента, а второе - сколько символов нужно удалить*/
console.log(arr2.splice(1, 0, 7, 5, "Text"))/**добавились ещё эти элементы */
console.log(arr2)
arr2.splice(2, 1, "New str")/**Второй индекс заменён на New str */
console.log(arr2)
arr2.splice(2, 1, "New str 1", true)
console.log(arr2)

arr2.slice(-1) /**Показывается посл элемент */

console.log(arr2.includes("Text"))/** includes показывает или есть элемент в массиве true/false*/
console.log(arr2.reverse) /**Элементы в массиве стают в обратный порядок */

"Ivan,Petr,Sasha".split(", ") /**Обычная строка превращается в массив */
"Ivan".split("")/**пустые ковычки и получилось ["I","v","a","n"] */

/**Объекты */
let obj = {
    "color": "yellow", /**color это ключ, а yellow его значение */
    "numbers": ["8888", "7777"],
    "checked": true

}
console.log(obj["color"])/**Выбивает значение ключа "yellow". Альтернативный вариант: obj.color */
console.log(obj.numbers[1])/**Достаём из массива. 7777 obj[numbers][1] */
/**Чтобы узнать какие ключи есть в объекте */
console.log(Object.keys(obj))/**Мы получаем массив со всми нашими ключами: ["color"], ["numbers"], ["cheked"] */
obj["name"] = "Ivan";/**Добавилось новое значение в объект (ключ name со значением Ivan) */
console.log(obj)
/**Массив всегда упорядочен!Объект нет */
/**Создавание однотипных объектов внутри массива */
let obj1 = [
    {
        "background": "violet",
        "number": ["5555", "9999"],
        "checked": true
    },
    {
        "background": "green",
        "number": ["3126", "151"],
        "checked": false
    },
    {
        "background": "blue",
        "number": ["9087", "32587"],
        "checked": true
    }
]
console.log(obj1[0].number[1])
console.log(obj1[1].checked)

/**Диалоговые окна,Условия, Тернарный оператор, Переключатель Switch*/
/**Диалоговые окна */
// alert("window") /**Пояляется окно, как только нажать "OK" весь остальной код прогрузится */
/*let age = prompt("How old are you?")
if(age !=null) {
alert("My age is " + age )/*promt - с полем ввода; если нажмём отмена, то появится ответ null. Чтобы этого не произошло мы используем условный оператор if*/
/**} else {
    alert("you pressed cancel")/**else(иначе) применяется если выше перечисленное не истина*/
//  }
//  if (confirm("Delete your account?")) {
// alert("Deleted")
//  } else {
//  alert("Canceled")
//  } 
// сonfirm("Delete your account?") ? alert("Deleted") : alert("Canceled");
/**Если действие простое с одним действием, то можно записывать так. Если двоеточие - false. Аналог верхнего кода */


/** let age = prompt("Введите ваш возраст?")
if(age < 18) {
    alert("Мой возраст меньше 18")
} else if(age > 18) {
    alert("Мне больше 18 лет")
} else if(age == 18) {
    alert("Мне 18 лет")
}*/

/**Switch */
// let age = prompt("Введите ваш возраст?")
// switch(true) {
//     case age > 18:
//         alert("Мне больше 18 лет")   
//         break;/**break пишем для того чтоб выйти из данного кейса, то есть переключиться */
//     case age < 18  && age > 0:
//         alert("Мне меньше 18 лет")
//         break;
//     case age == 18:
//         alert("Мне 18 лет")  
//         break;  
//     default:
//         alert("Неправильный возраст")    /**default если ни одно условий из вышеперичисленных не выполнено */
// }

/**Цыклы (5)*/
let count = 0
while (count < 10) {
    console.log(count); /**Идёт непрерывный рост чисел возле 0 в консоле. И этот цикл никогда не завершится */
    /**или if(count==4) {
     *  break;} Цикл завершится на числе 4*/
    count++; /**В консоле высвечиваются числа от 0 до 9 включительно. Мы остановили неприрывный цикл */
}
let count1 = 5;
do {
    console.log(count1);
} while (count1 > 7);

for (let i = 0; i < 10; i++) {
    console.log(i)
}                              /**Выводятся цыфры от 0 до 9 */
for (let i1 = 0; i1 < 10; i1 += 2) {  /**Таким образом выводятся только чётные числа от 0 до 10 */
    console.log(i1)
}
/**Работа циклов с массивами и объектами*/
let array = [5, 7, 9, 1, 0];
for (let i = 0; i < array.length; i++) {
    console.log(array[i] * 2) /**Число под индексом 0 умножается на 2, то есть 5*2=10; и так по очереди 7*2.... */
}
let arr4 = [6, 4, 7, 9, 0];
for (let item of arr4) { /**item = числам массива(6,4,7,9,0) только по очереди*/
    console.log(item * 2)    /**элементы по очереди умножаются на 2 */
}
let objt = {
    "name": "Petr",
    "age": 25,
    "number": 88009944654
}
for (let key in objt) {
    console.log(key)     /**В консоле выведутся все ключи данного объекта: "name","age","number" */
}
for (let key in objt) {
    console.log(objt[key]) /**В консоле выведутся все данные ключей: "Petr",25,88009944654 */
}
for (let key in objt) {
    console.log('Ключ ' + key + ', Значение ' + objt[key]) /**В консоле выведутся все ключи и их значения                  !!!!!!!!!!! Error*/
}
/**Цикл for in нельзя использовать к массивам так как он возвращает строковые    */
let arr45 = [7, 1, 6, 8, 2];
arr45.forEach(function (item, index, array) {
    console.log(`Элемент:${item}
    Индекс:${index}
    Массив:${array}`)

})
let people = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Misha" },
    { id: 3, name: "Iryna" },
    { id: 4, name: "Kate" },
]
let p = people.find(function (item) {
    if (item.id == 3) return item /**Возвращаем этот элемент */
})
console.log(p) /**Таким образом мы вытянули все данные под id 1 */

let people1 = [
    { id: 5, name: "Bohdan" },
    { id: 6, name: "Anastasija" },
    { id: 7, name: "Liza" },
    { id: 8, name: "Anna" },
]
let p1 = people1.findIndex(function (item) {
    if (item.id == 5) return item
})
console.log(p1) /**Таким образом высветился индекс id 5, который равен 0 */

let people2 = [
    { id: 9, name: "Petr" },
    { id: 10, name: "Nadja" },
    { id: 11, name: "Veronica" },
    { id: 12, name: "Tanja" },
]
let p2 = people2.filter(function (item) {
    if (item.id < 11) return item
})
console.log(p2);/**Таким образом высветились все элементы и их значения до id 11 */

let arr5 = [9, 5, 8, 3, 6];
let newArr = arr5.map(function (item) {
    return item * 3
})
console.log(newArr)/**Все элементы массива умножились на 3 */

/**задачa №1 Отобразить все чётные числа в массиве от 0 до 20*/
let arr6 = []
for (let y = 0; y < 20; y += 2) {
    arr6.push(y)
}
console.log(arr6);
/**задачa №2  Отобразить все  числа в массиве от 30 до 0 по убыванию с уменьшением на 3*/
let arr7 = []
for (let y = 30; y > 0; y -= 3) {
    arr7.push(y)
}
console.log(arr7);
/**задачa №3 Нужно создать массив, элемент которого будет = его индексу */
let arr8 = []
for (let y = 0; y < 10; y++) {
    arr7.push(y * y) /**либо  arr7.Math.pow(y,2)   Таким образом мы возводим значение в квадрат !!!!!!!!!!!!!!Errrorrr*/
    console.log(arr7);
}
/*задачa №4 Нужно найти в массиве кол-во чётных элементов */
let arr9 = [7, 4, 9, 0, 6, 2, 5, 8, 1, 20, 47, 19]
let count30 = 0
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] % 2 == 0) {
        count++;
    }
}
console.log(count) /**Чётных элементов отобразилось 16; % значит что делится (на 2) */

/**Функции и решения 6 задач */
function printText(name, age) {
    console.log("Hello My name is " + name + ", Age: " + age + " ")
}

printText("Petr", 15); /**Только после этого функция вызвалась. В консоле : "Hello My name is Petr, Age: 15 */
printText("Maria", 18);
printText("Ivan", 25);

let name_1 = "Pavel";
let age_1 = 22;
printText(name_1, age_1);/**Можно и так передавать данные */

let res = printText(name_1, age_1)
console.log(res);/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

let obj_1 = {
    name: "Kate",
    age: 17,
    hello() {                /**метод объекта. Hello это название функции  */
        console.log(this.name); /**Можно было так же написать: "("My name is" +this.name)
                                 this отображает то что мы хотим вызвать. В данном случаи это значение name */
    }
}
obj_1.hello();
console.log(obj_1.age); /**Конечно же в консоле высвечивается только 17, так как мы вызвали не весь метод, а только age */
/**property - это свойство (name, age) 
   method "hello"    - метод    */

/**Сортировка массивов */
let mass = [1, 5, 2, 25, 16, 14, 49, 3, 1, 7]
mass.sort(function (a, b) {
    if (a == b) return 0;
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(mass);
/**Или можно таким способом отсортировать массивы по возрастанию: */
let mass1 = [2, 7, 9, 15, 22, 8, 6, 38]
mass.sort(function (a, b) {
    return (a - b)
})
console.log(mass1);
/**Числа Фибоначчи */
function fibonachi(count) {
    let fib = [];
    for (let i = 0; i < count; i++) {
        if (i == 0) {
            fib[i] = 1;
        }
        else if (i == 1) {
            fib[i] = 2
        }
        else {
            fib[i] = fib[i - 2] + fib[i - 1];
        }
    }
    return fib;
}

let f1 = fibonachi(5)
let f2 = fibonachi(13)
let f3 = fibonachi(11)
console.log(f1)
console.log(f2)
console.log(f3)
/**Факториал числа */
function factorial(n) {
    let fact = 1;
    if (n == 0) return fact;
    for (let i = 1; i <= n; i++) {
        fact * i;
    }
    return fact;
}
let ar = factorial(0) /**факториал для 0=1, для 3=6, для 5=120 */
console.log(ar)
let ar1 = factorial(3)
console.log(ar1)
let ar2 = factorial(5)
console.log(ar2)
/**Факториалы чисел(примеры):
 * 1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Факториал натурального числа – это число, умноженное на "себя минус один" , затем на "себя минус два" , и так далее до 1 . Факториал n обозначается как n!
 */




/**Доработки из TouTube */
/**Циклы */
let num = 0;
while (num < 5) {
    console.log(num);
    num++

}     /**В консоле в столбец выводятся цифры от 0 до 5 невкл.! После while  мы пишем условие где указываем что число должно быть не больше 5, но и не меньше нуля,потому что num=0. num++ пишем чтобы каждый раз прибавлялось на единицу . Такой один круг называется итерация.*/
let num1 = 5;
while (num1) {
    console.log(num1)
    num1--;             /**5,4,3,2,1*/
}
/**Цикл for:
 1) Выполняется начало - let numm = 0
 
 */






for (let numm = 0; num < 5; num++) {
    console.log(num);
}
let addAndMul = function (num) {
    num += "";
    let add = 0, mul = 1;
    for (let i = 0; i < num.length; i++) {
        add += +num[i]
        mul *= num[i]
    }
    return {
        "Сумма": add,
        "Произведение": mul
    }
}
console.log(addAndMul(795));/**Сумма 795 это значит: 7+9+5=21; Произведение 795 это значит: 7*9*5=315 */

/**Перевёртывание чисел задом наперёд: 3486 на 6843 */
function reverse(number) {
    number += "";
    let reverseNumber = "";
    for (i = number.length - 1; i >= 0; i--) {
        reverseNumber += number[i]
    }
    return + reverseNumber
}
console.log(reverse(3486));/**6843 */

function numberrr(chislo) {
    chislo += "";
    let chet = 0, nechet = 0;
    for (let i = 0; i < chislo.length; i++) {
        if (chislo[i] % 2 == 0) chet++;
        else nechet++;
    }
    return {
        "Чётные числа": chet,
        "Нечётные числа": nechet,
    }
}
console.log(numberrr(3486));
/**Чётные числа: 3, Нечётные числа: 1 */

/**Задачи */
/**задача№1   Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.*/
console.log(
    [1, 4, 3, 0, 4, 5, 4]
        .filter(element => !(element % 2))
        .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
) /**Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа налево), сводя его к одному значению. А метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента:

начальное значение (или значение от предыдущего вызова callback);
значение текущего элемента;
текущий индекс;
массив, по которому происходит итерация. */
function duck(nnn) {
    nnn += "";
    let x = 0, y = 0;
    let multy = 0;
    let multy2 = 0;
    for (i = 0; i < nnn.length; i++) {
        if (nnn[i] % 2 == 0) {
            multy += parseInt(nnn[i]);
            x++
        }
        else {
            multy2 += parseInt(nnn[i]);
            y++
        }
    }
    return {
        "True": x,
        "Faulse": y,
        "multy": multy,
        "multy2": multy2
    }
}
console.log(duck(5987614));

let action = function (act) {
    act += "";
    let first = 0, second = 1;
    for (i = 0; i < act.length; i++) {
        first += parseInt(act[i])/**Со строки превращает в числа */
        second *= act[i]
    }
    return {
        "Add": first,
        "Mull": second,
    }
}
console.log(action(78546));
console.log(action(52));

// function randomNumber() {
//     let number = Math.floor(Math.random() * 100);
//     for (let count = 1; count <= 10; count++) {
//         let result = +prompt(`Попытка №${count}, Введите число: `)  /**+ возле promt означает что вместо строки нам нужно получить число */
//         if (result == number) {
//             return alert(`Вы угадали число! Попыток: ${count}, Число: ${number}`)
//         }
//         else if (result < number) {
//             alert(`Ваше число: ${result}  меньше загаданного!`)
//         }
//         else if (result > number) {
//             alert(`Ваше число: ${result} больше  загаданного!`)
//         }
//         else {
//             return alert(`Вы не угадали число! Число: ${number}`)
//         }
//     }

// } 
// randomNumber(); Алгоритм бинарного поиска!!!!*/

/**Дата и время */
let date = new Date()
console.log(date);  /**показывает настоящую дату (Точка отсчёта: 1 января, 1970г(time stemp))*/
let date2 = new Date(60000)/**60тыс. милисекунд это 60сек */
console.log(date2);
let date3 = new Date("2021-05-25T10:51:12.941") /**Сначала год,потом месяц(две цифры), потом день, Т отделяет дату и время. 10 часов, 51 минута, 12 секунд, 941 милисекунда */
console.log(date3);
console.log(Date.parse("2021-05-25T10:51:12.941"));/**В консоле высвечивается длинное число, это количество милисекунд которое прошло с  1 января, 1970г (time stemp)*/
let date4 = new Date(2015, 6, 21, 10, 51, 54, 458)/**Ещё можно записать дату отдельными компонентами */
console.log(date4);
console.log(date4.getFullYear());/**2015 */
console.log(date4.getMonth());/**6, месяц январь это 0 месяц, а декабрь 11 */
console.log(date4.getDate());
console.log(date4.getHours());
console.log(date4.getMinutes());
console.log(date4.getSeconds());
console.log(date4.getMilliseconds());
console.log(date4.getDay());/**день недели по счёту. 0 это воскресенье; 6 это суббота */
console.log(date4.getTime());/**time stemp */
console.log(date4.getTimezoneOffset());/**Возвращает разницу в минутах между местным часовым поясом и UTC -  стандарт, по которому общество регулирует часы и время. Отличается на целое количество секунд от атомного времени и на дробное количество секунд от всемирного времени UT1.*/

let date5 = new Date(2015, 1, 30)
console.log(date5);              /**Неккоректные даты. 1 месяц февраль. Может быть высокостным, а может быть невысокостным.Вышло 2 марта, так как в феврале того года          было   28дней */
let date6 = new Date(2015, 1, 28)
date6.setDate(date6.getDate() + 2)
console.log(date6);  /**Прибавили 2 дня и получилось тоже 2-е марта с помощью установки даты  setDate*/

let date7 = Date.now(new Date())
for (let i = 0; i < 100; i++) {
    console.log(0)
}
let date8 = Date.now(new Date())
console.log(date8 - date7);  /**в консоле вывелась 11. Цикл исполнился за 11 миллисекунд. Таким образом мы можем высчитать длительность прохождения цикла */

let date9 = new Date(2014, 11, 31, 12, 30, 0)
let options = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}
console.log(date9.toLocaleString("ru", options)); /**"ru" - язык на котором мы хотим чтобы вывелась дата, если на английском, то "en-US" */

/**Документация кода на JSDoc и исключения */

/**
 * Функция преобразует строку с временем в минуты
 * @param {string} time время в виде строки, например "02:08". Может быть в диапазоне от "00:00" до "23:59".
 * @return {number} целое число в минутах. Например, time="02:08" вернёт 128.
 */
function timeToMinute(time) {

}
timeToMinute()

/**Исправление ошибок */
function timeToMinute_1(time) {
    try {
        let hour = +time.split(":")[0]   /**если б мы  не указали нолик, то вывелся бы целый массив */
        let minute = +time.split(":")[1]
        if (!(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59)) {
            throw new RangeError("Аргумент должен быть в формате 'hh:mm' - 'hh' должен быть от 0 до 23, а 'mm' должен быть от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ':'")
        }
        return hour * 60 + minute   /**таким образом часы конвертируем в минуты(128min) */
    } catch (error) {
        console.log(error)
    }

}
console.log(timeToMinute_1("02:08")) /**вывелась двойка */

/**Ориентированное программирование */
/**Наследование! */
let user = {
    name: "Anna",
    age: 18,
    /**_proto_: admin*/
}  /**И если развернуть   __proto__ данного объекта там появится ещё объект admin*/
console.log(user);/**В консоль высвечивается данный объект и всегда будет внизу писать prototype object в нём содержаться f (функции) данного объекта,которые мы соответственно можем вызвать. Эти ф-ции называются методами данного объекта */
console.log(user.toLocaleString());
let admin = {
    rules: 777,
    isAdmin() {
        console.log("Я админ, мои права" + this.rules)
    }
}
/**Мы с помощью прототипов,которые связывают ф-ции можем обращаться u1.isAdmin() и нам выбьет: "Я админ, мои права 777"  */
/**console.log(user["ryles"])Не могу вытянуть значение ключа ryles               !!!!!!!!!!!!!!!!!!!!!!*/
function User(name, age) {
    this.name = name;
    this.age = age;
}                                            /**Данная ф-ция называется конструктором и чтобы отличать её
                                            от обычной ф-ции, то название лучше с большой буквы */
let u1 = new User("Petr", 23)
console.log(u1);   /**name: "Petr", age: 23  , то есть ключи и значения объеденились.  */
let u2 = new User("Kate", 17)
let u3 = new User("Bohdan", 23)
let u4 = new User("Maria", 19)
console.log(u2);
console.log(u3);
console.log(u4);

class Moderator extends User {
    addPost() {
        console.log('New powst')
    }
}  /** extends (унаследование класса) класс Moderator унаследует те же свойства что и*/



/**Классы (это шаблоны кода, которые легко нам позволяют создавать объекты) */
class User_1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myInfo() {
        console.log("Меня зовут" + this.name + ", мне " + this.age + "лет")
    }
}


function number5(n) {
    for(let i=0; i<n; i++)
    {
        console.log(i+1)
    }
}

number5(10);

function showMessage() {
    console.log("Massage")
}
showMessage();









































