import postalCodes from 'postal-codes-js';

export const validateUsername = username => {
  const onlyLettersRegex = new RegExp('^[a-zA-Z]+$');
  return username.length > 3 && onlyLettersRegex.test(username);
};

export const validatePostalCode = postalCode => {
  const postalCodeValid = postalCodes.validate('ES', postalCode);
  return typeof postalCodeValid === 'boolean';
};

export const validateEmail = email => {
  return /\S+@\S+\.\S+/.test(email);
};

export const validatePassword = password => {
  const passRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
  return passRegex.test(password);
};
