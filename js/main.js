


/* 

 function myScore(){
    var place = document.getElementById("place").value;
    var kills = document.getElementById("kills").value;
    var totalScore = (100-place) + (30 * kills);
    document.getElementById("total").innerHTML = totalScore;       
  }
  function myReset(){
    var place = document.getElementById("place");
    var kills = document.getElementById("kills") ;
    var totalScore =  document.getElementById("total");
    var name = document.getElementById("name");
    name.value = "";    
    place.value = "";
    kills.value = "";
    totalScore.innerHTML = "TotalScore";
  }

 function myScore2(){
    var place = document.getElementById("place2").value;
    var kills = document.getElementById("kills2").value;
    var totalScore = (100-place) + (30 * kills);
    document.getElementById("total2").innerHTML = totalScore;       
  }
  function myReset2(){
    var place = document.getElementById("place2");
    var kills = document.getElementById("kills2") ;
    var totalScore =  document.getElementById("total2");    
    place.value = "";
    kills.value = "";
    totalScore.innerHTML = "TotalScore";
  } */


  // LIST JS


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
  // EVENT LISTENERS

  addPlayerBtn.addEventListener("click" , addPlayer);

  listItem.addEventListener("click", deletePlayer);

  // FUNCTIONS

  //////add new player
  function addPlayer(event){
    event.preventDefault();

    const ulList = document.getElementById('player-list');
    const inputPlayerName = document.getElementById('input-value');
    const inputValue = inputPlayerName.value;
   
  
    //player list item
    const newplayerListItem = document.createElement('li');
    newplayerListItem.classList.add('player-list-item');
    // player div 
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player','input-group');
    //player list items content
    newplayerListItem.appendChild(playerDiv);
    //playerINputname
    const playerInputName = document.createElement('input');
    playerInputName.setAttribute('type','text');
    playerInputName.value = inputValue;
    playerInputName.classList.add('form-control','playername');
    playerDiv.appendChild(playerInputName);
    //playerINputPlace
    const playerInputPlace = document.createElement('input');
    playerInputPlace.placeholder = "Finished Place";
    playerInputPlace.setAttribute('type','number');
    playerInputPlace.classList.add('form-control','playerplace');
    playerDiv.appendChild(playerInputPlace);
    //playerINputKills
    const playerInputKills = document.createElement('input');
    playerInputKills.placeholder = "Kills";
    playerInputKills.setAttribute('type','number');
    playerInputKills.classList.add('form-control','playerkills');
    playerDiv.appendChild(playerInputKills);
    //playerTotalScore
    const playerTotalScore = document.createElement('span');
    playerTotalScore.classList.add('btn','playertotal', 'btn-info');
    playerTotalScore.innerText = "Score";
    playerDiv.appendChild(playerTotalScore);
    //scoreBtn
    const playerScoreBtn = document.createElement('button');
    playerScoreBtn.setAttribute('type','button');
    playerScoreBtn.classList.add('btn','btn-warning','score');
    playerScoreBtn.innerText = "Total";
    playerDiv.appendChild(playerScoreBtn);
    //resetBtn
    const playerResetBtn = document.createElement('button');
    playerResetBtn.setAttribute('type','button');
    playerResetBtn.classList.add('btn','btn-danger','reset');
    playerResetBtn.innerText = "Reset";
    playerDiv.appendChild(playerResetBtn);

    //removePlayerBtn
    const removePlayerBtn = document.createElement('button');
    removePlayerBtn.setAttribute('type','button');
    removePlayerBtn.classList.add('btn','btn-danger','removePlayerBtn');
    removePlayerBtn.innerHTML = '<span class="fa fa-trash"></span>';

    playerDiv.appendChild(removePlayerBtn);
    ulList.appendChild(newplayerListItem);

    //clear top input value
    inputPlayerName.value = "";
  };

  ///////delete player and count score
  function deletePlayer(e){
    const item = e.target;

    //delete item
    if(item.classList[2] === "removePlayerBtn" ){
      const removeParent = item.parentElement;
      removeParent.remove();
    }

    if(item.classList[2] === "reset"){
      console.log('you presssed reset');
    
      
    }
    if(item.classList[2] === "score"){
      const inputnamevalue = document.querySelector(('[placeholder="Player name"]'));
      const parent = item.parentElement.parentNode;
      console.log(parent);
    
      

    
  
    }

  }