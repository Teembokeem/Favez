import {get, post, put, del} from '../utils/api';

export async function getFavezAll() {
  return get('/favez/all');
}


export async function uiScrapeUrl(data) {
  let body = {url: data};
  return await post('/favez/scrape', body);

  // console.log('IN UI SERVICE...SENDING FAKE DATA FOR NOW....');
  // return new Promise((resolve, reject) => {
  //   const sendTempArr = true;
  //   const testTitle = 'Faked Imgur Scrape';
  //   const TempArr = [
  //     'https://i.imgur.com/OIW3k7Kb.jpg',
  //     'https://i.imgur.com/vDhHXkjb.jpg',
  //     'https://i.imgur.com/hUR0JhYb.jpg',
  //     'https://i.imgur.com/jrOGcatb.jpg',
  //     'https://i.imgur.com/Oj1hIUab.jpg',
  //     'https://i.imgur.com/QReYxk2b.jpg'
  //   ];
  //   if (sendTempArr) {
  //     console.log('sending arrays', TempArr)
  //     resolve({status: 200, data: TempArr, url: data, title: testTitle});
  //   } else {
  //     reject({status: 404, err: 'you messed up man...'});
  //   }
  // });
}
