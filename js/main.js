

// SELECTORS
const listItem = document.querySelector('ul');
const newplayerItem = document.querySelector('li');
const nameInput = document.querySelector('.playername');
const placeInput = document.querySelector('.playerplace');
const killsInput = document.querySelector('.playerkills');
const totalOutput = document.querySelector('.playertotal');
const countScoreBtn = document.querySelector('.score');
const resetScoreBtn = document.querySelector('.reset');
const addPlayerBtn = document.querySelector('.addPlayerBtn');
const removePlayerBtn = document.querySelector('.removePlayerBtn');
const filterOption = document.querySelector('.filter');
const saveObjectBtn = document.querySelector('.savePlayerObject');

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getLsPlayers);
addPlayerBtn.addEventListener("click", addPlayer);
listItem.addEventListener("click", deletePlayer);
saveObjectBtn.addEventListener('click',createPlyerObject);

//add player on push enter
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {

    event.preventDefault();

    const ulList = document.getElementById('player-list');
    const inputPlayerName = document.getElementById('input-value');
    const inputValue = inputPlayerName.value;


    //player list item
    const newplayerListItem = document.createElement('li');
    newplayerListItem.classList.add('player-list-item');
    //playerINputname

    // event listner on whole doucment for enter button 
    const playerInputName = document.createElement('input');
    playerInputName.setAttribute('type', 'text');
    playerInputName.value = inputValue;
    playerInputName.placeholder = "Player Name";
    playerInputName.classList.add('playername');
    newplayerListItem.appendChild(playerInputName);
    //playerINputPlace
    const playerInputPlace = document.createElement('input');
    playerInputPlace.placeholder = "Place";
    playerInputPlace.setAttribute('type', 'number');
    playerInputPlace.classList.add('playerplace');
    newplayerListItem.appendChild(playerInputPlace);
    //playerINputKills
    const playerInputKills = document.createElement('input');
    playerInputKills.placeholder = "Kills";
    playerInputKills.setAttribute('type', 'number');
    playerInputKills.classList.add('playerkills');
    newplayerListItem.appendChild(playerInputKills);
    //playerTotalScore
    const playerTotalScore = document.createElement('span');
    playerTotalScore.classList.add('playertotal',);
    playerTotalScore.innerText = "Score";
    newplayerListItem.appendChild(playerTotalScore);
    //scoreBtn
    const playerScoreBtn = document.createElement('button');
    playerScoreBtn.setAttribute('type', 'button');
    playerScoreBtn.classList.add('btn', 'btn-info', 'score');
    playerScoreBtn.innerText = "T";
    newplayerListItem.appendChild(playerScoreBtn);
    //resetBtn
    const playerResetBtn = document.createElement('button');
    playerResetBtn.setAttribute('type', 'button');
    playerResetBtn.classList.add('btn', 'btn-warning', 'reset');
    playerResetBtn.innerHTML = "R";
    newplayerListItem.appendChild(playerResetBtn);

    //removePlayerBtn
    const removePlayerBtn = document.createElement('button');
    removePlayerBtn.setAttribute('type', 'button');
    removePlayerBtn.classList.add('btn', 'btn-danger', 'removePlayerBtn');
    removePlayerBtn.innerHTML = '<span class="fa fa-trash"></span>';
    newplayerListItem.appendChild(removePlayerBtn);

    ulList.appendChild(newplayerListItem);
      //add to local storage
     LSPlayers(playerInputName.value );

    //clear top input value
    inputPlayerName.value = "";
  }
});
filterOption.addEventListener('click', filterScore)

// FUNCTIONS

//////add new player on click with mouse
function addPlayer(event) {
  event.preventDefault();

  const ulList = document.getElementById('player-list');
  const inputPlayerName = document.getElementById('input-value');
  const inputValue = inputPlayerName.value;


  //player list item
  const newplayerListItem = document.createElement('li');
  newplayerListItem.classList.add('player-list-item');
  //playerINputname
  const playerInputName = document.createElement('input');
  playerInputName.setAttribute('type', 'text');
  playerInputName.value = inputValue;
  playerInputName.placeholder = "Player Name"
  playerInputName.classList.add('playername');
  newplayerListItem.appendChild(playerInputName);
  //playerINputPlace
  const playerInputPlace = document.createElement('input');
  playerInputPlace.placeholder = "Place";
  playerInputPlace.setAttribute('type', 'number');
  playerInputPlace.classList.add('playerplace');
  newplayerListItem.appendChild(playerInputPlace);
  //playerINputKills
  const playerInputKills = document.createElement('input');
  playerInputKills.placeholder = "Kills";
  playerInputKills.setAttribute('type', 'number');
  playerInputKills.classList.add('playerkills');
  newplayerListItem.appendChild(playerInputKills);
  //playerTotalScore
  const playerTotalScore = document.createElement('span');
  playerTotalScore.classList.add('playertotal');
  playerTotalScore.innerText = "Score";
  newplayerListItem.appendChild(playerTotalScore);
  //scoreBtn


  const playerScoreBtn = document.createElement('button');
  playerScoreBtn.setAttribute('type', 'button');
  playerScoreBtn.classList.add('btn', 'btn-info', 'score');
  playerScoreBtn.innerText = "T";
  newplayerListItem.appendChild(playerScoreBtn);
  //resetBtn
  const playerResetBtn = document.createElement('button');
  playerResetBtn.setAttribute('type', 'button');
  playerResetBtn.classList.add('btn', 'btn-warning', 'reset');
  playerResetBtn.innerText = "R";
  newplayerListItem.appendChild(playerResetBtn);

  //removePlayerBtn
  const removePlayerBtn = document.createElement('button');
  removePlayerBtn.setAttribute('type', 'button');
  removePlayerBtn.classList.add('btn', 'btn-danger', 'removePlayerBtn');
  removePlayerBtn.innerHTML = '<span class="fa fa-trash"></span>';
  newplayerListItem.appendChild(removePlayerBtn);

  ulList.appendChild(newplayerListItem);

  //add to local storage
 LSPlayers(inputValue);

  //clear top input value
  inputPlayerName.value = "";
};

