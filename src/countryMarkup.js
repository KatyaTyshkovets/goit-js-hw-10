export function countryMarkup(country) {
    const { capital, flags, name, population, languages } = country[0];
    const langList = Object.values(languages).join(', ');
    return `
    <div class "country-info-container">
    <img src ="${flags.svg}"alt = "flag" width = "100" />
    <h2>${name.official}</h2>
    </div>
    <ul class ="country-info-list">
    <li class ="country-info-item">Capital:<span>${capital}</span></li>
    <li class = "country-info-item">Population:<span>${population}</span></li>
    <li class = "country-info-item">Languages:<span>${langList}</span></li>
    </ul>
`
}