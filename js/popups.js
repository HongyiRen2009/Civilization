
const confirmation = [
	{
		title: "<strong class = 'color-r'>Confirm</strong>",
	size: "30px",
	index: 0,
	choosetext(bindex){
		this.index = bindex
		this.description = `Are you sure you want to override the contents of save slot ${bindex}?`
	},
	description: 'Are you sure you want to override ${}',
	choices: [
	{
		text: "Yes",
		effect(){
			
			save(confirmation[0].index)
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		},
	},
	{
		text: "No",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			
		}
	},
	]
	},
	{
		title: "<strong class = 'color-r'>Exit</strong>",
	size: "30px",
	index: 0,
	
	description: 'Are you sure you want to exit to the main menu?',
	choices: [
	{
		text: "Yes",
		effect(){
			
			menu()
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			document.getElementById("pause_flex").style.display = "none"
		},
	},
	{
		text: "No",
		effect(){
			
			
			document.getElementById("popup").style.display = "none"
			
		}
	},
	]
	},
	{
		title: "<strong class = 'color-r'>Clear</strong>",
	size: "30px",
	index: 0,
	choosetext(index){
		this.index = index
		this.description = `Are you sure you want to delete the contents of save slot ${index}`
	},
	description: 'Are you sure you want to delete the contents of',
	choices: [
	{
		text: "Yes",
		effect(){
			index = confirmation[2].index

			clearsave(index)
			savescreen(true)
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		},
	},
	{
		text: "No",
		effect(){
			
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			
		}
	},
	]
	},
	{
		title: "<strong class = 'color-g'>Tutorial</strong>",
	size: "30px",
	index: 0,
	
	description: 'Do you want a tutorial for this game (highly recommended for new players)',
	choices: [
	{
		text: "Yes",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			istutorial = true
			start()
		},
	},
	{
		text: "I've played before",
		effect(){
			
			start()
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			
		}
	},
	]
	},
	]

