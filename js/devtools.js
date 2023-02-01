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

    time_warp: function() {
        if (devmode) {
            difficulty += 100
            return "Done!"
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    },

    give_resources: function() {
        if (devmode) {
        resources += 99999999999
        displayUI()
        return "Done!"
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    },

    enable_all: function() {
        if (devmode) {
            techstats.market = true
            resources += 99999999999
            research_points += 99999999999
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
            if (type == 'attack') {
				displaypopup(0)
			} else if (type == 'revolt') {
				displaypopup(1)
			} else if (type == 'playerattack') {
				displaypopup(2)
			} else if (type == 'plauge') {
				displaypopup(3)
			} else if (type == 'drought') {
				displaypopup(4)
			} else if (type == 'folklore') {
				displaypopup(5)
			} else if (type == 'fire') {
				displaypopup(6)
			} else if (type == 'badomen') {
				displaypopup(7)
			} else if (type == 'breakthrough') {
				displaypopup(8)
			} else if (type == 'traveler') {
				displaypopup(9)
			} else if (type == 'refugees') {
				displaypopup(10)
			} else if (type == 'tradeoffer') {
				displaypopup(11)
			} else if (type == 'traderoute') {
				displaypopup(12)
			} else if (type == 'beast') {
				displaypopup(13)
			} else if (type == 'eruption') {
				displaypopup(14)
			} else if (type == 'tribute') {
				displaypopup(15)
			} else if (type == 'beastattack') {
				displaypopup(16)
			} else if (type == 'endgame') {
				displaypopup(17)
			} else if (type == 'gameover') {
				displaypopup(18)
			}
            displayUI()
            return "Done!"
            
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    
    }
}
