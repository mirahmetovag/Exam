const {Router} = require("express");

const isAuth = require("../middlewares/isAuth.middleware");

const {
    getAllServices,
    getASingleService,
    createService,
    deleteService
} = require ('../controllers/services.controller')

const router = Router();

router.get("/admin/services", getAllServices);
router.get("/admin/service", getASingleService);
router.post("/admin/addservice", createService);
router.post("/admin/deleteservice", deleteService);

module.exports = router;