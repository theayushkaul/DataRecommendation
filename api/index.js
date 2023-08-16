const express = require('express');
const app = express();

const path = require('path');
const multer = require('multer');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
dotenv.config();

app.use(express.json());

// Connecting to the database
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Serve static files from the "dataset" directory
app.use('/dataset', express.static(path.join(__dirname, 'dataset')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'dataset');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).send('File uploaded successfully');
  console.log('File uploaded:', req.file.originalname);
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});

