const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{  //connecting to our database server
    useNewUrlParser:true, //used to pass data
    useCreateIndex: true  //used to create index
});