///////  //watch for click on player list then do something
function deletePlayer(e) {
  const item = e.target;

  if (item.classList[2] === "removePlayerBtn") {
    const LSPlayer = item.parentElement;
    removeLS(LSPlayer);
    LSPlayer.remove();

  }

  if (item.classList[2] === "reset") {

    const list1 = item.parentElement;
    const nameValue = list1.childNodes[0];
    const placeValue = list1.childNodes[1];
    const KillsValue = list1.childNodes[2];
    const ScoreValue = list1.childNodes[3];
    //set value to zero on restart press
    nameValue.value = "";
    placeValue.value = "";
    KillsValue.value = "";
    ScoreValue.innerText = "Score";
    console.log(nameValue);

  }


  if (item.classList[2] === "score") {
    const list1 = item.parentElement;
    const nameValue = list1.childNodes[0].value;
    const placeValue = list1.childNodes[1].value;
    const KillsValue = list1.childNodes[2].value;
    const ScoreValue = list1.childNodes[3];
    // SCORE VALUE CALCULATOR
    if (placeValue == 1) {
      ScoreValue.innerText = (100 - placeValue) + (30 * KillsValue) + 100;
    } else if (placeValue == 2) {
      ScoreValue.innerText = (100 - placeValue) + (30 * KillsValue) + 30;
    } else if (placeValue == 3) {
      ScoreValue.innerText = (100 - placeValue) + (30 * KillsValue) + 10;
    } else {
      ScoreValue.innerText = (100 - placeValue) + (30 * KillsValue);
    };

    //create a list item with scores only
/*     const ulStandings = document.getElementById('player-standings');
 */
    //standings list item
    // const playedListItem = document.createElement('li');
    // playedListItem.classList.add('standing-list-item');
    // playedListItem.dataset.indexNumber = ScoreValue.innerText;

    // const spanScore = document.createElement('span');
    // spanScore.classList.add('score-span');
    // spanScore.innerHTML = ScoreValue.innerText;
    // playedListItem.appendChild(spanScore);

    // const spanName = document.createElement('span');
    // spanName.classList.add('name-span');
    // spanName.innerHTML = nameValue;
    // playedListItem.appendChild(spanName);
    // ulStandings.appendChild(playedListItem);

    //ADD PLAYERS TO NEW TABLE
    const scoreTable = document.getElementById('table-score');

    const tableBody = scoreTable.children[1];
   
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const tableD = document.createElement('td');
    tableD.innerText = nameValue;
    tableD.classList.add('st-name');
    const tableD2 = document.createElement('td');
    tableD2.classList.add('st-score');
    tableD2.innerText = ScoreValue.innerText;
    tableRow.appendChild(tableD);
    tableRow.appendChild(tableD2);
    console.log(tableBody);
  
  }


}

//filter function
function filterScore(e) {
  let AssendingSort = false;
  let result;
  let temp = "";
  let sortedList;


  sortList(document.getElementById('player-standings'));

  function sortList(ul) {
    var new_ul = ul.cloneNode(false);

    // Add all lis to an array
    var lis = [];
    for (var i = ul.childNodes.length; i--;) {
      if (ul.childNodes[i].nodeName === 'LI')
        lis.push(ul.childNodes[i]);
    }

    // Sort the lis in descending order
    lis.sort(function (a, b) {
      // return parseInt(b.childNodes[0].data, 10) -
      //   parseInt(a.childNodes[0].data, 10);
      return b-a
    });

    // Add them into the ul in order
    for (var i = 0; i < lis.length; i++)
      new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
  }

}

const stResBtn = document.getElementById('st-reset-button');
stResBtn.addEventListener('click', resetStBtn);

function resetStBtn(e) {
  const ulStandings = document.getElementById('table-score');
  const scoreTable = document.getElementById('table-score');
  const tableBody = scoreTable.children[1];
  tableBody.innerHTML = "";

}


