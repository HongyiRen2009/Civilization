//tech is a 2d array. The index of the array determines its level on the tree. To add something to requires, get the level of the object, then the index of it in the array. Category determines the column it'll
//be put on
const tech = [
    [
        {
            name:"Housing optimization",
			image:"<img src = 'images/techBlueprint.png' width='50' height='50'></img>",
            description:"All housing options permanently become 20% cheaper, not including canopies.</br>TIER I",
            requires:[],
            category:"I",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        },
		{
            name:"Discipline",
            description:"During revolts, you now have the option to discipline the revolters,</br> losing 5% food production for 5 turns.</br>TIER II",
            requires:[[0,0]],
            category:"II",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        },
		{
            name:"Insulae",
            description:"Unlock a huge housing unit.</br>TIER III",
            requires:[[0,1]],
            category:"III",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        },
		{
            name:"Don't ask",
            description:"Gain population 30% faster.</br>TIER VI",
            requires:[[0,1]],
            category:"VI",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        }
      
    ],
    [
		{
            name:"Virtuous",
            description:"+50% reputation from market purchases.</br>TIER II",
            requires:[[0,0]],
            category:"II",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        },
		{
            name:"Books!",
            description:"All research sources are 40% more efficient.</br>TIER III",
            requires:[[1,0]],
            category:"III",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        },
		{
            name:"Advanced housing",
            description:"All housing options have 50% increased capacity, not including canopies.</br>TIER VI",
            requires:[[1,1],[0,2]],
            category:"VI",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        },
		{
            name:"Exploration",
            description:"Unlock the ability to reveal much more terrain using WASD.</br>TIER IV",
            requires:[[1,2]],
            category:"IV",
            acquired: false,
            cost:0,
            effect(){
				resources+=900
			}
        }
    ],
    [
        {
            name:"Medium farms",
            description:"Unlock a new larger type of farm that produces more food.</br>TIER I",
            requires:[],
            cost:0,
            category:"I",
            acquired: false,
            effect(){}
        },
		{
            name:"Efficient farms",
            description:"All new farms produce 20% more resources.</br>TIER II",
            requires:[[2,0]],
            cost:0,
            category:"II",
            acquired: false,
            effect(){}
        },
		{
            name:"Compact farms",
            description:"All mines now require 20% less resources.</br>TIER III",
            requires:[[2,1]],
            cost:0,
            category:"III",
            acquired: false,
            effect(){}
        }
    ],
	[
		{
            name:"Diplomacy",
            description:"When negotiating with an attacker, gain a 60% chance to create a peace treaty-</br> reduces chance of attacks by 40% for the next 5 years.</br>TIER II",
            requires:[[2,0]],
            cost:0,
            category:"II",
            acquired: false,
            effect(){}
        },
		{
            name:"Large farms",
            description:"Unlock a massive farm the requires irrigation.</br>TIER III",
            requires:[[3,0]],
            cost:0,
            category:"III",
            acquired: false,
            effect(){}
        },
		{
            name:"Negotiation",
            description:"When in the market, you now have the option to randomize a trade-</br>20% chance to spend the cost to randomize.</br>TIER VI",
            requires:[[3,1]],
            cost:0,
            category:"VI",
            acquired: false,
            effect(){}
        }
	],
	[
		{
            name:"Planned mines",
            description:"All mines are now 20% cheaper.</br>TIER I",
            requires:[],
            cost:0,
            category:"I",
            acquired: false,
            effect(){}
        },
		{
            name:"Material advantage",
            description:"For every 10 resources you have, gain 5 military,</br>TIER II",
            requires:[[4,0]],
            cost:0,
            category:"II",
            acquired: false,
            effect(){}
        },
		{
            name:"Temples",
            description:"Unlock a temple to increase your luck.</br>TIER VI",
            requires:[[3,1]],
            cost:0,
            category:"VI",
            acquired: false,
            effect(){}
        },
		{
            name:"Pickpockets",
            description:"When buying from the black market, gain 20 resources.</br>TIER III",
            requires:[[4,1]],
            cost:0,
            category:"III",
            acquired: false,
            effect(){}
        },
		{
            name:"Scientific breakthrough",
            description:"Gain 1 blueprint scrap for the mega temple.</br>TIER IV",
            requires:[[4,3]],
            cost:0,
            category:"IV",
            acquired: false,
            effect(){}
        }
	],
	[
		{
            name:"Efficient mines",
            description:"All new mines now produce 20% more resources.</br>TIER II",
            requires:[[4,0]],
            cost:0,
            category:"II",
            acquired: false,
            effect(){}
        },
		{
            name:"Medium mines",
            description:"Unlock a larger, more effective mine.</br>TIER III",
            requires:[[5,0]],
            cost:0,
            category:"III",
            acquired: false,
            effect(){}
        },
		{
            name:"Large mines",
            description:"Unlock an extremely efficient large mine.</br>TIER VI",
            requires:[[5,1]],
            cost:0,
            category:"VI",
            acquired: false,
            effect(){}
        }
	],
    
]
