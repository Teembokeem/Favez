
export function toJS(immutable) {
  if (immutable.toJS) {
    return immutable.toJS()
  }
  return immutable;
}

export function getCountryByCode(code, countries) {
  filteredCountry = countries.filter(country => country.code == code);
  return filteredCountry[0] && filteredCountry[0].name;
}

export function getCodeByCountryName(name, countries) {
  filteredCountry = countries.filter(country => country.name === name);
  return filteredCountry[0] && filteredCountry[0].code;
}

export function getTopicByTaxonomy(taxonomy, topics) {
  let filteredTopic = topics.filter(topic => topic.ref === taxonomy);
  return filteredTopic[0];
}
