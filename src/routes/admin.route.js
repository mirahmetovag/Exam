const {Router} = require("express");
const {
  adminPage,
  adminServices,
  adminFeedbacks,
  adminRequests,
  adminLogin,
} = require("../controllers/admin.controller");

const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.get('/admin/', adminPage);
router.get('/adminservices',  adminServices);
router.get('/adminfeedbacks',  adminFeedbacks);
router.get('/adminrequests', adminRequests);
router.get('/adminlogin', adminLogin);


module.exports = router;