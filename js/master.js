// a reload event to update text sizes when the width of the browser window changes
window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});

//this function is sorting the accordion elements in the page its being invoked on
function sortList() {
  // this creates a true array out of the html collection given by the queryselector
  var oldArray = Array.prototype.slice.call(document.querySelectorAll(".accordion"));
  //clone of the first array to keep the old one intact
  var newArray = Array.from(oldArray);
  //easier sorting by removing the sub menu
  newArray.shift();
  //sorting the accordings by their titles with the help of an exptra compare function
  newArray.sort(compareAccordions);
  //the new Array reversed
  var reversedNewArray = Array.from(newArray).reverse();
  //giving back the sub menu
  newArray.unshift(oldArray[0]);
  reversedNewArray.unshift(oldArray[0]);
  return [newArray, reversedNewArray, oldArray];
}

// this is a compare function for the sort from sortList(), here we traverse through the html elemenets
// to the titles accordion --> full-list-titles --> h3 titles --> names
function compareAccordions(a,b) {
if (a.children[1].children[0].innerHTML < b.children[1].children[0].innerHTML)
  return -1;
if (a.children[1].children[0].innerHTML > b.children[1].children[0].innerHTML)
  return 1;
return 0;
}

//takes as variable the id for the lib entry and inputs the data into the modal which is first hidden.
function openModal(i) {
  //on starting the function, the modal box which is hidden is set to block
  document.getElementById('modalTop').style.display = "block";

  //loading the container element for the text of the modal box "modalContent", because the 'modalTop' class is just semi transparent black
  var modal = document.querySelector(".modalContent");
  //loading the empty html structure to the modal
  modal.innerHTML = '<h4 id="close" class="close" onclick="closeModal()">x</h4> <h3 class="title"></h3> <h4 class="ranking"></h4> <div class="holder"></div> <p class="description"></p>';

  //selecting all the html elements
  var names = document.querySelector(".modalContent .title");
  var ranking = document.querySelector(".modalContent .ranking");
  var holder = document.querySelector(".modalContent .holder");
  var des = document.querySelector(".modalContent .description");

  //adding the contents of the selected novel to the modal
  names.innerHTML = lib[i].name;
  ranking.innerHTML = "Rating: "+lib[i].ranking+"/5";
  holder.innerHTML = '<a href="'+lib[i].picSource+'"><img src="'+lib[i].picSource+'" alt="'+lib[i].name+' Cover'+'" class="cover" width="230px" height="329px"></a>';
  des.innerHTML = "<b>Description: </b><br>" + lib[i].description;

  //adds a link to a website called novelupdates which has more info about a particular novel
  var linkparent = document.createElement("div");
  linkparent.setAttribute("class", "linkparent");
  linkparent.innerHTML = '<a href="'+lib[i].url+'" class="link">More Information here</a>';
  modal.insertBefore(linkparent,des);


}

//closes the modal
function closeModal() {
  document.getElementById('modalTop').style.display = "none";
  //resets the innerhtml to empty so that a new novel can be loaded inside
  document.querySelector(".modalContent").innerHTML = "";
}

//takes in the id of the given novel and checks the title for the number of characters.
//if its higher than the limiter, it gets cut
function underXXCharacterCheck(i, limiter) {
  var text = '';
  if (lib[i].name.length >= limiter) {
    text = lib[i].name.slice(0, limiter) + "...";
  } else {
    text = lib[i].name;
  }
  return text;
}
