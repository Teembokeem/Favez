import {Map} from 'immutable';

let configuration = Map(
  {
    API_ROOT: 'https://favezback.herokuapp.com/api',
    AUTH_ROOT: 'https://favez.auth0.com'
  }
);

export function setConfiguration(name, value) {
  configuration = configuration.set(name, value);
}

export function setAll(properties) {
  configuration = configuration.merge(properties);
}

export function unsetConfiguration(name) {
  configuration = configuration.delete(name);
}

export function getConfiguration(key) {
  if (!configuration.has(key)) {
    throw new Error('Undefined configuration key: ' + key);
  }

  return configuration.get(key);
}
