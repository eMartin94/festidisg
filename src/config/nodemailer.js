import nodemailer from 'nodemailer';
import { clientId, clientSecret, redirectUrl, refreshToken, user } from '.';
import { google } from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUrl
);

oAuth2Client.setCredentials({
  refresh_token: refreshToken,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: user,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

transporter.on('token', (token) => {
  oAuth2Client.setCredentials({ access_token: token.accessToken });
});

export const sendEmail = async (email, htmlTemplate) => {
  const mailOptions = {
    from: `Eduardo < ${user} >`,
    to: email,
    subject: 'FestiDisg - Celebra con Estilo',
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};

export const resendEmail = async (name, htmlTemplate) => {
  const mailOptions = {
    from: `Eduardo < ${user} >`,
    to: user,
    subject: `Nuevo mensaje de ${name} - FestiDisg`,
    html: htmlTemplate,
  };
  await transporter.sendMail(mailOptions);
};
