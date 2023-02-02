const dev = {

    help: function() {
        return dev && console.log('To display a popup: type dev.popup(), and inside the argument, add the name of the event INSIDE A STRING. here are the events that you can summon: attack, revolt, playerattack, plauge, drought, folklore, fire, badomen, breakthrough, traveler, refugees, tradeoffer, traderoute, beast, eruption, tribute, beastattack, endgame, gameover. 	WARNING: SOME OF THESE EVENTS CAN BREAK THE GAME. DO NOT USE ON A GAME YOU CARE ABOUT.')
    },

    all_tech: function() {
        if (devmode) {
            for (const techs of tech) {
                for (const technology of techs) {
                    technology.effect()
                }
            }
            return "Note: Many buildings require Year > 3. Consider using time_warp()."
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    },

    time_warp: function(years=100) {
        if (devmode) {
            difficulty += years
            return "Done!"
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    },

    give_resources: function(resource=99999999999) {
        if (devmode) {
        resources += resource
        displayUI()
        return "Done!"
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    },

    give_xp: function(xpamount=99999999999) {
        if (devmode) {
            xp += xpamount
            displayUI()
            return "Done!"
            } else {
                return "Devmode is not enabled. Go to index.html to enable."
            }
    },

    enable_all: function() {
        if (devmode) {
            techstats.market = true
            resources = 99999999999
            research_points = 99999999999
            currentpop = 99999999999
            gridstats.push({
                disabled: false,
                employmentrequired: -99999999999,
                food: 99999999999,
                index: "0",
                letter: "CHEAT",
                military: 99999999999,
                population: 99999999999,
                positions: [],
                resourcerefund: 0,
                resources: 99999999999,
                xp: 0,
            })
            displayUI()
            return "Done!"
            
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    
    },
     popup: function(type) {
     if (devmode) {
	switch(type) {
		case attack:
			popups[0].choosetext()
			displaypopup(0)
			break;
		case revolt:
			popups[1].choosetext()
			displaypopup(1)
			break;
		case playerattack:
			popups[2].choosetext()
			displaypopup(2)
			break;
		case plauge:
			popups[3].choosetext()
			displaypopup(3)
			break;
		case drought:
			popups[4].choosetext()
			displaypopup(4)
			break;
		case folklore:
			popups[5].choosetext()
			displaypopup(5)
			break;
		case fire:
			popups[6].choosetext()
			displaypopup(6)
			break;
		case badomen:
			popups[7].choosetext()
			displaypopup(7)
			break;
		case breakthrough:
			popups[8].choosetext()
			displaypopup(8)
			break;
		case traveler:
			popups[9].choosetext()
			displaypopup(9)
			break;
		case refugees:
			popups[10].choosetext()
			displaypopup(10)
			break;
		case tradeoffer:
			popups[11].choosetext()
			displaypopup(11)
			break;
		case traderoute:
			popups[12].choosetext()
			displaypopup(12)
			break;
		case beast:
			popups[13].choosetext()
			displaypopup(13)
			break;
		case eruption:
			popups[14].choosetext()
			displaypopup(14)
			break;
		case tribute:
			popups[15].choosetext()
			displaypopup(15)
			break;
		case beastattack:
			popups[16].choosetext()
			displaypopup(16)
			break;
		case endgame:
			popups[17].choosetext()
			displaypopup(17)
			break;
		case gameover:
			popups[18].choosetext()
			displaypopup(18)
			break;
	}
            displayUI()
            return "Done!"
            
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    
    }
}
