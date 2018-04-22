//Global Variables
var activePlayers = [];
var assignedPlayers = [];
var numTeams;
var currentTeam = [];


// Add Player Button

document.getElementById("name-submit").addEventListener("click", function(){

	var playerName = document.getElementById("player-name").value.trim();

	if(playerName){
		activePlayers.push(playerName);
		console.log(activePlayers);
		document.getElementById("player-name").value = "";

		document.getElementById("teams").innerHTML = "";
		document.getElementById("teams").innerHTML = activePlayers;
	}
})


// Reset Button

document.getElementById("reset-button").addEventListener("click", function(){
	activePlayers = [];
	assignedPlayers = [];
	numTeams = 0;
	document.getElementById("teams").innerHTML = "";
})


// Form Teams Button

document.getElementById("team-maker").addEventListener("click", function(){
	var teamDisplay = document.getElementById("teams");
	teamDisplay.innerHTML = "";

	assignedPlayers = [];
	numTeams = document.getElementById("number-of-teams").value;
	var playersPerTeam = Math.floor(activePlayers.length / numTeams);
	
	for(i=0; i<numTeams; i++){

		for(j=0; j<playersPerTeam; j++){
			assignPlayer();
		}
		// teamDisplay.append("Team " + (i+1) + ": " + currentTeam);

		var node = document.createElement("p");
		var textnode = document.createTextNode("Team " + (i+1) + ": " + currentTeam);
		node.appendChild(textnode);
		teamDisplay.appendChild(node);
		
		currentTeam = [];

	}
});


function assignPlayer(){
	var selectedPlayer = activePlayers[Math.floor(Math.random() * activePlayers.length)];
	if(assignedPlayers.includes(selectedPlayer)){
		assignPlayer();
	}
	else{
		assignedPlayers.push(selectedPlayer);
		currentTeam.push(selectedPlayer);
	}
};


// Materialize

$(document).ready(function(){
    $('select').formSelect();
  });