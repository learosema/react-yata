const fetch = require('node-fetch');

async function getToken(clientId, clientSecret, code) {
  const authRequest = {
    client_id: clientId,
    client_secret: clientSecret,
    code
  };
  const authResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authRequest)
  });
  const responseData = await authResponse.json();
  return responseData.access_token;
}
async function getUser(token) {
  const apiResponse = await fetch('https://api.github.com/user', {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'token ' + token
    }
  });
  return await apiResponse.json();
}

module.exports = {
  getToken, getUser
};