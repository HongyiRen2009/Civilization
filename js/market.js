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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
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
		whichthing: "population",
		allowed: true,
		choosetext(){
			this.allowed = true
			
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
		whichthing: "military",
		allowed: true,
		choosetext(){
			this.allowed = true
			
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
		price:10,
		pricemod: 0.5,
		title: "Foriegn Aid",
		description: "Supply neighboring tribes with foriegn aid.<br>Increases reputation",
		image: "<img src = 'images/marketAid.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			reputation+=getRandomInt(4,9)
			
		}
	},
	{
		price:10,
		pricemod: 0.5,
		title: "Explorer",
		description: "Hire explorers to discover new trade routes",
		image: "<img src = 'images/marketNews.png' width='49' height='31'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			m.scout = true
		}
	},
	{
		price:10,
		pricemod: 1,
		title: "Shield",
		description: "Hire mercenaries to fight for you. Gain ",
		image: "<img src = 'images/marketShield.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			this.description = `Buy metal shields for your soldiers. <br>+${this.amountincrease} military but breaks after a battle.`
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			const increase = this.amountincrease
			m.shield+=increase
		}
	},
	{
		price:10,
		pricemod: 0.5,
		title: "Loan",
		description: "Hire explorers to discover new trade routes",
		image: "<img src = 'images/marketDollar.png' width='50' height='25'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			this.amountincrease = resources*2
			this.price=0
			
			this.description=`Acquire a loan for ${this.amountincrease} resources for 20 turns at a 10% intrest`
		},
		purchaseeffect(){
			resources+=this.amountincrease
			const increase = Math.floor(this.amountincrease/20 + this.amountincrease*0.1)*-1
			temporaryeffects.push({type: "add", resources:increase,population:0,military:0,food:0,duration:20})
		}
	},
	{
		price:10,
		pricemod: 0.5,
		title: "Loan",
		description: "Hire explorers to discover new trade routes",
		image: "<img src = 'images/marketDollar.png' width='50' height='25'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
	
			this.price=Math.floor(resources/2)
			
			this.description=`Grant a loan for ${this.price} resources for 20 turns at a 10% intrest`
		},
		purchaseeffect(){
			resources-=this.price
			const increase = Math.floor(this.price/20 + this.price*0.1)
			temporaryeffects.push({type: "add", resources:increase,population:0,military:0,food:0,duration:20})
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			this.description = `Buy kidnapped people from a crime group. <br>+${this.amountincrease} population`
		},
		purchaseeffect(){
			debugger
			resources-=Math.floor(this.price*this.pricemod)
			currentpop+= this.amountincrease
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			m.assissin +=2
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			
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
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			m.spy +=1
			reputation -= getRandomInt(3,6)
		}
	},
	{
		price:5,
		pricemod: 1.5,
		title: "Propoganda",
		description: "Hire a sham philosopher to spread fake news. <br> Reduced chance for rebellions",
		image:"<img src = 'images/marketScroll.png' width='50' height='46'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
			
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			m.rebel +=1
			reputation -= getRandomInt(3,6)
		}
	},
	{
		price:2000,
		pricemod: 1,
		title: "Blueprints",
		description: "Get a blueprint scrap on how to construct the Mega Temple",
		image: "<img src = 'images/scrap1.png' width='50' height='30'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = Math.max(1700,2000-(reputation*5))

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			megatemple+=1
		}
	},
	{
		price:0,
		pricemod: 1,
		title: "Mysterious Artifact",
		description: "An ancient artifact of unknown origins.<br><strong class = 'color-r'>Warning! Harboring this artifact may attract a beast of ultimate power.</strong>",
		image: "<img src = 'images/egg.png' width='50' height='50'></img>",
		amountincrease: 0,
		stock:1,
		whichthing: "resources",
		allowed: true,
		choosetext(){
			this.allowed = true
						this.price = resources

			if (this.price*this.pricemod>resources){
				this.allowed = false
			}
		},
		purchaseeffect(){
			resources-=Math.floor(this.price*this.pricemod)
			m.phase+=1
			m.bhealth= Math.floor((500+20*difficulty**1.6)*difficultymultiplier)
			m.totalbhealth=m.bhealth
		}
	}
	],
	assissin: 0,
	spy: 0,
	rebel: 0,
	shield:0,
	scout:false,
	phase:0,
	bhealth:0,
	totalbhealth:0,
}
function marketscreen(){
	removing=false
	ispainting = false
	repairing = false
	build_music.pause()
	market_music.play()
	boss_music.pause()
	document.body.style.overflowY = "scroll"
	document.getElementById("status").hidden = true
		document.getElementById("mresource").innerHTML = 'Resources: ' + resources
	document.getElementById("mreputation").innerHTML = "Reputation: " + reputation
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("market-flex").style.display = 'flex'
	document.getElementById("boss_health_container").style.display="none"
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
	for (i=0,len=marketitems.length;i<len;i++){
		if (marketitems == "failed"){
			marketitemsindex.push("failed")
		}
		else{
		marketitemsindex.push(m.marketselections[marketitems[i]])
	}
	}
	i=0
	
	for (const el of marketitemsindex){
		
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
		const im = document.createElement("p")
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
			if (el.whichthing=="resources"){
			buy.innerHTML = `<strong class = 'color-r'>${Math.floor(el.price*el.pricemod)} ${el.whichthing}</strong>`
			}
			else{
				buy.innerHTML = `<strong class = 'color-r'>${Math.floor(el.amountincrease)} ${el.whichthing}</strong>`
			}
			buy.disabled = true
		}
		else{
			if (el.whichthing=="resources"){
			buy.innerHTML = `<strong class = 'color-g'>${Math.floor(el.price*el.pricemod)} ${el.whichthing}</strong>`
			}
			else{
				buy.innerHTML = `<strong class = 'color-g'>${Math.floor(el.amountincrease)} ${el.whichthing}</strong>`
			}
		}
		buy.onclick = function(){
			kaching.play()
			
			const status = document.getElementById("status")
			const index = i
			status.style.animation = "none"
			if (getRandomInt(0,100-(buy.id.includes("b") ? 30:0)+reputation)>5||el.title=="Blueprints"){
			status.style.color = "green"
			status.innerHTML = "<h1>TRADE SUCCESSFUL</h1>"
			el.purchaseeffect();
			el.stock-=1;
			
			if (buy.id.includes("b")){
			reputation-=getRandomInt(3,5)
			}
			else
			{
				reputation+=Math.floor(getRandomInt(0,3)*(1+techstats.charisma))
			}
			
			for (let j =0,len=marketitemsindex.length;j<len;j++){
				debugger
				if (document.getElementById(j<4 ? "m"+j:"bm"+j)!=null&&marketitemsindex[j].stock>=0){
					
				marketitemsindex[j].choosetext()
				
				if (!marketitemsindex[j].allowed||marketitemsindex[j].stock>0){
					document.getElementById(j<4 ? "m"+j:"bm"+j).disabled = true
					document.getElementById(j<4 ? "m"+j:"bm"+j).innerHTML = `<strong class = 'color-r'>${Math.floor(marketitemsindex[j].price*marketitemsindex[j].pricemod)} ${marketitemsindex[j].whichthing}</strong>`
				}
				else{
					document.getElementById(j<4 ? "m"+j:"bm"+j).disabled = false
					document.getElementById(j<4 ? "m"+j:"bm"+j).innerHTML = `<strong class = 'color-g'>${Math.floor(marketitemsindex[j].price*marketitemsindex[j].pricemod)} ${marketitemsindex[j].whichthing}</strong>`

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
				buy.innerHTML = `<strong class = 'color-r'>${Math.floor(el.price*el.pricemod)} ${el.whichthing}</strong>`
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
		flex.appendChild(title)
		flex.appendChild(im)
		flex.appendChild(des)
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


function selectmarketitems(){
	
	marketitems.length = 0
	
	
	marketitems.push(getRandomInt(0,2),getRandomInt(3,4),getRandomInt(5,7),getRandomInt(8,9),getRandomInt(10,15), getRandomInt(10,15),m.marketselections.length-1)
}
