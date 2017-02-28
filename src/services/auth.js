import * as env from '../../env';
import {get, post} from '../utils/authApi'
import {setAuthenticationToken, getAuthenticationToken} from '../utils/authentication'

const clientID = env.AUTH0_CLIENT_ID;
const domain = env.AUTH0_DOMAIN;
const secret = env.AUTH0_SECRET
const apiCred = env.AUTH0_API_CREDENTIAL




export async function authRegister(data) {
  console.log('inside', data)
  let body = {
    'client_id': apiCred,
    'username': data.email,
    'email': data.email,
    'password': data.password,
    'connection': 'Username-Password-Authentication',
  }
  return await post('/dbconnections/signup', body) 
}

export async function genToken(){
  let body = {
    'client_id': apiCred,
    'client_secret': secret,
    'audience': 'https://favez.auth0.com/api/v2/',
    'grant_type': 'client_credentials',
  }
  return await post('/oauth/token', body) 
}


// figure out a place to put this...
if ( !getAuthenticationToken() ) {
  console.log('genning token')
  genToken()
  .then(function(res){
    setAuthenticationToken(res.access_token)  
  })
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
  }
  return await post('/oauth/ro', body);
}

export async function authUserInfo() {
  return await get('/userinfo');
}