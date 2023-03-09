
function turnpopup(){
	if (currentpop>population&&istutorial**difficulty==5){
		tutorialindex+=1
		continuetutorial(tutorialindex)
		return false
	}
	if (currentpop<1){
		popups[popups.length-1].choosetext("pop")
		displaypopup(popups.length-1)
		return false
	}
	else if (resources<3 && resourcesgained<1){
		popups[popups.length-1].choosetext("res")
		displaypopup(popups.length-1)
		return false
	}
	else if (food <1){
		popups[popups.length-1].choosetext("food")
		displaypopup(popups.length-1)
		return false
	}
	switch (difficulty){
		case 5:
			displaypopup(28,information)
			return false
		case 10:
			displaypopup(29,information)
			p.pieceROM[18].unlocked=true
			recalcBuildings()
			return false
		case 40:
			displaypopup(30,information)
			return false
	}
	switch(m.phase){
	case 0 :
		if(megatemple>=3&&p.pieceROM[17].unlocked==false){
			p.pieceROM[17].unlocked=true
			unlocked[17]=true
			displaypopup(24)
			return false
		}
	if (difficulty>10){
		
		if(difficulty<40){
		if ((difficultymultiplier*((getRandomInt(m.spy,3) ? 1:0.5)*0.0625*difficulty**2.5+getRandomInt(-10,5))>military&& getRandomInt(0,2+m.assissin)==1) || getRandomInt(0,7)==0){
			
			popups[0].choosetext()

			displaypopup(0)
			return false
		}
		}
		let isdivine=false
		if (wars.length >0){
			let warpower = 0
			for (const war of wars){
				warpower+=war.power
				if(war.divine==true){
					isdivine=true
				}
			}
			
			
			if(getRandomInt(0,1)==0){
								popups[19].choosetext()
				displaypopup(19)
				return false
			}
			
			else if(siege&&getRandomInt(0,1)==1){
					popups[22].choosetext()
				displaypopup(22)
				return false
			}
			
			else if (warpower/military>1.5&&getRandomInt(0,2)!=0){
				popups[20].choosetext()
				displaypopup(20)
				return false
			}
			else if (getRandomInt(0,1)==0||(military>warpower&&getRandomInt(0,2)!=0)){
				popups[21].choosetext()
				displaypopup(21)
				return false
			}
			else if(warpower/military>4||warpower/military<0.25&&!isdivine){
				popups[23].choosetext()
				displaypopup(23)
				return false
			}
			
		}
		if(difficulty>50&&getRandomInt(0,7+Math.max(-5,Math.floor(((reputation/5)+m.assissin)*(getRandomInt(7,14)/10)*(difficultymultiplier*((getRandomInt(m.spy,3) ? 1:0.5)*0.0625*difficulty**2.5)/military))))==0){
			popups[18].choosetext()
			displaypopup(18)
			return false
		}
		
		
		
	

		if (getRandomInt(0,Math.max(0,(3-Math.max(-7,Math.min(15,Math.floor((currentpop-population)/4))))*Math.min(3-difficultymultiplier,food/currentpop)+m.rebel+punishamount+(techstats.social_care ? 2:0)-outofrange)) <= 0){
			popups[1].choosetext()
			displaypopup(1)
			return false


		}
		if (Math.random() > 0.7){
			if (getRandomInt(0,15+luck)<5*difficultymultiplier){
			randomindex = getRandomInt(3,7)
			popups[randomindex].choosetext()
			displaypopup(randomindex)
			return false
			}
			else{
			randomindex = getRandomInt(8,10)
			popups[randomindex].choosetext()
			displaypopup(randomindex)
			return false

			}
		}
		if (reputation>30&&getRandomInt(0,2)==0){
			randomindex = getRandomInt(11,12)
			popups[randomindex].choosetext()
			displaypopup(randomindex)
			return false
		}
		if (m.scout){
			popups[12].choosetext()
			displaypopup(12)
			m.scout=false
			return false
		}
		if (difficulty<40&&military>difficultymultiplier*((getRandomInt(m.spy,3) ? 1:0.5)*0.0625*difficulty**2.5+getRandomInt(-10,5))){
			displaypopup(2)
			return false
		}
	
	
	}
	break
	case 1:
	if(getRandomInt(0,1)==0){
		popups[13].choosetext()
		displaypopup(13)
		return false
	}
	if (getRandomInt(0,Math.max(0,(3-Math.max(-7,currentpop-population))*Math.min(3-difficultymultiplier,food/currentpop)+m.rebel)+(techstats.social_care ? 2:0)-Math.floor(outofrange*5)) <= 0){
		popups[1].choosetext()
		displaypopup(1)
		return false


	}
	break
	case 2:
	switch(getRandomInt(0,4)){
	case 0:
		displaypopup(14)
		return false
	
	case 1:
	popups[15].choosetext()
	displaypopup(15)
	return false
	
	case 2:
		popups[15].choosetext()
	displaypopup(16)
	return false
	case 3:
		popups[15].choosetext()
	displaypopup(17)
	return false
	default:
		if (getRandomInt(0,Math.max(0,(3-Math.max(-7,Math.min(15,Math.floor((currentpop-population)/4))))*Math.min(3-difficultymultiplier,food/currentpop)+m.rebel+punishamount+(techstats.social_care ? 2:0)-outofrange)) <= 0){
			popups[1].choosetext()
			displaypopup(1)
			return false


		}
	}
	}

	
	return true
}
function enable(){
	document.getElementById("turn").innerHTML = "End Year"
	document.getElementById("turn").disabled = false
	const turnreturn = turnpopup()
	
	document.getElementById("popup_block_buttons").style.animation = "none"
	if(turnreturn==true){
	
	if(!psettings.nofade){
	document.getElementById("popup_block_buttons").style.animation = "popup_finish linear 1s 1 normal forwards"
	}
	setTimeout(function(){document.getElementById("popup_block_buttons").animation = "none";document.getElementById("popup_block_buttons").style.display = "none"},1000)
	}
	
	
	
	
	

	document.getElementById("year_label").innerHTML = "Year: "+difficulty
	displayUI()
	if (tutorialindex == 13){
		tutorialindex+=1
		continuetutorial(tutorialindex)
	}
}

