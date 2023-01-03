const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const multer = require('multer')
const port = process.env.PORT || 7000;
const passwordReset = require("./routes/passwordReset");


connectDB();
const app = express() 

app.use(cors({origin: true}))
app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes())
app.use('/api/v1/users', require('./routes/userRoutes'));
// app.use("/api/v1/password-reset", passwordReset);
app.use(routes())
// Handles 5xx errors
app.use((err, req, res, next)=>{
    res.status(500).json({err: err.message})
})

///////////////  images upload ///////////////////

/// Setting up the storage
var storage = multer.diskStorage({
    destination: './images',
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage: storage})
app.use(express.static(__dirname + "/../build"))
/// Route for file upload
app.post("/api/v1/upload", upload.single('myFile'), (req, res,next)=>{
    res.sendStatus(200);
})

//// route for getting files from the server
app.get('/api/v1/upload')
app.use('/api/v1/images', express.static('images'))
/////////////////////////////////////////////////////////////////


///////////////  videos upload ///////////////////
/// Setting up the storage
var storage2 = multer.diskStorage({
    destination: './videos',
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const uploadVideo = multer({storage: storage2})
app.use(express.static(__dirname + "/../build"))

/// Route for file upload
app.post("/api/v1/uploadVideo", uploadVideo.single('myFile'), (req, res,next)=>{
    res.sendStatus(200);
})
//// route for getting files from the server
app.get('/api/v1/uploadVideo')
app.use('/api/v1/videos', express.static('videos'))
/////////////////////////////////////////////////////////////////


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
