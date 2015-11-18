var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
transporter.sendMail({
    from: 'michelleamcallister@gmail.com',
    to: 'vijaymenonx@gmail.com',
    subject: 'hello',
    text: 'hello world!'
});
