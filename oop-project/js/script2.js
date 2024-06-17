class Person {
    constructor(age) {
        this.age = age;
    }

    father() {
       return new Person(50);
    }
    son() {
        return new Person(18);
    }
}

let person = new Person();

let father = person.father();
let son = person.son();

document.getElementById("son").innerHTML = (`Children Age: ${son.age}` );
document.getElementById("father").innerHTML = (`Father Age: ${father.age}`);
