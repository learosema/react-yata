const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

const COOKIE_NAME = process.env.APPLICATION_COOKIE_NAME || 'app_token';

async function verifyCookie(req) {
  if ([COOKIE_NAME] in req.cookies === false) {
    throw new Error('Authorization failed.');
  }
  const jwtSecret = process.env.APPLICATION_SECRET_KEY;
  const token = req.cookies[COOKIE_NAME];
  return await verify(token, jwtSecret);
}

async function createCookie(res, payload) {
  const jwtSecret = process.env.APPLICATION_SECRET_KEY;
  const userToken = await sign(payload, jwtSecret);
  res.cookie(COOKIE_NAME, userToken, {httpOnly: true});
}

module.exports = {
  verifyCookie,
  createCookie
};