const popups = [
	
	{
	title: "<strong class = 'color-r'>Raid!</strong>",
	size: "30px",
	power: 0,
	description: "A neighbouring tribe is raiding your village",
	choosetext(){
		if (resources<((difficulty**3)/200)-((difficulty**3)/200)*(techstats.diplomacy+1)){
			choicesdisabled.push(1)
		}
		this.power =Math.floor(difficultymultiplier*((getRandomInt(m.spy,3) ? 1:0.5)*((difficulty**2.9)/64)*(getRandomInt(8,12)/10)))
		this.description = `A neighbouring tribe is raiding your village${techstats.scouting ?`<br><br>Scouting Estimate: ${this.power}`:""}`
	
	},
	choices: [
	{
		text: "fight",
		effect(){
			
			
			document.getElementById("popup").style.display = "none"
			attack(Math.floor(difficultymultiplier*((getRandomInt(m.spy,3) ? 1:0.5)*((difficulty**2.9)/64)*(getRandomInt(8,12)/10))))
		},
	},
	{
		text: "negotiate",
		effect(){
			
			
			document.getElementById("popup").style.display = "none"
			reputation-=getRandomInt(3,5)
			const amountremove = Math.max((resources/2)+((resources/2)*(techstats.diplomacy+1)),((difficulty**3)/200)-((difficulty**3)/200)*(techstats.diplomacy+1))
			information[12].choosetext(amountremove)
			resources-=amountremove
			displaypopup(12, information)

			displayUI()
		}
	},
	{
		text: "plead",
		effect(){
			
			
			document.getElementById("popup").style.display = "none"
			reputation-=getRandomInt(3,5)
			if (getRandomInt(0,2) == 0){
				displaypopup(4, information)
			}
			else {
				reputation-=getRandomInt(1,2)
				removebuildings(6)
				displayUI()
				displaypopup(5, information)
			}
		}
	},
	
	]
	},
	
		
			
	
	{
	title: "<strong class = 'color-r'>Revolt</strong>",
	size: "30px",
	description: "The peasants are revolting due to them being unhappy with your rule",
	choosetext(){
		if (resources<(difficulty**2.7)/50*(techstats.diplomacy+1)){
		choicesdisabled.push(1)
	}
	},
	choices: [
	{
		text: "Punish",
		effect(){
			information[3].choosetext(Math.ceil(currentpop/10))
			currentpop -=Math.ceil(currentpop/10)
			punishamount+=1
			if (punishamount>=5&&!achievements[24].acquired)
			{
				displayachievement(24)
			}
			displayUI()
			displaypopup(3, information)

		}
	}, {
		text: "Bribe",
		effect(){
			information[2].choosetext(Math.floor((difficulty**2.7)/50*(techstats.diplomacy+1)))
			resources-= Math.floor((difficulty**2.7)/50*(techstats.diplomacy+1))
			reputation-=getRandomInt(3,5)
			displayUI()
			displaypopup(2, information)

		}
		
	}
		]
	},
	{
		title: "<strong class = 'color-g'>Attack</strong>",
		size: "30px",
		description: "The neighbouring tribe looks weak, do we enslave his people or steal their resources",
		choices: [
	{
		text: "Enslave",
		effect(){
			
				information[7].choosetext(difficulty)
				currentpop +=difficulty
				displaypopup(7, information)
			
			
			displayUI()

		}
	}, {
		text: "Steal",
		effect(){
			information[6].choosetext(Math.floor((difficulty**3)/200))
			resources+= Math.floor((difficulty**3)/200)
			displaypopup(6, information)

			
			
			displayUI()

			

		}
	}
	
		]
	},
	{
	title: "<strong class = 'color-dg'>Plague?</strong>",
	size: "30px",
	description: "A faraway traveler stumbles into your village. He claims that a deadly plague wiped out his village and is spreading to yours. Should we lockdown or not",
	choosetext(){},
	choices: [
	{
		text: "Lockdown",
		effect(){
			modifiers.food-=3
			modifiers.resources-=3
			temporaryeffects.push({type: "percent", resources:-0.3,military:0,food:-0.3,duration:10})
			displayUI()
			displaypopup(8, information)

		}
	}, {
		text: "Don't",
		effect(){
			
			if (getRandomInt(0,2) == 0){
				displaypopup(10, information)
				
			}
			else{
				information[9].choosetext(Math.floor(currentpop/2))
				currentpop -= Math.floor(currentpop/2)
				displaypopup(9, information)
				}
			
			displayUI()
			

		}
		
	}
		]
	},
	{
	title: "<strong class = 'color-r'>Drought!</strong>",
	size: "30px",
	description: "Seasonal droughts destroyed your food production. <strong class = 'color-r'>-20% food production</strong>",
	choosetext(){},
	choices: [
	{
		text: "close",
		effect(){
			temporaryeffects.push({type: "percent", resources:0,military:0,food:-0.2,duration:3})
			displayUI()
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"

		}
	}, 
		]
	},
	{
		title: "<strong class = 'color-g'>Folklore?</strong>",
	size: "25px",
	description: "A man wearing a silly green hat and a bow strung on his back arrives to your village. He claims that he is Robin Hood steals from the rich and gives to the poor. He askes us for some resources and in exchange we will recieve a great prize. Do we trust him?",
	choosetext(){},
	choices: [
	{
		text:"not",
		effect(){
		displaypopup(18,information)
		currentpop-=Math.floor(currentpop*0.2)
			displayUI()
		}
	},
	{
		text: "give",
		effect(){
			if (achievements[22].acquired==false){displayachievement(22)}
			reputation+=getRandomInt(3,6)*(1+techstats.charisma)
			if (getRandomInt(0,2)==0){
				
				information[16].choosetext(Math.floor(resources*0.4))
				modifiers.military+=4
				resources-=Math.floor(resources*0.4)
				displaypopup(16,information)
			}
			else{
				information[17].choosetext(Math.floor(resources*0.4))
				displaypopup(17,information)
				resources-=Math.floor(resources*0.4)
			}
			displayUI()

		}
	},
	
		]
	},
	{
		title: "<strong class = 'color-r'>Fire!</strong>",
	size: "25px",
	description: "A wildfire burnt down a portion of your village!",
	choosetext(){},
	choices: [
	{
		text:"close",
		effect(){
		removebuildings(5)
		document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
		}
	},
	
		]
	},
	{
	title: "<strong class = 'color-r'>Bad Omen</strong>",
	size: "25px",
	description: "A wildfire burnt down a large portion of your village, should we rebuild the burnt buildings?",
	choosetext(){
	choices = [
		"Local sightings reported that a rooster layed an egg",
		"Villagers reported the moon turning red",
		"A random street dweller saw a cow with two heads",
		"A local priest reported their tree leaves turning green",
		
	]
	random = choices[getRandomInt(0,choices.length-1)]
	this.description = `<strong class = 'color-r'>${random}.</strong> Our priests notified us and told us it was a bad omen. They ask us to sacrifice our resources to the god above. Should we do it?`
	},
	choices: [
	{
		text:"not",
		effect(){
		luck -=1
		displaypopup(25,information)
		
		}
	},
	{
		text: "sacrifice",
		effect(){
			luck +=1
			reputation-=getRandomInt(2,4)
			information[26].choosetext(Math.floor(resources/3))
			resources -=Math.floor(resources/3)
			displaypopup(26, information)
			displayUI()

		}
	},
	
		]
	},
	
	{

	title: "<strong class = 'color-g'>Breakthrough</strong>",
	
	size: "30px",
	description: `A scientific breakthrough in unlocked advanced technology. <strong class = 'color-g'>+30% food production</strong>`,
	
	choosetext(){
			choice = [
			{
				type: "food",
				des: "farming"
				
			},
			{
				type: "military",
				des: "weaponery"
			},
			{
				type: 'resource',
				des: "mining"
			}
			]
			random = getRandomInt(0,2)
			this.description = `A scientific breakthrough in ${choice[random].des} unlocked advanced technology. <strong class = 'color-g'>+30% ${choice[random].type} production</strong>`
			switch(choice[random].type){
				case 'food':
				modifiers.food+=3
				break
				case 'resource':
				modifiers.resources+=3
				break
				case 'military':
				modifiers.military+=3
				break
				
			}
		},
	choices: [
	{
		text: "close",
		effect(){
			
			displayUI()
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"

		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>Traveler</strong>",
	
	size: "30px",
	description: `A scientific breakthrough in unlocked advanced technology. +30% food production`,
	resource: "",
	choosetext(){
			const choice = [
			{
				type: "food",
				des: "<strong class = 'color-g'>An agriculture expert</strong>",
				chance: 6
				
			},
			{
				type: "military",
				des: "<strong class = 'color-g'>A famous general</strong>",
				chance: 5,
			},
			{
				type: 'resource',
				des: "<strong class = 'color-g'>An experienced engineer</strong>",
				chance: 6
			},
			{
				type: 'resource',
				des: '<strong class = "color-r">A newbie miner</strong>',
				chance: 8
			},
			{
				type: 'military',
				des: '<strong class = "color-r">A deserted soldier</strong>',
				chance: 9
			},
			]
			random = getRandomInt(0,4)
			this.description = `${choice[random].des} decided to visit your village. He claims that he is from a faraway land of all knowledge. Do we trust him?`
			this.resource = choice[random].type
			this.choices[0].resource = this.resource
			this.choices[0].chance = choice[random].chance
			},
		
	choices: [
	{
		text: "Yes",
		resource:"",
		chance:0,
		effect(){
			
			if (getRandomInt(2,this.chance)<=5){
				information[13].choosetext(this.resource)
				displaypopup(13, information)
				switch(this.resource){
				case 'food':
				modifiers.food+=3
				break
				case 'resource':
				modifiers.resources+=3
				break
				case 'military':
				modifiers.military+=3
				break
				
			}
			}
			else{
				switch(this.resource){
				case 'food':
				modifiers.food-=3
				break
				case 'resource':
				modifiers.resources-=3
				break
				case 'military':
				modifiers.military-=3
				break
				
			}
				information[14].choosetext(this.resource)
				displaypopup(14,information)
			}
			displayUI()

		}
	}, 
	{
		text: "No",
		effect(){
			displaypopup(15, information)

		}
	}
		]
		
	},
	
	{
	title: "<strong class = 'color-g'>Refugees</strong>",
	size: "30px",
	description: `A group of people stumble into your village. They claim that they are refugees from a distant war and are seeking refuge. Do we let them in or not?`,
	choosetext(){
		this.time=getRandomInt(3,5)
		this.description = `A group of ${shorten(Math.round(currentpop*0.5))} people stumble into your village. They claim that they are refugees from a distant war and are seeking refuge. Your advisers predict that it'll take ${this.time} years for them to adapt to our village. Do we let them in or not?`
		this.choices[0].choosetext(this.time)
	},
	time:0,
	choices: [
	{
		time:0,
		choosetext(amounttime){
			this.time = amounttime
		},
		text: "Let in",
		effect(){
			information[19].choosetext(Math.round(currentpop*0.5))
			temporaryeffects.push({type: "add", resources:0,unemployed:Math.round(currentpop*0.25)*-1,military:0,food:0,duration:this.time})
			currentpop+=Math.round(currentpop*0.5)
			
			reputation+=getRandomInt(6,10)*(1+techstats.charisma)
			displaypopup(19, information)
			displayUI()


		}
	}, {
		text: "Don't",
		effect(){
			
			displaypopup(20, information)
				
			reputation-=getRandomInt(3,6)
			
			displayUI()
			

		}
		
	}
		]
	},
	{
		title: "<strong class = 'color-g'>Trade Offer</strong>",
	size: "30px",
	description: `A mysterious trader scrolls into our village. He presents an offer: if we give him half of our resources, he'll make weapons for us in return. Do we accept his offer?`,
	choosetext(){
		choice = [
		"better weapons",
		"tougher hoes",
		"stronger pickaxes"
		]
		random = getRandomInt(0,2)
		this.description = `A mysterious trader scrolls into our village. He presents an offer: if we give him half of our resources, he'll make ${choice[random]} for us in return. Do we accept his offer?`
		
		if (resources<difficulty/2){
			choicesdisabled.push(0)
		}
		 
		 
	},
	choices: [
	{
		text: "Accept",
		effect(){
		
		reputation+=getRandomInt(2,4)*(1+techstats.charisma)
		switch(random){
			case 0:
			modifiers.military +=5
			break
			case 1:
			modifiers.food +=5
			break
			case 2:
			modifiers.resources +=5
		}
		information[21].choosetext(random,Math.ceil(resources/3))
		resources-=Math.ceil(resources/3)
		displaypopup(21,information)
		displayUI()
		}
	}, {
		text: "Decline",
		effect(){
			
			displaypopup(22, information)
				
			
			
			displayUI()
			

		}
		
	}
		]
	},
	{
		title: "<strong class = 'color-g'>Trade Route</strong>",
	size: "30px",
	description: "Our scout reports that opportunities for new trade routes have arisen. The Rateddians request. Thersialymoa. Menloms ",
	
	choosetext(){ 
		const upsides = [
		{name: "food", info: "food production", trade(){modifiers.food+=3}},
			{name: "resources",info: "resource production", trade(){modifiers.resources+=3}},
			{name: "military support",info:"military", trade(){modifiers.military+=3}},
			
			
		]
		const downsides = [
			{name: "food", info: "food production", trade(){modifiers.food-=3}},
			{name: "resources",info: "resource production", trade(){modifiers.resources-=3}},
			{name: "military support",info:"military", trade(){modifiers.military-=3}},
			
			
		]
		if (getRandomInt(0,1)==0){
			let placeholder = upsides[1]
			upsides[1] = upsides[0]
			upsides[0]=upsides[2]
			upsides[2]=placeholder
			
		}
		else {
			let placeholder = upsides[1]
			upsides[1] = upsides[2]
			upsides[2]=upsides[0]
			upsides[0]=placeholder
			
		}
		for (i=0;i<3;i++){
			this.choices[i].upside = upsides[i]
			this.choices[i].downside = downsides[i]
		}
		this.description = `Our scout reports that opportunities for new trade routes have arisen.
		 <br>The Rateddians offer ${this.choices[0].upside.name} in exchange for ${this.choices[0].downside.name}.
		 <br>Seymina offers ${this.choices[1].upside.name} in exchange for ${this.choices[1].downside.name}.
		 <br>The Menloms offer ${this.choices[2].upside.name} in exchange for ${this.choices[2].downside.name} `
	},
	choices: [
	{
		upside: 0,
		downside: 0,
		text: "Rateddians",
		effect(){
			
		this.upside.trade()
		this.downside.trade()
		information[27].choosetext(this.upside.info,this.downside.info)
		displaypopup(27, information)
		displayUI()
		}
	},
	{
		text: "Seymina",
		effect(){
		this.upside.trade()
		this.downside.trade()
		information[27].choosetext(this.upside.info,this.downside.info)
		displaypopup(27, information)
		displayUI()
		}
	},
	{
		text: "Menloms",
		effect(){
		this.upside.trade()
		this.downside.trade()
		information[27].choosetext(this.upside.info,this.downside.info)
		displaypopup(27, information)
		displayUI()
		}
	},
	{
		text: "None",
		effect(){
			
			displaypopup(22, information)
				
			
			
			displayUI()
			

		}
		
	}
		]
	},
		{
			title: "<strong class = 'color-r'>BEAST!</strong>",
		size: "25px",
		description: "A distant roar echos across the mountains, followed by thunderous flaps. An ancient creature has awoken, perpare your village and your army<br><strong class = 'color-r'>they won't last long.</strong>",
		choosetext(){},
		choices: [
		{
			text:"fight!",
			effect(){
				m.phase+=1
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
				start()
			
			}
		}]
	},
	{
			title: "<strong class = 'color-r'>Eruption!</strong>",
		size: "25px",
		description: "Deafing sounds shockwave across your village. Piles of ash and lava pour down the hills, annihilating everything in its way, while debris launched into the air squash housing like cockroaches.",
		choosetext(){},
		choices: [
		{
			text:"close",
			effect(){
				
				removebuildings(5,true)
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			
			}
		}]
	},
	{
		title: "<strong class = 'color-r'>Tribute!</strong>",
		size: "25px",
		popamount: 0,
		description: `Our priests interpreted the roars as a demand for a tribute. If we sacrifice ${this.popamount} people, it will leave us alone. What should we do`,
		choosetext(){
			this.popamount = Math.floor(currentpop*Math.random())
			if (currentpop<this.popamount){
				choicesdisabled.push(0)
			}
			this.description = `Our priests interpreted the roars as a demand for a tribute. If we sacrifice ${this.popamount} people, it will leave us alone. What should we do`
		},
		choices: [
		{
			text:"sacrifice",
			effect(){
			information[31].choosetext(this.popamount)
				currentpop-=this.popamount
			displaypopup(31, information)	
			displayUI()
			
			}
		},
		{
			text:"refuse",
			effect(){
			removebuildings(4,false)
			displaypopup(32, information)
			displayUI()
			
			}
		},
		{
			text:"fight",
			effect(){
				if (military>=(getRandomInt(6,14)/10)*difficultymultiplier*((difficulty**3.2)/9)){
				displaypopup(33, information)
				m.bhealth-=Math.floor(military/2)
				}
				else{
					removebuildings(4,false)
					currentpop-=Math.floor(m_personnel*0.5)
					displaypopup(34, information)
				}
			
			displayUI()
			
			}
		},
		]
	},
	{
			title: "<strong class = 'color-r'>Fireball!</strong>",
		size: "25px",
		description: "The beast circles our village with intent to destroy. What should we do?",
		choosetext(){
		if(techstats.archery>0){
			choicesdisabled.push(0)
		}
		},
		choices: [
		{
			text:"shoot it",
			effect(){
				
				displaypopup(36, information)
				m.bhealth-=Math.floor(military/5)
				
				displayUI()
			
			}
		},
		{
			text:"nothing",
			effect(){
				
				removebuildings(5,false)
				displaypopup(35, information)
				
			
			}
		}]
	},
	{
			title: "<strong class = 'color-r'>Charge!</strong>",
		size: "25px",
		description: "The beast charges at our village blasting fire. What should we do?",
		choosetext(){
		},
		choices: [
		{
			text:"Fight",
			effect(){
				
				if (military>=(getRandomInt(6,14)/10)*difficultymultiplier*((difficulty**3.2)/9)){
				displaypopup(37, information)
				m.bhealth-=Math.floor(military/2)
				}
				else{
					removebuildings()
					currentpop-=Math.floor(m_personnel*0.5)
					displaypopup(38, information)
				}
			
			displayUI()
			
			
			}
		}]
	},
	{
	title: "<strong class = 'color-r'>Ultimatum</strong>",
	size: "25px",
	description: "An enemy tribe presents you with an ultimatum, either ",
	choosetext(){
		const choice = [
			`pay them a tribute of ${shorten(Math.floor((difficulty**3)/600))} resources a year<br> for 10 years`, 
			`provide them with ${shorten(Math.floor(currentpop/3))} laborers`,
			`reduce your military by 90% for 10 years`, 
		]
		const random = getRandomInt(0,2)
		this.choices[1].index=random
		this.description = `An enemy tribe sends you an ultimatum, either <strong class = 'color-r'>${choice[random]}</strong> or <strong class = 'color-r'>go to war</strong>`
	},
	choices: [
	{
		text:"fight",
		effect(){
			const enemymilitary = (getRandomInt(8,12)/10)*difficultymultiplier*((difficulty**3.2)/3)
			wars.push({power:enemymilitary,totalpower:enemymilitary,divine:false})
			displaypopup(40,information)
			
		}
	},
	{
		text:"negotiate",
		index:0,
		effect(){
			switch(this.index){
				case 0:
				temporaryeffects.push({type: "add", resources:Math.floor((difficulty**3)/200)*-1,unemployed:0,military:0,food:0,duration:10})
				break
				case 1:
				currentpop-=Math.floor(currentpop/3)
				break
				case 2:
				temporaryeffects.push({type: "percent", resources:0,military:-0.9,food:0,duration:10})
				break
			}
			displaypopup(41,information)
		}
	},
]
},
{
	title: "<strong class = 'color-r'>Battle</strong>",
size: "25px",
description: "Your scouts claims that the enemy is attacking, but with unknown power. What percentage of your army should you commit?",
choosetext(){

	let enemypower = 0
	for(i=0, len = wars.length;i<len;i++){
		if(wars[i].power>0){
		enemypower+=Math.max(wars[i].power*getRandomInt(30,80)/100,Math.min(wars[i].power,wars[i].totalpower/7))
		}
	}
	for (const choice of this.choices){
		choice.power = enemypower
	}
	if(techstats.scouting){
		this.description = `Your scouts claims that the enemy is attacking. What percentage of your army should you commit?<br>Scouting Estimate: ${shorten(Math.floor(enemypower*(getRandomInt(5,15)/10)))}`
	}
	else{
		this.description = "Your scouts claims that the enemy is attacking, but with unknown power. What percentage of your army should you commit?"
	}
},
choices: [
	{
text:"0%",
power:0,
effect(){
	if(getRandomInt(0,4)==0){
		displaypopup(42, information)
	}
	else{
		removebuildings()
		displaypopup(48,information)
	}
}
	},
{
	text:"25%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			
			information[43].choosetext(Math.floor((m_personnel+unemployed)/8),Math.floor(m_personnel/4))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/4)
		}
		else if(military*.25>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power/1.5)
				}
			}
		information[44].choosetext(Math.floor(this.power),Math.floor(m_personnel/4))
		currentpop+=Math.floor(this.power/2.5)
		displaypopup(44, information)

	}
	else{
		
		information[0].choosetext(Math.floor((m_personnel+unemployed)/8),Math.floor(m_personnel/4))
		currentpop-=Math.floor((m_personnel+unemployed)/8)
		
		displaypopup(0,information)
	}
		resources-=Math.floor(m_personnel/4)
		displayUI()
	}
},
{
	text:"50%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			information[43].choosetext(Math.floor((m_personnel+unemployed)/4),Math.floor(m_personnel/2))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/4)
			
		}
		else if(military*.5>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power/1.5)
				}
			}
		information[44].choosetext(Math.floor(this.power),Math.floor(m_personnel/2))
		currentpop+=Math.floor(this.power/2.5)
		displaypopup(44, information)
	}
	else{
		information[0].choosetext(Math.floor((m_personnel+unemployed)/4),Math.floor(m_personnel/2))
		currentpop-=Math.floor((m_personnel+unemployed)/4)
		displaypopup(0,information)
		
	}
	resources-=Math.floor(m_personnel/2)
	displayUI()
	}
},
{
	text:"75%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			information[43].choosetext(Math.floor((m_personnel+unemployed)/4),Math.floor(m_personnel))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/4)
		}
		else if(military*.75>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power/1.5)
				}
			}
		information[44].choosetext(Math.floor(this.power),Math.floor(m_personnel))
		currentpop+=Math.floor(this.power/2.5)
		displaypopup(44, information)
	}
	else{
		information[0].choosetext(Math.floor((m_personnel+unemployed)/3),Math.floor(m_personnel))
		currentpop-=Math.floor((m_personnel+unemployed)/3)
		displaypopup(0,information)
	}
		resources-=Math.floor(m_personnel)
		displayUI()
	}
},
{
	text:"100%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			information[43].choosetext(Math.floor((m_personnel+unemployed)/2),Math.floor(m_personnel*2))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/2)
		}
		else if(military>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power/1.5)
				}
			}
		information[44].choosetext(Math.floor(this.power),Math.floor(m_personnel*2))
		currentpop+=Math.floor(this.power/2.5)
		displaypopup(44, information)
	}
	else{
		information[0].choosetext(Math.floor((m_personnel+unemployed)/2),Math.floor(m_personnel*2))
		currentpop-=Math.floor((m_personnel+unemployed)/2)
		displaypopup(0,information)
	}
	resources-=Math.floor(m_personnel*2)
	displayUI()
	}
},

]
},
	{
		
			title: "<strong class = 'color-r'>Siege!</strong>",
		size: "25px",
		description: "The enemy is sieging one of your cities.",
		choosetext(){
		},
		choices: [
		{
			text:"Sally Out",
			effect(){
				
				const random_war = getRandomInt(0,wars.length-1)
				const randomm = getRandomInt(14,30)/100
				if(military>wars[random_war].power*randomm){
					wars[random_war].power-=Math.floor(wars[random_war].power*randomm)
					information[44].choosetext(Math.floor(wars[random_war].power*randomm*3),Math.floor(m_personnel/2))
					currentpop+=Math.floor(wars[random_war].power*randomm*0.6)
					displaypopup(44, information)
				}
				else{
					const casual = removebuildings(6)
					currentpop-=Math.floor((m_personnel+unemployed)/2)+casual
					information[0].choosetext(Math.floor((m_personnel+unemployed)/2)+casual,Math.floor(m_personnel/2))
					displaypopup(0,information)
				}
				resources-=Math.floor(m_personnel/2)
			
			displayUI()
			
			
			}
		},
		{
			text: "Ignore it",
			effect(){
				siege = true
				displaypopup(45,information)
				displayUI()
			}
		}
		
		]
	},
	
