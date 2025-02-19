let s1 = 0;
let s2 = 0;
let chance = 1;

function start() {
  let p1 = document.getElementById("p1").value.trim();
  let p2 = document.getElementById("p2").value.trim();
  console.log(p1, p2);

  if (p1 === "" || p2 === "") {
    alert("Please enter the names! :(");
    location.reload();
  } else {
    document.getElementById("p1nmlb").innerText = p1;
    document.getElementById("p1sclb").innerText = p1;
    document.getElementById("p2nmlb").innerText = p2; // Fixed here
    document.getElementById("p2sclb").innerText = p2; // Fixed here

    document.getElementById("start").disabled = true;
    document.getElementById("restart").disabled = false;
    document.getElementById("rolldice1").disabled = false;
  }
}

function restart() {
  if (confirm("Are you sure? :/")) {
    location.reload();
  }
}

function SwitchPlayers() {
  if (chance === 2) {
    document.getElementById("rolldice1").disabled = true;
    document.getElementById("rolldice2").disabled = false;
    chance = 1;
  } else {
    document.getElementById("rolldice1").disabled = false;
    document.getElementById("rolldice2").disabled = true;
    chance = 2;
  }
}

function p1Play() {
  let dice = Math.floor(Math.random() * 6 + 1);
  s1 = Number(document.getElementById("p1sc").innerText) + dice;

  document.getElementById("p1dice").src = `./dice images\/${dice}.png`;

  if (dice !== 6) {
    document.getElementById("p1sc").innerText = s1;
    SwitchPlayers();
  }

  if (s1 >= 50) {
    setTimeout(() => {
      alert("Winner !!! " + document.getElementById("p1nmlb").innerText);
      location.reload();
    }, 500);
  }
}

function p2Play() {
  let dice = Math.floor(Math.random() * 6 + 1);
  s2 = Number(document.getElementById("p2sc").innerText) + dice;

  document.getElementById("p2dice").src = `./dice images/${dice}.png`;

  if (dice !== 6) {
    document.getElementById("p2sc").innerText = s2;
    SwitchPlayers();
  }

  if (s2 >= 50) {
    setTimeout(() => {
      alert("Winner !!! " + document.getElementById("p2nmlb").innerText);
      location.reload();
    }, 500);
  }
}
