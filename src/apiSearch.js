import 'whatwg-fetch';

const API_URL = 'https://www.omdbapi.com/';

const _generateQuesryString = (params = null) => {
  params = params.replace(/\ /gi, "+");
  return API_URL + '?t=' + params + '&y=&plot=&r=json';
};
  
export default class apiSearch { 

  static fetchData(params) { 
    let url = _generateQuesryString(params);
    
    return fetch(url, {
    }).then(response => {
      return response.text();
    });
  }
}