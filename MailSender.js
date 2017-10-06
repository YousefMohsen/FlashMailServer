var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lektappcph@gmail.com',
    pass: 'lektapp123'
  }
});

var mailOptions = {
  from: 'lektappcph@gmail.com',
  to: 'yousefmohsen@outlook.dk, janusudsen@yahoo.com',
  subject: 'Lektapp Server Mail',
  text: 'Sendt fra Lektapp Servers Inc.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});