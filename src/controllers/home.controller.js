const Io = require('../utils/Io');
const Feedbacks = new Io('./db/feedbacks.json');
const Services = new Io('./db/services.json');

const home = async (req,res) => {
    const feedbacks = await Feedbacks.read();
    const services = await Services.read();
    res.render('home', {feedbacks, services});
}

const about = async(req,res) =>{
    res.render('About')
}

const services = async(req,res) => {
    const services = await Services.read();
    res.render('Services', {services})
}

const blog = async(req,res) => {
    res.render('Blog')
}

const contact = async(req,res) => {
    res.render('Contact')
}

module.exports = {
    home,
    about,
    services,
    blog,
    contact
}