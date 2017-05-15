import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';
import {composeWithDevTools} from 'remote-redux-devtools';
import middleware from './middleware';
import reducer from './reducer';

const composeEnhancers = composeWithDevTools({
    hostname: '192.168.1.74',//getPackagerHostName(),
    port: 8000
});

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  reduxLoop.install()
);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;

function getPackagerHostName(){
    if (__DEV__){
        try{
            const scriptURL = NativeModules.SourceCode.scriptURL
            const address = scriptURL.split('://')[1].split('/')[0]
            const hostname = address.split(':')[0]
            console.log('hostname: ', hostname)
            return hostname
        }catch(err){
            return 'localhost'
        }
    }
    return ''
}