const Io = require('../utils/Io');
const Feedbacks = new Io('./db/feedbacks.json');
const fs = require('fs');

const getAllFeedbacks = async (req,res) => {
    const feedbacks = await Feedbacks.read();
    req.status(200).json(feedbacks);
}

const createFeedback = async(req, res) => {
const feedbacks = await Feedbacks.read();
const { author, ocupation, text } = req.body;
const { image } = req.files;
const imageName = `${uuid()}${path.extname(image.name)}`;
const newFeedback = new Feedback(author, ocupation, text, imageName);
image.mv(process.cwd() + '/uploads/' + imageName);
const data = feedbacks.length ? [...feedbacks, newFeedback] : [newFeedback];
await Feedbacks.write(data);
res.status(201).json({message: 'Created'});
}

const deleteFeedback = async(req, res) => {
const feedbacks = await Feedbacks.read();
const {id} = req.body;
const findFeedback = feedbacks.find(episode => episode.id === id);
const renewedFeedbacks = feedbacks.filter(episode => episode.id !== id);
const filePath = `/uploads/${findFeedback.image}`;
fs.unlink(process.cwd() + filePath, (error) => {
    if (error) {
        console.error('Error deleting image:', error);
      } else {
        console.log('Image deleted successfully');
      }
});
await Feedbacks.write(renewedFeedbacks);
res.redirect('adminfeedbacks');
}

module.exports = {
    getAllFeedbacks,
    createFeedback,
    deleteFeedback
}