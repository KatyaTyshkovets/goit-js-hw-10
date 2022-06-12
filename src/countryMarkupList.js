export function countryMarkupList(country) {
    return country
        .map(({ flags, name }) => {
            return `
        <li class = "country-list-item">
        <img src ="${flags.svg}"alt = "flag" width = "100" />
        <p>${name.official}</p>
        </li> `
        })
        .join('');

}

