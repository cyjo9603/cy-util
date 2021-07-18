interface Cookies {
  [key: string]: string;
}

const COOKIE_SPLIT_CHAR = '; ';

function cookieParser(cookies = ''): Cookies {
  return cookies.split(COOKIE_SPLIT_CHAR).reduce((parsingCookies: Cookies, cookieLine) => {
    const [key, value] = cookieLine.split('=');
    parsingCookies[key] = value;
    return parsingCookies;
  }, {});
}

export default cookieParser;
