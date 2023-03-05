//tech is a 2d array. The index of the array determines its level on the tree. To add something to requires, get the level of the object, then the index of it in the array. Category determines the column it'll
//be put on
const techstats = {
 
    charisma:0,
    simple_farms:0,
    eff_infra:0,
    planned_mines:0,
    diplomacy:0,
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
            description:"All farms produce +30% food",
            requires:[],
            cost:1,
            image:"images/techfarm.png",
            category:"Farming",
            tier: 0,
            maxtier: -1,
            
            
            effect(){
                if (this.tier>0){
                    modifiers.food+=1
                }
                else{
                    modifiers.food+=3
                    this.description = "All farms produce +10% food"
                }
            }
        },
		{
            name:"Efficient space usage",
            description:"Houses have +30% capacity",
            requires:[],
            cost:1,
            category:"Housing",
            image:"images/techhammer.png",
            tier: 0,
            maxtier: -1,
            
            
            effect(){
                if (this.tier>0){
                    modifiers.population+=1
                }
                else{
                   modifiers.population+=3
                    this.description = "Houses have +10% capacity"
                }
            }
        },
		{
            name:"Mining tactics",
            description:"Mines produce +30% resources",
            requires:[],
            cost:1,
            image:"images/techpickaxe.png",
            category:"Mining",
            tier: 0,
            maxtier: -1,
            
            
            effect(){
                if (this.tier>0){
                    modifiers.resources+=1
                }
                else{
                    modifiers.resources+=3
                    this.description = "Mines produce +10% resources"
                }
            }
        },
		{
            name:"Swords",
            description:"+30% military",
            requires:[],
            image:"images/techsword.png",
            cost:1,
            category:"Military",
            tier: 0,
            maxtier: -1,
            
            
            effect(){
                if (this.tier>0){
                    modifiers.military+=2
                }
                else{
                    modifiers.military+=3
                    this.description = "+20% military"
                }
            }
        },
		{
            name:"Charisma",
            description:"Reputation sources are all 20% more efficient",
            requires:[],
            cost:1,
            category:"Virtue",
            image:"images/techstar.png",
            tier: 0,
            maxtier: -1,
            
            
            effect(){
                if (this.tier>0){
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
            description:"Unlock the blueprints for a larger medium farm",
            requires:[[0,0]],
            cost:1,
            category:"Farming",
            tier: 0,
            image:"images/techscroll.png",
            maxtier: 1,
            
            
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
            image:"images/techupgrade.png",
            tier: 0,
            maxtier: 4,
            
            effect(){
                if (this.tier>0){
                    techstats.simple_farms+=0.1
                    
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
            image:"images/techscroll.png",
            maxtier: 1,
            
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
            image:"images/techupgrade.png",
            tier: 0,
            maxtier: 4,
            
            effect(){
                if (this.tier>0){
                    techstats.eff_infra+=0.1
                   
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
            maxtier: 4,
            
            image:"images/techupgrade.png",
            effect(){
                if (this.tier>0){
                    techstats.planned_mines+=0.1
                        
             
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
            image:"images/techscroll.png",
            tier: 0,
            maxtier: 1,
            
            
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
            image:"images/techbase.png",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
                p.pieceROM[10].unlocked = true
			unlocked[10]=true
            }
        },
		{
            name:"Diplomacy",
            description:"Negotiations with other tribes are 30% cheaper",
            requires:[[0,4]],
            cost:1,
            category:"Virtue",
            image:"images/techdiplomacy.png",
            tier: 0,
            maxtier: 5,
            
            
            effect(){
				if(this.tier>0){
                techstats.diplomacy +=0.1
				}
				else{
					techstats.diplomacy +=0.3
					this.description="Negotiations with other tribes are 10% cheaper"
				}
            }
        },
        
		{
            name:"Innovation",
            description:"All wisdom sources are 30% more effective",
            requires:[],
            cost:1,
            category:"Intelligence",
            image:"images/techhouse.png",
            tier: 0,
            maxtier: -1,
            
            
            effect(){
                if (this.tier>0){
                    techstats.innovation+=0.1
                }
                else{
                    techstats.innovation+=0.3
                    this.description = "All wisdom sources are 10% more effective"
                }
            }
        },
		 {
            name:"Market",
            description:"Unlock the Market",
            requires:[[0,4]],
            cost:1,
            category:"Virtue II",
            image:"images/techmarket.png",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
                techstats.market=true
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
            image:"images/techexplore.png",
            tier: 0,
            maxtier: 1,
            
            
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
            image:"images/techhammer.png",
            maxtier: 1,
            
            
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
            image:"images/techcare.png",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
                techstats.social_care=true
                modifiers.resources-=1
            }
        },
		{
            name:"Scouting",
            description:"Gain the ability to get an approximate estimate of attacking enemies' military strength",
            requires:[[1,6]],
            cost:1,
            category:"Military II",
            image:"images/techspyglass.png",
            tier: 0,
            maxtier: 1,
            
            
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
            image:"images/techfish.png",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
	    p.pieceROM[21].unlocked = true
			unlocked[21]=true
	    }
        },
       
        {
            name:"Barracks",
            description:"Unlock the Barracks",
            requires:[[1,6]],
            cost:1,
            category:"Military",
            image:"images/tech2swords.png",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
                p.pieceROM[11].unlocked = true
			unlocked[11]=true
            }
        },
		
	],
	[	//ROW 3
		{
            name:"Cement",
            description:"Roads and bridges' costs are halved",
            requires:[[2,0]],
            cost:1,
            category:"Intelligence",
            tier: 0,
            maxtier: 1,
            
            image:"images/techroad.png",
            effect(){
                techstats.cement=true
            }
        },
		{
            name:"Large farm",
            description:"Unlock the blueprints for a large farm",
            requires:[[1,0]],
            image:"images/techscroll.png",
            cost:1,
            category:"Farming",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
                p.pieceROM[8].unlocked = true
			unlocked[8]=true
            }
        },
		{
            name:"Insulae",
            description:"Unlock the blueprints for a massive housing unit",
            requires:[[1,2]],
            image:"images/techscroll.png",
            cost:1,
            category:"Housing",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
                p.pieceROM[3].unlocked = true
			unlocked[3]=true
            }
        },
		{
            name:"Large mine",
            description:"Unlock the blueprints for a large mine",
            requires:[[1,5],[1,8]],
            image:"images/techscroll.png",
            cost:1,
            category:"Mining II",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
                p.pieceROM[16].unlocked = true
			unlocked[16]=true
            }
        },
		{
            name:"Fortress",
            description:"Unlock the blueprints for a massive building that gives high military power",
            requires:[[2,5]],
            image:"images/techfort.png",
            cost:1,
            category:"Military",
            tier: 0,
            maxtier: 1,
            
            
            effect(){
				p.pieceROM[12].unlocked = true
			unlocked[12]=true
			}
        },
		{
            name:"Temple",
            description:"Unlock the blueprints for a temple that increases your luck at a higher rate",
            requires:[[1,7]],
            cost:1,
            category:"Virtue",
            image:"images/techscroll.png",
            tier: 0,
            maxtier: 1,
            
            
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
            image:"images/techbow.png",
            tier: 0,
            maxtier: -1,
            
            
            effect(){
                if (this.tier<1){
                techstats.archery+=0.4
                for(const b of gridstats){
                    if(b.index==12){
                        b.military = Math.floor(b.military*1.4)
                    }
                }
                
                }
                else{
                    techstats.archery+=0.2
                    for(const b of gridstats){
                        if(b.index==12){
                            b.military = Math.floor(b.military*1.4)
                        }
                    }
                    
                }
				this.description = "Fortresses give +20% military"
            }
        },
		{
            name:"Dedicated worship",
            description:"Temples and altars are 40% more efficient",
            requires:[[3,5]],
            cost:1,
            category:"Virtue",
            tier: 0,
            image:"images/techhand.png",
            maxtier: -1,
            
            
            effect(){
                if(this.tier<1){
                    techstats.ded_worship+=0.4
                    this.description="Temples are 40% more efficient"
                }
                else{
                    techstats.ded_worship+=0.2
                    
                }
            }
        },
		{
            name:"Trade School",
            description:"Unlock the blueprints for a Trade School that increases all production by 20%",
            requires:[[3,1],[3,2],[3,3]],
            cost:1,
            category:"Housing II",
            image:"images/techbook.png",
            tier: 0,
            maxtier: 1,
            
            
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
            
            image:"images/techmega.png",
            effect(){
                megatemple+=1
            }
        },
    ],
    
]

