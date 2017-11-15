// Default location (area code or city, state – in quotes)
var lc = "Providence, RI";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    html =  '<main>';
    html +=  '<section class="sec">';
    html +=  '<div class="right">';
    html +=  '<h1>'+weather.forecast[0].day+'</h1>';
    html += '</div>';
    html +=  '<div class="right">';
    html += '<p class="icon"><i class="icon icon-'+weather.forecast[0].code+ '"></i></p>';
    html += '</div>';
    html += '<div class="left">';
    html +=  '<h2>'+weather.city+'</h2>';
    html +=  '<h3>'+weather.country+'</h3>';
    html +=  '<h4>'+weather.temp +'</h4>';
    html +=  '<h5>'+weather.forecast[0].text+'</h5>';
    html += '</div>';
    html += '</section>';

    html +=  '<section class="two">';
    html +=  '<div class="right">';
    html +=  '<h1>'+weather.forecast[1].day+'</h1>';
    html += '</div>';
    html +=  '<div class="right">';
    html += '<p class="icon"><i class="icon icon-'+weather.forecast[1].code+ '"></i></p>';
    html += '</div>';
    html += '<div class="left">';
    html +=  '<h2>'+weather.city+'</h2>';
    html +=  '<h3>'+weather.country+'</h3>';
    html +=  '<h4>'+weather.temp +'</h4>';
    html +=  '<h5>'+weather.forecast[1].text+'</h5>';
    html += '</div>';
    html += '</section>';

    html +=  '<section class="three">';
    html +=  '<div class="right">';
    html +=  '<h1>'+weather.forecast[2].day+'</h1>';
    html += '</div>';
    html +=  '<div class="right">';
    html += '<p class="icon"><i class="icon icon-'+weather.forecast[2].code+ '"></i></p>';
    html += '</div>';
    html += '<div class="left">';
    html +=  '<h2>'+weather.city+'</h2>';
    html +=  '<h3>'+weather.country+'</h3>';
    html +=  '<h4>'+weather.temp +'</h4>';
    html +=  '<h5>'+weather.forecast[2].text+'</h5>';
    html += '</div>';
    html += '</section>';

    html +=  '<section class="four">';
    html +=  '<div class="right">';
    html +=  '<h1>'+weather.forecast[3].day+'</h1>';
    html += '</div>';
    html +=  '<div class="right">';
    html += '<p class="icon"><i class="icon icon-'+weather.forecast[3].code+ '"></i></p>';
    html += '</div>';
    html += '<div class="left">';
    html +=  '<h2>'+weather.city+'</h2>';
    html +=  '<h3>'+weather.country+'</h3>';
    html +=  '<h4>'+weather.temp+'</h4>';
    html +=  '<h5>'+weather.forecast[3].text+'</h5>';
    html += '</div>';
    html += '</section>';

    html +=  '<section class="five">';
    html +=  '<div class="right">';
    html +=  '<h1>'+weather.forecast[4].day+'</h1>';
    html += '</div>';
    html +=  '<div class="right">';
    html += '<p class="icon"><i class="icon icon-'+weather.forecast[4].code+ '"></i></p>';
    html += '</div>';
    html += '<div class="left">';
    html +=  '<h2>'+weather.city+'</h2>';
    html +=  '<h3>'+weather.country+'</h3>';
    html +=  '<h4>'+weather.temp+'</h4>';
    html +=  '<h5>'+weather.forecast[4].text+'</h5>';
    html += '</div>';

    html += '<div class="pagetwo">';
    html += '<p><a href="index.html">Daily Weather Here</a></p>';
    html += '</div>';

    html += '</section>';


	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

