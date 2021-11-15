
import axios  from 'axios';
var data = JSON.stringify({
  "qrType": "PP",
  "ppType": "BILLERID",
  "ppId": "142346199001993",
  "amount": "100.00",
  "ref1": "REFERENCE1",
  "ref2": "REFERENCE2",
  "ref3": "SRU1235"
});

var config = {
  method: 'post',
  url: 'https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create',
  headers: { 
    'Content-Type': 'application/json', 
    'authorization': 'Bearer '+process.env.accessToken, 
    'resourceOwnerId': 'l73439963f8009445c8327351cd8241b5d', 
    'requestUId': '2aa949c8-9e87-48b2-993a-c1a5c2583fb6', 
    'accept-language': 'EN'
  },
  data : data
};


const qrData = [];  
const populateData = (data) => {qrData.push(data)} 
function useAxios(){
  axios(config)
  .then(function (response) {
    //console.log(JSON.stringify(response.data));
    populateData(response.data);
    //return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
} 


export  {
  useAxios,
    qrData,
  config
}