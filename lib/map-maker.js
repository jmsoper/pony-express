$(document).ready(function(){

const width = 10;
const height = 10;

const mapDimensions = [width, height];

const cities = {
  'goldwater': { name: 'Goldwater', location: [2,3], story:['A quiet town formed in the early 1820s by prospectors.']},
  'little-hampshire': { name: 'Little Hampshire', location: [5,5], story:['The largest city this side of the mountains.']},
  'cobbs-way': { name: 'Cobbs Way', location:[1,7], story: ['An abandoned ranch.']}
};

const rows = [[{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}],
              [{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'},{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}],
              [{playerPresent: false, type: 'water'}, {playerPresent: false, type: 'water'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}],
              [{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'water'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'city', name: 'little-hampshire'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}],
              [{playerPresent: false, type: 'sandy'}, {playerPresent: true, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'},{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}],
              [{playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'city', name: 'goldwater'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'treasure'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}],
              [{playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'water'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}],
              [{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}],
              [{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'city', 'name': 'cobbs-way'},{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}],
            [{playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'sandy'}, {playerPresent: false, type: 'grassy'}, {playerPresent: false, type: 'sandy'}]];

const mapInfo = {rows: rows, dimensions: mapDimensions, cities: cities };

function renderMap(mapInfo){
  var mapFrame = $('#map');
  mapFrame.css('height', mapInfo.dimensions[0] * 20);
  mapFrame.css('width', mapInfo.dimensions[1] * 20);
  mapInfo.rows.forEach(function(row){
    row.forEach(function(square){
      const cityId = (square.type === 'city') ? 'id=' + square.name : '';
      const playerPresent = (square.playerPresent ? ' player-present ' : '');
      mapFrame.append('<div ' + cityId + ' class="map-tile map-tile__' + square.type + playerPresent + '"></div>');
    });
  });
}

renderMap(mapInfo);

$('#map').on('click', 'div.map-tile__city', function(){
    $('#header').text(cities[$(this).attr('id')].name);
    $('#description').text(cities[$(this).attr('id')].story);
  });

  $('#show-map').click(function(){
    $('#map').toggleClass("not-showing");
  });
});
