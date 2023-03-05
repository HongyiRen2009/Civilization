
const tutorial = [
// 0
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is a game about civilization building, where you, as the ruler, must manage your food and resources to build the empire of your dreams!',

	choices: [
	{
		text: "Okay",
		effect(){
			
			document.getElementById("stats").style.zIndex = 10000
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 20.5, 87.5)
			
		},
	},
	
	]
},
// 1
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This display dictates how your civilization works, both internally and with other civilizations.',
		choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("stats").style.zIndex = "auto"
			document.getElementById("pop").style.zIndex = 10000
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 20.5, 87.5)
			
		},
	},
	
	]
},
// 2
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is your population counter. The number on the left shows the current number of people, and the number on the right shows the current housing capacity of your civilization.',
		choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("pop").style.zIndex = "auto"
			document.getElementById("food").style.zIndex = 10000
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 20.5, 87.5)
			
		},
	},
	
	]
},
// 3
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is your food counter. Food is not persistent (does not accumulate through turns), so this number always needs to be above your population, otherwise people will starve.',
		choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("food").style.zIndex = "auto"
			document.getElementById("power").style.zIndex = 10000
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 20.5, 87.5)
			
		},
	},
	
	]
},
// 4
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is your military counter. Military determines the outcome of battles. Any unemployed citizens will automatically be assigned to the military.',
		choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("power").style.zIndex = "auto"
			document.getElementById("unemployed").style.zIndex = 10000
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 20.5, 87.5)
			
		},
	},
	
	]
},
// 5
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is your unemployed citizens counter. Almost all buildings require maintenance, and will cost a certain number of unemployed citizens.',
		choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("unemployed").style.zIndex = "auto"
			document.getElementById("resources").style.zIndex = 10000
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 20.5, 87.5)
			disableinfo = false
			
		},
	},
	
	]
},
// 6
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is your resources counter. From building to trading, resources are the primary currency used by all civilizations. Resources accumulate over time, and the amount gained is shown in parenthesis. For more information, visit the \"Help\" screen.',
		choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("select-grid").style.zIndex = 10000
			document.getElementById("resources").style.zIndex = "auto"
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 78.5, 87.5)
			
		},
	},
	
	]
},
// 7
{
title: "Tutorial",
size: "30px",



description: 'This is the build menu, where buildings can be selected and built.',
	choices: [
{
	text: "Okay",
	effect(){
		document.getElementById("select-grid").style.zIndex = 10000
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
		tutorialindex++
		continuetutorial(tutorialindex, 78.5, 87.5)
		
	},
},

]
},
// 8
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'To select a building, simply click on it\'s corresponding button, then click where you want to place it on the map.',	
	choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("taboption").style.zIndex = 10000
			document.getElementById("select-grid").style.zIndex = "auto"
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex, 78.5, 87.5)
			
		},
	},
	
	]
},
// 9
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'To go through the different types of buildings, select the highlighted button (fourth from the left) and click on the appropriate tab.',
	choices: [
	{
		text: "Okay",
		effect(){
			document.getElementById("taboption").style.zIndex = "auto"
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			displayUI()
			continuetutorial(tutorialindex, 78.5, 87.5, false)
			
		},
	},
	
	]
},
// 10
{
title: "Tutorial",
size: "30px",


description: 'Let\'s get started! First, place down a Small Mine.',
choices: [
{
	text: "How?",
	effect(){
		document.getElementById("select-grid").style.zIndex = 10000
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
		tutorialindex -= 3
		continuetutorial(tutorialindex, 78.5, 87.5)
		
	},
},

]
},
// 11
{
	title: "Tutorial",
	size: "30px",
	
	
	description: 'Great! Next, place down a Small Farm. Once the first building is placed, all subsequent buildings must be placed adjacently.',
	choices: []
},
// 12
{
	title: "Tutorial",
	size: "30px",
	
	
	description: 'Finally, place down two Canopies as shelter for your citizens.',
	choices: []
},
// 13
{
title: "Tutorial",
size: "30px",


description: 'Perfect! Now click "End year".',
choices: [
{
	text: "Okay",
	effect(){
		
		
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
		
	},
},

]
},
// 14
{
title: "Tutorial",
size: "30px",


description: 'Nice! Now you are ready to play this game. Remember that you need balance producing enough food for your people, providing enough housing, and defending your kingdom against attacks. If you are confused about what a certain button does or a number means, the \"Help\" screen has additional information.',
choices: [
{
	text: "Okay",
	effect(){
		
		
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
		disableinfo = false
		displayUI()
	},
},

]
},
// 15
{
	title: "<strong class = 'color-r>Housing</strong>",
size: "30px",


description: 'Remember to build housing for your citizens after turn 5 (7.5 on iron and 10 on diamond), otherwise they will rebel.',
choices: [
{
	text: "Okay",
	effect(){
		
		
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
	},
},

]
},
// 16
{
	title: "<strong class = 'color-r>Watch Out!</strong>",
size: "30px",


description: 'Make sure that after every year you have enough food (indicated by the food display) and enough housing (indicated by the population display). You will know if you dont have enough of one of these things if the display is red for either.',
choices: [
{
	text: "Okay",
	effect(){
		
		
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
	},
},

]
},
// 17
{
	
	title: "<strong class = 'color-g'>Tech</strong>",
size: "30px",


description: 'This is the laboratory, where you can purchase new technologies. Acquiring enough wisdom grants <strong class = "color-g">Research Points</strong>, which are used to purchase new technologies. Some technologies require other technologies, and all technologies require a certain time period to have occurred before being puchaseable.',
choices: [
{
	text: "Okay",
	effect(){
		
		
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
	},
},

]
},
// 18
{
	
	title: "<strong class = 'color-g'>Market</strong>",
size: "30px",


description: 'This is the market, where you can buy and sell items for resources. Being a benevolent ruler increases your <strong class = "color-g">reputation</strong>, which lowers prices in the market, whereas using the black market will cause your reputation to go down.',
choices: [
{
	text: "Okay",
	effect(){
		
		
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
	},
},

]
},
// 19
{
	
	title: "<strong class = 'color-g'>Research</strong>",
size: "30px",


description: 'You just acquired a research point! <strong class = "color-g">Research Points</strong> are the result of accumulated wisdom, and can be spent to acquire new Technologies. For more, click on the \"Tech\" button to enter the laboratory.',
choices: [
{
	text: "Okay",
	effect(){
		
		
		document.getElementById("popup_block_buttons").style.display = "none"
		document.getElementById("popup").style.display = "none"
		this.hastriggered = true
	},
},
],
hastriggered: false
}
]
function continuetutorial(index, dt=50, dl=50, disable=true){
	displaypopup(index, tutorial, dt, dl, disable)
}
