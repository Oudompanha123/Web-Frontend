import QRCode from 'qrcode'
const QRCode = require('easyqrcodejs-nodejs');

// Options
var options = {
    text: "www.easyproject.cn/donation"
};


const test = (req: any, res: any) => {

    // New instance with options
    var qrcode = new QRCode(options);

// Save QRCode image
    qrcode.saveImage({
        path: 'q.png' // save path
    });



    // return Response.json({ message: "Hello World" }, { status: 200 })
}

export {test as GET}