function next_turn(){
	window.onbeforeunload = function(){return "hi"}
	document.getElementById("turn").innerHTML = "please wait"
	document.getElementById("turn").disabled = true
	const pbb = document.getElementById("popup_block_buttons")
	pbb.style.display = "block"
	pbb.style.animation = 'none';
	pbb.offsetHeight; /* trigger reflow */
	if(!psettings.nofade){
	pbb.style.animation = "block_done linear 1s 1 normal"; 
	
	}
	weathermod = Math.sin(difficulty/3)/10
	ctx2.clearRect(0,0,screen.width,screen.height)
	if(weathermod>0.05){
		weather = 1
	}
	else if (weathermod<-0.05){
		weather=2
	}
	else if(Math.random()>0.95){
		weather=3
	}
	else {
		weather=0
	}
	animloop()
	for(i=temporaryeffects.length-1;i>-1;i--){
		if (temporaryeffects[i].duration<=0){
			temporaryeffects.splice(i,1)
		}
		else{
		temporaryeffects[i].duration-=1
		}
	}
	xp+=Math.floor(Math.max(0,Math.min(1+Math.ceil(currentpop/5),food-currentpop))**0.5)*10*(1+techstats.innovation)
	currentpop+=Math.max(-2-Math.ceil(currentpop/5),Math.min(1+Math.ceil(currentpop/5),food-currentpop))
	
	resources+=resourcesgained
	
	xp+=Math.floor(xpgained*(techstats.innovation+1))
	difficulty+=1
	document.getElementById("mbutton").disabled=!techstats.market
	
	for (const war of wars){
		war.power+=war.totalpower/getRandomInt(20,25)
		war.power =Math.min(war.power,war.totalpower)
	}
	if (difficulty>20){
		
		for (const p of m.marketselections){
		p.turnmodify()
		if(p.title!="Mysterious Artifact"){p.stock+=getRandomInt(-1,2)}
		p.stock = Math.min(3,Math.max(p.stock,0))
		selectmarketitems()
		
	}
}
	
	setTimeout(enable,1000)
	
}

