//CRUD create, read, update, delete
const {MongoClient, ObjectID} = require('mongodb');   //here we are picking mongodb from a package outside vscode
//(1)const MongoClient = mongodb.MongoClient; //we are creating a client mongodb and picking 
const connectionURL = 'mongodb://127.0.0.1:27017';  //creating a database
const databaseName = 'task-manager'; //naming the database

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error, client)=>{ //picking the database and querrying if there is an error, use the client(which is inside mongockient.connect)
    if (error){
        return console.log('unable to connect to database');
    }
    const db = client.db(databaseName);

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) =>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });
});

//     db.collection('users').updateMany({
//         completed:false
//     },{
//         $set:{
//             completed:true
//         }
//     }).then((result) =>{
// console.log(result.modifiedCount);
//     }).catch((error)=> {
//         console.log(error);
//     });
// });


    // db.collection('users').updateOne({
    //     _id: new ObjectID("5db2df0c88555f1cc8f722a1")
    // },
    //     {

    //    $inc: {
    //        age:3
    //    }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // });
    // });



//     db.collection('users').insertOne({  //pass the database
//      name: 'Isaac',
//       age: 33,
//       city: 'salm'
//     });
//    db.collection('users').insertMany([
//    {
//        name:'Jen',
//        age: 26
//    },
//    {
//        name: 'Kila',
//        age:25
//    }
// ], (error,result) =>{
//     if(error){
//         return console.log('unable to insert documents');
//     }
//     console.log(result.ops);
// });
// db.collection('tasks').insertMany([
//     {
//         description: 'Clean the house',
//         completed: true
//     },{
//         description: 'Renew inspection',
//         completed: false
//     },{
//         description:'pot plants',
//         completed: false   
//      }
// ], (error,result) =>{
//     if(error){
//         return console.log('unable to insert tasks');
//     }
//     console.log(result.ops);
// });
// db.collection('tasks').find({completed:false}).toArray((error,tasks)=> {
//     console.log(tasks);
// });
// });


//mongoclient is used to connect to the database
//(error,client) callback function
//collection is a method in mongodb for creating databases for users
