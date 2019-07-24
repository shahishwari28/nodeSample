var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'fulcrumdigital',
    auth: {
        user: 'ishwari.shah@fulcrumdigital.com',
        pass: 'flip@02129' 
    }
});

var mailOptions = {

    from: 'ishwari.shah@fulcrumdigital.com',
    to: 'ishushah2088@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!!' 
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: '+info.response);
    }
});