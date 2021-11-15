
import axios from 'axios';
var data = JSON.stringify({
  "applicationKey": "l73439963f8009445c8327351cd8241b5d",
  "applicationSecret": "22d9c2664c3842fca0d71963bfb37d25"
});

var config = {
  method: 'post',
  url: 'https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token',
  headers: { 
    'Content-Type': 'application/json', 
    'resourceOwnerId': 'l73439963f8009445c8327351cd8241b5d', 
    'requestUId': '2ed3d1b4-4311-4021-a1a1-e27aed96071f', 
    'accept-language': 'EN', 
    'Cookie': 'TS01e7ba6b=01a990b48ef151bb4e115e0a794fdcbb7ec8f6cf5adcc0d4c02fd6ec8d1d8d86387528ddd7788df4d5a74fe4a1f439fb3ee7bfeb2e'
  },
  data : data
};

const athenData = [];  
const populateData = (data) => {athenData.push(data)} 

axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      populateData(response.data);
      //return response.data
    })
    .catch(function (error) {
      console.log(error);
    });

export {
  athenData,
  config
}