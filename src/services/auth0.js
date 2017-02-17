import * as env from '../../env';

const clientID = env.AUTH0_CLIENT_ID;
const domain = env.AUTH0_DOMAIN;

import auth0 from 'auth0-js'

// import auth0 from '../../node_modules/auth0/src'
// var AuthenticationClient = require('auth0').AuthenticationClient;
// const auth0 = new AuthenticationClient.AuthenticationClient({domain, clientId,});
const auth = new auth0.WebAuth({
      clientID,
      domain,
      responseType: 'token id_token',
    })

export function showLogin() {
  // auth0
  // .signup({
  //   email: 'test@email.com',
  //   password: 'password'
  // })
  // .then(function(res) {
  // })
}
