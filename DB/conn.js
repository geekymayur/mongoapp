const mongoose = require('mongoose');
const url = process.env.DBURL;

mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log("Connection Failed.");
})

