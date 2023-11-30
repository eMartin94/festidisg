import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const logoUrl = process.env.NEXT_PUBLIC_LOGO;

export const WelcomeEmail = ({ userFirstname }) => (
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
        <Text style={paragraph}>
          Hola <strong>{userFirstname}</strong>,
        </Text>
        <Text style={paragraph}>
          ¡Bienvenido a FestiDisg, la comunidad donde tus imágenes cobran vida!
          Descubre un mundo de creatividad visual en FestiDisg.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href='https://festidisg.vercel.app/'>
            Empezar ahora
          </Button>
        </Section>
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

export default WelcomeEmail;

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
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center',
};

const button = {
  // backgroundColor: '#5F51E8',
  backgroundImage: 'linear-gradient(to right, #4182AE, #9DA310)',
  borderRadius: '24px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '12px 12px',
  marginTop: '16px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
