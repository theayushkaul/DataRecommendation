const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
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
    const timestamp = req.body.name.split('_')[0];
    const originalName = path.parse(file.originalname).name;
    const extension = path.parse(file.originalname).ext;
    const newFilename = `${timestamp}_${originalName}${extension}`;
    cb(null, newFilename);
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

