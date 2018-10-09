"use strict";var _slicedToArray=function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,a){var t=[],i=!0,o=!1,n=void 0;try{for(var s,l=e[Symbol.iterator]();!(i=(s=l.next()).done)&&(t.push(s.value),!a||t.length!==a);i=!0);}catch(e){o=!0,n=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw n}}return t}(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _toArray(e){return Array.isArray(e)?e:Array.from(e)}var bio={name:"Tamer Labna",role:"Software Engineer - Full Stack Developer",contacts:{email:"tlabna@me.com",github:"https://github.com/tlabna/",linkedin:"https://www.linkedin.com/in/tamerlabna/",location:"Montreal, QC"},welcomeMessage:"I enjoy writing code that solves your problems and to help improve peoples lives.",skills:["HTML","CSS","JS/ES6","AJAX","Python","MySQL/PostgreSQL","Django","Knockout","Jasmine","React Ecosystem"],display:function(){var e=bio.name.split(" "),a=_slicedToArray(e,2),t=a[0],i=a[1],o='\n      <h2 class="banner banner--large">\n        '+t.toUpperCase().split("").map(function(e){return'\n          <span class="first-name">'+e+"</span>\n        "}).join("")+"\n        "+i.toUpperCase().split("").map(function(e){return'<span class="last-name">'+e+"</span>"}).join("")+"\n      </h2>\n    ",n='\n      <p class="role">\n        <mark>'+bio.role+"</mark>\n      </p>\n    ",s='\n      <div class="welcome--message">\n        <p>'+bio.welcomeMessage+"</p>\n      </div>\n    ",l=document.createElement("div");l.className="socials";var r=Object.keys(bio.contacts).map(function(e){if("email"!==e)return"github"===e?"\n          <a href="+bio.contacts[e]+'>\n            <svg aria-hidden="true" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 496 512">\n              <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>\n            </svg>\n          </a>\n        ':"linkedin"===e?"\n          <a href="+bio.contacts[e]+'>\n            <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img"\n              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n              <path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>\n            </svg>\n          </a>\n        ':void("location"!==e&&console.error("Ooops! something is wrong with contacts..."))}).join("");l.innerHTML=r,$(".hero--top").append(o),$(".hero--top").append(n),$(".hero--bottom").append(s),$(".hero--bottom").append(l);var c=[{value:10,color:"#F7464A",highlight:"#FF5A5E",label:bio.skills[0],labelcolor:"#F7464A"},{value:9,color:"#FFCC00",highlight:"#FFEB99",label:bio.skills[1],labelcolor:"#FFCC00"},{value:8,color:"#FF9933",highlight:"#ffcc99",label:bio.skills[2],labelcolor:"#FF9933"},{value:8,color:"#3399FF",highlight:"#99CCFF",label:bio.skills[3],labelcolor:"#3399FF"},{value:8,color:"#33CC33",highlight:"#ADEBAD",label:bio.skills[4],labelcolor:"#33CC33"},{value:7,color:"#FF66FF",highlight:"#FF99FF",label:bio.skills[5],labelcolor:"#FF66FF"},{value:7,color:"#999",highlight:"#CCC",label:bio.skills[6],labelcolor:"#999"},{value:6,color:"#000",highlight:"#404040",label:bio.skills[7],labelcolor:"#000"},{value:5,color:"#9999FF",highlight:"#CCCCFF",label:bio.skills[8],labelcolor:"#9999FF"},{value:8,color:"#2B3B8C",highlight:"#7686D5",label:bio.skills[9],labelcolor:"#2B3B8C"}];window.onload=function(){var e=document.getElementById("skills-chart").getContext("2d");window.myPolarAreaChart=new Chart(e).PolarArea(c,{responsive:!0,maintainAspectRatio:!1}),c.forEach(function(e){var a=e.label,t='\n        <li class="skill" style="background-color: '+e.labelcolor+'">\n          '+a+"\n        </li>\n        ";$(".skills--list").append(t)})}}};bio.display();var distinctions={distinctions:["Member of the McGill varsity tennis team","Competed in pro level tennis tournaments internationally","GCSE Award for best school project in Information Technology (Top 3% Worldwide)","International Award (also known as the Duke of Edinburgh Award) - Gold Level"],display:function(){var e=_toArray(distinctions.distinctions).slice(0);$(".distinctions").append('<ul class="distinctions-list"></ul>'),e.forEach(function(e){var a="<li>"+e+"</li>";$(".distinctions-list").append(a)})}};distinctions.display();var languages={languages:[{name:"English",level:3},{name:"Arabic",level:3},{name:"French",level:1}],display:function(){languages.languages.forEach(function(e){var a='\n        <div class="language-name">'+e.name+"</div>\n      ";$(".languages").append(a),$(".languages").append('<div class="progress"></div>'),3===e.level?($(".progress:last").append('<div class="progress-bar-striped progress-level-3"></div>'),$(".progress-level-3:last").append("<span>Native or bilingual proficiency</span>")):2===e.level?($(".progress:last").append('<div class="progress-bar-striped progress-level-2"></div>'),$(".progress-level-2:last").append("<span>Full professional proficiency</span>")):1===e.level?($(".progress:last").append('<div class="progress-bar-striped progress-level-1"></div>'),$(".progress-level-1:last").append("<span>Limited professional proficiency</span>")):console.log("Something isn't right....Didn't find a language level")})}};languages.display();var places=["Montreal, Canada","Doha, Qatar"],zoomLevel=1,map=void 0,lastInfoWindowOpened=void 0;function initializeMap(){var e,t;function i(e){var a=e.formatted_address,t=window.mapBounds,i=new google.maps.Marker({map:map,position:e.geometry.location,title:a}),o=new google.maps.InfoWindow({content:a});google.maps.event.addListener(i,"click",function(){lastInfoWindowOpened&&lastInfoWindowOpened.close(),o.open(map,i),lastInfoWindowOpened=o}),t.extend(i.getPosition()),map.fitBounds(t),map.setZoom(zoomLevel),map.setCenter(t.getCenter())}function o(e,a){if(a===google.maps.places.PlacesServiceStatus.OK)for(var t=0;t<e.length;t++)i(e[t])}map=new google.maps.Map(document.querySelector(".map--container"),{disableDefaultUI:!0}),window.mapBounds=new google.maps.LatLngBounds,e=places,t=new google.maps.places.PlacesService(map),e.forEach(function(e){var a={query:e};t.textSearch(a,o)})}window.addEventListener("resize",function(e){map.fitBounds(mapBounds),map.setZoom(zoomLevel)});var projects={projects:[{title:"That's Delicious",dates:"July 2018",description:"A full stack restaurant application where users can search, geolocate, review and add/edit their favourite restaurants from around the world.",technologies:["Node","Express","mongoDB","passportJS","ES6/7","HTML5","Pug","Sass","CSS3","Webpack","Babel","Heroku"],images:["./images/thats-delicious.png"],github:"https://github.com/tlabna/thats-delicious",demo:"https://thats-delicious-wb.herokuapp.com/"},{title:"Duckr",dates:"December 2017",description:"Twitter like application built with React and Redux.",technologies:["React","Redux","ImmutableJS","NPM","Webpack","Babel","HTML","CSS","Firebase"],images:["./images/duckr.png"],github:"https://github.com/tlabna/duckr",demo:"https://duckr-wb.firebaseapp.com/"},{title:"Bus Finder Demo",dates:"June 2017",description:"Responsive micro-site demo built with React (using Busbud API and hosted on Heroku) that triggers a departure search on a specific day for users travelling from New York to Montreal who want to attend the Osheaga Music Festival.",technologies:["React","Express","NPM","Webpack","Babel","Axios","HTML","CSS","Heroku"],images:["./images/bus-finder.png"],github:"https://github.com/tlabna/coding-challenge-frontend-b",demo:"https://busbud-finder-challenge.herokuapp.com/"},{title:"GitHub Battle",dates:"May 2017",description:"Developed a React single page application using GitHub API where users can compare GitHub user accounts as well as display popular repositories on GitHub.",technologies:["ES6","React","Firebase","NPM","Webpack","Babel","Axios","HTML","CSS"],images:["./images/github-battle.png"],github:"https://github.com/tlabna/github-battle",demo:"https://github-battle-ec28a.firebaseapp.com"},{title:"Linux Server Configuration",dates:"April 2017",description:"Hosted music catalog on Amazon servers, secured it from a number of attack vectors and installed/configured web and database servers.",technologies:["SSH","Linux","Apache","PostgreSQL"],images:["images/music-catalog-linuxserver.png"],github:"https://github.com/tlabna/linux-server-config",demo:""},{title:"Feed Reader Testing",dates:"April 2017",description:"Programmed comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",technologies:["JavaScript","Jasmine","JavaScript testing frameworks"],images:["images/feed-reader.png"],github:"https://github.com/tlabna/feedreader-testing",demo:""},{title:"Neighbourhood Map",dates:"March 2017",description:"Responsive single page web application (uses Foursquare API and Google Maps API) to find interesting places in a neighbourhood.",technologies:["JavaScript","HTML","CSS","Knockout","AJAX","JavaScript frameworks"],images:["images/neighbourhood-map.png"],github:"https://github.com/tlabna/neighbourhood-map",demo:"https://tlabna.github.io/neighbourhood-map/dist/index.html"},{title:"Item Catalog",dates:"March 2017",description:"Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database.",technologies:["HTML","CSS","Python","Flask","SQL","Vagrant"],images:["images/music-catalog.png"],github:"https://github.com/tlabna/item-catalog",demo:""},{title:"Website Optimization",dates:"March 2017",description:"Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",technologies:["HTML","CSS","Chrome Developer Tools","Critical rendering path","60FPS rendering"],images:["images/pagespeed-insights.png"],github:"https://github.com/tlabna/website-optimization",demo:""},{title:"Online Resume",dates:"December 2016",description:"Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.",technologies:["HTML","CSS","JavaScript","JQuery"],images:["images/online-resume2.png"],github:"https://github.com/tlabna/online-resume/tree/v1",demo:""}],display:function(){projects.projects.forEach(function(e){$(".projects").append('<div class="project--entry thumbnail"></div>');var a="<h3>%data%</h3>".replace("%data%",e.title),t="<h5>%data%</h5>".replace("%data%",e.description);if(0<e.images.length)for(var i=0;i<e.images.length;i++){var o='<div class="project--image"><img src="%data%"></div>'.replace("%data%",e.images[i]);$(".thumbnail:last").append(o)}if($(".thumbnail:last").append('<div class="caption"></div>'),$(".caption:last").append(a),0<e.technologies.length){$(".caption:last").append('<h5 class="project--technologies"></h5>');for(var n=0;n<e.technologies.length;n++){var s='<span class="label">%data%</span>'.replace("%data%",e.technologies[n]);$(".project--technologies:last").append(s)}}if($(".caption:last").append(t),$(".thumbnail:last").append('<div class="project--links"></div>'),""!==e.github){var l="<a href='#' class='btn project--button'>Github</a>".replace("#",e.github);$(".project--links:last").append(l)}if(""!==e.demo){var r="<a href='#' class='btn project--button demo'>Demo</a>".replace("#",e.demo);$(".project--links:last").append(r)}})}};function equalizeImageHeights(){var e=document.querySelectorAll(".project--image img"),a=0;e.forEach(function(e){e.offsetHeight>a&&(a=e.offsetHeight)}),$(".project--image").height(a)}projects.display(),$(window).on("load",equalizeImageHeights),$(window).resize(equalizeImageHeights);