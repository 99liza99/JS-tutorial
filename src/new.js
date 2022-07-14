var x = 10;
var y = 20;
console.log(x + y);

const x2 = false;
if (x2 == true) {
    console.log('I`m girl')
}
else {
    console.log('I`m boy')
}

var h = 15;
switch (true) {
    case h > 20: console.log('A'); break;
    case h > 10: console.log('B'); break;
    default: console.log('C');
}

for (i = 2; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i)
    }
}

function numbers(n) {
    n = n * 10
    console.log(n)
}
numbers(5);

class Room {
    height = null;
    weight = null;

    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    infoRoom() {
        console.log(this)
    }
}
var roomHouse = new Room(200, 400);
roomHouse.infoRoom();


function obmen(val, currency) {
    let usd = 35;
    let eur = 40;

    if (currency == 'USD') {
        console.log(val * usd)
    } else if (currency == 'EUR') {
        console.log(val * eur)
    }
    else {
        console.log('Is not ' + currency)
    }
}
obmen(30, 'EUR');
obmen(20, 'USD');
obmen(20, 'rub');

var pl = 25;
switch (true) {
    case pl > 30: console.log('A'); break;
    case pl < 30: console.log('B'); break;
    default: console.log('H')
}

class People {
    male = null;
    country = null;
    profession = null;

    constructor(male, country, profession) {
        this.male = male;
        this.country = country;
        this.profession = profession;
    }
    infoPeople() {
        console.log(this)
    }

}
var infoAboutPeople = new People('women', 'Niederlands', 'teacher')
infoAboutPeople.infoPeople();
var infoAboutPeople = new People('men', 'Spain', 'manajer')
infoAboutPeople.infoPeople();
var infoAboutPeople = new People('women', 'France', 'designer')
infoAboutPeople.infoPeople();

function checkAge(age) {
    if (age >= 18) {
        console.log('adult')
    }
    else if (age >= 16) {
        console.log('teenager')
    }
    else if (age <= 14) {
        console.log('child')
    }
}
var age = 17;
checkAge(age);

function word(str) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            count++;
        }
    }
    console.log(count)
}
var str = 'liza'
word(str);

function word2(string) {
    let i = 0;
    while (string[i] != 'h') {
        i++;
    }
    console.log('"h" in string ', string, ' = ', i);
}
word2('bohdan');
word2('help');
word2('month');


function getAgeByGender(gender){
    if(gender == 'm'){
        return 60;
    }else if (gender == 'w'){
        return 50;
    }
}

var x = getAgeByGender('w');
console.log(x);

