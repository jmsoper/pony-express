const width = 10;
const height = 10;

const mapDimensions = [width, height];

const cities = [
  { name: 'Goldwater', location: [2,3], story:['A quiet town formed in the early 1820s by prospectors.']},
  { name: 'Little Hampshire', location: [5,5], story:['The largest city this side of the mountains.']},
  { name: 'Cobbs Way', location:[1,7], story: ['An abandoned ranch.']}
];

const rows = [['sandy', 'sandy', 'sandy', 'sandy', 'grassy', 'grassy', 'sandy', 'sandy', 'grassy', 'grassy'],
              ['sandy', 'grassy', 'grassy', 'sandy','sandy', 'sandy', 'sandy', 'sandy', 'grassy', 'sandy'],
              ['grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'sandy'],
              ['sandy', 'sandy', 'sandy', 'sandy', 'grassy', 'grassy', 'sandy', 'sandy', 'grassy', 'grassy'],
              ['sandy', 'grassy', 'grassy', 'sandy','sandy', 'sandy', 'sandy', 'sandy', 'grassy', 'sandy'],
              ['grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'sandy', 'grassy'],
              ['grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'grassy', 'sandy', 'grassy'],
              ['sandy', 'sandy', 'sandy', 'sandy', 'grassy', 'grassy', 'sandy', 'sandy', 'sandy', 'grassy'],
              ['sandy', 'grassy', 'grassy', 'sandy','sandy', 'sandy', 'sandy', 'sandy', 'grassy', 'grassy'],
            ['sandy', 'sandy', 'sandy', 'sandy', 'grassy', 'grassy', 'sandy', 'sandy', 'grassy', 'sandy']];

const mapInfo = {rows: rows, dimensions: mapDimensions, cities: cities };

function renderMap(mapInfo){
  var mapFrame = $('#land');
  mapFrame.css('height', mapInfo.dimensions[0] * 20);
  mapFrame.css('width', mapInfo.dimensions[1] * 20);
  mapInfo.rows.forEach(function(row){
    row.forEach(function(square){
      if (square === 'sandy'){
	$('#land').append('<div class="map-tile map-tile__sandy"></div>');
      } else if (square==='grassy'){
        $('#land').append('<div class="map-tile map-tile__grassy"></div>');
      }
    });
  });

}

renderMap(mapInfo);
