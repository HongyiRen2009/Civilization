//tech is a 2d array. The index of the array determines its level on the tree. To add something to requires, get the level of the object, then the index of it in the array. Category determines the column it'll
//be put on
const techstats = {
    eff_farms: 0,
    eff_space: 0,
    mining_tactics:0,
    charisma:0,
    simple_farms:0,
    eff_infra:0,
    planned_mines:0,
    diplomacy:false,
    innovation:0,
    market:false,
    exploration:false,
    social_care:false,
    scouting:false,
    cement:false,
    archery:0,
    ded_worship:0

}
const tech = [
    [	//ROW 0
		{
            name:"Efficient farms",
            description:"All new farms produce +30% food",
            requires:[],
            cost:1,
            category:"Farming",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.eff_farms+=0.1
                }
                else{
                    techstats.eff_farms+=0.3
                    this.description = "All new farms produce +10% food"
                }
            }
        },
		{
            name:"Efficient space usage",
            description:"New houses have +30% capacity",
            requires:[],
            cost:1,
            category:"Housing",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.eff_space+=0.1
                }
                else{
                   techstats.eff_space+=0.3
                    this.description = "New houses have +10% capacity"
                }
            }
        },
		{
            name:"Mining tactics",
            description:"New mines produce +30% resources",
            requires:[],
            cost:1,
            category:"Mining",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.mining_tactics+=0.1
                }
                else{
                    techstats.mining_tactics+=0.3
                    this.description = "New mines produce +10% resources"
                }
            }
        },
		{
            name:"Swords",
            description:"+20% military",
            requires:[],
            cost:1,
            category:"Military",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    modifiers.military+=0.1
                }
                else{
                    modifiers.military+=0.2
                    this.description = "+10% military"
                }
            }
        },
		{
            name:"Charisma",
            description:"Reputation sources are all 20% more efficient",
            requires:[],
            cost:1,
            category:"Virtue",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.charisma+=0.1
                }
                else{
                    techstats.charisma+=0.2
                    this.description = "Reputation sources are all 10% more efficient"
                }
            }
        }
    ],	
	[	//ROW 1
		{
            name:"Medium farms",
            description:"Unlock the blueprints for a larger medium mine",
            requires:[[0,0]],
            cost:1,
            category:"Farming",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[7].unlocked = true
			unlocked[7]=true
            }
        },
		{
            name:"Simple farms",
            description:"All farms are 30% cheaper",
            requires:[[0,0]],
            cost:1,
            category:"Farming II",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.simple_farms+=0.1
                    if (techstats.simple_farms>=0.6){
                        this.unlocktwice=false
                    }
                }
                else{
                    techstats.simple_farms+=0.3
                    
                    this.description = "All farms are 10% cheaper"
                }
            }
        },
		{
            name:"Townhouse",
            description:"Unlock the blueprints for a larger townhouse",
            requires:[[0,1]],
            cost:1,
            category:"Housing II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[2].unlocked = true
			unlocked[2]=true
            }
            
        },
		{
            name:"Efficient infrastructure",
            description:"All houses are 30% cheaper",
            requires:[[0,1]],
            cost:1,
            category:"Housing",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.eff_infra+=0.1
                    if (techstats.eff_infra>=0.6){
                        this.unlocktwice=false
                    }
                }
                else{
                    techstats.eff_infra+=0.3
                    
                    this.description = "All houses are 10% cheaper"
                }
            }
        },
		{
            name:"Planned mines",
            description:"All mines are 30% cheaper",
            requires:[[0,2]],
            cost:1,
            category:"Mining",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.planned_mines+=0.1
                    if (techstats.planned_mines>=0.6){
                        this.unlocktwice=false
                    }
                }
                else{
                    techstats.planned_mines+=0.3
                    this.description = "All mines are 10% cheaper"
                }
            }
        },
		{
            name:"Medium mines",
            description:"Unlock the blueprints for a larger medium mine",
            requires:[[0,2]],
            cost:1,
            category:"Mining II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[15].unlocked = true
			unlocked[15]=true
            }
        },
		{
            name:"Military base",
            description:"Unlock the blueprints for a more effective military base",
            requires:[[0,3]],
            cost:1,
            category:"Military",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[10].unlocked = true
			unlocked[10]=true
            }
        },
		{
            name:"Diplomacy",
            description:"When negotiating with an enemy-</br>gain a 40% chance for the enemy to create a peace treaty with you for 5 years</br>during the peace treaty, -40% chance of enemy attacks",
            requires:[[0,4]],
            cost:1,
            category:"Virtue",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                techstats.diplomacy = true
            }
        },
        
		{
            name:"Innovation",
            description:"All wisdom sources are 30% more effective",
            requires:[],
            cost:1,
            category:"Intelligence",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                    techstats.innovation+=0.1
                }
                else{
                    techstats.innovation+=0.3
                    this.description = "All wisdom sources are 10% more effective"
                }
            }
        },
	],
	[	//ROW 2
		{
            name:"Exploration",
            description:"Unlock infinitely more terrain to explore using WASD",
            requires:[[1,8]],
            cost:1,
            category:"Intelligence",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                techstats.exploration = true
            }
        },
		{
            name:"Workshop",
            description:"Unlock the blueprints for a workshop that constantly gives you wisdom at the cost of resources",
            requires:[[1,8]],
            cost:1,
            category:"Intelligence II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
				p.pieceROM[20].unlocked = true
			unlocked[20]=true
			}
        },
		{
            name:"Social care",
            description:"-50% chance of rebellions but -10% resource production",
            requires:[[1,7]],
            cost:1,
            category:"Virtue II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                techstats.social_care=true
                modifiers.resources-=0.1
            }
        },
		{
            name:"Scouting",
            description:"Gain the ability to get an approximate estimate of attacking enemies' military strength",
            requires:[[1,6]],
            cost:1,
            category:"Military II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                techstats.scouting=true
            }
        },
		{
            name:"Fishing",
            description:"Unlock the blueprints for a fishing hut</br>Must be on a river and produces varying amounts of food",
            requires:[[1,1],[1,3]],
            cost:1,
            category:"Farming II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
	    p.pieceROM[21].unlocked = true
			unlocked[21]=true
	    }
        },
        {
            name:"Market",
            description:"Unlock the Market",
            requires:[[1,7]],
            cost:1,
            category:"Virtue",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                techstats.market=true
            }
        },
        {
            name:"Barracks",
            description:"Unlock the Barracks",
            requires:[[1,6]],
            cost:1,
            category:"Military",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[11].unlocked = true
			unlocked[11]=true
            }
        },
		
	],
	[	//ROW 3
		{
            name:"Cement",
            description:"Roads and bridges now only cost 0.10 resources",
            requires:[[2,0]],
            cost:1,
            category:"Intelligence",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                techstats.cement=true
            }
        },
		{
            name:"Large farm",
            description:"Unlock the blueprints for a large farm",
            requires:[[1,0],[2,4]],
            cost:1,
            category:"Farming",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[8].unlocked = true
			unlocked[8]=true
            }
        },
		{
            name:"Insulae",
            description:"Unlock the blueprints for a massive housing unit",
            requires:[[1,3],[1,2]],
            cost:1,
            category:"Housing",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[3].unlocked = true
			unlocked[3]=true
            }
        },
		{
            name:"Large mine",
            description:"Unlock the blueprints for a large mine",
            requires:[[1,5],[1,4],[1,8]],
            cost:1,
            category:"Mining II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[16].unlocked = true
			unlocked[16]=true
            }
        },
		{
            name:"Fortress",
            description:"Unlock the blueprints for a massive building that gives high military power",
            requires:[[1,6]],
            cost:1,
            category:"Military",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){}
        },
		{
            name:"Temple",
            description:"Unlock the blueprints for a temple that increases your luck at a higher rate",
            requires:[[2,2]],
            cost:1,
            category:"Virtue",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[9].unlocked = true
			unlocked[9]=true
            }
        }
	],
	[	//ROW 4
		
		{
            name:"Archery",
            description:"Fortresses give +40% military, allows you to shoot air targets",
            requires:[[2,3],[3,4]],
            cost:1,
            category:"Military II",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if (this.unlocked){
                techstats.archery+=0.4
                }
                else{
                    techstats.archery+=0.2
                    this.description = "Fortresses give +20% military"
                }
            }
        },
		{
            name:"Dedicated worship",
            description:"Temples and altars are 40% more efficient",
            requires:[[2,2],[3,5]],
            cost:1,
            category:"Virtue",
            tier: 0,
            maxtier: -1,
            unlocked: false,
            unlocktwice: true,
            effect(){
                if(this.unlocked){
                    techstats.ded_worship+=0.4
                }
                else{
                    techstats.ded_worship+=0.2
                    this.description="Temples and altars are 40% more efficient"
                }
            }
        },
		{
            name:"Trade School",
            description:"Unlock the blueprints for a Trade School that increases all production by 10%",
            requires:[[3,1],[3,2],[3,3]],
            cost:1,
            category:"Housing II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                p.pieceROM[19].unlocked = true
			unlocked[19]=true
            }
        }
		
	],
    [
        //ROW 5
        {
            name:"The Ultimate Megastructure",
            description:"Collect 1 out of 3 blueprint scraps to build the Mega Temple",
            requires:[[3,0],[2,1],[4,1]],
            cost:1,
            category:"Intelligence II",
            tier: 0,
            maxtier: 1,
            unlocked: false,
            unlocktwice: false,
            effect(){
                megatemple+=1
            }
        },
    ],
    
]

