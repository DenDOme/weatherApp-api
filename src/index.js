import './main.css';
import getDataFromApi from './js/api.js';
import loadPage from './js/loadPage.js';

window.onload = async () => {
  const data = await getDataFromApi('current.json', 'auto:ip');
  loadPage(data);
};

const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const errorText = document.getElementById('error__text');
  const inputValue = document.getElementById('search').value;
  const localData = await getDataFromApi('current.json', inputValue);
  if (localData) {
    loadPage(localData);
    errorText.textContent = '';
  } else {
    errorText.textContent = 'Not found any place';
  }
});
