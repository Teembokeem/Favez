import * as env from '../../env';
import * as auth from '../utils/authApi';
import {get} from '../utils/api';
import {setAuthenticationToken, getAuthenticationToken, setAuth0Token} from '../utils/authentication';

// const domain = env.AUTH0_DOMAIN;
const secret = env.AUTH0_SECRET;
const apiCred = env.AUTH0_API_CREDENTIAL;

export async function authRegister(data) {
  let body = {
    'client_id': apiCred,
    'username': data.email,
    'email': data.email,
    'phone_number': data.phone,
    'password': data.password,
    'connection': 'Username-Password-Authentication'
  };
  return await auth.post('/dbconnections/signup', body) ;
}

export async function genToken() {
  let body = {
    'client_id': apiCred,
    'client_secret': secret,
    'audience': 'https://favez.auth0.com/api/v2/',
    'grant_type': 'client_credentials'
  };
  return await auth.post('/oauth/token', body);
}

// figure out a place to put this...
if (getAuthenticationToken()) {
  genToken()
  .then((res) => {
    setAuthenticationToken(res.access_token);
  });
} else {
  // fakeLogin()
  // .then(function(res){
  //   console.log('this is new', res)
  // })
  // .catch(function(err){
  //   console.log('eerrr', err)
  // })
}

export async function authLogin(data) {
  let body = {
    'client_id': apiCred,
    'username': data.email,
    'password': data.password,
    'connection': 'Username-Password-Authentication',
    'grant_type': 'password',
    'scope': 'openid'
  };
  return await auth.post('/oauth/ro', body)
    .then((res) => {
      setAuth0Token(res.access_token);
      setAuthenticationToken(res.id_token);
      return res;
    })
    .catch((err) => {return err;}) ;
}

export async function authUserInfo() {
  return get('/authorize')
    .then((response) => {
      return auth.get('/userinfo')
        .then((auth0response) => {
          return {auth0: auth0response, favez: response.data};
        })
        .catch((err) => (err));
    })
    .catch((err) => (err));
}
