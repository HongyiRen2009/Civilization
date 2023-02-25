const achievements = [
	{
		acquired: false,
		title: "Humble Beginnings",
		description: "build your first building",
		imagesrc: "images/achievementFirstBuild.png",
		requires(){
		return gridstats.length>=1
		}
	},
	{
	acquired: false,
		title: "Small Town",
		description: "build 25 buildings",
		imagesrc: "images/achievementSmallTown.png",
		requires(){
		return gridstats.length>=25
		}
	},
	{
	acquired: false,
		title: "Megatropolis",
		description: "build 100 buildings",
		imagesrc: "images/achievementMegatropolis.png",
		requires(){
		return gridstats.length>=100
		}
	},
	{
	acquired: false,
		title: "UN recognized country",
		description: "build 500 buildings",
		imagesrc: "images/achievementUNcountry.png",
		requires(){
		return gridstats.length>=500
		}
	},

	{
	acquired: false,
	title: "First Shelter",
	description: "build your first Canopy",
	imagesrc: "images/achievementFirstShelter.png",
	requires(){
		return buildingamounts[0] > 0
		}
	},
	{
	acquired: false,
	title: "it's settling time",
	description: "build your first hut",
	imagesrc: "images/achievementHouse.png",
	requires(){
		return buildingamounts[1] > 0
		}
	},
	{
	acquired: false,
	title: "Two for the price of two",
	description: "build your first townhouse",
	imagesrc: "images/achievementDuplex.png",
	requires(){
		return buildingamounts[2] > 0
		}
	},
	{
		acquired: false,
		title: "Urbanization",
		description: "build your first insula",
		imagesrc: "images/achievementInsula.png",
		requires(){
			return buildingamounts[3] > 0
		}
	},
	{
		acquired: false,
		title: "Country Road take me home",
		description: "build your first Road",
		imagesrc: "images/achievementCountryRoad.png",
		requires(){
			return buildingamounts[4] > 0
		}
	},
	{
		acquired: false,
		title: "Ant agriculture",
		description: "build your first Tiny Farm",
		imagesrc: "images/achievementAntFarm.png",
		requires(){
		return buildingamounts[5] > 0
		}
	},
	
	{
		acquired: false,
		title: "Cheap food",
		description: "build your first Small Farm",
		imagesrc: "images/achievementHoe.png",
		requires(){
		return buildingamounts[6] > 0
		}
	},
	
	{
		acquired: false,
		title: "It's 3/4 farm",
		description: "build your first Medium Farm",
		imagesrc: "images/achievement34ths.png",
		requires(){
		return buildingamounts[7] > 0
		}
	},
	
	{
		acquired: false,
		title: "Irrigation",
		description: "build your first Large Farm",
		imagesrc: "images/achievementIrrigation.png",
		requires(){
		return buildingamounts[8] > 0
		}
	
	},
	{
		acquired: false,
		title: "Bless me",
		description: "build your first Temple",
		imagesrc: "images/achievementBlessMe.png",
		requires(){
		return buildingamounts[9] > 0
		}

	},
	{
		acquired: false,
		title: "The Army!?!",
		description: "build your first Military Base",
		imagesrc: "images/achievementTheArmy.png",
		requires(){
		return buildingamounts[10] > 0
		}
	
	},
	{
	acquired: false,
		title: "You and what army?",
		description: "have 1000 military power",
		imagesrc: "images/achievementWhatArmy.png",
		requires(){
		return military >= 1000
		}
	},
	{
		acquired: false,
		title: "London bridge is falling down",
		description: "build your first Bridge",
		imagesrc: "images/achievementBridge.png",
		requires(){
		return buildingamounts[13] > 0
		}
	},
	
	{
		acquired: false,
		title: "Mining away",
		description: "build your first Small Mine",
		imagesrc: "images/achievementSmallMine.png",
		requires(){
		return buildingamounts[14] > 0
		}
	},
	
	{
		acquired: false,
		title: "So mean",
		description: "build your first Medium Mine",
		imagesrc: "images/achievementMediumMine.png",
		requires(){
		return buildingamounts[15] > 0
		}
	},
	
	{
		acquired: false,
		title: "Industrialization",
		description: "build your first Large Mine",
		imagesrc: "images/achievementLargeMine.png",
		requires(){
		return buildingamounts[16] > 0
		}
	},
	{
		acquired: false,
		title: "Cursed",
		description: "???",
		imagesrc: "images/achievementCursed.png",
		requires(){
		return luck < 0
		}
	},
	{
		acquired: false,
		title: "Efficiency -100",
		description: "build more than 10 tiny farms while only having less than two small farms",
		imagesrc: "images/achievementefficiency-100.png",
		requires(){
		return buildingamounts[5] > 10 && buildingamounts[6]<2
		}
	},
	{
		acquired: false,
		title: "Hero",
		description: "Give resources to Robin Hood.",
		imagesrc: "images/achievementHero.png",
		requires(){
		return false
		}
	},
	{
		acquired: false,
		title: "Conscription",
		description: "Gain 100 military power from unemployed people",
		imagesrc: "images/achievementConscription.png",
		requires(){
		return unemployed>=100
		}
	},
	{
		acquired: false,
		title: "Dictator",
		description: "Punish revolutionaries 5 times in one game",
		imagesrc: "images/achievementDictator.png",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "Novice ruler",
		description: "Beat the game in Copper difficulty",
		imagesrc: "images/achievementCopper.png",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "The King of Kings",
		description: "Beat the game in Iron difficulty",
		imagesrc: "images/achievementIron.png",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "The Chosen One",
		description: "Beat the game in Diamond difficulty",
		imagesrc: "images/achievementDiamond.png",
		requires(){
		return false
		}
		
	},
	
]
const acquired = new Array(achievements.length).fill(false);
if (localStorage.getItem("achievements") !=null){
list = JSON.parse(localStorage.getItem("achievements"))
for (i=0;i < achievements.length;i++){
	if (i>list.length-1){
	list.push(false)
}
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
		setTimeout(function(){animationac.style.display="none"},4000)

}

function achievementscreen(ismenu){
	ispainting = false
	repairing=false
	removing = false
		Array.from(document.getElementsByClassName("achievement-container"))
			.map(element => element.remove())
		
		if(ismenu){
		document.getElementById("back_button").onclick = function(){menu()}
		}
		else{
		document.getElementById("back_button").onclick = function(){start()}
		}
		canvas.style.display="none"
		canvas2.style.display="none"
		document.getElementById("achievement-flex").style.display = 'flex'
		document.getElementById("difficulty-flex").style.display = 'none'
		document.getElementById("bgimg").style.display = 'none'
		document.getElementById("back_button").hidden = false
		document.getElementById("bgimg").style.display = 'none'
		document.body.style.overflowY = "scroll"
		document.getElementById("achievement-flex").style.display = 'flex'
		document.getElementById("difficulty-flex").style.display = 'none'
		document.getElementById("back_button").hidden = false
		document.getElementById("title_start").style.display = "none"
		document.getElementById("start-flex").style.display = "none"
		document.getElementById("popup_block_buttons").style.display = 'none';
		document.getElementById("difficulty-flex").style.display = 'none'
		document.getElementById("stats").style.display = "none"
		document.getElementById("select-grid").style.display = "none"
		ctx.clearRect(0,0,screen.width,screen.height)
		document.getElementById("save-flex").style.display = "none"
		for (const el of achievements){
			const flex = document.createElement("div")
			
			const title = document.createElement("h1")
			const description = document.createElement("p")
			const imagediv = document.createElement("div")
			const image = document.createElement("img")
			
			imagediv.appendChild(image)
			imagediv.className = "achievement-image-div"
			title.innerHTML = el.title
			description.innerHTML = el.description
			image.src = el.imagesrc
			title.style.display = "inline-block"
			flex.className = "achievement-container"
			image.className = "achievement-image"
			flex.appendChild(title)
			flex.append(imagediv)
			flex.appendChild(description)
			
			
			document.getElementById("achievements-container").appendChild(flex)
			if (!el.acquired){
			image.style.filter = "brightness(30%)"
			flex.style.opacity = "0.7"
			title.style.opacity = "0.7"
			description.style.opacity = "0.7"
			flex.style.backgroundColor = "rgb(69, 62, 62)"
			}
		}
		
		
	}
