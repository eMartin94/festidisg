import '@/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'FestiDisg - Celebra con Estilo',
  description:
    'Da vida a tus saludos festivos con nuestras plantillas. ¡Deja que tus imágenes hablen por sí mismas!',
  keywords:
    'festidisg, imágenes, saludos festivos, plantillas, creatividad visual, diseño',
  author: 'eMartinDev',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/webp' href='/festidisg.webp' />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='author' content={metadata.author} />

        {/* Open Graph meta tags for Facebook and Twitter */}
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dxbbbewxt/image/upload/v1700938323/project-gallery/festidisg_rrvcim.webp'
        />
        <meta property='og:url' content='URL_DE_TU_PAGINA' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dxbbbewxt/image/upload/v1700938323/project-gallery/festidisg_rrvcim.webp'
        />

        <link
          href='https://api.fontshare.com/v2/css?f[]=chillax@600,500,300,700,400,200&f[]=cabinet-grotesk@800,500,100,700,400,300,200,900&f[]=boska@900,901,701,201,401,301,500,400,200,700,300,501&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='font-chillax'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
