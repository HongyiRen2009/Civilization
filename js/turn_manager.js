
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
	else if (food < currentpop/10){
		popups[popups.length-1].choosetext("food")
		displaypopup(popups.length-1)
		return false
	}
	switch (difficulty){
		case 5:
			displaypopup(28,information)
			return false
		case 15:
			displaypopup(29,information)
			return false
		case 40:
			displaypopup(30,information)
			return false
	}
	let totalcitymax = 0
	if (max.right-p.cityincreases.right-5>totalcitymax){
		totalcitymax = max.right-p.cityincreases.right-5
	}
	if (max.down-p.cityincreases.down-5>totalcitymax){
		totalcitymax = max.down-p.cityincreases.down-5
	}
	if (max.up+p.cityincreases.up-5<totalcitymax){
		totalcitymax = Math.abs(max.up+p.cityincreases.up+5)
	}
	if (max.left+p.cityincreases.left-5<totalcitymax){
		totalcitymax = Math.abs(max.left+p.cityincreases.left+5)
	}
	switch(m.phase){
	case 0 :
	if (difficulty>20){
	
	if ((military<(difficulty-2)*3 && getRandomInt(0,3+m.assissin)==1) || getRandomInt(0,7)==0){
		
		popups[0].choosetext()

		displaypopup(0)
		return false
	}
	else if (getRandomInt(0,Math.max(0,(3-Math.max(-7,currentpop-population))*Math.min(3-difficultymultiplier,food/currentpop)+m.rebel+(techstats.social_care ? 2:0)-Math.floor(totalcitymax/10))) <= 0){
		popups[1].choosetext()
		displaypopup(1)
		return false


	}
	else if (getRandomInt(0,1) > 0){
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
	else if (reputation>30&&getRandomInt(0,2)==0){
		randomindex = getRandomInt(11,12)
		popups[randomindex].choosetext()
		displaypopup(randomindex)
		return false
	}
	else if (military>(difficulty+1)*5){
		displaypopup(2)
		return false
		}
	
	
	}
	break
	case 1:
	if(getRandomInt(0,4)==0){
		displaypopup(13)
		return false
	}
	else if (getRandomInt(0,Math.max(0,(3-Math.max(-7,currentpop-population))*Math.min(3-difficultymultiplier,food/currentpop)+m.rebel)+(techstats.social_care ? 2:0)-Math.floor(totalcitymax/10)) <= 0){
		popups[1].choosetext()
		displaypopup(1)
		return false


	}
	break
	case 2:
	switch(getRandomInt(0,3)){
	case 0:
		displaypopup(14)
		return false
	
	case 1:
	displaypopup(15)
	return false
	
	case 2:
	displaypopup(16)
	return false
	
	default:
	if (getRandomInt(0,Math.max(0,(3-Math.max(-7,currentpop-population))*Math.min(3-difficultymultiplier,food/currentpop)+m.rebel)+(techstats.social_care ? 2:0)-Math.floor(totalcitymax/10)) <= 0){
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
	
	
	document.getElementById("popup_block_buttons").style.animation = "popup_finish linear 1s 1 normal forwards"
	setTimeout(function(){document.getElementById("popup_block_buttons").animation = "none";document.getElementById("popup_block_buttons").style.display = "none"},1000)
	}
	
	

	
	displayUI()
	if (tutorialindex == 3){
		tutorialindex+=1
		continuetutorial(tutorialindex)
	}
}

function next_turn(){
	document.getElementById("turn").innerHTML = "please wait"
	document.getElementById("turn").disabled = true
	const pbb = document.getElementById("popup_block_buttons")
	pbb.style.display = "block"
	pbb.style.animation = 'none';
	pbb.offsetHeight; /* trigger reflow */
	pbb.style.animation = "block_done linear 1s 1 normal"; 
	
	
	for(i=temporaryeffects.length-1;i>-1;i--){
		if (temporaryeffects[i].duration<=0){
			temporaryeffects.splice(i,1)
		}
		else{
		temporaryeffects[i].duration-=1
		}
	}
	
	currentpop+=Math.max(-2-Math.ceil(currentpop/5),Math.min(1+Math.ceil(currentpop/5),food-currentpop))
	resources+=resourcesgained
	
	xp+=xpgained
	difficulty+=Math.round((1+Math.floor(difficulty/20)))
	document.getElementById("mbutton").disabled=!techstats.market
	
	if (difficulty>20){
		
		for (const p of m.marketselections){
		p.price +=Math.round(Math.min(getRandomInt(-3,3)+(p.whichthing == "resources" ? p.stock-4:4-p.stock)+difficulty/15,5))
		p.price-=Math.floor(reputation/5)
		p.price = Math.min(Math.max(p.price,Math.ceil(difficulty/2)+3),difficulty*2)
		if(p.stock<10&&p.title!="Blueprints"&&p.title!="Mysterious Artifact"){p.stock+=getRandomInt(-1,2)}
		p.stock = Math.max(p.stock,0)
		selectmarketitems()
		
	}
}
	
	setTimeout(enable,1000)
	
}

function displayUI(){
	
		population = 0
		food = 0
		military = 0
		resourcesgained = 0
		xpgained = 0
		unemployed = currentpop
		if (m.phase>1){
			document.getElementById("boss_health").style.width = 100*(m.bhealth/m.totalbhealth)+"%"
			document.getElementById("boss_health_text").innerHTML = "boss: " + m.bhealth + "/" + m.totalbhealth
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
					el.disabled = !techstats.market
				}
			}
		}
		
		for (len = gridstats.length,i=0;i<len;i++){
			if(!gridstats[i].disabled){
			if (unemployed>=gridstats[i].employmentrequired){
			population += gridstats[i].population
			food += gridstats[i].food
			military += gridstats[i].military
			xpgained += gridstats[i].xp
			resourcesgained += gridstats[i].resources
			unemployed -= gridstats[i].employmentrequired
			}
			else{
				gridstats[i].disabled = true
			}
		}
		}
		displaytab()
		
		food += Math.floor(food*modifiers.food)
		resourcesgained += Math.floor(resourcesgained*modifiers.resources)
		military += Math.floor(military*modifiers.military)
		for (const ef of temporaryeffects){
			if (ef.type =="add"){
				food += ef.food
				resourcesgained += ef.resources
				military += ef.military
				population += ef.population
			}
			else{
				food += Math.floor(food*ef.food)
		resourcesgained += Math.floor(resourcesgained*ef.resources)
		military += Math.floor(military*ef.military)
			}
		}
		i = 0
		if (xp>=totalxp){
			research_points+=1
			xp-=totalxp
			totalxp+=10+Math.floor(totalxp/10)
			
		}
		
		
		
		military+=unemployed
		for (i=0;i<achievements.length;i++){
			if (achievements[i].requires()&&!achievements[i].acquired){
			
			displayachievement(i)
				
			}
			
		}
		document.getElementById("xp_bar").style.width = 100*(xp/totalxp)+"%"
		document.getElementById("pop").innerHTML = "Population: " + currentpop+"/"+(currentpop>population&&difficulty>5*difficultymultiplier ? "<strong class = 'color-r'>"+population+"</strong>":population)
		document.getElementById("food").innerHTML = "Food: " + (food<currentpop ? "<strong class = 'color-r'>"+food+"</strong>": food)
		document.getElementById("power").innerHTML = "Military: " + military
		document.getElementById("unemployed").innerHTML = "Unemployed People: " + unemployed
		document.getElementById("resources").innerHTML = "Resources: " + resources
}
function attack(power){
	enemy_power = power
	
	if (enemy_power>military){
		
		reputation-=getRandomInt(1,3)
		removebuildings()
		displaypopup(0, information)
		


	
	render()
		return
	}
	currentpop+= Math.ceil(currentpop/2)
	displaypopup(1, information)
}
