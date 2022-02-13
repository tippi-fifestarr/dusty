var dusty = {
  level: 10,
  RangedAttackBonus: 8,
  DexAttackBonus: 4,
  BracersofArchery: 1,
  FlamingLongbow: {
    attack: 1,
    damage: 1,
  },
  PointblankBonus: {
    attack: 1,
    damage: 1,
    on: false,
  },
  Rapidshot: {
    attack: -2,
    damage: 0,
    on: false,
  },
  SneakAttackLVL3: {
    attack: 0,
    damage: 3 * rollDice(6),
    on: false,
  },
  Craven: {
    savingThrows_Fear: -2,
    sneakDamage: level, //character level
  },
};

function rollDice(max) {
  return 1 + Math.floor(Math.random() * max);
}

function checkClick(e) {
  const clickedId = e.getAttribute("id");
  console.log(clickedId);
  if (clickedId == "fa") {
    document.getElementById("rs").classList.toggle("hidden");
    document.getElementById("pb").classList.toggle("hidden");
  } else if (clickedId == "rs") {
    if (dusty.Rapidshot.on) {
      rsOFF();
    } else {
      rsON();
    }
  } else if (clickedId == "pb") {
    document.getElementById("sa").classList.toggle("hidden");
    pbON();
  }
}

function rsON() {
  dusty.Rapidshot.on = true;
  document.getElementById("brab").innerHTML += `+${dusty.Rapidshot.attack}`;
  document.getElementById("rapids").innerHTML = `${dusty.Rapidshot.on}`;
}

function rsOFF() {
  dusty.Rapidshot.on = false;
  document.getElementById("brab").innerHTML -= `+${dusty.Rapidshot.attack}`;
  document.getElementById("rapids").innerHTML = `${dusty.Rapidshot.on}`;
}

function pbON() {
  dusty.PointblankBonus.on = true;
  document.getElementById(
    "brab"
  ).innerHTML += `+${dusty.PointblankBonus.attack}`;
}

function displayDustyStats() {
  // on page load? display these stats for dusty here
  document.getElementById("level").innerHTML = `${dusty.level}`;
  document.getElementById("brab").innerHTML = `${
    dusty.RangedAttackBonus +
    dusty.DexAttackBonus +
    dusty.BracersofArchery +
    dusty.FlamingLongbow.attack
  }`;
  if (dusty.PointblankBonus.on) {
    document.getElementById(
      "brab"
    ).innerHTML += `+${dusty.PointblankBonus.attack}`;
  }
  document.getElementById("pblank").innerHTML = `${dusty.PointblankBonus.on}`;
  if (dusty.Rapidshot.on) {
    document.getElementById("brab").innerHTML += `+${dusty.Rapidshot.attack}`;
  }
  document.getElementById("rapids").innerHTML = `${dusty.Rapidshot.on}`;
}

function rollAttack() {
  // this is the function that calculates
  return dusty;
}
