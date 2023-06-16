const {Router} = require("express");

const {
    getRequests,
    createRequest,
} = require('../controllers/requests.controller');

const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.get("/admin/requests", getRequests);
router.post("/admin/addrequest", createRequest);

module.exports = router;