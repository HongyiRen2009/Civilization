const achievements = [
	{
		acquired: false,
		title: "Humble Beginnings",
		description: "build your first building",
		requires(){
		return gridstats.length>=1
		}
	},
	{
	acquired: false,
		title: "Small Town",
		description: "build 10 buildings",
		requires(){
		return gridstats.length>=10
		}
	},
	{
	acquired: false,
		title: "Megatropolis",
		description: "build 50 buildings",
		requires(){
		return gridstats.length>=50
		}
	},
	{
	acquired: false,
		title: "UN recognized country",
		description: "build 100 buildings",
		requires(){
		return gridstats.length>=100
		}
	},

	{
	acquired: false,
	title: "First Shelter",
	description: "build your first Canopy",
	requires(){
		return buildingamounts[0] > 0
		}
	},
	{
	acquired: false,
	title: "it's settling time",
	description: "build your first hut",
	requires(){
		return buildingamounts[1] > 0
		}
	},
	{
	acquired: false,
	title: "Two for the price of two",
	description: "build your first townhouse",
	requires(){
		return buildingamounts[2] > 0
		}
	},
	{
		acquired: false,
		title: "Urbanization",
		description: "build your first insula",
		requires(){
			return buildingamounts[3] > 0
		}
	},
	{
		acquired: false,
		title: "Country Road take me home",
		description: "build your first Road",
		requires(){
			return buildingamounts[4] > 0
		}
	},
	{
		acquired: false,
		title: "Ant algaculture",
		description: "build your first Tiny Farm",
		requires(){
		return buildingamounts[5] > 0
		}
	},
	
	{
		acquired: false,
		title: "What a hoe",
		description: "build your first Small Farm",
		requires(){
		return buildingamounts[6] > 0
		}
	},
	
	{
		acquired: false,
		title: "It's 3/4 farm",
		description: "build your first Medium Farm",
		requires(){
		return buildingamounts[7] > 0
		}
	},
	
	{
		acquired: false,
		title: "Irrigation",
		description: "build your first Large Farm",
		requires(){
		return buildingamounts[8] > 0
		}
	
	},
	{
		acquired: false,
		title: "Bless me",
		description: "build your first Temple",
		requires(){
		return buildingamounts[9] > 0
		}

	},
	{
		acquired: false,
		title: "The Army!?!",
		description: "build your first Military Base",
		requires(){
		return buildingamounts[10] > 0
		}
	
	},
	{
	acquired: false,
		title: "You and what army?",
		description: "have 1000 military power",
		requires(){
		return military >= 1000
		}
	},
	{
		acquired: false,
		title: "London bridge is falling down",
		description: "build your first Bridge",
		requires(){
		return buildingamounts[11] > 0
		}
	},
	
	{
		acquired: false,
		title: "Mining away",
		description: "build your first Small Mine",
		requires(){
		return buildingamounts[12] > 0
		}
	},
	
	{
		acquired: false,
		title: "So mean",
		description: "build your first Medium Mine",
		requires(){
		return buildingamounts[13] > 0
		}
	},
	{
		acquired: false,
		title: "Cursed",
		description: "???",
		requires(){
		return luck < 0
		}
	},
	{
		acquired: false,
		title: "Industrialization",
		description: "build your first Large Mine",
		requires(){
		return buildingamounts[14] > 0
		}
	},
	{
		acquired: false,
		title: "Efficiency -100",
		description: "build more than 10 tiny farms while only having less than two small farms",
		requires(){
		return buildingamounts[5] > 10 && buildingamounts[6]<2
		}
	},
	{
		acquired: false,
		title: "Hero",
		description: "Give resources to Robin Hood.",
		requires(){
		return false
		}
	},
	{
		acquired: false,
		title: "Conscription",
		description: "Gain 100 military power from unemployed people",
		requires(){
		return unemployed>=100
		}
	},
	{
		acquired: false,
		title: "Dictator",
		description: "Punish revolutionaries 5 times in one game",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "Novice ruler",
		description: "Beat the game in Copper difficulty",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "The King of Kings",
		description: "Beat the game in Iron difficulty",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "The Chosen One",
		description: "Beat the game in Diamond difficulty",
		requires(){
		return false
		}
		
	},
	
]
const acquired = new Array(achievements.length).fill(false);
if (localStorage.getItem("achievements") !=null){
list = JSON.parse(localStorage.getItem("achievements"))
for (i=0;i < achievements.length;i++){
achievements[i].acquired = list[i]
acquired[i] = list[i]
}
}
else{

	localStorage.setItem("achievements", JSON.stringify(acquired))
}
function displayachievement(which){
	
	achievements[which].acquired = true
	acquired[which] = true
	localStorage.setItem("achievements", JSON.stringify(acquired))
	animationac = document.getElementById("unlocked")
				
				
	animationac.style.display = "flex"
	document.getElementById("achievementname").innerHTML = achievements[which].title
	animationac.style.animation = 'none';
		animationac.offsetHeight; /* trigger reflow */
		animationac.style.animation = null; 
}
