
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
	
	

	description: 'To get started, place down a small mine. The small mine will produce resources that you can use to build your base. You can do this by clicking the dropdown at the bottom of your screen, selecting "Mines" and then clicking the "Small mine". Then, place the mine where you want to.',

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
function continuetutorial(index){
	displaypopup(index, tutorial)
}
