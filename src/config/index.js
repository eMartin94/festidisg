export const user =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_GMAIL
    : process.env.GMAIL;
export const clientId =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_CLIENT_ID
    : process.env.CLIENT_ID;
export const clientSecret =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_CLIENT_SECRET
    : process.env.CLIENT_SECRET;
export const refreshToken =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_REFRESH_TOKEN
    : process.env.REFRESH_TOKEN;
export const redirectUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_REDIRECT_URL
    : process.env.REDIRECT_URL;
export const logoMail =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_LOGO
    : process.env.LOGO;
