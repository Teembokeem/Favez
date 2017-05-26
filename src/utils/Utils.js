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

export function isUrl(url) {
  var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(url);
}

export function sortListbyId(list) {
  return list.sort(function (a, b) {
    return new Date(b.created).getTime() - new Date(a.created).getTime()
  });
}