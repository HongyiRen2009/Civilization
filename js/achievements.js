const achievements = [
	{
		acquired: false,
		title: "Humble Beginnings",
		description: `Build <strong class="color-g">your first</strong> building.`,
		flavortext: "It's not like you earned this, but whatever.",
		imagesrc: "images/achievementFirstBuild.png",
		requires(){
		return gridstats.length>=1
		}
	},
	{
	acquired: false,
		title: "Small Town",
		description: `Build <strong class="color-g">25</strong> buildings.`,
		flavortext: "",
		imagesrc: "images/achievementSmallTown.png",
		requires(){
		return gridstats.length>=25
		}
	},
	{
	acquired: false,
		title: "Megatropolis",
		description: `Build <strong class="color-g">100</strong> buildings.`,
		flavortext: "",
		imagesrc: "images/achievementMegatropolis.png",
		requires(){
		return gridstats.length>=100
		}
	},
	{
	acquired: false,
		title: "UN Recognized Country",
		description: `Build <strong class="color-g">500</strong> buildings.`,
		flavortext: "More than the Vatican!",
		imagesrc: "images/achievementUNcountry.png",
		requires(){
		return gridstats.length>=500
		}
	},

	{
	acquired: false,
	title: "First Shelter",
	description: `Build your first <strong class="color-g">Canopy</strong>.`,
	flavortext: "",
	imagesrc: "images/achievementFirstShelter.png",
	requires(){
		return buildingamounts[0] > 0
		}
	},
	{
	acquired: false,
	title: "Time to Settle",
	description: `Build your first <strong class="color-g">Hut</strong>.`,
	flavortext: "",
	imagesrc: "images/achievementHouse.png",
	requires(){
		return buildingamounts[1] > 0
		}
	},
	{
	acquired: false,
	title: "Two for the Price of Two",
	description: `Build your first <strong class="color-g">Townhouse</strong>.`,
	flavortext: "You've been scammed!",
	imagesrc: "images/achievementDuplex.png",
	requires(){
		return buildingamounts[2] > 0
		}
	},
	{
		acquired: false,
		title: "Urbanization",
		description: `Build your first <strong class="color-g">Insula</strong>.`,
		flavortext: "Insulae are a type of Roman apartment building. As to why you named your apartments that, well, only you know.",
		imagesrc: "images/achievementInsula.png",
		requires(){
			return buildingamounts[3] > 0
		}
	},
	{
		acquired: false,
		title: "Country Road, Take Me Home",
		description: `Build your first <strong class="color-g">Road</strong>.`,
		flavortext: "...to the place, that I belong!",
		imagesrc: "images/achievementCountryRoad.png",
		requires(){
			return buildingamounts[4] > 0
		}
	},
	{
		acquired: false,
		title: "Ant Agriculture",
		description: `Build your first <strong class="color-g">Tiny Farm</strong>.`,
		flavortext: "What is this, a farm for ants?",
		imagesrc: "images/achievementAntFarm.png",
		requires(){
		return buildingamounts[5] > 0
		}
	},
	
	{
		acquired: false,
		title: "Cheap Food",
		description: `Build your first <strong class="color-g">Small Farm</strong>.`,
		flavortext: "",
		imagesrc: "images/achievementHoe.png",
		requires(){
		return buildingamounts[6] > 0
		}
	},
	
	{
		acquired: false,
		title: "It's 3/4 Farm",
		description: `Build your first <strong class="color-g">Medium Farm</strong>.`,
		flavortext: "",
		imagesrc: "images/achievement34ths.png",
		requires(){
		return buildingamounts[7] > 0
		}
	},
	
	{
		acquired: false,
		title: "Irrigation",
		description: `Build your first <strong class="color-g">Large Farm</strong>.`,
		flavortext: "Where does the water go?",
		imagesrc: "images/achievementIrrigation.png",
		requires(){
		return buildingamounts[8] > 0
		}
	
	},
	{
		acquired: false,
		title: "Blessed",
		description: `Build your first <strong class="color-g">Temple</strong>.`,
		flavortext: `Sacrifices must be made. <strong class="color-r">We are watching.</strong>`,
		imagesrc: "images/achievementBlessMe.png",
		requires(){
		return buildingamounts[9] > 0
		}

	},
	{
		acquired: false,
		title: "The Army!?!",
		description: `Build your first <strong class="color-g">Military Base</strong>.`,
		flavortext: "Finally I can stop negotiating and pleading!",
		imagesrc: "images/achievementTheArmy.png",
		requires(){
		return buildingamounts[10] > 0
		}
	
	},
	{
	acquired: false,
		title: "You and What Army?",
		description: `Obtain <strong class="color-g">1000</strong> Military Power.`,
		flavortext: `<strong class="color-r">Time for you to plead.</strong>`,
		imagesrc: "images/achievementWhatArmy.png",
		requires(){
		return military >= 1000
		}
	},
	{
		acquired: false,
		title: "London Bridge is Falling Down",
		description: `Build your first <strong class="color-g">Bridge</strong>.`,
		flavortext: "Not to be confused with the Tacoma Narrows Bridge.",
		imagesrc: "images/achievementBridge.png",
		requires(){
		return buildingamounts[13] > 0
		}
	},
	
	{
		acquired: false,
		title: "Mining Away",
		description: `Build your first <strong class="color-g">Small Mine</strong>.`,
		flavortext: "",
		imagesrc: "images/achievementSmallMine.png",
		requires(){
		return buildingamounts[14] > 0
		}
	},
	
	{
		acquired: false,
		title: "Isn't It Medium Mine",
		description: `Build your first <strong class="color-g">Medium Mine</strong>.`,
		flavortext: "",
		imagesrc: "images/achievementMediumMine.png",
		requires(){
		return buildingamounts[15] > 0
		}
	},
	
	{
		acquired: false,
		title: "Industrialization",
		description: `Build your first <strong class="color-g">Large Mine</strong>.`,
		flavortext: "Too bad minecarts don't exist yet. Those would look awesome.",
		imagesrc: "images/achievementLargeMine.png",
		requires(){
		return buildingamounts[16] > 0
		}
	},
	{
		acquired: false,
		title: "Cursed",
		description: "???",
		flavortext: `<strong class="color-r"><b>I know what you did.</b></strong>`,
		imagesrc: "images/achievementCursed.png",
		requires(){
		return luck < 0
		}
	},
	{
		acquired: false,
		title: "Efficiency -100",
		description: `Build more than <strong class="color-g">10 Tiny Farms</strong> while having less than <strong class="color-g">2 Small Farms</strong>.`,
		flavortext: "Come on, manage your population better!",
		imagesrc: "images/achievementefficiency-100.png",
		requires(){
		return buildingamounts[5] > 10 && buildingamounts[6]<2
		}
	},
	{
		acquired: false,
		title: "Hero",
		description: "Give resources to Robin Hood.",
		flavortext: "Is it really hero if he sells them for his own gain?",
		imagesrc: "images/achievementHero.png",
		requires(){
		return false
		}
	},
	{
		acquired: false,
		title: "Conscription",
		description: `Gain <strong class="color-g">100</strong> Military Power from unemployed people.`,
		flavortext: "",
		imagesrc: "images/achievementConscription.png",
		requires(){
		return unemployed>=100
		}
	},
	{
		acquired: false,
		title: "Dictator",
		description: `Punish revolutionaries <strong class="color-r">5 times</strong> in one game.`,
		flavortext: "I refuse to talk it out!",
		imagesrc: "images/achievementDictator.png",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "Novice Ruler",
		description: `Beat the game in <strong class="color-g">Copper</strong> difficulty.`,
		flavortext: "",
		imagesrc: "images/achievementCopper.png",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "Global Empire",
		description: `Beat the game in <strong class="color-y">Iron</strong> difficulty.`,
		flavortext: "",
		imagesrc: "images/achievementIron.png",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "The King of Kings",
		description: `Beat the game in <strong class="color-r">Diamond</strong> difficulty.`,
		flavortext: "",
		imagesrc: "images/achievementDiamond.png",
		requires(){
		return false
		}
		
	},
	{
		acquired: false,
		title: "The Chosen One",
		description: `Beat the game in <strong class="color-r"><b>Eternity</b></strong> difficulty.`,
		flavortext: "Even I haven't beaten this yet!",
		imagesrc: "images/achievementEternity.png",
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
			const flavor = document.createElement("i")
			const imagediv = document.createElement("div")
			const image = document.createElement("img")
			
			imagediv.appendChild(image)
			imagediv.className = "achievement-image-div"
			title.innerHTML = el.title
			description.innerHTML = el.description
			flavor.innerHTML = el.flavortext
			image.src = el.imagesrc
			title.style.display = "inline-block"
			flex.className = "achievement-container"
			image.className = "achievement-image"
			flex.appendChild(title)
			flex.append(imagediv)
			flex.appendChild(description)
			flex.append(flavor)
			
			
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
