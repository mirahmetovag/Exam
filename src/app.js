require('dotenv/config');
const express = require ('express');
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(cookie());
app.use(fileUpload());
app.use(router);
app.use(express.urlencoded({extended: true}));

app.use(express.static(process.cwd() + "/src/public"));
app.use(express.static(process.cwd() + "/uploads"));

app.set("view engine", "ejs");
app.set("views", "src/views");

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})