/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = new Vue({
      el: '#vue_app',
      // This automatically imports your movies.json file and puts it into
      // the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
          },
      data: {
            // This holds your movies.json data.
            movies: [],

            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IMDB + Devon's Top 8 Movies",
            owner: 'Devon Zhen',
            github: 'https://github.com/devonzhen22/is219Zhen-P3',
            //poster: 'img/darkknight.jpg', //poster: 'img/darkknight.jpg',

      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            makeTextDate(dateArray){
              var months = [ "January", "February", "March", "April", "May", "June",
                             "July", "August", "September", "October", "November", "December" ];
              var day = dateArray[2]; var month= months[dateArray[1]-1]; var year= dateArray[0];
              var month=month.substring(0,3);
              var date = month+" "+day+", "+year;
              return date;
            },
            like(index){
              index++;
              console.log("Index: "+index);
              console.log("Hello Like Button!");
            },
            dislike(){console.log("Hello Dislike Button!");},
            posterClick(index){

            },
            timeText(minutes){
              var hours= Math.floor(minutes/60);
              var mins = minutes%60;
              var time = hours+"h "+mins+"m";
              return time;
            }
      }
})


