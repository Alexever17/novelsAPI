//First load of data when index.html is accessed
function indexBuild() {
  // selecting all the necessery fields out of the "novel" container
  var names = document.querySelectorAll(".novel .title");
  var ranking = document.querySelectorAll(".novel .ranking");
  var holder = document.querySelectorAll(".novel .holder");
  var descr = document.querySelectorAll(".novel .description");
  var parents = document.querySelectorAll(".novel");

  //there are only 3 novels loaded in the index.html file, which are always the 3 top of the library
  for (var i = 0; i < 3; i++) {
    names[i].innerHTML = lib[i].name;
    ranking[i].innerHTML = "Rating: "+lib[i].ranking+"/5";
    holder[i].innerHTML = '<a href="'+lib[i].picSource+'"><img src="'+lib[i].picSource+'" alt="'+lib[i].name+' Cover'+'" class="cover" width="230px" height="329px"></a>';
    descr[i].innerHTML = "<b>Description: </b><br>" + lib[i].description;

    //adds a link to a website called novelupdates which has more info about a particular novel
    var linkparent = document.createElement("div");
    linkparent.setAttribute("class", "linkparent");
    linkparent.innerHTML = '<a href="'+lib[i].url+'" class="link">More Information here</a>';
    parents[i].insertBefore(linkparent,descr[i]);


  }
}
