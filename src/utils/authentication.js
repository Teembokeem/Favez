import {AsyncStorage} from 'react-native';

const AUTHENTICATION_STORAGE_KEY = 'PepperoniState:Authentication';
const AUTH0_STORAGE_KEY = 'PepperoniState:Auth0';

export function getAuthenticationToken() {
  return AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY);
}

export async function setAuthenticationToken(token) {
  return AsyncStorage.setItem(AUTHENTICATION_STORAGE_KEY, token);
}

export async function clearAuthenticationToken() {
  return AsyncStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
}

export function getAuth0Token() {
  return AsyncStorage.getItem(AUTH0_STORAGE_KEY);
}

export async function setAuth0Token(token) {
  return AsyncStorage.setItem(AUTH0_STORAGE_KEY, token);
}

export async function clearAuth0Token() {
  return AsyncStorage.removeItem(AUTH0_STORAGE_KEY);
}
