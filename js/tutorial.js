
const tutorial = [
{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is a game about civilization building, where you, as the ruler, must manage your food and resources to build the empire of your dreams!',

	choices: [
	{
		text: "okay",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			tutorialindex++
			continuetutorial(tutorialindex)
			
		},
	},
	
	]
	},
	{
		title: "Tutorial",
		size: "30px",
		
		
	
		description: 'This is the build menu, where buildings can be selected and built.',
			choices: [
		{
			text: "okay",
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
	{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'This is the build menu, where buildings can be selected and built.',
		choices: [
	{
		text: "okay",
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
	{
		title: "Tutorial",
		size: "30px",
		
		
	
		description: 'To select a building, simply click on it\'s corresponding button, then click where you want to place it on the map.',	
		choices: [
		{
			text: "okay",
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
	{
		title: "Tutorial",
		size: "30px",
		
		
	
		description: 'To go through the different types of buildings, select the highlighted button (fourth from the left) and click on the appropriate tab.',
		choices: [
		{
			text: "okay",
			effect(){
				document.getElementById("taboption").style.zIndex = "auto"
				document.getElementById("remove").style.zIndex = 10000
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
				tutorialindex++
				continuetutorial(tutorialindex, 78.5, 87.5)
				
			},
		},
		
		]
	},
	{
		title: "Tutorial",
		size: "30px",
		
		
	
		description: 'To remove buildings, select \"Remove\" and click on the desired building on the map.',
		choices: [
		{
			text: "okay",
			effect(){
				document.getElementById("remove").style.zIndex = "auto"
				document.getElementById("repair").style.zIndex = 10000
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
				tutorialindex++
				continuetutorial(tutorialindex, 78.5, 87.5)
				
			},
		},
		
		]
	},
	{
		title: "Tutorial",
		size: "30px",
		
		
	
		description: 'To repair a damaged building, select \"Repair\" and click on the desired building on the map. Damaged buildings are greyed out visually. Damage can be incurred in a variety of ways, including battles and disrepair.',
	
		choices: [
		{
			text: "okay",
			effect(){
				document.getElementById("repair").style.zIndex = "auto"
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
				tutorialindex++
				continuetutorial(tutorialindex, 78.5, 87.5)
				
			},
		},
		
		]
	},
	{
	title: "Tutorial",
	size: "30px",
	
	
	description: 'Great! Next, place down a small farm. After your first turn, buildings must be placed adjacent to each other.',
	choices: [
	{
		text: "okay",
		effect(){
	
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			
		},
	},
	
	]
	},
	{
	title: "Tutorial",
	size: "30px",
	
	
	description: 'Perfect! Now click "End year".',
	choices: [
	{
		text: "okay",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			
		},
	},
	
	]
	},
	{
	title: "Tutorial",
	size: "30px",
	
	
	description: 'Nice! Now you are ready to play this game. Remember that you need balance producing enough food for your people, providing enough housing, and defending your kingdom against attacks. If you are confused about what a certain button does or a number means, you can hover over it for extra information.',
	choices: [
	{
		text: "okay",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			disableinfo = false
			displayUI()
		},
	},
	
	]
	},
	{
		title: "<strong class = 'color-r>Housing</strong>",
	size: "30px",
	
	
	description: 'Remember to build housing for your citizens after turn 5 (7.5 on iron and 10 on diamond), otherwise they will rebel.',
	choices: [
	{
		text: "okay",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		},
	},
	
	]
	},
	{
		title: "<strong class = 'color-r>Watch Out!</strong>",
	size: "30px",
	
	
	description: 'Make sure that after every year you have enough food(indicated by the food display) and enough housing(indicated by the population display). You will know if you dont have enough of one of these things if the display is red for either.',
	choices: [
	{
		text: "okay",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		},
	},
	
	]
	},
	{
		
		title: "<strong class = 'color-g'>Market</strong>",
	size: "30px",
	
	
	description: 'This is the market, where you can buy and sell items for resources. Being a benevolent ruler increases your <strong class = "color-g">reputation</strong>, which lowers prices in the market, whereas using the black market will cause your reputation to go down.',
	choices: [
	{
		text: "okay",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		},
	},
	
	]
	}
	
	
]
function continuetutorial(index, dt=50, dl=50){
	displaypopup(index, tutorial, dt, dl)
}
