const generatePayload = require('promptpay-qr') 
const qrcode = require('qrcode') 
const fs = require('fs') 

const mobileNumber = '000-000-0000'
//d

const IDCardNumber = '0-0000-00000-00-0'
const amount = 0
//const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
const payload =  "000201010212304701151423461990019930210REFERENCE10310REFERENCE25204701153037645406100.005802TH5907PPETECH6007BANGKOK62380523202111090111029190000000707SRU123563037FA"
console.log(payload)

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})
