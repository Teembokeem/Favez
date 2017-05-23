
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

export function getTopicByTaxonomy(taxonomy, topics) {
  let filteredTopic = topics.filter(topic => topic.ref === taxonomy);
  return filteredTopic[0]; 
}