//save player  name  to local storage
function LSPlayers(LSPlayer){
  //check if tehre is a list
  let LSPlayers;
  if(localStorage.getItem('LSPlayers') === null){
    LSPlayers = [];
  }else{
    LSPlayers = JSON.parse(localStorage.getItem('LSPlayers'));
  }
  LSPlayers.push(LSPlayer);
  localStorage.setItem('LSPlayers', JSON.stringify(LSPlayers));

};

//save palce to local storage on score press
/* 
function LSPlaces(LSPlace){
  let LSPlaces;
  if(localStorage.getItem('LSPlaces') === null){
    LSPlaces = [];
  }else{
    LSPlaces = JSON.parse(localStorage.getItem('LSPlaces'));
  }
  LSPlaces.push(LSPlace);
  localStorage.setItem('LSPlaces', JSON.stringify(LSPlaces));
}
 */





//get players from local storage
 function getLsPlayers(){
  let LSPlayers;
  if(localStorage.getItem('LSPlayers') === null){
    LSPlayers = [];
  }else{
    LSPlayers = JSON.parse(localStorage.getItem('LSPlayers'));

  }
  
  LSPlayers.forEach(function(LSPlayer){
    const ulList = document.getElementById('player-list');
    const inputPlayerName = document.getElementById('input-value');
    const inputValue = inputPlayerName.value;
  
  
    //player list item
    const newplayerListItem = document.createElement('li');
    newplayerListItem.classList.add('player-list-item');
    //playerINputname
    const playerInputName = document.createElement('input');
    playerInputName.setAttribute('type', 'text');
    playerInputName.value = LSPlayer;
    playerInputName.placeholder = "Player Name"
    playerInputName.classList.add('playername');
    newplayerListItem.appendChild(playerInputName);
    //playerINputPlace
    const playerInputPlace = document.createElement('input');
    playerInputPlace.placeholder = "Place";
    playerInputPlace.setAttribute('type', 'number');
    playerInputPlace.classList.add('playerplace');
    newplayerListItem.appendChild(playerInputPlace);
    //playerINputKills
    const playerInputKills = document.createElement('input');
    playerInputKills.placeholder = "Kills";
    playerInputKills.setAttribute('type', 'number');
    playerInputKills.classList.add('playerkills');
    newplayerListItem.appendChild(playerInputKills);
    //playerTotalScore
    const playerTotalScore = document.createElement('span');
    playerTotalScore.classList.add('playertotal');
    playerTotalScore.innerText = "Score";
    newplayerListItem.appendChild(playerTotalScore);
    //scoreBtn
    const playerScoreBtn = document.createElement('button');
    playerScoreBtn.setAttribute('type', 'button');
    playerScoreBtn.classList.add('btn', 'btn-info', 'score');
    playerScoreBtn.innerText = "T";
    newplayerListItem.appendChild(playerScoreBtn);
    //resetBtn
    const playerResetBtn = document.createElement('button');
    playerResetBtn.setAttribute('type', 'button');
    playerResetBtn.classList.add('btn', 'btn-warning', 'reset');
    playerResetBtn.innerText = "R";
    newplayerListItem.appendChild(playerResetBtn);
  
    //removePlayerBtn
    const removePlayerBtn = document.createElement('button');
    removePlayerBtn.setAttribute('type', 'button');
    removePlayerBtn.classList.add('btn', 'btn-danger', 'removePlayerBtn');
    removePlayerBtn.innerHTML = '<span class="fa fa-trash"></span>';
    newplayerListItem.appendChild(removePlayerBtn);
  
    ulList.appendChild(newplayerListItem);


  });
 }
// get places and add to array
/*  function getPlaces (){
  let LSPlaces;
  if(localStorage.getItem('LSPlaces') === null){
    LSPlaces = [];
  }else{
    LSPlaces = JSON.parse(localStorage.getItem('LSPlayeces'));
  }

  LSPlaces.forEach(function(LSPlace){
  const playerInputPlace = document.querySelector('.playerplace'); 
  playerInputPlace.value = LSPlace;

  });
} */


 //remove local storage lsplayer
 function removeLS(LSPlayer){
  let LSPlayers;
  if(localStorage.getItem('LSPlayers') === null){
    LSPlayers = [];
  }else{
    LSPlayers = JSON.parse(localStorage.getItem('LSPlayers'));
    
  }
    const playerIndex = LSPlayer.children[0].value;
    LSPlayers.splice(LSPlayers.indexOf(playerIndex),1);
    localStorage.setItem('LSPlayers', JSON.stringify(LSPlayers));
}


//create player object
function createPlyerObject(e) {
  const ulList = document.getElementById('player-list');
  const item = e.target;

  if (item.classList[2] === 'savePlayerObject'){
    const ulList = document.getElementById('player-list').children;
    for (let index = 0; index < ulList.length; index++) {
      const element = ulList[index];
      const Name = element.children[0].value;
      const Place = element.children[1].value;
      const Kills = element.children[2].value;
      const Score = element.children[3].innerText;

      var Player = {name : Name , place : Place , kills : Kills , score: Score};
      
      
    }
    console.log(Player);
  
  }


}
//sortable table javascript
/**
 * Sorts a HTML table.
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
      const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

      return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
  headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});

/*   localStorage.clear()  */