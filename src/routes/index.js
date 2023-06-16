const auth = require('./auth.route');
const home = require('./home.route');
const requests = require('./requests.route');
const services = require('./services.route');
const admin = require('./admin.route');

module.exports = [auth, home, services, requests, admin];