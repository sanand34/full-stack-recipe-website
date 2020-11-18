//Get app id and api key from https://www.edamam.com/

const APP_KEY1 = "";
const APP_ID1 = "";

const APP_KEY2 = "";
const APP_ID2 = "";

function requests(search, endlimit, startlimit) {
  startlimit = startlimit || 0;
  return `/search?q=${search}&app_id=${APP_ID1}&app_key=${APP_KEY1}&from=${startlimit}&to=${endlimit}`;
}

export default requests;

export function request(search) {
  return `/api/nutrition-data?app_id=${APP_ID2}&app_key=${APP_KEY2}&ingr=${search}`;
}
