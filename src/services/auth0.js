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

export function register(email, password) {
  console.log(email, password)
  auth.signup({ 
            connection: 'Username-Password-Authentication', 
            email: email, 
            password: password
        }, (err, results) => { 
            if (err) {
              console.log(err);
              return alert('Something went wrong: ' + err); 
            } else {
              console.log(results)
              return alert('success signup without login!') 

            }
        });
}

export function login(email, password) {
  console.log('hello login')
  auth.client.login({
    // connection: 'Username-Password-Authentication',
    username: email,
    realm: 'tests',
    password: password

  }, (err, results) => {
    console.log('done', err, results)
    if (err) {
      console.log('ERROR', err);
    } else {
      console.log('RESULTS', results);
    }
  });
}
