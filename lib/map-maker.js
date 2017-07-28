const width = 10;
const height = 10;

const mapDimensions = [width, height];

const cities = [
  { name: 'Goldwater', location: [2,3], story:['A quiet town formed in the early 1820s by prospectors.']},
  { name: 'Little Hampshire', location: [5,5], story:['The largest city this side of the mountains.']},
  { name: 'Cobbs Way', location:[1,7], story: ['An abandoned ranch.']}
];

const map = {dimensions: mapDimensions, cities: cities };

function renderMap(map){
  $('#land').append('<div class="map-tile__grassy-land"></div>');
}

renderMap(map);
