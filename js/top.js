//first load of data for top.html when its accessed
function topBuild() {
  //the elements on the page which is a single novels have the class thumbnail
  var thumbnail = document.querySelectorAll(".thumbnail");

  //there are 8 novels/thumbnails loaded in top.html, which are always the top 8 of the library
  for (var i = 0; i < 8; i++) {
    //loading the empty html structure into the thumbnails
    thumbnail[i].innerHTML = '<h4 class="info" onclick="openModal(' + lib[i].id + ')">i</h4><div class="holder"></div><h3 class="title"></h3>';
  }

  //selecting the elements from the html structure
  var names = document.querySelectorAll(".line .title");
  var ranking = document.querySelectorAll(".line .ranking");
  var holder = document.querySelectorAll(".line .holder");
  var des = document.querySelectorAll(".line .description");

  for (var j = 0; j < 8; j++) {
    //because some title are too long, the title text has to be cut at 35 characters
    var characterLimiter = 35;
    // undexXXCharacterCheck takes in the id of a particular novel and the number
    // of character you want to have as output and gives back a string
    var insert = underXXCharacterCheck(j, 35);
    names[j].innerHTML = insert;
    holder[j].innerHTML = '<a href="'+lib[j].picSource+'"><img src="'+lib[j].picSource+'" alt="'+lib[j].name+' Cover'+'" class="cover" width="146px" height="210px"></a>';
  }
}
