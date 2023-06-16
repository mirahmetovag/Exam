const {Router} = require("express");

const {login} = require("../controllers/auth.controller");
const {adminLogin} = require('../controllers/admin.controller')

const router = Router();

router.post('/login', login);
router.get('/adminlogin', adminLogin);

module.exports = router;