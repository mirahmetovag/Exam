const {v4: uuid} = require('uuid');

class Feedback {
    constructor (author, ocupation, image, text) {
        this.id = uuid();
        this.author = author;
        this.ocupation = ocupation;
        this.image = image;
        this.text = text;
    }
}

module.exports = Feedback;