const generatePayload = require('promptpay-qr') 
const qrcode = require('qrcode') 
const fs = require('fs') 

const mobileNumber = '000-000-0000'


const IDCardNumber = '0-0000-00000-00-0'
const amount = 0
//const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
const payload =  "000201010212021644851645389267595204701153037645405100.05802TH5907PPETECH6007BANGKOK62760107INVOICE03159454622246290270523202106150117405000000000715353747479329885630414B8"
console.log(payload)

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})
