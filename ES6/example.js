class Animal {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return "Aninaml named " + this.name;
    }
}

class Duck extends Animal {
    quack() {
        console.log("quack");s
    }
}