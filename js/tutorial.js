
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
			tutorialindex+=1
			continuetutorial(tutorialindex)
		},
	},
	
	]
	},
	{
	title: "Tutorial",
	size: "30px",
	
	

	description: 'To get started, place down a small mine. The small mine will produce resources, but must be at least partially on a hill. You can do this by clicking the "Small Mine" button and moving your mouse to the desired location. Afterwards, click again to place it.',

	choices: [
	{
		text: "okay",
		effect(){
			
			for (const el of document.getElementsByClassName("select-choice")){
				if (el.innerHTML!="Small Mine"){
					el.disabled=true
				}
			}
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			
		},
	},
	
	]
	},
	{
	title: "Tutorial",
	size: "30px",
	
	
	description: 'Great! Next, place down a small farm. After your first turn, buildings must be placed ajacent to each other.',
	choices: [
	{
		text: "okay",
		effect(){
			
			
			for (const el of document.getElementsByClassName("select-choice")){
				if (el.innerHTML!="Small Farm"){
					el.disabled=true
				}
			}
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			
		},
	},
	
	]
	},
	{
	title: "Tutorial",
	size: "30px",
	
	
	description: 'Perfect! Now click "End year". Keep in mind that you must place down these two buildings first turn to progress',
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
	
	
	description: 'Nice! Now you are ready to play this game. To see the resource requirement for each building, click on the "building info" button on the top right corner, which will show the costs and effects of each building. And click on the achievements button to see which have you earned',
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
function continuetutorial(index){
	displaypopup(index, tutorial)
}
