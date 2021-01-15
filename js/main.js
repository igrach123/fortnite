
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
// EVENT LISTENERS

addPlayerBtn.addEventListener("click", addPlayer);
listItem.addEventListener("click", deletePlayer);
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
    playerInputName.placeholder = "Player Name"
    playerInputName.classList.add('playername');
    newplayerListItem.appendChild(playerInputName);
    //playerINputPlace
    const playerInputPlace = document.createElement('input');
    playerInputPlace.placeholder = "Finished Place";
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
    playerTotalScore.classList.add('btn', 'playertotal', 'btn-info');
    playerTotalScore.innerText = "Score";
    newplayerListItem.appendChild(playerTotalScore);
    //scoreBtn
    const playerScoreBtn = document.createElement('button');
    playerScoreBtn.setAttribute('type', 'button');
    playerScoreBtn.classList.add('btn', 'btn-warning', 'score');
    playerScoreBtn.innerText = "T";
    newplayerListItem.appendChild(playerScoreBtn);
    //resetBtn
    const playerResetBtn = document.createElement('button');
    playerResetBtn.setAttribute('type', 'button');
    playerResetBtn.classList.add('btn', 'btn-danger', 'reset');
    playerResetBtn.innerHTML = "R";
    newplayerListItem.appendChild(playerResetBtn);

    //removePlayerBtn
    const removePlayerBtn = document.createElement('button');
    removePlayerBtn.setAttribute('type', 'button');
    removePlayerBtn.classList.add('btn', 'btn-danger', 'removePlayerBtn');
    removePlayerBtn.innerHTML = '<span class="fa fa-trash"></span>';
    newplayerListItem.appendChild(removePlayerBtn);

    ulList.appendChild(newplayerListItem);

    //clear top input value
    inputPlayerName.value = "";
  }
});
filterOption.addEventListener('click', filterScore)

// FUNCTIONS

//////add new player
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
  playerInputPlace.placeholder = "Finished Place";
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
  playerTotalScore.classList.add('btn', 'playertotal', 'btn-info');
  playerTotalScore.innerText = "Score";
  newplayerListItem.appendChild(playerTotalScore);
  //scoreBtn
  const playerScoreBtn = document.createElement('button');
  playerScoreBtn.setAttribute('type', 'button');
  playerScoreBtn.classList.add('btn', 'btn-warning', 'score');
  playerScoreBtn.innerText = "T";
  newplayerListItem.appendChild(playerScoreBtn);
  //resetBtn
  const playerResetBtn = document.createElement('button');
  playerResetBtn.setAttribute('type', 'button');
  playerResetBtn.classList.add('btn', 'btn-danger', 'reset');
  playerResetBtn.innerText = "R";
  newplayerListItem.appendChild(playerResetBtn);

  //removePlayerBtn
  const removePlayerBtn = document.createElement('button');
  removePlayerBtn.setAttribute('type', 'button');
  removePlayerBtn.classList.add('btn', 'btn-danger', 'removePlayerBtn');
  removePlayerBtn.innerHTML = '<span class="fa fa-trash"></span>';
  newplayerListItem.appendChild(removePlayerBtn);

  ulList.appendChild(newplayerListItem);

  //clear top input value
  inputPlayerName.value = "";
};

///////  //watch for click on player list then do something
function deletePlayer(e) {
  const item = e.target;


  if (item.classList[2] === "removePlayerBtn") {
    const removeParent = item.parentElement;
    removeParent.remove();

  }

  if (item.classList[2] === "reset") {
    console.log('you presssed reset');
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
    const ulStandings = document.getElementById('player-standings');

    //standings list item
    const playedListItem = document.createElement('li');
    playedListItem.classList.add('standing-list-item');
    playedListItem.dataset.indexNumber = ScoreValue.innerText;
    playedListItem.innerHTML = ScoreValue.innerText + " - " + nameValue;
    ulStandings.appendChild(playedListItem);


  }

}

//filter function

function filterScore(e) {
  let AssendingSort = false;
  let result;
  let temp = "";
  let sortedList;


  // const ulStandings = document.getElementById('player-standings');
  // const standingList = ulStandings.childNodes;
  // //array od scorova i imena
  // const list = Array.from(standingList);
  // list.sort().reverse();

  // var arrayLength = list.length;
  // for (var i = 0; i < arrayLength; i++) {
  //   console.log(list[i]);
  //   //Do something

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
      return parseInt(b.childNodes[0].data, 10) -
        parseInt(a.childNodes[0].data, 10);
    });

    // Add them into the ul in order
    for (var i = 0; i < lis.length; i++)
      new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
  }

}





