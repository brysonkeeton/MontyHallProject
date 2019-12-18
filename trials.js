function switchDoor(guessDoor)  {
	var secondGuessDoor = Math.round(2*Math.random());
	while (guessDoor == secondGuessDoor) // loop untill secondGuessDoor becomes different from guessDoor
		secondGuessDoor = Math.round(2*Math.random());
	return secondGuessDoor;
}

function simulation(n) {
	var winsBySwitching = 0;
	var winsByNotSwitching = 0;
	for (var i = 0; i < n; i++) {
		var prizeDoor = Math.round(2*Math.random()); //door with prize 0, 1, or 2
		var guessDoor = Math.round(2*Math.random());
		if (prizeDoor == guessDoor) // win on first try
			continue;
		else { // go on to 2nd round
			var switched = Math.round(Math.random()); // whether he chose to switch doors (0 = no or 1 = yes)
	    	prizeDoor = Math.round(2*Math.random());
			if (switched) {
				guessDoor = switchDoor(guessDoor);
				if (prizeDoor == guessDoor)
					winsBySwitching++;
			} else {
				if (prizeDoor == guessDoor)
					winsByNotSwitching++;
			}
		}
	}
	var totalSecondRoundWins = winsBySwitching+winsByNotSwitching;
	console.log("Wins by switching: " + 100*winsBySwitching/totalSecondRoundWins + "%");
	console.log("Wins by not switching: " + 100*winsByNotSwitching/totalSecondRoundWins + "%");
}

simulation(1e4);


/*

Wins by switching: 49.24346629986245%
Wins by not switching: 50.75653370013755%

*/





