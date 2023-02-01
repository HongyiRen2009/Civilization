const dev = {

    help: function() {
        return dev
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
    
    }
}
