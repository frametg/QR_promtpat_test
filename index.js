const generatePayload = require('promptpay-qr') 
const qrcode = require('qrcode') 
const fs = require('fs') 

const mobileNumber = '000-000-0000'


const IDCardNumber = '0-0000-00000-00-0'
const amount = 0
//const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
const payload =  "0002010102120216448516453892675952047011530376454031005802TH5907PPETECH6007BANGKOK62760107INVOICE031594546222462902705232021062404554300300000007153537474793298856304BCA6"

console.log(payload)

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})
