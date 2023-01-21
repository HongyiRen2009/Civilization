
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
			savescreen()
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
	title: "<strong class = 'color-r'>Enemy Attack</strong>",
	size: "30px",
	description: "A neighbouring tribe is attacking you",
	choosetext(){
		if (resources<difficulty/2){
			choicesdisabled.push(1)
	}
	},
	choices: [
	{
		text: "fight",
		effect(){
			
			
			document.getElementById("popup").style.display = "none"
			attack(((difficulty+getRandomInt(-10,5))*3-(getRandomInt(m.spy,3) ? 1:0))*difficultymultiplier)
		},
	},
	{
		text: "negotiate",
		effect(){
			
			
			document.getElementById("popup").style.display = "none"
			resources-=Math.floor(resources/2)
			displaypopup(12, information)

			displayUI()
		}
	},
	{
		text: "plead",
		effect(){
			
			
			document.getElementById("popup").style.display = "none"
			if (getRandomInt(0,2) == 0){
				displaypopup(4, information)
			}
			else {
				reputation-=getRandomInt(1,2)
				removebuildings()
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
		if (resources<difficulty/3){
		choicesdisabled.push(1)
	}
	},
	choices: [
	{
		text: "Punish",
		effect(){
			
			currentpop -=Math.floor(currentpop/3)
			punishamount+=1
			reputation-=getRandomInt(3,6)
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
			
			resources-= Math.floor(resources/3)
			
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
			
			if (difficulty-(getRandomInt(1,5)*5) < military){
				currentpop +=Math.floor(currentpop/3)
				displaypopup(7, information)
			}
			else {
				currentpop-= Math.ceil(currentpop/3)
				displaypopup(0, information)
			}
			displayUI()

		}
	}, {
		text: "Steal",
		effect(){
			if (difficulty-getRandomInt(1,5)*5 < military){

			resources+= Math.ceil(resources/3)
			displaypopup(6, information)

			}
			else{
				currentpop-= Math.floor(currentpop/3)
				displaypopup(0, information)
			}
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
			modifiers.food-=0.3
			modifiers.resources-=0.3
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
			reputation+=getRandomInt(3,6)
			if (getRandomInt(0,2)==0){
				displaypopup(16,information)
				modifiers.military+=0.4
				resources-=Math.floor(resources*0.4)
			}
			else{
				displaypopup(17,information)
				resources-=Math.floor(resources*0.4)
			}
			displayUI()

		}
	},
	
		]
	},
	{
		title: "<strong class = 'color-r'>Fire</strong>",
	size: "25px",
	description: "A wildfire burnt down a large portion of your village, should we rebuild the burnt buildings?",
	choosetext(){},
	choices: [
	{
		text:"not",
		effect(){
		displaypopup(24,information)
		removebuildings()
		
		}
	},
	{
		text: "rebuild",
		effect(){
		
			information[23].choosetext()
			displaypopup(23, information)
			

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
	this.description = `${random}. Our priests notified us and told us it was a bad omen. They ask us to sacrifice our resources to the god above. Should we do it?`
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
	description: `A scientific breakthrough in unlocked advanced technology. +30% food production`,
	
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
			this.description = `A scientific breakthrough in ${choice[random].des} unlocked advanced technology. +30% ${choice[random].type} production`
			switch(choice[random].type){
				case 'food':
				modifiers.military+=0.3
				break
				case 'resource':
				modifiers.resources+=0.3
				break
				case 'military':
				modifiers.military+=0.3
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
			choice = [
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
				
			},
		
	choices: [
	{
		text: "Yes",
		effect(){
			
			if (getRandomInt(3,choice[random].chance)<=5){
				information[13].choosetext(choice[random].type)
				displaypopup(13, information)
				switch(choice[random].type){
				case 'food':
				modifiers.food+=0.3
				break
				case 'resource':
				modifiers.resources+=0.3
				break
				case 'military':
				modifiers.military+=0.3
				break
				
			}
			}
			else{
				switch(choice[random].type){
				case 'food':
				modifiers.food-=0.3
				break
				case 'resource':
				modifiers.resources-=0.3
				break
				case 'military':
				modifiers.military-=0.3
				break
				
			}
				information[14].choosetext(choice[random].type)
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
	title: "Refugees",
	size: "30px",
	description: `A group of people stumble into your village. They claim that they are refugees from a distant war and are seeking refuge. Do we let them in or not?`,
	choosetext(){
		this.description = `A group of ${Math.round(currentpop*1.5)} people stumble into your village. They claim that they are refugees from a distant war and are seeking refuge. Do we let them in or not?`
	},
	choices: [
	{
		text: "Let in",
		effect(){
			information[19].choosetext(Math.round(currentpop*1.5))
			currentpop+=Math.round(currentpop*1.5)
			reputation+=getRandomInt(6,10)
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
		resources-=Math.ceil(resources/3)
		reputation+=getRandomInt(2,4)
		switch(random){
			case 0:
			modifiers.military +=0.5
			break
			case 1:
			modifiers.food +=0.5
			break
			case 2:
			modifiers.resources +=0.5
		}
		information[21].choosetext(random)
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
		{name: "food", info: "food production", trade(){modifiers.food+=0.3}},
			{name: "resources",info: "resource production", trade(){modifiers.resources+=0.3}},
			{name: "military support",info:"military", trade(){modifiers.military+=0.3}},
			
			
		]
		const downsides = [
			{name: "food", info: "food production", trade(){modifiers.food-=0.3}},
			{name: "resources",info: "resource production", trade(){modifiers.resources-=0.3}},
			{name: "military support",info:"military", trade(){modifiers.military-=0.3}},
			
			
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
		title: "<strong class = 'color-g'>Information</strong>",
		size: "25px",
		description: "A ragged treasure hunter stumbles into our village. He tells us that exploring in the direction of the rising sun will result in great riches",
		choosetext(){},
		choices: [
		{
			text:"close",
			effect(){
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			
			}
		}]
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
				m.phase+=1
				removebuildings(true)
				document.getElementById("popup_block_buttons").style.display = "none"
				document.getElementById("popup").style.display = "none"
			
			}
		}]
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
				case 1:
					displayachievement(achievements.length-3)
					break
				case 1.5:
				displayachievement(achievements.length-2)
					break
				case 2:
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
				case 1:
					displayachievement(achievements.length-3)
					break
				case 1.5:
				displayachievement(achievements.length-2)
					break
				case 2:
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
	choosetext(){},
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
	description: "You defeated the enemy and enslaved their people. +50% population",
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
		title: "<strong class = 'color-g'>It's better to keep them happy</strong>",
		size:"25px",
	description: "You bribed them with your resources. -50% resources",
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
		title: "<strong class = 'color-r'>Let them have it</strong>",
		size: "25px",
	description: "They didn't deserve better rule anyways. -33% population",
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
	description: "You decimated their village and stole their resources. +33% resources",
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
	title: "<strong class = 'color-g'>Success</strong>",
	size: "30px",
	description: "You decimated their village and enslaved their people. +33% population",
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
	title: "Safty first",
	size: "30px",
	description: "Safty is the first priority. -33% resource and food production",
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
		title: "<strong class = 'color-g'>Knowledge</strong>",
	size: "30px",
	description: "",
	choosetext(resource){
		console.log(resource)
		if (resource != "military"){
		this.description = `The person gave you valuable advice. +33% ${resource} production`
		}
		else{
			this.description = `The person gave you valuable advice. +33% ${resource}`
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
		console.log(resource)
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
	description: "He thanked you and walked off, next thing you know, your archer's accuracy improved greatly. +40% military, -40% resources",
	
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
		this.description = `We decided to be nice and let the refugees in. +${amount} population`
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
	choosetext: function(which){
		switch(which){
			case 0:
			this.description = "We told him deal and gave him our resources. Moments later he came back with powerful weapons. -33% resources, +50% military"
			break
			case 1:
			this.description = "We told him deal and gave him our resources. Moments later he came back with shiny new hoes. -33% resources, +50% food production"
			break
			case 2:
			this.description = "We told him deal and gave him our resources. Moments later he came back with stronger pickaxes. -33% resources, +50% resource production"
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
	
		description: `You decided not to sacrifice anything. Hopefully the gods above spares you`,
	
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
	
		description: `You decided to sacrifice anything 33% of your resources. Hopefully the gods above blesses you. -33% resources`,
	
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
			this.description = `You decided to open up a new trade route. Hopefully great riches are bestowed upon you. +30% ${upside}, -30% ${downside}`
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
]


function displaypopup(index, list = popups){
ispainting = false
	document.getElementById("popup_block_buttons").style.display = "block"
	const ele = document.getElementsByClassName("popup_choice")
			while(ele[0]){
				ele[0].parentNode.removeChild(ele[0]);
			}
		
		
		const title = document.getElementById("title")
		const des = document.getElementById("description")
	
	
	
	for (i=0;i<list[index].choices.length;i++){
	
		const grid = document.getElementById("popup")
	const button = document.createElement("button")
	title.innerHTML = list[index].title
	
	des.innerHTML = list[index].description
	title.style.fontSize = list[index].size
	grid.style.display = "grid"
	
	grid.style.gridTemplateColumns=((300/list[index].choices.length).toString() + " ").repeat(list[index].choices.length)
	grid.style.gridTemplateColumns="100 100 100 100"
	button.id = "choice "+i
	button.className = "popup_choice"
	button.style.gridRow="4"
	button.style.gridColumn=(i+1).toString()
	title.style.gridColumn="1 / span "+(list[index].choices.length).toString()
	des.style.gridColumn="1 / span "+(list[index].choices.length).toString()
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
