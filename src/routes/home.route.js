const {Router} = require("express");
const {
  home,
  about,
  services,
  blog,
  contact
} = require("../controllers/home.controller");

const router = Router();

router.get('/home', home);
router.get('/about', about);
router.get('/services', services);
router.get('/blog', blog);
router.get('/contact', contact)


module.exports = router;