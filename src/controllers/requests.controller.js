const Io = require("../utils/io");
const Requests = new Io('./db/requests.json');
const Request = require("../models/request");

const getRequests = async(req, res) => {
    const requests = await Requests.read();
    res.status(200).json({message: "success", requests});
};

const createRequest = async(req, res) => {
    const requests = await Requests.read();
    const { name, phoneNumber, email, message } = req.body;
    const findRequest = requests.find(request => request.email === email);
    if(findRequest){
        return res.redirect();
    }
    const newRequest = new Request(name, phoneNumber, email, message);
    
    const data = requests.length ? [...requests, newRequest] : [newRequest];
    await Requests.write(data);
    res.redirect('requests');
}


module.exports = {
    getRequests,
    createRequest,
}