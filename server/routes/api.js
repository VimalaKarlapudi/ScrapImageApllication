const express=require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require ('mongodb').ObjectID;

//connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/userdatabase', (err,db) =>
            {   if(err) return console.log(err);
                 closure(db);
                 
            });
    };

//Error Handling
const sendError = (err,res) => {
    response.status = 501;
response.message = typeof err == 'object' ? err.message : err;
res.status(501).json(response);
};

//response handling
  let response = {  status:200,
                           data:[],
                           message:null
                        };
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept");
    next();});

//get users
router.get('/data' , (req,res,next) => {
               connection((db1) => {
                     db1.db('userdatabase').collection('user')
                            .find().toArray().then((user)=> 
                                              { response.data = user;
                                                 res.json(response);
                                               })
                                              .catch((err) => 
                                              { console.log(err);
                                                 sendError(err,res);
                                               });
                                        });
});
module.exports = router;