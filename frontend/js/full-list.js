//first load of data for full-list.html when its accessed
function fullBuild() {
  //the container variable will contain all the 'text' which will go into the .list-ol class
  var container = `
  <button class="accordion listHeader">
    <h3 class="title">Sort by:</h3>
    <h3 class="title" id="sortByAlphabet">Title</h3>
    <h3 class="title" id="sortByRank">Rating</h3>
  </button>
  `; // this will be the secondary menu where you can select how to sort the list

  // this compiles all the data from the novels
  for (var i = 0; i < lib.length; i++) {
    container += `
    <button class="accordion">
        <div class="id-picture">
          <h3 class="list-number">` + (i+1) + `</h3>
          <a href="` + lib[i].picSource + `">
            <img src="` + lib[i].picSource + `" width="42px" height="60px" />
          </a>
        </div>
        <div class="full-list-titles">
          <h3 class="title">` + lib[i].name + `</h3>
        </div>
        <div class="full-list-rankings">
          <h4 class="ranking"> ` + lib[i].ranking + ` / 5 </h4>
        </div>
        <div class="panel"><a href="` + lib[i].url + `" class="link">More Information</a><p>` + lib[i].description + `</p></div>
      </button>
    `; //the panel class is hidden at first and is only accessible when the user clicks on the entry.
  }

  //this is the div where all the data is shoved into and which is presented like a table/list in the full-list html
  document.querySelector(".list-ol").innerHTML = container;

  //getting all the accordion elements to give them the ability to show the .panel class where the descriptions are hidden
  var acc = document.getElementsByClassName("accordion");

  //making addeventlisteners for multiple accordion elements. (starting with one
  // because the sub navigation has the accordion class to for design purposes but doesnt have a panel element)
  for ( var j = 1; j < acc.length; j++) {
    acc[j].addEventListener("click", function() {
      //changes the color of the selected accordion element
      this.classList.toggle("active");
      var panel = this.getElementsByClassName('panel')[0];
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
    });
  }

  //this variable processes the initial array from the website and gives back the following data:
  //newArray --> alphabetically sorted array instead of ranking
  // reversedNewArray --> newArray reveresed Z-A
  // and oldArray as it was in the beginning
  var AlphabeticalArray = sortList();
  // this is to check if its beeing sorted by A-z or Z-A
  AlphabeticalArray[3] = true;

  //this is the alphabetic sorting eventlistener for the list, as normally it will be sorted by the rating.
  document.querySelector("#sortByAlphabet").addEventListener("click", function() {
    var parent = document.querySelector(".list-ol");
    //checks which Array should be used, 0 = normal newArray 1 = reversed Array
    var arrayNumber = (AlphabeticalArray[3]) ? 0 : 1;
    //loads the newArray into the .list-ol class
    for (var i = 0; i < AlphabeticalArray[arrayNumber].length; i++) {
        parent.appendChild(AlphabeticalArray[arrayNumber][i]);
    }
    //changes the arrow to indicate the direction of the sorting
    if (AlphabeticalArray[3]) {
      document.querySelector("#sortByAlphabet").innerHTML = "Title" + String.fromCharCode(9660);
      document.querySelector("#sortByRank").innerHTML = "Rating";
    } else {
      document.querySelector("#sortByAlphabet").innerHTML = "Title" + String.fromCharCode(9650);
      document.querySelector("#sortByRank").innerHTML = "Rating";
    }
    //changes the polarity so that the next click will change the array
    AlphabeticalArray[3] = (AlphabeticalArray[3]) ? false : true;
    idChange();
  });

  //checking if the rank is reversed
  var rankReverse = false;
  //basically the normal order and the reversed one, renamed just for conviniece in naming
  var rankArray = AlphabeticalArray[2];
  var rankReverseArray = Array.from(AlphabeticalArray[2]).reverse();
  //changing the position of the sub menu in the reversed array
  var lastItem = rankReverseArray.pop();
  rankReverseArray.unshift(lastItem);

  //this is the sorting per rank for after somebody used alphabetic ranking or to reverse the ranks
  document.querySelector("#sortByRank").addEventListener("click", function() {
    var parent = document.querySelector(".list-ol");
    //checks which Array should be used, 0 = normal newArray 1 = reversed Array
    var arrayInUse = (rankReverse) ? rankArray : rankReverseArray;
    //loads the selected array into the .list-ol class
    for (var i = 0; i < arrayInUse.length; i++) {
        parent.appendChild(arrayInUse[i]);
    }
    //changes the arrow to indicate the direction of the sorting
    if (rankReverse) {
      document.querySelector("#sortByRank").innerHTML = "Rating" + String.fromCharCode(9660);
      document.querySelector("#sortByAlphabet").innerHTML = "Title";
    } else {
      document.querySelector("#sortByRank").innerHTML = "Rating" + String.fromCharCode(9650);
      document.querySelector("#sortByAlphabet").innerHTML = "Title";
    }
    //changes the polarity so that the next click will change the array
    rankReverse = (rankReverse) ? false : true;
    idChange();
  });

  //changes the list numbers to the right order
  function idChange() {
    //selecting all the numbers from the table to later change them to the new order
    var idNumbers = document.querySelectorAll(".list-number");
    for (var k = 0; k < idNumbers.length; k++) {
      idNumbers[k].innerHTML = k+1;
    }
  }
}
