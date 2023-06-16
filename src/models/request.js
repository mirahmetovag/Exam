const {v4: uuid} = require('uuid');

class Request {
    constructor (userName, phoneNumber, email, message, userId) {
        this.id = uuid();
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.message = message;
        this.userId = userId;
    }
}

module.exports = Request;