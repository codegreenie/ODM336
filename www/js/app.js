document.addEventListener("deviceready", deviceIsReady, false);


function deviceIsReady(){
  //StatusBar.backgroundColorByHexString("#ff9800");
}


// Dom7
var $$ = Dom7;
Framework7.use(Framework73dPanels);

// Init App
var app = new Framework7({
  id: 'org.ourdailymanna.ODMMobile',
  root: '#app',
  theme: 'md',
  language: 'en',
  routes: routes,
  /*panel: {
    swipe: "both"
  },*/
   panels3d: {
    enabled: true,
  }
});

var mainView = app.views.create('.view-main', {
  url : './main.html',
  name : 'main'
});





/* Greenie defined functions */


function showNylon(){

  $$(".nylon").show();

}

function hideNylon(){

  $$(".nylon").hide();

}

function showNylons(){

  $$(".nylons").show();

}

function hideNylons(){

  $$(".nylons").hide();

}
/*

   var pushMyCity = function(theCityCode){

      var splitForSkyScanner = theCityCode.split(" ")[0];
      window.localStorage.setItem("skyscanner_from_terminal", splitForSkyScanner);

        window.localStorage.setItem("from_terminal", theCityCode);
        showNylons();

        setTimeout(function(){
        hideNylons();
        mainView.router.navigate("/init/");
        }, 3000);
    }


  var pushMyCity2 = function(theCityCode){

        var splitForSkyScanner = theCityCode.split(" ")[0];
      window.localStorage.setItem("skyscanner_to_terminal", splitForSkyScanner);

        window.localStorage.setItem("to_terminal", theCityCode);
        showNylons();

        setTimeout(function(){
        mainView.router.navigate("/init/");
        hideNylons();
        }, 3000);
    }
*/








$$(document).on('page:init', '.page[data-name="home"]', function (e){

        $$("#signup-btn").on("click", function(){

              $$("#signup-btn").html("<i class='fa fa-spin fa-refresh fa-fw'></i>").prop("disabled", "diabled");
              setTimeout(() => {

                    mainView.router.navigate("/dashboard/");
              }, 100);
          });
});













