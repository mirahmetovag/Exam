const {v4: uuid} = require('uuid');

class Service {
    constructor (serviceName, image) {
        this.id = uuid();
        this.serviceName = serviceName;
        this.image = image;
    }
}

module.exports = Service;