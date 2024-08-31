// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const path = require('path');
// const cors = require('cors');

// const app = express();

// // Serve static files from the 'public' directory
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public'))); // Ensure the 'public' directory is correct

// // Parse URL-encoded data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/contactFormDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// // Define the schema and model
// const contactSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     country: String,
//     subject: String,
// });

// const Contact = mongoose.model('Contact', contactSchema);

// // Handle form submissions
// app.post('/submit', (req, res) => {
//     console.log(req.body); // Log the incoming data to check if it's being received
    
//     const contactData = new Contact({
//         firstName: req.body.firstname,
//         lastName: req.body.lastname,
//         country: req.body.country,
//         subject: req.body.subject,
//     });

//     contactData.save()
//         .then(() => {
//             res.status(200).send('Data saved successfully');
//         })
//         .catch((error) => {
//             console.error('Error saving data:', error);
//             res.status(500).send('Failed to save data');
//         });
// });

// // Start the server
// // const PORT = process.env.PORT || 4000 ;
// app.listen(4000, () => {
//     console.log('Server started on port 4000');
// });



const mongoose = require('mongoose');

// Retrieve the MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contactFormDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
