const Io = require('../utils/Io');
const Feedbacks = new Io('./db/feedbacks.json');
const Services = new Io('./db/services.json');
const Requests = new Io('./db/requests,json');

const adminPage = async (req,res) => {
    const feedbacks = await Feedbacks.read();
    const services = await Services.read();
    res.render('admin', {feedbacks, services});
}

const adminServices = async(req,res) =>{
    const services = await Services.read();
    res.render('AdminServices', {services})
}

const adminFeedbacks = async(req,res) => {
    const feedbacks = await Feedbacks.read();
    res.render('AdminFeedbacks', {feedbacks})
}

const adminRequests = async(req,res) => {
    const requests = await Requests.read();
    res.render('AdminRequests');
}

const adminLogin = async(req,res) => {
    res.render('AdminLogin')
}

module.exports = {
    adminPage,
    adminServices,
    adminFeedbacks,
    adminRequests,
    adminLogin,
}