const dev = {
    removemax() {
        max.up = -1000000000;
        max.left = -1000000000;
        max.right = 10000;
        max.down = 100000000;
        techstats.exploration = true;
    },
    checkDevModeEnabled: function () {
        if (!devmode) {
            throw new Error('Devmode is not enabled. Go to index.html to enable. ');
        }
    },

    help: function () {
        this.checkDevModeEnabled();
        console.log(
            'To display a popup: type dev.popup(), and inside the argument, add the name of the event INSIDE A STRING. here are the events that you can summon: attack, revolt, playerattack, plauge, drought, folklore, fire, badomen, breakthrough, traveler, refugees, tradeoffer, traderoute, beast, eruption, tribute, beastattack, endgame, gameover. 	WARNING: SOME OF THESE EVENTS CAN BREAK THE GAME. DO NOT USE ON A GAME YOU CARE ABOUT.'
        );
    },

    all_tech: function () {
        this.checkDevModeEnabled();
        for (const techs of tech) {
            for (const technology of techs) {
                technology.effect();
                technology.tier += 1;
            }
        }
        displayUI();
        return 'Note: Many buildings require Year > 3. Consider using time_warp().';
    },

    time_warp: function (years = 100) {
        this.checkDevModeEnabled();
        difficulty += years;
        return 'Done!';
    },

    give_resources: function (resource = 99999999999) {
        this.checkDevModeEnabled();
        resources += resource;
        displayUI();
        return 'Done!';
    },

    give_xp: function (xpamount = 99999999999) {
        this.checkDevModeEnabled();
        xp += xpamount;
        displayUI();
        return 'Done!';
    },

    enable_all: function () {
        this.checkDevModeEnabled();
        techstats.market = true;
        resources = 99999999999;
        research_points = 99999999999;
        currentpop = 99999999999;
        gridstats.push({
            disabled: false,
            employmentrequired: 0,
            food: 99999999999,
            index: '0',
            letter: 'CHEAT',
            military: 0,
            population: 99999999999,
            positions: [],
            resourcerefund: 0,
            resources: 99999999999,
            xp: 0,
        });
        tech.flat().map((t) => {
            t.effect();
            t.tier++;
        });
        displayUI();
        return 'Done!';
    },
    popup: function (type) {
        this.checkDevModeEnabled();
        const types = [
            'attack',
            'revolt',
            'playerattack',
            'plague',
            'drought',
            'folklore',
            'fire',
            'badomen',
            'breakthrough',
            'traveler',
            'refugees',
            'tradeoffer',
            'traderoute',
            'beast',
            'eruption',
            'tribute',
            'fireball',
            'beastattack',
            'war',
            'battle',
            'siege',
            'warattack',
            'breach',
            'peace',
            'endbattle',
            'endgame',
            'gameover',
        ];
        const typeindex = types.indexOf(type);
        if (typeindex == -1) {
            return 'Enter a valid popup';
        }
        popups[typeindex].choosetext();
        displaypopup(typeindex);
        return 'Done!';
    },
};
