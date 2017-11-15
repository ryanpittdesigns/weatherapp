// READ THIS FIRST

// 1. All of the code needed to let user enter a location is here and works
// 2. The only code that needs editing begins on line 69


// VARIABLES

var open_settings = document.querySelector(".open-settings");
var close_settings = document.querySelector(".close-settings");
var settings = document.querySelector(".settings");

var submit_form = document.querySelector(".submit");
var input_lc = document.querySelector(".locale");

if (localStorage.getItem("locale")){
  var lc = localStorage.getItem("locale");
} else {
  // Default location (area code or city, state or airport code – in quotes)
  var lc = "Providence, RI";
}


// EVENTS

open_settings.addEventListener("click",function(){
  openSettings();
});

close_settings.addEventListener("click",function(){
  closeSettings();
});

submit_form.addEventListener("click",function(e){
  // prevent defalt click behavior
  e.preventDefault();
  // get locale from form
  lc = locale.value;
  // store values in local storage
  localStorage.setItem("locale", lc);
  // close settings panel
  updateSettings();
  closeSettings();
});


// FUNCTIONS

function openSettings(){
  settings.classList.remove("js-hide");
  open_settings.classList.add("js-hide");
  close_settings.classList.remove("js-hide");
}

function closeSettings(){
  settings.classList.add("js-hide");
  close_settings.classList.add("js-hide");
  open_settings.classList.remove("js-hide");
}

function updateSettings(){
  reallySimpleWeather.weather({
    wunderkey: '', // leave blank for Yahoo API
    location: lc, //your location here, also works in lat/lon
    woeid: '', // "Where on Earth ID" optional alternative to location
    unit: 'f', // 'c' also works
    success: function(weather) {
      // sample data to display city and temperature
 html = '<main>';
    html += '<section class="top">';

    html += '<section class="open">';
    html += '<a><img src="img/cloudlogo.png"></a>';
    html += '</section>';


    html += '<h1 class="wdata-01">'+weather.city+', '+weather.region+'</h1>';
    html += '<h2 class="wdata-02">'+weather.temp+'&deg;'+ '</h2>';
    html += '</section>';

    html += '<section class="middle">';
    html += '<h1 class="wdata-03">'+weather.forecast[0].day+'</h1>';
    html += '<h1 class="wdata-00">'+weather.updated+'</h1>';
    html += '<p class="wdata-04"><i class="icon icon-'+weather.code+ '"></i></p>';
    html += '<h2 class="wdata-05">'+weather.forecast[0].text +'</h2>';
    html += '<h3 class="wdata-06">'+weather.wind.chill+' '+weather.units.speed+'</h3>';
    html += '</section>';

    html += '<section class="bottom">';
    html += '<hr>';
    html += '<div>';
    html += '<h1 class="wdata-07">'+weather.temp+'&deg;'+ '</h1>';
    html += '</div>';

    html += '<div class="temp">';
    html += '<h2 class="wdata-08"> <span class="text">High </span>'+weather.forecast[0].high + '&deg;'+ '</h2>';
    html += '<h2 class="wdata-09"> <span class="text">Sunrise </span>'+weather.sunrise+'</h2>';
    html += '</div>';

    html += '<div class="sun">';
    html += '<h2 class="wdata-10"> <span class="text">Low </span>'+weather.forecast[0].low + '&deg;'+ '</h2>';
    html += '<h2 class="wdata-11"> <span class="text">Sunset </span>'+weather.sunset+'</h2>';
    html += '</div>';


    html += '<div>';
    html += '<h1 class="wdata-12">';
    html += '<a href="#secondpage">Four Day Weekly Forecast</a>';    
    html += '</h1>';    
    html += '</div>'; 

    html += '</section>';
  

    html += '<section class="secondpage" id="secondpage">'

    html += '<section id="secondpage">';
    html += '<div class="right">';    
    html += '<h1>';
    html += '<a>'+weather.forecast[1].day+'</a>';    
    html += '</h1>';    
    html += '</div>';
    html += '<div class="right">';
    html += '<p><i class="icon icon-'+weather.forecast[1].code+ '"></i></p>';
    html += '</div>';
    html += '<div class="left">';
    html += '<h4><span class="text">Current </span>'+weather.forecast[1].code+'&deg;'+'</h4>';
    html += '<h5>'+weather.forecast[1].text+'</h5>';
    html += '<h3> <span class="text">Low </span>'+weather.forecast[1].low + '&deg;'+ '</h3>';
    html += '<h2> <span class="text">High </span>'+weather.forecast[1].high + '&deg;'+ '</h2>';
    html += '</div>';
    html += '</section>';

    html += '<hr>';


    html += '<section id="secondpage">';
    html += '<div class="right">';    
    html += '<h1>';
    html += '<a>'+weather.forecast[2].day+'</a>';     
    html += '</h1>';    
    html += '</div>';
    html += '<div class="right">';
    html += '<p><i class="icon icon-'+weather.forecast[2].code+ '"></i></p>'; 
    html += '</div>';
    html += '</div>';
    html += '<div class="left">';
    html += '<h4><span class="text">Current </span>'+weather.forecast[2].code+'&deg;'+'</h4>';
    html += '<h5>'+weather.forecast[2].text+'</h5>';
    html += '<h3> <span class="text">Low </span>'+weather.forecast[2].low + '&deg;'+ '</h3>';
    html += '<h2> <span class="text">High </span>'+weather.forecast[2].high + '&deg;'+ '</h2>';
    html += '</div>';
    html += '</section>';

    html += '<hr>';

    html += '<section id="secondpage">';
    html += '<div class="right">';    
    html += '<h1>';
    html += '<a>'+weather.forecast[3].day+'</a>';     
    html += '</h1>';    
    html += '</div>';
    html += '<div class="right">';
    html += '<p><i class="icon icon-'+weather.forecast[3].code+ '"></i></p>';
    html += '</div>';
    html += '</div>';
    html += '<div class="left">';
    html += '<h4><span class="text">Current </span>'+weather.forecast[3].code+'&deg;'+'</h4>';
    html += '<h5>'+weather.forecast[3].text+'</h5>';
    html += '<h3> <span class="text">Low </span>'+weather.forecast[3].low + '&deg;'+ '</h3>';
    html += '<h2> <span class="text">High </span>'+weather.forecast[3].high + '&deg;'+ '</h2>';
    html += '</div>';
    html += '</section>';

    html += '<hr>';

    html += '<section id="secondpage">';
    html += '<div class="right">';    
    html += '<h1>';
    html += '<a>'+weather.forecast[4].day+'</a>';     
    html += '</h1>';    
    html += '</div>';
    html += '<div class="right">';
    html += '<p><i class="icon icon-'+weather.forecast[4].code+ '"></i></p>';
    html += '</div>';
    html += '</div>';
    html += '<div class="left">';
    html += '<h4><span class="text">Current </span>'+weather.forecast[4].code+'&deg;'+'</h4>';
    html += '<h5>'+weather.forecast[4].text+'</h5>';
    html += '<h3> <span class="text">Low </span>'+weather.forecast[4].low + '&deg;'+ '</h3>';
    html += '<h2> <span class="text">High </span>'+weather.forecast[4].high + '&deg;'+ '</h2>';
    html += '</div>';
    html += '</section>';


    html += '</main>';
      document.getElementById('weather').innerHTML = html;
    },
    error: function(error) {
      document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
    }
  });
}

//INITIALIZE

closeSettings();
updateSettings();




