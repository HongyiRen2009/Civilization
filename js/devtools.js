const dev = {
	removemax(){
	max.up=-1000000000
	max.left=-1000000000
	max.right=10000
	max.down=100000000
	techstats.exploration = true
	},
    help: function() {
        return dev && console.log('To display a popup: type dev.popup(), and inside the argument, add the name of the event INSIDE A STRING. here are the events that you can summon: attack, revolt, playerattack, plauge, drought, folklore, fire, badomen, breakthrough, traveler, refugees, tradeoffer, traderoute, beast, eruption, tribute, beastattack, endgame, gameover. 	WARNING: SOME OF THESE EVENTS CAN BREAK THE GAME. DO NOT USE ON A GAME YOU CARE ABOUT.')
    },

    all_tech: function() {
        if (devmode) {
            for (const techs of tech) {
                for (const technology of techs) {
                    technology.effect()
                    technology.tier+=1
                }
            }
			displayUI()
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
                employmentrequired: 0,
                food: 99999999999,
                index: "0",
                letter: "CHEAT",
                military: 0,
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
            const types = ['attack','revolt','playerattack','plague','drought','folklore','fire','badomen','breakthrough','traveler','refugees','tradeoffer','traderoute','beast','eruption','tribute','fireball','beastattack','war','battle','siege','warattack','breach','peace','endbattle','endgame','gameover']
            const typeindex = types.indexOf(type)
            if(typeindex==-1){
                return "Enter a valid popup"
            }
            popups[typeindex].choosetext()
            displaypopup(typeindex)
            return "Done!"
            
        } else {
            return "Devmode is not enabled. Go to index.html to enable."
        }
    
    }
}
