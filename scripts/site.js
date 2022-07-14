var x = 5; //var - переменная доступна везде
let y = 4; //let - переменна доступна только в том блоке {...}
const z = 10; //const - переменная значение которй нельзя изменть

/** Условные операторы */
if (x >= 3) {//если больше или равно 3
    console.log('It more 3');
} else if (x >= 1) {// если меньше 3 но больше равно 1
    console.log('It more 1');
} else {//остальные случаи
    console.log('It less 1');
}


switch (true) {
    case x >= 3: console.log('It more 3'); break;//если больше или равно 3
    case x >= 1: console.log('It more 3'); break;// если меньше 3 но больше равно 1
    default: console.log('It less 1');//остальные случаи
}
/** Условные операторы */

/** Циклы */
console.log('Loop For');
for (let i = 0; i < 5; i++) {//Цикл от 0 до 5 (не включительно, потому что строго меньше 5)
    console.log(i);
}

console.log('Loop While');
var x = 0;
while (x != 5 || x == 3) {//Цикл "Пока" х не равен 5 или станет равным 3
    console.log(x);
    x++;
}

console.log('Loop Do While');

x = 0;
do {
    console.log(x);
    x++;
} while (x <= 5)//ЦИкл "пока" х не будет меньше или равно 5
/** Циклы */

/**  Функции */

function myFunction(name, age) {//myFunction - название функции. name, age - аргументы функции
    /** Тело функции */
    age += 10; // age = age +10;
    name += '!';
    console.log('My name is ' + name + '. I am ' + age + ' y. o.');
    /** Тело функции */
}

myFunction('Bohdan', 23);// Вызов функции с прамметрами 'Bohdan' и 23
myFunction('Liza', 21);// Вызов функции с прамметрами 'Liza' и 21
myFunction('Kate', 34);// Вызов функции с прамметрами 'Kate' и 34
myFunction('Oleg', 37);// Вызов функции с прамметрами 'Oleg' и 37
/**  Функции */

/** Классы */
class Phone {//Phone - названия класса
    brand = null;//перечень свойст класса
    model = null;
    price = 0;

    constructor(brand, model, price) {//конструктор по умолчнию задать свойства значнения по-умолчанию
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    infoOfPhone() {//Произвольная функция, в этом случае вывод самог себя
        console.log(this);
    }
}

class Case extends Phone {//класс Case наследуется от класса Phone и имеет теже свойсвта и функции что и класс Phone
    color = null;//свойства 
    constructor(brand, model, price, color) {//конструкотр по умолчанию (Если наследования то должен иметь миниму столько параметров сколько и родительский класс + количество текущего класса)
        super(brand, model, price);//вызов родительксого конструкотр по умолчанию с параметрами
        this.color = color;
    }

    setColor(newColor) {//Произвольная функция. В этом случае мы написали функнцию которая изменяет свойство текущего класса (цвет)
        this.color = newColor;//меням старый цвет на новый
        console.log('New color of case is' + this.color);
    }

}

var iPhone = new Phone('Apple', '12', 100);//Создаём экзмепляр классса Phone - объект Phone
var caseOfiPhone = new Case('Apple', '12', 100,'red');//Создаём экзмепляр классса Case - объект Case
iPhone.infoOfPhone();//Вызываем метод класса 
caseOfiPhone.infoOfPhone();// вызываем метод класса (Заметь, что в классе Case нету этого метода, но он есть в его родителе)
caseOfiPhone.setColor('yellow');//Вызываем метод класса с параметром нового цвета
/** Классы */