function displayUI(turn=false){
		reputation = Math.round(reputation)
		population = 0
		food = 0
		military = 0
		resourcesgained = 0
		xpgained = 0
		m_personnel = 0
		let renderend = false
		unemployed = currentpop
		if (m.phase>1){
			document.getElementById("boss_health_container").style.display = "block"
			document.getElementById("boss_health").style.width = Math.max(0,100*(m.bhealth/m.totalbhealth))+"%"
			setTimeout(function(){document.getElementById("boss_healthg").style.width = document.getElementById("boss_health").style.width},1000)
			document.getElementById("boss_health_text").innerHTML = "boss: " +shorten(Math.max(0, m.bhealth)) + "/" + shorten(m.totalbhealth)
		}
		else if (wars.length>0){
			let enemypower=0
			let totalenemypower=0
			for(const war of wars){
				enemypower+=war.power
				totalenemypower+=war.totalpower
			}
			enemypower=Math.floor(enemypower)
			totalenemypower=Math.floor(totalenemypower)
			document.getElementById("boss_health_container").style.display = "block"
			
			document.getElementById("boss_health").style.width = Math.max(0,100*(enemypower/totalenemypower))+"%"
			
		
			setTimeout(function(){document.getElementById("boss_healthg").style.width = document.getElementById("boss_health").style.width},1000)
			document.getElementById("boss_health_text").innerHTML = "enemy military: " +shorten(Math.max(0, enemypower)) + "/" + shorten(totalenemypower)
		}
		else{
			document.getElementById("boss_health_container").style.display = "none"
		}
		if (disableinfo){
			for (const el of document.getElementsByClassName("info")){
				
				el.disabled=true
				
			}
		}
		else {
		for (const el of document.getElementsByClassName("info")){
			
				if(el.id !="mbutton"){
				el.disabled = false
				}
				else{
					el.disabled = !(techstats.market&&!siege)
				}
			}
		}
		if(difficulty<5){
			document.getElementById("techbutton").disabled = true
		}
		else{
			document.getElementById("techbutton").disabled=false
		}
		for (const ef of temporaryeffects){
			if (ef.type =="add"){
				
				unemployed +=ef.unemployed
			}
		}
		for (len = gridstats.length,i=0;i<len;i++){
			if(!gridstats[i].disabled){
			if (unemployed>=gridstats[i].employmentrequired){
			population += gridstats[i].population
			if(gridstats[i].fish&&turn){
				gridstats[i].food = getRandomInt(10,15)
			}
			food += gridstats[i].food
			military += gridstats[i].military
			xpgained += gridstats[i].xp
			resourcesgained += gridstats[i].resources
			if(gridstats[i].military>0){
				m_personnel+=gridstats[i].employmentrequired
			}
			unemployed -= gridstats[i].employmentrequired
			}
			else{
				gridstats[i].disabled = true
				switch(gridstats[i].index){
					case 11:
						modifiers.military-=1
					case 18:
						for (i=0,len=p.cities.length;i<len;i++){
							if(p.cities[i].x==gridstats[buildingindex].citypos.x&&p.cities[i].y==gridstats[buildingindex].citypos.y){
								p.cities.splice(i,1)
							}
						}
						recalcBuildings()
					case 19:
						modifiers.food-=2
						modifiers.resources-=2
				}
				renderend =true
			}
			
		}
		}
		
		while (xp>=totalxp){
			if(difficulty>5){
			document.getElementById("techbutton").style.animation = "flash 2s step-start infinite"
			}
			research_points+=1
			xp-=totalxp
			totalxp+=10+Math.floor(totalxp/7)
			if (!tutorial[19].hastriggered&&istutorial) {
				continuetutorial(19)
			}
			
		}
		
		food += Math.ceil(food*(modifiers.food/10)*(1+weathermod))-(siege ? Math.ceil(food*(modifiers.food/10))*0.3:0)
		resourcesgained += Math.ceil(resourcesgained*(modifiers.resources/10))-(siege ? Math.ceil(resourcesgained*(modifiers.resources/10))*0.3:0)
		population += Math.ceil(population*modifiers.population/10)
		military += Math.ceil(military*(modifiers.military/10)*(1+(m.shield*0.01)))
		for (const ef of temporaryeffects){
			if (ef.type =="add"){
				food += ef.food
				resourcesgained += ef.resources
				military += ef.military
			}
			else{
				food += Math.ceil(food*ef.food)
		resourcesgained += Math.ceil(resourcesgained*ef.resources)
		military += Math.ceil(military*ef.military)
			}
		}
		i = 0
		
		unemployed = Math.max(unemployed,0)
		
		
		military+=unemployed
		for (i=0;i<achievements.length;i++){
			if (achievements[i].requires()&&!achievements[i].acquired){
			
			displayachievement(i)
				
			}
			
		}
		
		if(m.phase>0&&m.bhealth<=0){
			displaypopup(39, information)
		}
		currentpop=Math.max(0,currentpop)
		displaytab()
		if(renderend){render()}
		document.getElementById("xp_bar").style.width = 100*(xp/totalxp)+"%"
		document.getElementById("xp_text").innerHTML = shorten(xp)+"/"+shorten(totalxp)
		document.getElementById("pop").innerHTML = "Population: " + shorten(currentpop)+"/"+(currentpop>population&&difficulty>10 ? "<strong class = 'color-r'>"+shorten(population)+"</strong>":shorten(population))
		document.getElementById("food").innerHTML = "Food: " + (food<currentpop ? "<strong class = 'color-r'>&nbsp;"+shorten(food)+"</strong>": shorten(food))
		document.getElementById("power").innerHTML = "Military: " + shorten(military)
		document.getElementById("unemployed").innerHTML = "Unemployed People: " + shorten(unemployed)
document.getElementById("resources").innerHTML = `Resources: ${shorten(resources)} (${(resourcesgained>=0 ? "+":"")}${shorten(resourcesgained)})`
		
}
function attack(power){
	enemy_power = power
	m.shield = 0
	if (enemy_power>military){
		
		reputation-=getRandomInt(1,3)
		const newcasual = removebuildings(5)
		information[0].choosetext(Math.floor(m_personnel/4)+newcasual,Math.floor(m_personnel/8))
		resources-=Math.floor(m_personnel/8)
		currentpop-=Math.floor(m_personnel/4)
		
		displaypopup(0, information)
		


	
	render()
		return
	}
	information[1].choosetext(Math.ceil(power/4),Math.floor(m_personnel/8))
	currentpop+= Math.ceil(power/4)
	resources-=Math.floor(m_personnel/8)
	displaypopup(1, information)
}

