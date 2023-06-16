const jwt = require("../utils/jwt");
const Io = require('../utils/Io');
const Users = new Io('./db/users.json');

const isAuth = (req,res,next) => {
  try {
    const {token} = req.cookies;
    console.log(token);
    if (!token) return res.redirect("/adminlogin");
    const verify = jwt.verify(token);
    req.user = verify;
    next();
  } catch (error) {
    res.redirect("/adminlogin");
  }
};

module.exports = isAuth;