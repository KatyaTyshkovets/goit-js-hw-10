import './css/styles.css';
import { fetchCountries} from './fetchCountries.js';
import { countryMarkup } from './countryMarkup.js';
import { countryMarkupList } from './countryMarkupList.js';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    container: document.querySelector('.country-info'),
    ul:document.querySelector('.country-list'),
}
refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    if (e.target.value.trim() === '') {
        clearMarkup();
        return;
  }

    fetchCountries(e.target.value.trim())
        .then(country => {
            if (country.length > 10) {
                clearMarkup();
                Notify.info("Too many matches found. Please enter a more specific name.");
                return;
            }
        
            if (country.length === 1) {
                clearMarkup();
                refs.container.innerHTML = countryMarkup(country);
                return;
            }

            clearMarkup();
            refs.ul.innerHTML = countryMarkupList(country);
        })
        .catch(() => {
            clearMarkup();
            Notify.failure("Oops, there is no country with that name.");
        });

}

function clearMarkup() {
    refs.container.innerHTML = '';
    refs.ul.innerHTML = '';
}
