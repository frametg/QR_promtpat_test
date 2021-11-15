import express from 'express'
const app = express()

import bodyParser from 'body-parser'
//const athenscb = require('./athenScb.js')
import * as athenScb from './athenScb.js'
//const requestGenerateQr = require('./requestGenerateQr.js')
import * as requestGenerateQr  from './requestGenerateQr.js'

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
//process.env.accessToken = athenscb.athenData[0].data.accessToken;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  //athenscb.config.headers["resourceOwnerId"] = ""
  //console.log(athenscb.config.headers["resourceOwnerId"])
  
  //get access token
  process.env.accessToken = athenscb.athenData[0].data.accessToken;
  
 
  
  res.json("accessToken :"+athenscb.athenData[0].data.accessToken 
  ) 

})
app.get('/qr', (req, res) => {
  //athenscb.config.headers["resourceOwnerId"] = ""
  //console.log(athenscb.config.headers["resourceOwnerId"])
  
  //get access token
  
  
  console.log(process.env.accessToken)
  console.log(requestGenerateQr.qrData)
  res.json("qr:"+requestGenerateQr.qrData[0].data.qrRawData) 

})

const circularReplacer = () => {
  
    // Creating new WeakSet to keep 
    // track of previously seen objects
    const seen = new WeakSet();
      
    return (key, value) => {
  
        // If type of value is an 
        // object or value is null
        if (typeof(value) === "object" 
                   && value !== null) {
          
        // If it has been seen before
        if (seen.has(value)) {
                 return;
             }
               
             // Add current value to the set
             seen.add(value);
       }
         
       // return the value
       return value;
   };
};

app.post('/scb/payment/confirm', (req,res) => {
    //console.log(JSON.stringify(
    // req, circularReplacer()))
    //res.send(res)
    console.log("accept bill")

    console.log("req: "+ JSON.stringify(req.body))
    //res.send("req: "+ JSON.stringify(req.body))
    //console.log("res: "+JSON.stringify(events, circularReplacer() ) )
    //console.log("res: "+JSON.stringify(res, circularReplacer()))
    //console.log("req: "+JSON.stringify(req ))
     if(req.body.transactionId)res.json("success") 
     else res.json(req.body)
    
  })

app.listen(server_port , () => {
  console.log('Listening on port %d', server_port);

})