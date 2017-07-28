$(document).ready(function(){

const width = 10;
const height = 10;

const mapDimensions = [width, height];

const cities = [
  { name: 'Goldwater', location: [2,3], story:['A quiet town formed in the early 1820s by prospectors.']},
  { name: 'Little Hampshire', location: [5,5], story:['The largest city this side of the mountains.']},
  { name: 'Cobbs Way', location:[1,7], story: ['An abandoned ranch.']}
];

const rows = [[{type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}],
              [{type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'},{type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'sandy'}],
              [{type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'}],
              [{type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'city', name: 'little-hampshire'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}],
              [{type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'},{type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'sandy'}],
              [{type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'city', name: 'goldwater'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'}, {type: 'grassy'}],
              [{type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'}, {type: 'grassy'}],
              [{type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}],
              [{type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'city', 'name': 'cobbs-way'},{type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}],
            [{type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'grassy'}, {type: 'sandy'}, {type: 'sandy'}, {type: 'grassy'}, {type: 'sandy'}]];

const mapInfo = {rows: rows, dimensions: mapDimensions, cities: cities };

function renderMap(mapInfo){
  var mapFrame = $('#land');
  mapFrame.css('height', mapInfo.dimensions[0] * 20);
  mapFrame.css('width', mapInfo.dimensions[1] * 20);
  mapInfo.rows.forEach(function(row){
    row.forEach(function(square){
      const cityId = (square.type === 'city') ? 'id=' + square.name : '';
      mapFrame.append('<div ' + cityId + ' class="map-tile map-tile__' + square.type + '"></div>');
    });
  });
}

renderMap(mapInfo);

$('#land').on('click', 'div.map-tile__city', function(){
    alert($(this).attr('id'));
});
});
