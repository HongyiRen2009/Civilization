//tech is a 2d array. The index of the array determines its level on the tree. To add something to requires, get the level of the object, then the index of it in the array. Category determines the column it'll
//be put on
const tech = [
    [	//ROW 0
		{
            name:"Medium farm",
            description:"Unlock a larger, more efficient medium farm",
            requires:[],
            cost:0,
            category:"Farming",
            unlocked: false,
            effect(){}
        },
		{
            name:"Efficient Infrastructure",
            description:"All housing options are now 30% cheaper",
            requires:[],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        },
		{
            name:"Planned mines",
            description:"All mines produce 50% resources",
            requires:[],
            cost:0,
            category:"Mining",
            unlocked: false,
            effect(){}
        }
    ],	
	[	//ROW 1
		{
            name:"Discipline",
            description:"During revolts, you are now able to punish revolters, losing 5% food production for 5 turns",
            requires:[[0,0]],
            cost:0,
            category:"Virtue",
            unlocked: false,
            effect(){}
        },
		{
            name:"Workshop",
            description:"Unlock a building that steadily increases your intelligence while draining resources.",
            requires:[[0,2]],
            cost:0,
            category:"Intelligence",
            unlocked: false,
            effect(){}
        },
		{
            name:"Efficient space usage",
            description:"All houses have 40% increased capacity",
            requires:[[0,1],[0,0], [0,2]],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        }
	],
	[	//ROW 2
		{
            name:"Medium mine",
            description:"Unlock a larger, more efficient medium mine",
            requires:[[0,2],[1,2]],
            cost:0,
            category:"Mining",
            unlocked: false,
            effect(){}
        },
		{
            name:"Social care",
            description:"-40% chance of rebellions and +30% total intelligence production",
            requires:[[1,1]],
            cost:0,
            category:"Intelligence",
            unlocked: false,
            effect(){}
        },
		{
            name:"Military base",
            description:"Unlock a larger structure that gives increased military power",
            requires:[[1,1]],
            cost:0,
            category:"Military",
            unlocked: false,
            effect(){}
        }
	],
	[	//ROW 3
		{
            name:"Simple farms",
            description:"Farms are 30% cheaper",
            requires:[[0,0], [1,0], [1,2]],
            cost:0,
            category:"Farming",
            unlocked: false,
            effect(){}
        },
		{
            name:"Insulae",
            description:"Unlock a massive housing unit",
            requires:[[1,2]],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        },
		{
            name:"Scouting",
            description:"Unlock a new outpost building that allows you to gain information about attackers",
            requires:[[2,2]],
            cost:0,
            category:"Military",
            unlocked: false,
            effect(){}
        },
		{
            name:"Advanced tactics",
            description:"New military bases give +40% military",
            requires:[[2,2]],
            cost:0,
            category:"Military II",
            unlocked: false,
            effect(){}
        }
	],	
	[	//ROW 4
		{
            name:"Mining tacics",
            description:"All mines are now 30% cheaper",
            requires:[[0,2],[2,1]],
            cost:0,
            category:"Mining",
            unlocked: false,
            effect(){}
        },
		{
            name:"Temple",
            description:"Unlock a massive building to pray to RNGesus. Increases your luck",
            requires:[[3,0],[1,0]],
            cost:0,
            category:"Virtue",
            unlocked: false,
            effect(){}
        },
		{
            name:"Large Farm",
            description:"Unlock a substantially larger farm that requires irrigation",
            requires:[[3,0]],
            cost:0,
            category:"Farming",
            unlocked: false,
            effect(){}
        },
		{
            name:"Fortress",
            description:"Unlock a massive structure that offers substantial military power",
            requires:[[3,3]],
            cost:0,
            category:"Military II",
            unlocked: false,
            effect(){}
        }
	],
	[	//ROW 5
		{
            name:"Large Mine",
            description:"Unlock a massive mine that produces considerably more resources",
            requires:[[4,0]],
            cost:0,
            category:"Mining",
            unlocked: false,
            effect(){}
        },
		{
            name:"Cement",
            description:"All roads and bridges now cost 75% less resources",
            requires:[[2,1]],
            cost:0,
            category:"Intelligence",
            unlocked: false,
            effect(){}
        },
		{
            name:"Efficient farms",
            description:"All farms now produce 40% more resources",
            requires:[[3,1],[4,2]],
            cost:0,
            category:"Farming",
            unlocked: false,
            effect(){}
        },
		{
            name:"Archery",
            description:"Unlock archer towers, a cheap building that gives military power, and all fortresses give +30% military power",
            requires:[[3,2]],
            cost:0,
            category:"Military",
            unlocked: false,
            effect(){}
        },
		{
            name:"Diplomacy",
            description:"When negotiating with an enemy, gain a 60% chance that the enemy will create a peace treaty with you, decreasing chance of attacks by 40% for the next 5 years",
            requires:[[4,1]],
            cost:0,
            category:"Virtue",
            unlocked: false,
            effect(){}
        },
	{
            name:"Exploration",
            description:"Unlock infinitely more terrain to explore using WASD",
            requires:[[4,4]],
            cost:0,
            category:"Housing",
            unlocked: false,
            effect(){}
        }
	],
	[ // ROW 7
	{
            name:"The Ultimate Megastructure",
            description:"Unlock a blueprint scrap for the Mega Temple",
            requires:[[5,1]],
            cost:0,
            category:"Intelligence",
            unlocked: false,
            effect(){}
        }

	],
	
    
]
