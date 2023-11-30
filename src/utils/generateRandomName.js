export const generateRandomName = (length) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
  let randomName = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // randomName += characters.charAt(randomIndex);
    randomName += characters[randomIndex];
  }
  return randomName;
};
