const {Router} = require("express");

const isAuth = require("../middlewares/isAuth.middleware");

const {
    getAllFeedbacks,
    createFeedback,
    deleteFeedback
} = require('../controllers/feedbacks.controller.js');

const router = Router();

router.get("/admin/feedbacks", getAllFeedbacks);
router.post("/admin/addfeedback", createFeedback);
router.post("/admin/deletefeedback", deleteFeedback);

module.exports = router;