{
	title: "<strong class = 'color-g'>Attack</strong>",
size: "25px",
description: "Your scouts claims that the enemy's defenses are down. What percentage of your army should you commit to the attack?",
choosetext(){
	let enemypower = 0
	for(i=0, len = wars.length;i<len;i++){
		if(wars[i].power>0){
		enemypower+=Math.min(wars[i].power,wars[i].totalpower/5)
		}
	}
	for (const choice of this.choices){
		choice.power = enemypower
	}
	if(techstats.scouting){
		this.description = `Your scouts claims that the enemy's defenses are down. What percentage of your army should you commit to the attack?<br>Scouting Estimate: ${shorten(Math.floor(enemypower*(getRandomInt(6,14)/10)))}`
	}
	else{
		this.description = "Your scouts claims that the enemy's defenses are down. What percentage of your army should you commit to the attack?"
	}
},
choices: [
	{
text:"0%",
power:0,
effect(){
	
	displaypopup(46, information)
}
	},
{
	text:"25%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			
			information[43].choosetext(Math.floor((m_personnel+unemployed)/8),Math.floor(m_personnel/4))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/4)
		}
		else if(military*.25>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power)
				}
			}
			
		information[47].choosetext(Math.floor(this.power*3),Math.floor(m_personnel/4))
		currentpop+=Math.floor(this.power*0.6)
		displaypopup(47, information)

	}
	else{
		information[0].choosetext(Math.floor((m_personnel+unemployed)/8),Math.floor(m_personnel/4))
		currentpop-=Math.floor((m_personnel+unemployed)/8)
		displaypopup(0,information)
		
	}
		resources-=Math.floor(m_personnel/4)
		displayUI()
	}
},
{
	text:"50%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			information[43].choosetext(Math.floor((m_personnel+unemployed)/4),Math.floor(m_personnel/2))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/4)
			
		}
		else if(military*.5>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power)
				}
			}
		information[47].choosetext(Math.floor(this.power*3),Math.floor(m_personnel/2))
		currentpop+=Math.floor(this.power*0.6)
		displaypopup(47, information)
	}
	else{
		information[0].choosetext(Math.floor((m_personnel+unemployed)/4),Math.floor(m_personnel/2))
		currentpop-=Math.floor((m_personnel+unemployed)/4)
		displaypopup(0,information)
	}
	resources-=Math.floor(m_personnel/2)
	displayUI()
	}
},
{
	text:"75%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			information[43].choosetext(Math.floor((m_personnel+unemployed)/4),Math.floor(m_personnel))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/4)
		}
		else if(military*.75>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power)
				}
			}
			information[47].choosetext(Math.floor(this.power*3),Math.floor(m_personnel))
		currentpop+=Math.floor(this.power*0.6)
		displaypopup(47, information)
	}
	else{
		information[0].choosetext(Math.floor((m_personnel+unemployed)/3),Math.floor(m_personnel))
		currentpop-=Math.floor((m_personnel+unemployed)/3)
		displaypopup(0,information)
	}
		resources-=Math.floor(m_personnel)
		displayUI()
	}
},
{
	text:"100%",
	power:0,
	effect(){
		
		if(getRandomInt(0,3)==0){
			information[43].choosetext(Math.floor((m_personnel+unemployed)/2),Math.floor(m_personnel*2))
			displaypopup(43,information)
			currentpop-=Math.floor((m_personnel+unemployed)/2)
		}
		else if(military>this.power){
			for (const war of wars){
				if(war.power>0){
					war.power-=Math.floor(this.power)
				}
			}
		information[47].choosetext(Math.floor(this.power*3),Math.floor(m_personnel*2))
		currentpop+=Math.floor(this.power*0.6)
		displaypopup(47, information)
	}
	else{
		information[0].choosetext(Math.floor((m_personnel+unemployed)/2),Math.floor(m_personnel*2))
		currentpop-=Math.floor((m_personnel+unemployed)/2)
		displaypopup(0,information)
	}
	resources-=Math.floor(m_personnel*2)
	displayUI()
	}
},

]
},
	{
		
			title: "<strong class = 'color-r'>Breach!</strong>",
		size: "25px",
		description: "The enemy breached your defenses and are attacking the city",
		choosetext(){
		},
		choices: [
		{
			text:"Fight",
			effect(){
				
				const random_war = getRandomInt(0,wars.length-1)
				const randomm = getRandomInt(14,30)/100
				if(military>wars[random_war].power*randomm){
					wars[random_war].power-=Math.floor(wars[random_war].power*randomm)
					information[44].choosetext(Math.floor(wars[random_war].power*randomm*3),Math.floor(m_personnel/8))
					currentpop+=Math.floor(wars[random_war].power*randomm*0.6)
					displaypopup(44, information)
				}
				else{
					const casual = removebuildings(6)
					currentpop-=Math.floor((m_personnel+unemployed)/2)+casual
					information[0].choosetext(Math.floor((m_personnel+unemployed)/2)+casual,Math.floor(m_personnel/8))
					displaypopup(0,information)
				}
				resources-=Math.floor(m_personnel/8)
			siege=false
			displayUI()
			
			
			}
		},
		{
			text: "Surrender",
			effect(){
				siege = false
				displaypopup(48,information)
				removebuildings(4)
				displayUI()
			}
		}
		
		]
	},
	{
		title: "<strong class = 'color-g'>Peace Offer</strong>",
	size: "30px",
	description: `A courier trader scrolls into our village. He presents an offer: if we give him half of our resources, he'll make weapons for us in return. Do we accept his offer?`,
	choosetext(){
		let power = 0
		for(const war of wars){
			power+=war.power
		}
		if(power>military){
		this.description = `A courier of peace enters our village with a peace offer. If we pay them a tribute of <strong class = 'color-r'>${shorten(Math.floor(100*power/military))}</strong> resources a year for 10 years, they'll make peace. Do we accept their offer?`
		this.choices[0].resourceamount = Math.floor(100*power/military)*-1
		}
		else{
		this.description = `A courier of peace enters our village with a peace offer. If they pay us a tribute of <strong class = 'color-g'>${shorten(Math.floor(100*military/power))}</strong> resources a year for 10 years, we'll make peace. Do we accept their offer?`	
		this.choices[0].resourceamount=Math.floor(100*military/power)
		}
		
		 
		 
	},
	choices: [
	{
		text: "Accept",
		resourceamount:0,
		effect(){
		temporaryeffects.push({type: "add", resources:this.resourceamount,unemployed:0,military:0,food:0,duration:10})
		displaypopup(49,information)
		wars.length=0
		siege=false
		start()
		displayUI()
		}
	}, {
		text: "Decline",
		effect(){
			
			displaypopup(50, information)
				
			
			
			displayUI()
			

		}
		
	}
		]
	},
	{
		title: "<strong class = 'color-r'>The End</strong>",
		size: "30px",
		description: `Once people discovered that you've obtained all blueprint scraps, they allied against you to prevent the construction of The Mega Temple`,
		choosetext(){},
		choices: [
		{
			text: "Fight!",
			effect(){
				const enemymilitary = (getRandomInt(8,12)/10)*difficultymultiplier*((difficulty**3.2)/3)
				wars.push({power:enemymilitary,totalpower:enemymilitary,divine:true})
				start()
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>It's not over</strong>",
		size: "30px",
		description: `Several more nations allied with the enemy and declared war on you.`,
		choosetext(){},
		choices: [
		{
			text: "Fight!",
			effect(){
				const enemymilitary = (getRandomInt(8,12)/10)*difficultymultiplier*((difficulty**3.2)/3)*8
				wars.push({power:enemymilitary,totalpower:enemymilitary,divine:false})
				
				wars.splice(0,1)
				start()
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>You Win</strong>",
	size: "30px",
	description: "After years of trials and tribulation, you finally constructed the ultimate megastructure, the Mega Temple. As god decends from the heavens, he blesses you and your followers with infinite power. As you ascend to the heavens, leaving the mortal realm, you quickly glance back at your thriving city, which would leave its mark on history for ever.",
	
	choices: [
	{
		text: "Keep Playing",
		effect(){
			switch(difficultymultiplier){
				case 1.2:
					displayachievement(achievements.length-3)
					break
				case 1.5:
				displayachievement(achievements.length-2)
					break
				case 1.8:
				displayachievement(achievements.length-1)
					break
			}
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"


		}
	}, {
		text: "Main menu",
		effect(){
			switch(difficultymultiplier){
				case 1.2:
					displayachievement(achievements.length-3)
					break
				case 1.5:
				displayachievement(achievements.length-2)
					break
				case 1.8:
				displayachievement(achievements.length-1)
					break
			}
			menu()
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"

		}
		
	}
		]
	},
	
	{
		title: "<strong class = 'color-r'>Game Over</strong>",
	size: "30px",
	description: `A mysterious trader scrolls into our village. He presents an offer: if we give him resources, he'll make weapons for us in return. Do we accept his offer?`,
	choosetext(reason){
		switch(reason){
			case "pop":
			this.description= "Your village lays deserted as all of the inhabitants have either abandoned it or have died. As you survey the ruins that could have been your kingdom, you realize what this village has become; a ghost town, it's only inhabitants being thieves and wild animals."
			break
			case "res":
			this.description = "Your inhabitants grew restless, hearing about your failures to provide resources for them, and rose up against you and the last of your followers. They stormed your home and left you to die.In your last waking moments, you realize what you lost, what you are; a dying shell of your former self."
			break
			case "food":
			this.description = "As your people starved, they began to question your rule. Because of your faliure to produce food for your citizens,they rose up against you and you were humiliatingly dethroned. you walk out of the village exiled,knowing that you were the reason for your faliure, a hopless, homeless faliure."
			break
		} 
	},
	choices: [
	{
		text: "Main Menu",
		effect(){
			if (save_slot != null){
			clearsave(save_slot)
			}
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			menu()
		}
	}
	
	
	
	
	
	
	

	]}
]

const information = [
	{
	title: "<strong class = 'color-r'>Failure</strong>",
	size: "30px",
	description: "The enemy defeated you",
	choosetext(poplost,reslost){
		this.description=`The enemy defeated you<br>Casualties: <strong class = 'color-r'>${shorten(poplost)}</strong><br>Resources spent: <strong class = 'color-r'>${shorten(reslost)}</strong>`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
		}]
	},
	{
	title: "<strong class = 'color-g'>Success</strong>",
	size: "30px",
	description: "You defeated the raiders and captured their soldiers. <strong class = 'color-g'>+33% population</strong>",
	choosetext(amount,resamount){
		this.description=`You defeated the raiders.<br>Raiders Captured: <strong class = 'color-g'>${amount}</strong><br>Resources spent: <strong class= 'color-r'>${resamount}</strong>`
	},
	choices: [
	{
		text: "close",
		effect(){
			currentpop+=Math.floor(currentpop/3)
			reputation+=getRandomInt(5,10)
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			displayUI()
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>It's better to keep them happy</strong>",
		size:"25px",
	description: "You bribed them with your resources. -50% resources",
	choosetext(amount){
		this.description = `You bribed them with your resources. -${amount} resources`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-r'>Let them have it</strong>",
		size: "25px",
	description: "They didn't deserve better rule anyways. -33% population",
	choosetext(amount){
		this.description=`They didn't deserve better rule anyways. -${amount} population`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-g'>Success</strong>",
	size: "30px",
	description: "The enemy decided to spare you",
	choosetext(){},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-r'>Failure</strong>",
	size: "30px",
	description: "The enemy decided you were not worth sparing",
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-g'>Success</strong>",
	size: "30px",
	description: "You decimated their village and stole their resources. <strong class = 'color-g'>+33% resources</strong>",
	choosetext(amount){
	this.description=`You decimated their village and stole their resources. <strong class = 'color-g'>+${amount} resources</strong>`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"

			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-g'>Success</strong>",
	size: "30px",
	description: "You decimated their village and enslaved their people.<strong class = 'color-g'> +33% population</strong>",
	choosetext(amount){
		this.description=`You decimated their village and enslaved their people. <strong class = 'color-g'>+${amount} population</strong>`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "Safety first",
	size: "30px",
	description: "Safety is the first priority. -33% resource and food production",
	choosetext(){},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-r'>Oh No!</strong>",
	size: "30px",
	description: "The plague arrived and decimated your people. -50% population",
	choosetext(amount){
		this.description=`The plague arrived and decimated your people. -${amount} population`
	},	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-g'>Fake News</strong>",
	size: "30px",
	description: "There was no plague after all",
	choosetext(){},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-g'>Lockdown</strong>",
	size: "30px",
	description: "The lockdown has been lifted",
	choosetext(){},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
	title: "<strong class = 'color-g'>War is not for me</strong>",
	size: "30px",
	description: "You negotiated with the enemy. -50% resources",
	
	choosetext(amount){
		this.description=`You negotiated with the enemy. -${shorten(amount)} resources`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>Knowledge</strong>",
	size: "30px",
	description: "",
	choosetext(resource){
		if (resource != "military"){
		this.description = `The person gave you valuable advice.<strong class = 'color-g'> +33% ${resource} production</strong>`
		}
		else{
			this.description = `The person gave you valuable advice. <strong class = 'color-g'>+33% ${resource}</strong>`
		}

	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-r'>Tricked</strong>",
	size: "30px",
	description: "",
	choosetext(resource){
		if (resource != "military"){
		this.description = `The person mislead you. -33% ${resource} production`
		}
		else{
			this.description = `The person mislead you. -33% ${resource}`
		}

	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>Stranger Danger</strong>",
	size: "30px",
	description: "We decided not to trust him",
	
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>Benevolent Dictator</strong>",
	size: "30px",
	description: "He thanked you and walked off, next thing you know, your archer's accuracy improved greatly. <strong class = 'color-g'>+40% military</strong>, <strong class = 'color-r'>-40% resources</strong>",
	choosetext(amount){
		this.description=`He thanked you and walked off, next thing you know, your archer's accuracy improved greatly. <strong class = 'color-g'>+40% military</strong>, <strong class = 'color-r'>-${amount} resources</strong>`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-r'>Theif</strong>",
	size: "30px",
	description: "He thanked you and ran off, next thing you know, he's selling all of the resources for his own gain. -40% resources",
	choosetext(amount){
		this.description=`He thanked you and ran off, next thing you know, he's selling all of the resources for his own gain. -${amount} resources`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-r'>Murder!</strong>",
	size: "30px",
	description: "He scoffed at you and ran off, next thing you know, he's out to murder countless civilians. -20% population",
	choosetext(amount){
		this.description=`He scoffed at you and ran off, next thing you know, he's out to murder countless civilians. -${amount} population`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>Welcome</strong>",
	size: "30px",
	
	description: "We decided to be nice and let the refugees in. -20% population",
	choosetext(amount){
		this.description = `We decided to be nice and let the refugees in. <strong class = 'color-g'>+${shorten(amount)} population</strong>`
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "No space",
	size: "30px",
	
	description: "We told them that we don't have enough room in our village and that they can't come.",
	
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>Deal!</strong>",
	size: "30px",
	
	description: "We told him deal and gave him our resources. Moments later he came back with powerful weapons. -33% resources, +50% military",
	choosetext: function(which,amount){
		switch(which){
			case 0:
			this.description = "We told him deal and gave him our resources. Moments later he came back with powerful weapons. <strong class = 'color-r'>-${amount} resources</strong>,<strong class = 'color-g'> +50% military</strong>"
			break
			case 1:
			this.description = "We told him deal and gave him our resources. Moments later he came back with shiny new hoes. <strong class = 'color-r'>-${amount} resources</strong>, <strong class = 'color-g'>+50% food production</strong>"
			break
			case 2:
			this.description = "We told him deal and gave him our resources. Moments later he came back with stronger pickaxes. <strong class = 'color-r'>-${amount} resources</strong>, <strong class = 'color-g'>+50% resource production</strong>"
			break
		}
	},
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>No Deal!</strong>",
	size: "30px",
	
	description: "We told him we're not trading today, and he walked away",
	
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-g'>Rebuild</strong>",
	size: "30px",
	
	description: `You rebuilt the housing. -${Math.ceil(resources/2)} resources`,
	choosetext(){
		this.description =	`You rebuilt the housing. -${Math.ceil(resources/2)} resources`
	},
	choices: [
	{
		text: "close",
		effect(){
			resources-=Math.ceil(resources/2)
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
			displayUI()
		}
	},
		]
	},
	{
		title: "Money is the best policy",
	size: "30px",
	
	description: `You decided not to rebuild the housing.`,
	
	choices: [
	{
		text: "close",
		effect(){
			
			document.getElementById("popup_block_buttons").style.display = "none"
			document.getElementById("popup").style.display = "none"
		}
	},
		]
	},
	{
		title: "<strong class = 'color-r'>I pray to no god</strong>",
		size: "30px",
	
		description: `You decided not to sacrifice anything. <strong class = 'color-r'>Hopefully the gods above spares you</strong>`,
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Pray to the RNGesus</strong>",
		size: "30px",
	
		description: `You decided to sacrifice anything 33% of your resources. Hopefully the gods above blesses you. <strong class = 'color-r'>-33% resources</strong>`,
		choosetext(amount){
		this.description=`You decided to sacrifice your resources. Hopefully the gods above blesses you. <strong class = 'color-r'>-${amount} resources</strong>`
	},
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>New Routes</strong>",
		size: "30px",
		description: `You decided to sacrifice anything 33% of your resources. Hopefully the gods above blesses you. -33% resources`,
		choosetext(upside, downside){
			this.description = `You decided to open up a new trade route. Hopefully great riches are bestowed upon you. <strong class = 'color-g'>+30% ${upside}</strong>, <strong class = 'color-r'>-30% ${downside}</strong>`
		},
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Tribal Age</strong>",
		size: "30px",
		description: `The beginning of civilization. Your people are unwaveringly loyal and most tribes haven't noticed you yet.`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Pre-Diplomacy</strong>",
		size: "30px",
		description: `Your expansion has been noticed by other tribes, and your people are now knowledgable of life outside your village. Be careful, because other tribes can now attack you and your people can now rebel`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Post-Diplomacy</strong>",
		size: "30px",
		description: `Tribes are growing stronger and more sophisticated, and they gained the ability to declare war.`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Sacrifice</strong>",
		size: "30px",
		description: `Several brave souls were sent to the beast. May they rest in peace.`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>We would never</strong>",
		size: "30px",
		description: `You refused to sacrifice anyone. <strong class = 'color-r'>Moments later, the beast arrived and laid waste to your village.</strong>`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Victory</strong>",
		size: "30px",
		description: `The beast was droven off by our army`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Annihilatation</strong>",
		size: "30px",
		description: `You sent your army against the beast, but the only one returning was the beast itself. It swooped in and laid waste to your village.`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Fireball!</strong>",
		size: "30px",
		description: `the beast swooped in and blasted your village to smitherines.`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Drove off</strong>",
		size: "30px",
		description: `You blackened the sky with arrows, forcing the beast to retreat as it screams in pain.`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Success!</strong>",
		size: "30px",
		description: `After sending in your army, you hear the beast screech and it flew off.`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Failure</strong>",
		size: "30px",
		description: `After sending in your army, you hear screams as your army gets incinerated`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
			
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Victory!</strong>",
		size: "30px",
		description: `After a successful military campaign, the beast is now dead. Afterwards, the vender of the dragon egg gives you a blueprint scrap as a token of appreciation`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				megatemple+=1
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
				boss_music.pause()
				build_music.play()
				m.phase=0
				displayUI()
				
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Declaration of War</strong>",
		size: "30px",
		description: `You refused their demands, so war was declared`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				start()
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>I accept</strong>",
		size: "30px",
		description: `You adhered to their demands, so war was avoided`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				start()
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Nothing</strong>",
		size: "30px",
		description: `The enemy wasn't present`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Disaster</strong>",
		size: "30px",
		description: `You adhered to their demands, so war was avoided`,
		choosetext(amount){
			choice = [
				"drowned in a flash flood",
				"were killed in an ambush",
				"fell into a trap",
				"died of a tornado"
			]
			this.description = `After sending your army to fight, you hear reports that they <strong class = 'color-r'>${choice[getRandomInt(0,3)]}.<br> Casualties: ${shorten(amount)}</strong>`
		},
		
	
		choices: [
		{
			text: "close",
			effect(){
				start()
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Victory</strong>",
		size: "30px",
		choosetext(enemy, resource){
		this.description= `You defeated the enemy army.<br>Enemy casualties: <strong class = 'color-g'>${shorten(Math.floor(enemy/3))}</strong><br>Enemies captured: <strong class = 'color-g'>${shorten(Math.floor(enemy/5))}</strong><br>Resources spent: <strong class = 'color-r'>${shorten(resource)}</strong>`
		},
		description: `The enemy wasn't present`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
				let isdivine = false
				let warpower=0
				for(const war of wars){
					warpower+=war.power
					if(war.divine==true){
						isdivine=true
					}
				}
				if(warpower<=1){
					if(isdivine){
						displaypopup(25)
					}
					else{
					information[51].choosetext()
					displaypopup(51,information)
				}
			}
				
				
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Starve</strong>",
		size: "30px",
		description: `The enemy decided to starve you out instead of fighting`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Not ready</strong>",
		size: "30px",
		description: `you decided not to attack`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Victory</strong>",
		size: "30px",
		choosetext(enemy, resources){
		this.description= `You overcame their defenses and devestated their village<br>Enemy casualties: <strong class = 'color-g'>${shorten(Math.floor(enemy/3))}</strong><br>Enemies captured: <strong class = 'color-g'>${shorten(Math.floor(enemy/5))}</strong><br>Resources spent: <strong class = 'color-r'>${shorten(resources)}</strong>`
		},
		description: `The enemy wasn't present`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
				let isdivine = false
				let warpower=0
				for(const war of wars){
					warpower+=war.power
					if(war.divine==true){
						isdivine=true
					}
				}
				if(warpower<=1){
					if(isdivine){
						displaypopup(25)
					}
					else{
					information[51].choosetext()
					displaypopup(51,information)
				}
			}
				
				
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Show mercy</strong>",
		size: "30px",
		description: `you surrendered, and they destroyed your village`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				reputation-=getRandomInt(2,3)
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Accepted</strong>",
		size: "30px",
		description: `you accepted their peace offer`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-r'>Declined</strong>",
		size: "30px",
		description: `you declined their peace offer`,
		
		
	
		choices: [
		{
			text: "close",
			effect(){
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	{
		title: "<strong class = 'color-g'>Victory</strong>",
		size: "30px",
		description: `You defeated their entire military and they surrendered.`,
		choosetext(){
			const amountr = Math.floor((difficulty**3)/10+(resources<0 ? Math.abs(resources)/2:0))
			this.description = `You defeated their entire military and they surrendered.<br><strong class = 'color-g'>+${amountr} resources</strong>`
		},
		
	
		choices: [
		{
			
			text: "close",
			effect(){
				reputation+=getRandomInt(20,22)
				resources+=Math.floor((difficulty**3)/10+(resources<0 ? Math.abs(resources)/2:0))
				wars.length=0
				siege=false
				start()
				displayUI()
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			}
		},
			]
	},
	
]


function displaypopup(index, list = popups, dt = 50, dl = 50, disable=true){
ispainting = false
	if (disable) {
	document.getElementById("popup_block_buttons").style.display = "block"
	document.getElementById("popup_block_buttons").style.animation = "none"
	}
	const ele = document.getElementsByClassName("popup_choice")
			while(ele[0]){
				ele[0].parentNode.removeChild(ele[0]);
			}
		
		
		const title = document.getElementById("title")
		const des = document.getElementById("description")
		const grid = document.getElementById("popup")
	
	grid.style.display = "grid"

	grid.style.gridTemplateColumns="100 100 100 100"
	grid.style.position = "absolute"
	grid.style.left = `${dl}%`
	grid.style.top = `${dt}%`

	title.innerHTML = list[index].title
	
	des.innerHTML = list[index].description
	title.style.fontSize = list[index].size
	title.style.gridColumn="1 / span "+(list[index].choices.length).toString()
	des.style.gridColumn="1 / span "+(list[index].choices.length).toString()

	for (i=0;i<list[index].choices.length;i++){
	
		
	const button = document.createElement("button")
	
	
	button.id = "choice "+i
	button.className = "popup_choice"
	button.style.gridRow="4"
	button.style.gridColumn=(i+1).toString()
	
	let text = document.createTextNode(list[index].choices[i].text)
	button.appendChild(text)
	button.disabled = false
	
	button.addEventListener("click", function(){
		choicesdisabled.length=0;
		list[index].choices[button.id.substr(7)].effect();
		
	})
	grid.appendChild(button)
	if (choicesdisabled.includes(i)){
		button.disabled = true
	}
	}
	
}
