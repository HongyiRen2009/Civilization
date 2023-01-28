//tech is a 2d array. The index of the array determines its level on the tree. To add something to requires, get the level of the object, then the index of it in the array. Category determines the column it'll
//be put on
const tech = [
    [	//ROW 0
		{
            name:"Efficient farms",
            description:"All new farms produce +30% resources",
            requires:[],
            cost:0,
            category:"Farming",
            unlocked: false,
            effect(){}
        },
		{
            name:"Efficient space usage",
            description:"New houses have +30% capacity",
            requires:[],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        },
		{
            name:"Mining tactics",
            description:"New mines produce +30% resources",
            requires:[],
            cost:0,
            category:"Mining",
            unlocked: false,
            effect(){}
        },
		{
            name:"Swords",
            description:"All new military buildings give +20% military",
            requires:[],
            cost:0,
            category:"Military",
            unlocked: false,
            effect(){}
        },
		{
            name:"Charisma",
            description:"Reputation sources are all 20% more efficient",
            requires:[],
            cost:0,
            category:"Virute",
            unlocked: false,
            effect(){}
        }
    ],	
	[	//ROW 1
		{
            name:"Medium farms",
            description:"Unlock the blueprints for a larger medium mine",
            requires:[[0,0]],
            cost:0,
            category:"Farming",
            unlocked: false,
            effect(){}
        },
		{
            name:"Simple farms",
            description:"All farms are 30% cheaper",
            requires:[[0,0]],
            cost:0,
            category:"Farming II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Townhouse",
            description:"Unlock the blueprints for a larger townhouse",
            requires:[[0,1]],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        },
		{
            name:"Efficient infrastructure",
            description:"All houses are 30% cheaper",
            requires:[[0,1]],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        },
		{
            name:"Planned mines",
            description:"All mines are 30% cheaper",
            requires:[[0,2]],
            cost:0,
            category:"Mining",
            unlocked: false,
            effect(){}
        },
		{
            name:"Medium mines",
            description:"Unlock the blueprints for a larger medium mine",
            requires:[[0,2]],
            cost:0,
            category:"Mining II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Military base",
            description:"Unlock the blueprints for a more effective military base",
            requires:[[0,3]],
            cost:0,
            category:"Military",
            unlocked: false,
            effect(){}
        },
		{
            name:"Diplomacy",
            description:"When negotiating with an enemy-</br>gain a 60% chance for the enemy to create a peace treaty with you for 5 years</br>during the peace treaty, -40% chance of enemy attacks",
            requires:[[0,4]],
            cost:0,
            category:"Virtue",
            unlocked: false,
            effect(){}
        },
		{
            name:"Science",
            description:"All intelligence sources are 30% more effective",
            requires:[],
            cost:0,
            category:"Intelligence",
            unlocked: false,
            effect(){}
        },
	],
	[	//ROW 2
		{
            name:"Exploration",
            description:"Unlock infinitely more terrain to explore using WASD",
            requires:[[1,8]],
            cost:0,
            category:"Intelligence",
            unlocked: false,
            effect(){}
        },
		{
            name:"Workshop",
            description:"Unlock the blueprints for a workshop that constantly gives you intelligence at the cost of resources",
            requires:[[1,8]],
            cost:0,
            category:"Intelligence II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Social care",
            description:"-30% chance of rebellions and gain population 20% faster",
            requires:[[1,7]],
            cost:0,
            category:"Virtue II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Scouting",
            description:"Gain the ability to get an estimate of attacking enemies' powers</br>Unlock blueprints for a scouting tower</br>increases the accuracy of the enemy power estimations",
            requires:[[1,6]],
            cost:0,
            category:"Military II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Fishing",
            description:"Unlock the blueprints for a fishing hut</br>Must be on a river and produces varying amounts of food",
            requires:[[1,1],[1,3]],
            cost:0,
            category:"Farming II",
            unlocked: false,
            effect(){}
        }
	],
	[	//ROW 3
		{
            name:"Cement",
            description:"Roads and bridges now only cost 0.10 resources",
            requires:[[2,0]],
            cost:0,
            category:"Intelligence",
            unlocked: false,
            effect(){}
        },
		{
            name:"Large farm",
            description:"Unlock the blueprints for a large farm",
            requires:[[1,0],[2,4],[2,2]],
            cost:0,
            category:"Farming",
            unlocked: false,
            effect(){}
        },
		{
            name:"Insulae",
            description:"Unlock the blueprints for a massive housing unit",
            requires:[[1,3],[1,4]],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        },
		{
            name:"Large mine",
            description:"Unlock the blueprints for a large mine",
            requires:[[1,5],[1,4],[1,8]],
            cost:0,
            category:"Mining II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Fortress",
            description:"Unlock the blueprints for a massive building that gives high military power",
            requires:[[1,6]],
            cost:0,
            category:"Military",
            unlocked: false,
            effect(){}
        },
		{
            name:"Temple",
            description:"Unlock the blueprints for a temple that increases your luck at a higher rate",
            requires:[[2,2]],
            cost:0,
            category:"Virtue",
            unlocked: false,
            effect(){}
        }
	],
	[	//ROW 4
		{
            name:"Ultimate Megastructure",
            description:"Collect 1 out of 3 blueprint scraps to build the Mega Temple",
            requires:[[2,1],[2,0],[3,4]],
            cost:0,
            category:"Intelligence II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Archery",
            description:"Unlock an archer tower that gives military power</br>fortresses give +20% military",
            requires:[[2,3],[3,4]],
            cost:0,
            category:"Military II",
            unlocked: false,
            effect(){}
        },
		{
            name:"Dedicated worship",
            description:"Temples and altars are 40% more efficient",
            requires:[[2,2],[3,2]],
            cost:0,
            category:"Virtue",
            unlocked: false,
            effect(){}
        }
	],
    
]
