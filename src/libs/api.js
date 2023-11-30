export const sendContactForm = async (data) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response;
  } catch (error) {
    throw new Error('Error de red al enviar el formulario');
  }
};
