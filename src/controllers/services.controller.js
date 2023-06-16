const Io = require('../utils/Io');
const Services = new Io('./db/services.json');
const fs = require('fs');

const getAllServices = async (req,res) => {
    const services = await Services.read();
    req.status(200).json(services);
}

const getASingleService = async (req,res) => {
    const services = await Services.read();
    const {id} = req.body;
    const findService = services.find((service) => service.id === id);
    if(!findService){
        return res.status(404).json({message: 'Not Found'});
    }
    res.status(200).json({message: 'Success', findEpisode});
}

const createService = async(req, res) => {
const services = await Services.read();
const { name } = req.body;
const { image} = req.files;
const imageName = `${uuid()}${path.extname(image.name)}`;
const newService = new Service(name, imageName);
const findService = services.find((service) => service.name === name);

if(findService){
    return res.status(201).json({message: 'Such service already exists'});
}
image.mv(process.cwd() + '/uploads/' + imageName);
const data = services.length ? [...services, newService] : [newService];
await Services.write(data);
res.status(201).json({message: 'Created'});
}

const deleteService = async(req, res) => {
const services = await Services.read();
const {id} = req.body;
const findService = services.find(episode => episode.id === id);
const renewedServices = services.filter(episode => episode.id !== id);
const filePath = `/uploads/${findService.image}`;
fs.unlink(process.cwd() + filePath, (error) => {
    if (error) {
        console.error('Error deleting image:', error);
      } else {
        console.log('Image deleted successfully');
      }
});
await Services.write(renewedServices);
res.redirect('services');
}

module.exports = {
    getAllServices,
    getASingleService,
    createService,
    deleteService
}