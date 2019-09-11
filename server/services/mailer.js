import nodemailer from 'nodemailer';
import { config } from '../config';

export default (mailType, data) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.production.notificationMail,
      pass: config.production.notificationPass,
    },
  });

  let output = '';
  output += `Имя: ${data.name} <br>`;
  output += `Телефон: ${data.phone} <br>`;
  output += data.filePath ? `Файл: ${data.filePath} <br>` : '';

  const mailOptions = {
    from: config.production.notificationMail,
    to: config.production.notificationRecipient,
    subject: mailType,
    html: output,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    }
  });
};
