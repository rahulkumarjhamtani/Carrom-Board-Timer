var x, y, z;

var k = 0;

var isBreak = false;

var inInterval = false;

var temp = [];

var tempBreak = [];

function setTimer(setTime, getTime) {
  getTime.value = setTime;
  console.log(setTime);
  tempBreak.push(setTime);
}

function stopValue() {
  tempBreak = [];
  setTimer(
    document.getElementById("play1").value,
    document.getElementById("play1")
  );
  setTimer(
    document.getElementById("play2").value,
    document.getElementById("play2")
  );
  setTimer(
    document.getElementById("play3").value,
    document.getElementById("play3")
  );
  setTimer(
    document.getElementById("play4").value,
    document.getElementById("play4")
  );
  console.log("Stop = ", tempBreak);

  var playerList = document.getElementsByClassName("playTime");

  var distance = [];
  for (var i = 0; i < k; i++) {
    distance[i] = tempBreak[i];
  }
  var players = k;
  var i = 0;
  // if (z == undefined) {
  //   console.log("Bye");
  //   clearInterval(z);
  // }
  z = setInterval(function () {
    
    if (i >= players) {
      clearInterval(z);
      isInterval = false;
    }
    distance[i] = distance[i];
    distance[i + 1] = distance[i + 1] - 1;
    playerList[i + 1].value = distance[i + 1];
    console.log(distance[i + 1]);

    if (playerList[i + 1].value <= 0) {
      playerList[i + 1].value = 0;
      i++;
      distance[i + 1] = tempBreak[i + 1];
    }
  }, 1000);
}

function addPlayer() {
  if (k > 3) {
    alert("Players cannot be greater than 4");
    return;
  }
  var playerList = document.getElementsByClassName("newPlay");

  playerList[k].style.display = "inline-block";

  console.log("k = ", k);

  k++;
}

function startButton() {
  var players = k;
  console.log("k = ", k);
  if (k <= 1) {
    alert("Players cannot be less than 2");
    return;
  }
  if (
    document.getElementById("gameTime").value < 0 ||
    document.getElementById("breakTime").value < 0
  ) {
    alert("Values cannot be less than 0");
    return;
  }
  if (
    document.getElementById("gameTime").value >= 0 &&
    document.getElementById("gameTime").value < 1
  ) {
    alert("Game Time cannot be less than 1");
    return;
  }
  var gameTime = document.getElementById("gameTime").value;
  var breakTime = document.getElementById("breakTime").value;
  console.log("Game = ", gameTime);
  console.log("Break = ", breakTime);
  console.log("Players = ", players);

  var playerTime = [];

  var playerList = document.getElementsByClassName("playTime");

  console.log("Break = ", isBreak);
  if (isBreak) {
    for (var i = 0; i < k; i++) {
      temp[i] = tempBreak[i];
      playerTime[i] = tempBreak[i];
      console.log("Each Player Time = ", playerTime[i]);
    }

    for (var i = 0; i < playerList.length; i++) {
      playerList[i].value = temp[i];
      playerTime[i] = temp[i];
    }
  } else {
    for (var i = 0; i < k; i++) {
      playerTime[i] = ((gameTime - breakTime) / players) * 60;
      temp[i] = playerTime[i];
    }
    console.log("Each Player Time = ", playerTime);

    for (var i = 0; i < playerList.length; i++) {
      playerList[i].value = playerTime[i];
    }
  }
  isBreak = false;

  var distance = [];

  for (var i = 0; i < k; i++) {
    distance[i] = playerTime[i];
    console.log("Distance = ", distance[i]);
  }

  var i = 0;
  x = setInterval(function () {
    isInterval = true;
    if (i >= players) {
      clearInterval(x);
      isInterval = false;
      alert("Game Over");
    }

    distance[i] = distance[i] - 1;
    playerList[i].value = distance[i];
    console.log(distance[i]);

    if (playerList[i].value <= 0) {
      playerList[i].value = 0;
      i++;
      isInterval = false;
      distance[i] = playerTime[i];
    }
  }, 1000);
}

