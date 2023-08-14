const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 5000;

app.use(express.json());

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

