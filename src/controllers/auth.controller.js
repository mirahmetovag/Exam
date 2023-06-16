const bcrypt = require("bcrypt");
const Io = require("../utils/io");
const Users = new Io("./database/users.json");
const User = require("../models/User");
const jwt = require("../utils/jwt");

const login = async (req,res) => {
    const {username, password} = req.body;
    console.log(username);
    const users = await Users.read();
    const findUser = users.find((user) => user.username == username && user.password == password);
    if (!findUser) {
      return res.redirect("/adminlogin");
    }
    const token = jwt.sign({userId: findUser.id});
    res.cookie("token", token);
    res.redirect("/admin");
}



module.exports = {
    login,
}