function breakButton() {
  if (
    document.getElementById("gameTime").value < 0 ||
    document.getElementById("breakTime").value < 0
  ) {
    alert("Values cannot be less than 0");
    return;
  }
  clearInterval(x);
  var breakTime = document.getElementById("breakTime").value;
  document.getElementById("inSec").innerHTML = "(in seconds)";
  var breakTimeVal = breakTime * 60;
  document.getElementById("breakTime").value = breakTimeVal;
  var distance = breakTimeVal;

  var t = document.getElementsByClassName("playTime");
  for (var i = 0; i < t.length; i++) {
    temp[i] = t[i].value;
  }

  y = setInterval(function () {
    distance = distance - 1;
    document.getElementById("breakTime").value = distance;
    console.log(distance);

    if (document.getElementById("breakTime").value < 1) {
      clearInterval(y);
      isBreak = true;
      setTimer(
        document.getElementById("play1").value,
        document.getElementById("play1")
      );
      setTimer(
        document.getElementById("play2").value,
        document.getElementById("play2")
      );
      setTimer(
        document.getElementById("play3").value,
        document.getElementById("play3")
      );
      setTimer(
        document.getElementById("play4").value,
        document.getElementById("play4")
      );
      startButton();
    }
  }, 1000);
}

// var x, y;

//     var k = 0;

//     var isBreak = false;

//     var temp = [];

//     function addPlayer()
//     {
//         if(k>3)
//         {
//             alert('Players cannot be greater than 4');
//             return;
//         }
//         var playerList = document.getElementsByClassName('newPlay');

//         playerList[k].style.display = 'inline-block';

//         console.log('k = ',k);

//         k++;

//     }

//     function startButton()
//     {

//         var players = k;
//         console.log('k = ',k);
//         if(k<=1)
//         {
//             alert('Players cannot be less than 2');
//             return;
//         }
//         if(document.getElementById('gameTime').value < 0 || document.getElementById('breakTime').value < 0)
//         {
//             alert('Values cannot be less than 0');
//             return;
//         }
//         if(document.getElementById('gameTime').value >= 0 && document.getElementById('gameTime').value < 1)
//         {
//             alert('Game Time cannot be less than 1');
//             return;
//         }
//         var gameTime = document.getElementById('gameTime').value;
//         var breakTime = document.getElementById('breakTime').value;
//         console.log("Game = ",gameTime);
//         console.log("Break = ",breakTime);
//         console.log("Players = ",players);
//         var playerTime = ((gameTime - breakTime) / players) * 60;
//         for(var i =0; i<k+1; i++)
//         {
//             temp[i] = playerTime;
//         }
//         console.log("Each Player Time = ",playerTime);

//         var playerList = document.getElementsByClassName('playTime');

//         console.log('Break = ',isBreak);
//         if(isBreak)
//         {
//             for(var i=0;i<playerList.length;i++)
//             {
//                 playerList[i].value = temp[i];
//                 console.log('Temp value = ',temp[i]);
//                 playerTime = temp[i];
//                 console.log('Hello = ',playerTime);
//             }
//         }
//         else
//         {
//             for(var i=0;i<playerList.length;i++)
//             {
//                 playerList[i].value = playerTime;
//             }

//         }
//         isBreak = false;

//         var distance = playerTime;
//         var i = 0;
//         x = setInterval(function() {
//             if (i>=players)
//             {
//                 clearInterval(x);
//                 alert('Game Over');
//             }
//             distance = distance - 1;
//             playerList[i].value = distance;
//             console.log(distance);

//             if (playerList[i].value <= 0) {
//                 playerList[i].value = 0;
//                 i++;
//                 distance = playerTime;
//             }

//           }, 1000);
//     }

//     function breakButton()
//     {
//         if(document.getElementById('gameTime').value < 0 || document.getElementById('breakTime').value < 0)
//         {
//             alert('Values cannot be less than 0');
//             return;
//         }
//         clearInterval(x);
//         var breakTime = document.getElementById('breakTime').value;
//         document.getElementById('inSec').innerHTML = '(in seconds)';
//         var breakTimeVal = breakTime * 60;
//         document.getElementById('breakTime').value = breakTimeVal;
//         var distance = breakTimeVal;

//         var t = document.getElementsByClassName('playTime');
//         for(var i =0;i<t.length;i++)
//         {
//             temp[i] = t[i].value;
//         }

//         y = setInterval(function() {

//             distance = distance - 1;
//             document.getElementById('breakTime').value = distance;
//             console.log(distance);

//             if (document.getElementById('breakTime').value < 1) {
//                 clearInterval(y);
//                 isBreak = true;
//                 //x = setInterval(x, 1000);
//                 startButton();
//             }

//           }, 1000);
//     }
