export const log = (...args) =>
  //eslint-disable-next-line
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  //eslint-disable-next-line
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) =>
  test ? component : undefined;

export const renderEither = (test, component1, component2) =>
  test ? component1 : component2;

export const classToggler = config =>
  Object.keys(config).filter(key => config[key]).join(' ');

export const map = (list, ...args) =>
  Array.prototype.map.apply(list, args);

export const filter = (list, ...args) =>
  Array.prototype.filter.apply(list, args);

export const reduce = (list, ...args) =>
  Array.prototype.reduce.apply(list, args);

export const cookieFetch = (key) => {
  const cookies = Object.assign(...document.cookie.split(';')
    .map((cookie) => {
//eslint-disable-next-line
      const [key, value] = cookie.split('=');
      return { [key.trim()]: value };
    }));
  return cookies[key];
};

export const cookieDelete = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const photoToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      resolve(reader.result);
    });
    reader.addEventListener('error', () => {
      reject(reader.error);
    });
    if(file)
      return reader.readAsDataURL(file);
    return reject(new Error('USAGE ERROR: requires a file'));
  });
};
