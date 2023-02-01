const dev = {

    all_tech: function() {
        if (devmode) {
            for (const techs of tech) {
                for (const technology of techs) {
                    technology.effect()
                }
            }
            console.log("Done!")
        } else {
            console.log("Devmode is not enabled. Go to index.html to enable.")
        }
    },

    time_warp: function() {
        if (devmode) {
            difficulty += 100
            console.log("Done!")
        } else {
            console.log("Devmode is not enabled. Go to index.html to enable.")
        }
    },

    give_resources: function() {
        if (devmode) {
        resources += 99999999999
        console.log("Done!")
        } else {
        console.log("Devmode is not enabled. Go to index.html to enable.")
        }
    },

    enable_all: function() {
        if (devmode) {
            techstats.market = true
            resources += 99999999999
            research_points += 99999999999
            console.log("Done!")

            } else {
            console.log("Devmode is not enabled. Go to index.html to enable.")
        }
    
    }
}
