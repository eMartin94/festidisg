import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

const logoUrl = process.env.NEXT_PUBLIC_LOGO;

export const WelcomeResendEmail = ({
  userFirstname,
  userLastName,
  userEmail,
  userPhone,
  userMessage,
}) => (
  <Html>
    <Head />
    <Preview>FestiDisg ¡Deja que tus imágenes hablen por sí mismas!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={logoUrl}
          width='150'
          height='150'
          alt='FestiDig'
          style={logo}
        />
        <Text style={paragraph}>Hola FestiDisg,</Text>
        <Text style={paragraph}>
          El usuario{' '}
          <b>
            {userFirstname} {userLastName}
          </b>
          tiene un mensaje para ti:
          <br />
          <p style={message}>{userMessage}</p>
        </Text>
        <Text style={userData}>
          Correo electrónico:<b> {userEmail} </b> <br />
          Teléfono:<b> {userPhone} </b>
        </Text>
        <br />
        <br />
        <Text style={paragraph}>
          Best,
          <br />
          The FestiDig team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>San Juan de Lurigandcho - Lima, Perú</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeResendEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};

const message = {
  fontSize: '14px',
  lineHeight: '24px',
  padding: '8px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
  color: '#484848',
  fontStyle: 'italic',
};
const userData = {
  fontSize: '14px',
  lineHeight: '26px',
  fontStyle: 'italic',
  color: '#000',
  textDecoration: 'none',
};
