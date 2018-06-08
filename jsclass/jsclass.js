class Clothes {
    constructor (name, likes) {
        this._name = name;
        this._likes = likes;
        this._cost = 300;
    }



get name() {
    return this._name;
}

get likes() {
    return this._likes;
}

incrementLikes() {
    this._likes++;
}

price(num) {
    this._cost = num;
    console.log(`cost of the bag is ${this._cost}`); 

}


}

var MichaelKors = new Clothes("Michael Kors", 11);
console.log (MichaelKors.name);
console.log(MichaelKors.likes);
MichaelKors.incrementLikes();
console.log(MichaelKors.likes);
MichaelKors.price(350);

class Designers extends Clothes {
    constructor(name,likes,description) {
        super(name,likes);
        this._description = description;
    }
    get description() {
        return this._description;
    }
}

var popularDesigner = new Designers ("Calvin Klein",104,"New and Colorful");
popularDesigner.incrementLikes();
console.log(popularDesigner.name);
console.log(popularDesigner.likes);
console.log(popularDesigner.description);
