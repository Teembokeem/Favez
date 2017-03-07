import {get, post, put, delete} from '../utils/api';

export async function getFavezAll() {
  return get('/favez/all');
}

export async function faveScrapeUrl(data) {
  // let body = {url: data};
  // return await post('/favez/scrape', body);
  
  console.log('IN FAVE SERVICE...SENDING FAKE DATA FOR NOW....');
  return new Promise((resolve, reject) => {
    const sendTempArr = true;
    const TempArr = [
      'https://i.imgur.com/OIW3k7Kb.jpg',
      'https://i.imgur.com/vDhHXkjb.jpg',
      'https://i.imgur.com/hUR0JhYb.jpg',
      'https://i.imgur.com/jrOGcatb.jpg',
      'https://i.imgur.com/Oj1hIUab.jpg',
      'https://i.imgur.com/QReYxk2b.jpg'
    ];
    if (sendTempArr) {
      resolve({status: 200, data: TempArr, attemptedUrl: data});
    } else {
      reject({status: 404, err: 'you messed up man...'});
    }
  });
}
