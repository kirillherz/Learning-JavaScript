function Animal() {
    console.log("Animal");
    this.runMsg = "run animal: ";
}
Animal.prototype.run = function () {
    console.log(this.runMsg);
};

