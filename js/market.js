const m = {
	marketselections: [
	{
		price:10,
		pricemod: 1,
		title: "Mercenaries",
		description: "Hire mercenaries to fight for you. Gain ",
		image: "<img src = 'images/marketSword.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "military",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			this.amountincrease = Math.floor((difficulty*2)*2)+5
			this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]
			this.description = `Hire mercenaries to fight for you. <br>+${this.amountincrease} military for 10 turns.`
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			const increase = this.amountincrease
			temporaryeffects.push({type: "add", resources:0,population:0,military:increase,food:0,duration:10})
		}
	},
	{
		price:5,
		pricemod: 1.5,
		title: "Supply wagons",
		description: "Hire mercenaries to fight for you.  ",
		image: "<img src = 'images/marketBread.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "food",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			this.amountincrease = Math.floor((difficulty)*2*(1+reputation/10))+3
			this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]
			this.description = `Request supply wagon deliveries. <br>+${this.amountincrease} food for 15 turns`
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			const increase = this.amountincrease
			temporaryeffects.push({type: "add", resources:0,population:0,military:0,food:increase,duration:10})
		}
	},
	{
		price:5,
		pricemod: 1,
		title: "Slaves",
		description: "Hire mercenaries to fight for you.  ",
		image: "<img src = 'images/marketPickaxe.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "population",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			this.amountincrease = Math.floor((difficulty)*2*(1+reputation/10))+3
			this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]
			this.description = `Buy slaves from neighboring tribes. <br>+${this.amountincrease} population`
		},
		purchaseeffect(){
			debugger
			resources-=Math.floor(this.price*this.pricemod)
			currentpop+= this.amountincrease
		}
	},
	{
		price:5,
		pricemod: 2,
		title: "Export Slaves",
		description: "Hire mercenaries to fight for you.  ",
		image: "<img src = 'images/marketChain.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "resources",
		payment: "population",
		allowed: true,
		choosetext(){
			this.allowed = true
			
			this.amountincrease= 3+5*Math.floor(difficulty/10)
			this.price = getValue(this)[1]
			this.amountincrease = getValue(this)[0]
			if (this.amountincrease>currentpop){
				this.allowed = false
			}
			this.description = `Sell slaves to neighboring tribes. <br>+${this.price*this.pricemod} resources`
		},
		purchaseeffect(){
			resources+=Math.floor(this.price*this.pricemod)
			currentpop-= this.amountincrease
			
		}
	},
	{
		price:10,
		pricemod: 2,
		title: "Arms agreement",
		description: "Hire mercenaries to fight for you. Gain ",
		image: "<img src = 'images/marketSword.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "resources",
		payment: "military",
		allowed: true,
		choosetext(){
			this.allowed = true
			
			this.amountincrease=Math.floor((difficulty*2)*2)+5
			this.price = getValue(this)[1]
			this.amountincrease = getValue(this)[0]
			if (this.amountincrease>military){
				this.allowed = false
			}
			
			this.description = `Agree to support their tribes militarily. <br>+${this.price*this.pricemod} resources but lose ${this.amountincrease} military for 10 turns.`
		},
		purchaseeffect(){
			resources+=Math.floor(this.price*this.pricemod)
			const increase = this.amountincrease*-1
			temporaryeffects.push({type: "add", resources:0,population:0,military:increase,food:0,duration:10})
			
		}
	},
	{
	price:25,
		pricemod: 1,
		title: "Blueprints",
		description: "Get the instructions on how to construct a Medium Mine",
		image: "<img src = 'images/marketScroll.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "special",
		payment: "resources",
		allowed: true,
		choosetext(){
						this.price = Math.max(15,25-(reputation*3))
						this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]

			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			p.pieceROM[0][13].unlocked = true
			unlocked[13]=true
		}
	},
	{
		price:25,
		pricemod: 1,
		title: "Blueprints",
		description: "Get the instructions on how to construct a Medium Farm",
		image: "<img src = 'images/marketScroll.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "special",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = Math.max(15,25-(reputation*3))
						this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			p.pieceROM[0][7].unlocked = true
			unlocked[7]=true
		}
	
	},
	
	{
		price:50,
		pricemod: 1,
		title: "Blueprints",
		description: "Get the instructions on how to construct an Insula",
		image: "<img src = 'images/marketScroll.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "special",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = Math.max(25,50-(reputation*3))
						this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			p.pieceROM[0][3].unlocked = true
			unlocked[3]=true
		}
	},
	{
		price:100,
		pricemod: 1,
		title: "Blueprints",
		description: "Get the instructions on how to construct a Large Farm",
		image: "<img src = 'images/marketScroll.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "special",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = Math.max(100,100-(reputation*5))
						this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			p.pieceROM[0][8].unlocked = true
			unlocked[8]=true
		}
	},
	{
		price:50,
		pricemod: 1,
		title: "Blueprints",
		description: "Get the instructions on how to construct a Large Mine",
		image: "<img src = 'images/marketScroll.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "special",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = Math.max(25,50-(reputation*3))
						this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			p.pieceROM[0][14].unlocked = true
			unlocked[14]=true
		}
	},
	{
		price:130,
		pricemod: 1,
		title: "Blueprints",
		description: "Get the instructions on how to construct a Temple",
		image: "<img src = 'images/marketScroll.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "special",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = Math.max(65,130-(reputation*5))
						this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			p.pieceROM[0][9].unlocked = true
			unlocked[9]=true
		}
	},
	
	{
		price:2000,
		pricemod: 1,
		title: "Blueprints",
		description: "Get the instructions on how to construct the Mega Temple",
		image: "<img src = 'images/marketScroll.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		recieve: "special",
		payment: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = Math.max(1700,2000-(reputation*5))
						this.price = getValue(this)[0]
			this.amountincrease = getValue(this)[1]

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			p.pieceROM[1][0].unlocked = true
			unlocked[15]=true
		}
	},
		{
			price:5,
			pricemod: 0.75,
			title: "Hijack",
			description: "Hire mercenaries to fight for you.  ",
			image: "<img src = 'images/marketBread.png' width='50' height='50'></img>",
			amountincrease: 0,
			stock:1,
			recieve: "food",
			payment: "resources",
			allowed: true,
			choosetext(){
				this.allowed = true
				if (this.price*this.pricemod>resources){
					this.allowed = false
				}
				this.amountincrease = Math.floor((difficulty)*2*(1+reputation/10))+3
				this.price = getValue(this)[0]
				this.amountincrease = getValue(this)[1]
				this.description = `HIre criminals to hijack supply wagons. <br>+${this.amountincrease} food for 15 turns`
			},
			purchaseeffect(){
				resources-=Math.floor(this.price*this.pricemod)
				const increase = this.amountincrease
				temporaryeffects.push({type: "add", resources:0,population:0,military:0,food:increase,duration:10})
			}
		},
		{
			price:10,
			pricemod: 0.5,
			title: "Crime group",
			description: "Hire mercenaries to fight for you. Gain ",
			image: "<img src = 'images/marketSword.png' width='50' height='50'></img>",
			amountincrease: 0,
			stock:1,
			recieve: "military",
			payment: "resources",
			allowed: true,
			choosetext(){
				this.allowed = true
				if (this.price*this.pricemod>resources){
					this.allowed = false
				}
				this.amountincrease = Math.floor((difficulty*2)*2)+5
				this.price = getValue(this)[0]
				this.amountincrease = getValue(this)[1]
				this.description = `Hire and arm criminal groups to fight for you. <br>+${this.amountincrease} military for 10 turns.`
			},
			purchaseeffect(){
				resources-=Math.floor(this.price*this.pricemod)
				const increase = this.amountincrease
				temporaryeffects.push({type: "add", resources:0,population:0,military:increase,food:0,duration:10})
			}
		},
		{
			price:5,
			pricemod: 0.5,
			title: "Kidnapping",
			description: "Hire mercenaries to fight for you.  ",
			image: "<img src = 'images/marketChain.png' width='50' height='50'></img>",
			amountincrease: 0,
			stock:1,
			recieve: "population",
			payment: "resources",
			allowed: true,
			choosetext(){
				this.allowed = true
				if (this.price*this.pricemod>resources){
					this.allowed = false
				}
				this.amountincrease = Math.floor((difficulty)*2*(1+reputation/10))+3
				this.price = getValue(this)[0]
				this.amountincrease = getValue(this)[1]
				this.description = `Buy kidnapped people from a crime group. <br>+${this.amountincrease} population`
			},
			purchaseeffect(){
				debugger
				resources-=Math.floor(this.price*this.pricemod)
				currentpop+= this.amountincrease
			}
		},
		{
			price:5,
			pricemod: 1.5,
			title: "Propoganda",
			description: "Hire a sham philosopher to spread fake news. <br> Reduced chance for rebellions",
			image:"<img src = 'images/marketNews.png' width='50' height='75'></img>",
			amountincrease: 0,
			stock:1,
			recieve: "special",
			payment: "resources",
			allowed: true,
			choosetext(){
				this.allowed = true
				if (this.price*this.pricemod>resources){
					this.allowed = false
				}
				this.amountincrease = 4*Math.floor(difficulty/10)
				this.price = getValue(this)[0]
				this.amountincrease = getValue(this)[1]
				
			},
			purchaseeffect(){
				resources-=Math.floor(this.price*this.pricemod)
				m.rebel +=1
				reputation -= getRandomInt(3,6)
			}
		},
		{
			price:10,
			pricemod: 1,
			title: "Dark Magic",
			description: "Hire a sorceress to preform dark rituals.<br> Increases luck",
			image: "<img src = 'images/marketCloak.png' width='40' height='70'></img>",
			amountincrease: 0,
			stock:1,
			recieve: "special",
			payment: "resources",
			allowed: true,
			choosetext(){
				this.allowed = true
				if (this.price*this.pricemod>resources){
					this.allowed = false
				}
				this.amountincrease = 4*Math.floor(difficulty/10)
				this.price = getValue(this)[0]
				this.amountincrease = getValue(this)[1]
				
			},
			purchaseeffect(){
				resources-=Math.floor(this.price*this.pricemod)
				luck +=2
			}
		},
		{
			price:5,
			pricemod: 1,
			title: "Infiltrate",
			description: "Hire a spy to infiltrate your enemy's kingdom.<br> Increased military against that kingdom",
			image: "<img src = 'images/marketCloak.png' width='40' height='70'></img>",
			amountincrease: 0,
			stock:1,
			recieve: "military",
			payment: "resources",
			allowed: true,
			choosetext(){
				this.allowed = true
				if (this.price*this.pricemod>resources){
					this.allowed = false
				}
				this.amountincrease = 4*Math.floor(difficulty/10)
				this.price = getValue(this)[0]
				this.amountincrease = getValue(this)[1]
				
			},
			purchaseeffect(){
				resources-=Math.floor(this.price*this.pricemod)
				m.spy +=1
				reputation -= getRandomInt(3,6)
			}
		},
		{
			price:10,
			pricemod: 1.8,
			title: "Assassination",
			description: "Hire an assassin to kill your enemy king.<br>Reduce the chance of being attacked",
			image: "<img src = 'images/marketSword.png' width='50' height='50'></img>",
			amountincrease: 0,
			stock:1,
			recieve: "special",
			payment: "resources",
			allowed: true,
			choosetext(){
				this.allowed = true
				if (this.price*this.pricemod>resources){
					this.allowed = false
				}
				this.amountincrease = 4*Math.floor(difficulty/10)
				this.price = getValue(this)[0]
				this.amountincrease = getValue(this)[1]
				
			},
			purchaseeffect(){
				resources-=Math.floor(this.price*this.pricemod)
				m.assissin +=2
			}
		},
	],
	assissin: 0,
	spy: 0,
	rebel: 0
}
function marketscreen(){
	build_music.pause()
	market_music.play()
	document.body.style.overflowY = "scroll"
	document.getElementById("status").hidden = true
		document.getElementById("mresource").innerHTML = 'Resources: ' + resources
	document.getElementById("mreputation").innerHTML = "Reputation: " + reputation
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("market-flex").style.display = 'flex'
	document.getElementById("back_button").hidden = false
	document.getElementById("back_button").onclick = function(){start()}
	document.getElementById("stats").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	const ele = document.getElementsByClassName("item")
	if (istutorial&&tutorialindex==4){
		continuetutorial(tutorial.length-1)
		tutorialindex+=1
	}
	for (let j=ele.length-1;j>=0;j--){
		ele[j].remove();
	}
	
	const marketitemsindex = []
	console.log(marketitems)
	for (i=0,len=marketitems.length;i<len;i++){
		if (marketitems == "failed"){
			marketitemsindex.push("failed")
		}
		else{
		marketitemsindex.push(m.marketselections[marketitems[i]])
	}
	}
	console.log(marketitemsindex)
	i=0
	
	for (const el of marketitemsindex){
		console.log(el)
		
		const flex = document.createElement("div")
		flex.className = "item"
		if (el == "failed"){
			flex.innerHTML = "<h1 class = 'color-r'>Failed TRADE</h1>";
		}
		else if (el.stock>0){
		
		el.choosetext()
		const title = document.createElement("h1")
		title.innerHTML = el.title
		const des = document.createElement("p")
		const im = document.createElement("h1")
		const instock = document.createElement("p")
		instock.innerHTML = "in stock: "+el.stock
		im.innerHTML = el.image
		des.innerHTML = el.description
		const buy = document.createElement("button")
		buy.innerHTML = "Trade"
		buy.className = "save_button"
		buy.style.gridRow = "5"
		if (i<4){
			buy.id = "m"+i
		}
		else{
			buy.id = "bm"+i
		}
		if (!el.allowed){
			if (el.payment=="resources"){
			buy.innerHTML = `<strong class = 'color-r'>${Math.floor(el.price*el.pricemod)} ${el.payment}</strong>`
			}
			else{
				buy.innerHTML = `<strong class = 'color-r'>${Math.floor(el.amountincrease)} ${el.payment}</strong>`
			}
			buy.disabled = true
		}
		else{
			if (el.payment=="resources"){
			buy.innerHTML = `<strong class = 'color-g'>${Math.floor(el.price*el.pricemod)} ${el.payment}</strong>`
			}
			else{
				buy.innerHTML = `<strong class = 'color-g'>${Math.floor(el.amountincrease)} ${el.payment}</strong>`
			}
		}
		buy.onclick = function(){
			kaching.play()
			
			const status = document.getElementById("status")
			const index = i
			status.style.animation = "none"
			if (getRandomInt(0,100-(buy.id.includes("b") ? 30:0)+reputation)>5&&el.title!="blueprints"){
			status.style.color = "green"
			status.innerHTML = "<h1>TRADE SUCCESSFUL</h1>"
			el.purchaseeffect();
			el.stock-=1;
			
			if (buy.id.includes("b")){
			reputation-=getRandomInt(3,8)
			}
			else
			{
				reputation+=getRandomInt(0,3)
			}
			
			for (let j =0,len=marketitemsindex.length;j<len;j++){
				if (!marketitems[i] == "failed"&&marketitemsindex[i].stock>0){
				marketitemsindex[j].choosetext()
				if (!marketitemsindex[j].allowed&&marketitemsindex[j].stock>0){
					document.getElementById(j<4 ? "m"+j:"bm"+j).disabled = true
					document.getElementById(j<4 ? "m"+j:"bm"+j).innerHTML = `<strong class = 'color-r'>${Math.floor(marketitemsindex[j].price*marketitemsindex[j].pricemod)} ${marketitemsindex[j].payment}</strong>`
				}
				else{
					document.getElementById(j<4 ? "m"+j:"bm"+j).disabled = false
					document.getElementById(j<4 ? "m"+j:"bm"+j).innerHTML = `<strong class = 'color-g'>${Math.floor(marketitemsindex[j].price*marketitemsindex[j].pricemod)} ${marketitemsindex[j].payment}</strong>`

				}
				}
			}
			document.getElementById("mresource").innerHTML = "Resources: " + resources
			document.getElementById("mreputation").innerHTML = "Reputation: " + reputation
			instock.innerHTML = "in stock: "+el.stock
			el.choosetext()
			if (el.stock<=0){
			flex.innerHTML = "<h1 class = 'color-g'>SOLD OUT</h1>";
			}
			else if (!el.allowed){
				buy.innerHTML = `<strong class = 'color-r'>${Math.floor(el.price*el.pricemod)} ${el.payment}</strong>`
			buy.disabled = true
			}
			
			}
			else{
				status.style.color = "red"
				status.innerHTML = "<h1>TRADE FAILED</h1>"
				flex.innerHTML = "<h1 class = 'color-r'>Failed TRADE</h1>";
				marketitems[index]="failed"
			}
			status.style.animation = "done 2s linear 0s 1 normal forwards"
			status.hidden = false
		}
		flex.appendChild(des)
		flex.appendChild(title)
		flex.appendChild(im)
		flex.appendChild(instock)
		flex.appendChild(buy)
		
		}
		else{
			flex.innerHTML = "<h1 class = 'color-g'>SOLD OUT</h1>";
		}
		if(i<4){
				document.getElementById("market").appendChild(flex)
		}
		else{
			document.getElementById("black-market").appendChild(flex)
		}
		i++
	}
}
function info(){
	document.body.style.overflowY = "scroll"
ispainting = false
	const ele = document.getElementsByClassName("infotext")
	for (let j=ele.length-1;j>=0;j--){
		ele[j].remove();
	}
	const ele2 = document.getElementsByClassName("info-grid")
	for (let j=ele2.length-1;j>=0;j--){
		ele2[j].remove();
	}
	document.getElementById("info-flex").style.display = 'flex'
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("back_button").hidden = false
	document.getElementById("back_button").onclick = function(){start()}
	document.getElementById("stats").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	
	for (let k = 0; k < p.pieceROM.length; k++) {
		for (const building of p.pieceROM[k]){
			const grid = document.createElement("div")
			grid.className = "info-grid"
			const title = document.createElement("h1")
			title.className = "infotext"
			title.innerHTML = building.name
			title.style.textAlign = 'center'
			grid.appendChild(title)
			const des = document.createElement("p")
			if (building.unlocked){
			des.innerHTML = building.description
			}
			else{
				des.innerHTML = "???"
			}
			des.style.textAlign = 'center'
			des.className = 'infotext'
			grid.appendChild(des)
			document.getElementById("info-flex").appendChild(grid)
		}
	}
}
function achievementscreen(ismenu){
ispainting = false
	const ele = document.getElementsByClassName("achievement-container")
	for (let j=ele.length-1;j>=0;j--){
		ele[j].remove();
	}
	
	if(ismenu){
	document.getElementById("back_button").onclick = function(){menu()}
	}
	else{
	document.getElementById("back_button").onclick = function(){start()}
	}
	document.body.style.overflowY = "scroll"
	document.getElementById("achievement-flex").style.display = 'flex'
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("back_button").hidden = false
	document.getElementById("title_start").hidden = true
	document.getElementById("start-flex").style.display = "none"
	
	document.getElementById("stats").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	for (const el of achievements){
		const flex = document.createElement("flex")
		
		const title = document.createElement("h1")
		const description = document.createElement("p")
		title.innerHTML = el.title
		description.innerHTML = el.description
		flex.className = "achievement-container"
		flex.appendChild(title)
		flex.appendChild(description)
		
		document.getElementById("achievement-flex").appendChild(flex)
		if (!el.acquired){
		
		flex.style.opacity = "0.7"
		title.style.opacity = "0.7"
		description.style.opacity = "0.7"
		flex.style.backgroundColor = "rgb(69, 62, 62)"
		}
	}
	
	
}
function selectmarketitems(){
	debugger
	marketitems.length = 0
	const blueprintsitems = []
	
	for (len = m.marketselections.length, i = len-7;i<len-1;i++){
		if (m.marketselections[i].stock>0){
			blueprintsitems.push(i)
		}
	}
	if (blueprintsitems.length==0){
		blueprintsitems.push(7)
	}
	marketitems.push(getRandomInt(0,2),getRandomInt(3,4),blueprintsitems[getRandomInt(0,1)],m.marketselections.length-1,getRandomInt(5,7),getRandomInt(8,11), getRandomInt(1,2)==1 ? getRandomInt(8,11):blueprintsitems[getRandomInt(0,blueprintsitems.length-1)])


}
