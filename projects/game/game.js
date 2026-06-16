let currentStage = 1;
let luffyMaxHP = 100;
let luffyHP = luffyMaxHP;
let crew = [];
let currentLocation = "Sea (Alvida's Ship)";
let isCombat = true;

let currentBoss = { name: "Alvida", hp: 40, maxHp: 40, color: "pink" };

const storyBox = document.getElementById("story-box");
const storyControls = document.getElementById("story-controls");
const combatControls = document.getElementById("combat-controls");
const playerHpText = document.getElementById("player-hp-text");
const crewListText = document.getElementById("crew-list");
const locationText = document.getElementById("location-text");

function updateGameStage() {
  if (currentStage === 1) {
    // Alvida Fight Setup
  } else if (currentStage === 2) {
    isCombat = false;
    currentLocation = "Shells Town";
    crew.push("Zoro");
    luffyMaxHP += 20;
    luffyHP = luffyMaxHP;
    storyBox.innerHTML =
      "You defeated Alvida! You sailed to Shells Town and saved the pirate hunter, Roronoa Zoro. He joins your crew! <strong>(Max HP increased by 20!)</strong>";
    updateUI();
  } else if (currentStage === 3) {
    isCombat = true;
    currentLocation = "Orange Town";
    currentBoss = { name: "Buggy the Clown", hp: 70, maxHp: 70, color: "red" };
    storyBox.innerHTML =
      "You arrive at Orange Town. The flashy pirate Buggy the Clown is terrorizing the town! Time to fight!";
    updateUI();
  } else if (currentStage === 4) {
    isCombat = false;
    currentLocation = "Syrup Village";
    crew.push("Usopp");
    crew.push("Going Merry");
    luffyMaxHP += 20;
    luffyHP = luffyMaxHP;
    storyBox.innerHTML =
      "Buggy is blasted away! You travel to Syrup Village, get a ship (The Going Merry), and the sniper Usopp joins the crew!";
    updateUI();
  } else if (currentStage === 5) {
    isCombat = true;
    currentLocation = "Baratie";
    crew.push("Sanji");
    luffyMaxHP += 20;
    luffyHP = luffyMaxHP;
    currentBoss = { name: "Don Krieg", hp: 100, maxHp: 100, color: "gold" };
    storyBox.innerHTML =
      "At the sea restaurant Baratie, Sanji the cook joins you! But suddenly, the pirate Don Krieg attacks the restaurant!";
    updateUI();
  } else if (currentStage === 6) {
    isCombat = true;
    currentLocation = "Arlong Park";
    crew.push("Nami");
    luffyMaxHP += 20;
    luffyHP = luffyMaxHP;
    currentBoss = { name: "Arlong", hp: 130, maxHp: 130, color: "blue" };
    storyBox.innerHTML =
      "Krieg is defeated! You chase your navigator Nami to Arlong Park. To save her village, you must defeat the Fishman Arlong!";
    updateUI();
  } else if (currentStage === 7) {
    isCombat = false;
    currentLocation = "Grand Line - Alabasta";
    luffyHP = luffyMaxHP;
    storyBox.innerHTML =
      "Arlong's park is destroyed! Nami is free! You finally enter the Grand Line and arrive at the desert kingdom of Alabasta.";
    updateUI();
  } else if (currentStage === 8) {
    isCombat = true;
    currentLocation = "Alabasta Tombs";
    currentBoss = {
      name: "Crocodile",
      hp: 160,
      maxHp: 160,
      color: "darkgreen",
    };
    storyBox.innerHTML =
      "The Warlord Crocodile is trying to take over Alabasta! He is made of sand, but you brought water! Fight for the kingdom!";
    luffyMaxHP += 25;
    luffyHP = luffyMaxHP;
    updateUI();
  } else if (currentStage === 9) {
    isCombat = false;
    currentLocation = "Alabasta Coast";
    storyBox.innerHTML =
      "CROCODILE IS DEFEATED! But the Marines are surrounding the island! Smoker and Hina are closing in! What do you do?";
    storyControls.innerHTML = `
            <button onclick="finishGame('fight')">Stay and Fight the Marines</button>
            <button onclick="finishGame('run')">Flee to the Going Merry!</button>
        `;
    updateUI();
  }
}

function nextStage() {
  currentStage++;
  updateGameStage();
}
function finishGame(choice) {
  isCombat = false;
  storyControls.innerHTML = "";
  if (choice === "fight") {
    storyBox.innerHTML =
      "You tried to fight an entire Marine fleet... You fought bravely, but got captured and sent to Impel Down. <strong>GAME OVER.</strong> <button onclick='location.reload()'>Restart</button>";
  } else {
    storyBox.innerHTML =
      "You ran past the Marines, said a tearful goodbye to Princess Vivi, and set sail on the Going Merry! Your bounty has skyrocketed! <strong>YOU WIN! THE ROMANCE DAWN CONTINUES!</strong> <button onclick='location.reload()'>Play Again</button>";
  }
}

function updateUI() {
  playerHpText.innerText = `Luffy HP: ${luffyHP}/${luffyMaxHP}`;
  crewListText.innerText = `Crew: ${crew.length > 0 ? crew.join(", ") : "None"}`;
  locationText.innerText = `Location: ${currentLocation}`;

  if (isCombat) {
    storyControls.style.display = "none";
    combatControls.style.display = "flex";
  } else {
    storyControls.style.display = "flex";
    combatControls.style.display = "none";
  }
}
function playerAction(actionType) {
  let playerDamage = 0;
  let bossDamage = 0;
  let dodgeSuccess = false;
  let storyLog = "";

  if (actionType === "pistol") {
    playerDamage = Math.floor(Math.random() * 11) + 15;
    storyLog += `You used Gum-Gum Pistol for ${playerDamage} damage! `;
  } else if (actionType === "rocket") {
    playerDamage = Math.floor(Math.random() * 36) + 10;
    storyLog += `You flung yourself with Gum-Gum Rocket for ${playerDamage} damage! `;
  } else if (actionType === "dodge") {
    let dodgeRoll = Math.random();
    if (dodgeRoll > 0.4) {
      dodgeSuccess = true;
      storyLog += `You stretched out of the way! Perfect Dodge! `;
    } else {
      storyLog += `You tried to dodge but stumbled! `;
    }
  }

  currentBoss.hp -= playerDamage;
  if (currentBoss.hp < 0) currentBoss.hp = 0;

  if (currentBoss.hp > 0) {
    if (dodgeSuccess) {
      storyLog += `${currentBoss.name} missed you completely!`;
    } else {
      let baseBossDmg = currentStage * 5;
      bossDamage = Math.floor(Math.random() * 8) + baseBossDmg;
      luffyHP -= bossDamage;
      storyLog += `${currentBoss.name} attacked you for ${bossDamage} damage!`;
    }
  }

  if (luffyHP <= 0) {
    luffyHP = 0;
    isCombat = false;
    updateUI();
    storyControls.style.display = "none";
    storyBox.innerHTML =
      storyLog +
      "<br><br><strong style='color:red;'>GAME OVER.</strong><br>You were knocked out! <button onclick='location.reload()'>Restart Game</button>";
  } else if (currentBoss.hp <= 0) {
    isCombat = false;
    storyBox.innerHTML =
      storyLog +
      `<br><br><strong>${currentBoss.name} Defeated!</strong> Click Continue to sail on.`;
    updateUI();
  } else {
    storyBox.innerHTML = storyLog;
    updateUI();
  }
}

updateUI();
