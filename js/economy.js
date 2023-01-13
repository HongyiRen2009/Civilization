let resource_ext = 0
let food_ext = 0
let population_ext = 0
let military_ext = 0
let fortification_ext = 0
let resource_extdemand = 0
let food_extdemand = 0
let population_extdemand = 0
let military_extdemand = 0
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newEconomy() {
	resource_ext = getRandomInt(10, 100)
	food_ext = getRandomInt(10, 100)
	population_ext = getRandomInt(10, 100)
}
function calcDemand() {
	food_extdemand = population_ext - food_ext + getRandomInt(0, 10)
	population_extdemand = -food_extdemand - resource_ext + getRandomInt(0, 10)
	resource_extdemand = population_ext - resource_ext + getRandomInt(0, 10)
	military_extdemand = population_ext - military_ext + getRandomInt(0, 10)
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
	calcDemand()
	ecoSanityCheck()
	let percentMilitary = 1
	let percentFood = Math.random()
	let percentWorking = Math.random()
	percentMilitary -= percentFood
	percentWorking *= percentMilitary
	percentMilitary -= percentWorking
	
	food_ext += Math.round(population_ext * percentFood)
	resource_ext += Math.round(population_ext * percentWorking)
	military_ext = population_ext * percentMilitary + fortification_ext
	population_ext += (food_ext/population_ext) * Math.random()
	ecoSanityCheck()
	
}
function generateDeal(blackmarket = false, specialchance = 30) {
	let rollforspecial = getRandomInt(0, 100)
	let needs = ""
	const buymult = 0.5
	const sellmult = 1.3
	
	if (food_extdemand > population_extdemand && food_extdemand > resource_extdemand && food_extdemand > military_extdemand) {
		needs = "food"
	} else if (food_extdemand < population_extdemand && population_extdemand > resource_extdemand && population_extdemand > military_extdemand) {
		needs = "population"
	} else if (food_extdemand < resource_extdemand && population_extdemand < resource_extdemand && resource_extdemand > military_extdemand) {
		needs = "resources"
	} else if (food_extdemand < military_extdemand && population_extdemand < military_extdemand && resource_extdemand < military_extdemand) {
		needs = "military"
	} else {needs = "resources"}
	let gives = ""

	if (food_extdemand < population_extdemand && food_extdemand < resource_extdemand && food_extdemand < military_extdemand) {
		gives = "food"
	} else if (food_extdemand > population_extdemand && population_extdemand < resource_extdemand && population_extdemand < military_extdemand) {
		gives = "population"
	} else if (food_extdemand > resource_extdemand && population_extdemand > resource_extdemand && resource_extdemand < military_extdemand) {
		gives = "resources"
	} else if (food_extdemand > military_extdemand && population_extdemand > military_extdemand && resource_extdemand > military_extdemand) {
		gives = "military"
	} else {gives = "resources"}

	if (rollforspecial > specialchance) {
		gives = "special"
	}

	let listoftrades = []
	let secondaries = []
	let out = m.marketselections[getRandomInt(0, m.marketselections.length-1)]
	for (let i = 0; i != m.marketselections.length; i++) {
		if (m.marketselections[i].payment == needs) {
			secondaries.push(m.marketselections[i])
			if (m.marketselections[i].recieve == gives) {listoftrades.push(m.marketselections[i])}
		}
	}
	if (listoftrades.length > 0) {
		out = listoftrades[getRandomInt(0,listoftrades.length-1)]
	} else if (secondaries.length > 0) {
		out = secondaries[getRandomInt(0,secondaries.length-1)]
	}

	if (out.payment == "resources") {
		resource_extdemand *= buymult
	} else if (out.payment == "population") {
		population_extdemand *= buymult
	} else if (out.payment == "military") {
		military_extdemand *= buymult
	} else if (out.payment == "food") {
		food_extdemand *= buymult
	}

	if (out.recieve == "resources") {
		resource_extdemand *= sellmult
	} else if (out.recieve == "population") {
		population_extdemand *= sellmult
	} else if (out.recieve == "military") {
		military_extdemand *= sellmult
	} else if (out.recieve == "food") {
		food_extdemand *= sellmult
	}
	return out
}

// returns list: cost to buy, mats to give
function getValue(deal) {
	let out = []
	const scaler = 100
	if (deal.payment == "resources") {
		out[0] = Math.ceil(deal.price * Math.pow(Math.E, resource_extdemand / scaler))
	} else if (deal.payment == "population") {
		out[0] = Math.ceil(deal.amountincrease * Math.pow(Math.E, population_extdemand / scaler))
	} else if (deal.payment == "military") {
		out[0] = Math.ceil(deal.amountincrease * Math.pow(Math.E, military_extdemand / scaler))
	} else if (deal.payment == "food") {
		out[0] = Math.ceil(deal.amountincrease * Math.pow(Math.E, food_extdemand / scaler))
	}

	if (deal.recieve == "resources") {
		out[1] = Math.ceil(deal.price * Math.pow(Math.E, resource_extdemand / scaler))
	} else if (deal.recieve == "population") {
		out[1] = Math.ceil(deal.amountincrease * Math.pow(Math.E, population_extdemand / scaler))
	} else if (deal.recieve == "military") {
		out[1] = Math.ceil(deal.amountincrease * Math.pow(Math.E, military_extdemand / scaler))
	} else if (deal.recieve == "food") {
		out[1] = Math.ceil(deal.amountincrease * Math.pow(Math.E, food_extdemand / scaler))
	} else {out[1] = deal.amountincrease}
	return out
}