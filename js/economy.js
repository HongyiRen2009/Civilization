let resource_ext = 0
let food_ext = 0
let population_ext = 0
let military_ext = 0
let fortification_ext = 0
let resource_extdemand = 0
let food_extdemand = 0
let population_extdemand = 0

function newEconomy() {
	resource_ext = getRandomInt(10, 100)
	food_ext = getRandomInt(10, 100)
	population_ext = getRandomInt(10, 100)
}
function calcDemand() {
	food_extdemand = population_ext - food_ext + getRandomInt(0, 10)
	population_extdemand = -food_extdemand - resource_ext + getRandomInt(0, 10)
	resource_extdemand = population_ext - resource_ext
}
function ecoSanityCheck() {
	if (population_ext < 0) {
	population_ext = 0
	}
	if (food_ext < 0) {
	food_ext = 0
	}
}
function simulateEcoStep() {
	let percentMilitary = 1
	let percentFood = Math.random()
	let percentWorking = Math.random()
	percentMilitary -= percentFood
	percentWorking *= percentMilitary
	percentMilitary -= percentWorking
	
	food_ext += round(population_ext * percentFood)
	resource_ext += round(population_ext * percentWorking)
	military_ext = population_ext * percentMilitary + fortification_ext
	population_ext += (food_ext/population_ext) * Math.random()
	
}
function generateDeal(blackmarket = false) {
	
}