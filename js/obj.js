class oldSpice {
    color = null;
    smell = null;
    number = null;
    owner = null;

    constructor(color, smell, number, owner) {
        this.color = color;
        this.smell = smell;
        this.number = number;
        this.owner = owner;
    }

    open() {
        console.log('Open ' + this.owner);
    }

    close() {
        console.log('Close ' + this.owner);
    }

    rotate() {
        console.log('Rotate ' + this.owner);
    }

    info() {
        console.log('Color ' + this.color);
        console.log('Smell ' + this.smell);
        console.log('Number ' + this.number);
        console.log('Owner ' + this.owner);
    }
}


let lizasOldSpice = new oldSpice('red', 'good', 456554, 'Liza');
let bohdanOldSpice = new oldSpice('yellow', 'bad', 477878787, 'Bohdan');
let kateOlgSpice = new  oldSpice('green','normal', 46454258, 'Kate');

lizasOldSpice.info();


class Knife {
    color = null;
    length = 0;
    type = null;

    constructor(color, length, type){
    this.color = color;
    this.length = length;
    this.type = type;
    }
    cut(thing) {
       console.log('Knife of color ' +this.color+ ' cut '+thing);
    }
    break() {
        console.log('This knife was break')
    }
    changeLength(length) {
        console.log('Old length was ' +this.length)
        this.length = length 
        console.log('New length is ' +length);
    }

}

let myKnife = new Knife('blue', 10, 'ceramic');
let yourKnife = new Knife('violet', 25, 'tree');

myKnife.break();
yourKnife.changeLength(46);
myKnife.cut('cheese');
yourKnife.cut('cucumber');

class People {
    /**класс  человек
     * @param {String} fio по формату "Фамилия Имя Отчество"
     * @param {String} birthay день рождения по формату "24.11.1998"
     * @param {String}numbers "номер" , если больше 2х номеров, то по формату "номер1 , номер2"
     * @param {Number} room комната
     */
    constructor(fio, birthay, numbers = "", room ="") { /**="" означает что строка может быть пустая */
        let name = fio.toLowerCase().split(" ");
        this.name = {};
      this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
      this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
      this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

      let date = birthay.split(".");
      this.date = {};
      this.date.d = +date[0]
      this.date.m = +date[1]
      this.date.y = +date[2]

      this.numbers = numbers.split(" , ")

      this.room = +room
    }
    static month = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    getBirthay() {
        return  `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
    }
    /**Вывести имя_фамилия_отчество.расширение
     * @param {String} extention расширение, например "jpg", "png"
     * @param {String} для названия изображения
     */
    getImgSrc(extention) {
        return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`
    }
    /**
     * Вывести все номера телефона или только первый номер 
     * @param {Boolean} allNumbers если true то все номера , если false только первый номер 
     * @param {String} Строка формата "8800014564, 948756459"
     */
    getNumberList(allNumbers) {
        if (this.numbers.length ==0 || this.numbers[0].length ==0)
        return undefined
        if(allNumbers) {
            return this.numbers.join(", ")
        } else {
            this.numbers[0]
        }
    }
}
let people1 = new People("Овчинникова Елизавета Васильевна", "04.12.2000", "9986, 7413, 5902", 542)
console.log(people1);
people1.getBirthay();
people1.getImgSrc("jpg");

/**Работа с Dom (Document Object Model(все элементы html)) деревом */