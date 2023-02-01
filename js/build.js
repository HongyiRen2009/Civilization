const p = {
	pieceROM: [
	
	{
		name: "Canopy",
		letter: "C",
		description: "A small unit of housing that houses 1 person. Requires 1 resource to construct",
		piecepositions:[{x:0,y:0}],
		tab: "housing",
		unlocked: true,
		near: "building",

		effect(){
			p.population=Math.floor(1*(1+techstats.eff_space))
			resources-=1
		},
		
		requires(){
			return resources >=1
		}

	},
	{
		name: "Hut",
		letter: "H",
		description: "A medium unit of housing that houses 6 people. Requires 5 resources to construct",
		piecepositions:[{x:0,y:0}],
		unlocked: true,
		near: "building",
		effect(){
			p.population=Math.floor(4*(1+techstats.eff_space))
			resources-=5+Math.floor(3*techstats.eff_infra)
		},
		tab: "housing",
		requires(){
			return resources >=5-Math.floor(3*techstats.eff_infra) && difficulty>3
		}
	},
	{
		name: "Townhouse",
		letter: "TH",
		description: "A house for many people. Houses 16 people and requires 10 resources to construct",
		piecepositions:[{x:0,y:0},{x:1,y:0}],
		unlocked: false,
		near: "building",
		effect(){
			p.population=Math.floor(8*(1+techstats.eff_space))
			resources-=10+Math.floor(3*techstats.eff_infra)
		},
		tab: "housing",
		requires(){
			return resources >=10-Math.floor(3*techstats.eff_infra)
		}
	},
	
	{
		name: "Insula",
		letter: "I",
		description: "A high density primitive apartment that houses 35 people. Requires 15 resources to construct",
		piecepositions:[{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}],
		unlocked: false,
		near: "building",
		tab: "housing",
		effect(){
			p.population=Math.floor(35*(1+techstats.eff_space))
			resources-=15+Math.floor(3*techstats.eff_infra)
		},
		requires(){
			return resources >= 15-Math.floor(3*techstats.eff_infra)
		}
	},
	
	{
		name: "Road",
		letter: "R",
		description: "A road that connects one place from the village to another. Requires 0.25 resources to construct",
		piecepositions:[{x:0,y:0}],
		unlocked: true,
		near: "building",
		tab: "misc",
		effect(){
			resources -=techstats.cement ? 0.1:0.25
		},
		requires(){
			return resources >= (techstats.cement ? 0.1:0.25)

		}
	},
	{
		name: "Tiny Farm",
		letter: "TF",
		piecepositions: [{x:1,y:0},{x:0,y:0}],
		description: "A very small farm that produces 2 food. Requires 2 resources to construct",
		unlocked: true,
		near: "building",
		tab: "farms",
		effect(){
			p.food=Math.floor(2*(1+techstats.eff_farms))
			resources-=2-Math.floor(2*techstats.simple_farms)
			
		},
		requires(){
			return resources >= 2-Math.floor(2*techstats.simple_farms) && unemployed >=0
		}
	},
	{
		name: "Small Farm",
		letter: "F",
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}],
		description: "A small farm that produces 5 food. Half efficiency if on a hill. Requires 3 resources to construct and 1 person operating it",
		unlocked: true,
		near: "building",
		tab: "farms",
		effect(){
			
			p.food=Math.ceil(Math.floor(5*(1+techstats.eff_farms))*(p.hill ? 0.5:1))
			resources-=3+Math.floor(3*techstats.simple_farms)
			unemployed-=1
		},
		requires(){
			return resources >= 3-Math.floor(3*techstats.simple_farms) && unemployed >=1
		}
	},
	{
		name: "Medium Farm",
		letter: "MF",
		description: "A medium farm that produces 20 food. Requires 15 resources to construct and 3 people operating it. Cannot be on a hill",
		unlocked: false,
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1}],
		near: "!hill",
		tab: "farms",
		effect(){
			p.food=Math.floor(20*(1+techstats.eff_farms))
			resources-=15+Math.floor(15*techstats.simple_farms)
			unemployed-=3
		},
		requires(){
			return resources >=15-Math.floor(15*techstats.simple_farms) && unemployed>=3
		}
	},
	{
		name: "Large Farm",
		letter: "LF",
		description: "A large farm that produces 40 food. Requires 25 resources to construct, 5 people operating it. Must be nearby a river for irrigation and cannot be on a hill",
		unlocked: false,
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1}],
		near: "river !hill",
		tab: "farms",
		effect(){
			p.food=Math.floor(40*(1+techstats.eff_farms))
			resources-=25+Math.floor(25*techstats.simple_farms)
			unemployed-=5
		},
		requires(){
			return resources >=25-Math.floor(25*techstats.simple_farms) && unemployed>=5
		}
	},
	{
		name: "Temple",
		letter: "T",
		description: "A temple to pray to RNGesus (increases luck). Requires 40 resources to construct and 10 people operating it",
		unlocked: false,
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1},{x:-1,y:0},{x:-1,y:-1},{x:-1,y:1}],
		near: "building",
		tab: "misc",
		effect(){
			luck+=Math.floor(2*(1+techstats.ded_worship))
			reputation+=5
			resources-=40
			unemployed-=10
		},
		requires(){
			return resources>=40 && unemployed>=10
		}
	},
	{
		name: "Military Base",
		letter: "MB",
		description: "A building for military operations that increases military power by 10. Double effectivness if entirely on a hill. Requires 6 resources to construct and 3 people operating it",
		unlocked: false,
		piecepositions: [{x:1,y:1},{x:0,y:0},{x:-1,y:1},{x:-1,y:-1},{x:1,y:-1}],
		near: "building",
		tab: "military",
		effect(){
			p.military=10*(p.entirehill ? 2:1)
			resources-=6
			unemployed-=3
			
		},
		requires(){
			return resources >= 6 && unemployed>=3
		}
		
	},
	{
		name: "Barracks",
		letter: "BR",
		description: "A building to store weapons and train soldiers, increasing your military 10%. Requires 20 resources to construct and 10 people operating it. Gains no bonuses for being on a hill.",
		unlocked: false,
		piecepositions: [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:2,y:1}],
		near: "building",
		tab: "military",
		effect(){
			modifiers.military +=0.1
			resources-=20
			unemployed-=10
			
		},
		requires(){
			return resources >= 20 && unemployed>=10
		}
		
	},
	{
		name: "Fortress",
		letter: "FT",
		description: "A massive structure that offers substantial defense. Increases military power by 150. Requires 40 resources to construct and 20 people operating it.",
		unlocked: false,
		piecepositions: [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:2,y:1},{x:2,y:0}],
		near: "building",
		tab: "military",
		effect(){
			p.military = Math.floor(150*(p.entirehill ? 2:1)*(1+techstats.archery))
			resources-=40
			unemployed-=8
			
		},
		requires(){
			return resources >= 40 && unemployed>=8
		}
		
	},
	{
		name: "Bridge",
		letter: "B",
		description: "A brige to connect one side of the river to another. Must be on a river to construct and requires 3 resources",
		unlocked: true,
		piecepositions: [{x:0,y:0}],
		near: "building",
		tab: "misc",
		effect(){
			resources-=techstats.cement ? 0.1:3
		},
		requires(){
			return resources >= techstats.cement ? 0.1:3 &&difficulty>4
		}
		
	},
	{
		name: "Small Mine",
		letter: "SM",
		description: "A small mine to extract resources from a hill. Collects 3 resources per year. Half efficiency if not on a hill and requires 3 resources and 1 person operating it",
		unlocked: true,
		piecepositions: [{x:0,y:0},{x:0,y:1}],
		near: "building",
		tab: "mines",
		effect(){
			
			p.resources=4*(p.hill ? 1:0.5)
			resources-=3+Math.floor(techstats.planned_mines*3)
			unemployed-=1
		},
		requires(){
			return resources >=3+Math.floor(techstats.planned_mines*3) && unemployed>=1
		}
	},
	{
		name: "Medium Mine",
		letter: "MM",
		description: "A medium mine to extract resources from a hill. Collects 12 resources per year. Must be on a hill and requires 12 resources and 3 people operating it",
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1}],
		unlocked: false,
		near: "hill",
		tab: "mines",
		effect(){
			p.resources=12
			resources-=15+Math.floor(techstats.planned_mines*15)
			unemployed-=4
		},
		requires(){
			return resources >=15+Math.floor(techstats.planned_mines*15) && unemployed>=4&&difficulty>4
		}
	},
	{
		name: "Large Mine",
		letter: "LM",
		description: "A large mine to extract resources from a hill. Collects 40 resources per year. Must be on a hill and requires 25 resources and 8 people operating it",
		piecepositions: [
			{x:1,y:0},{x:0,y:0}, {x:-1, y:0},
			{x:0,y:1},{x:1,y:1}, {x:-1, y:1},
			{x:0,y:2},{x:1,y:2}, {x:-1, y:2},
			{x:1,y:-1},{x:0,y:-1}, {x:-1, y:-1}],
		unlocked: false,
		near: "hill",
		tab: "mines",
		effect(){
			p.resources=40
			resources-=25+Math.floor(techstats.planned_mines*25)
			unemployed-=8
		},
		requires(){
			return resources >=25+Math.floor(techstats.planned_mines*25) && unemployed>=8
		}
	},
	{
		name: "Mega Temple",
		letter: "MT",
		description: "A mega temple to directly contact god. Build one to beat the game. Requires 2000 resources and 100 people praying",
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1},{x:-1,y:0},{x:-1,y:-1},{x:-1,y:1},{x:-1,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:-1},{x:2,y:-2},{x:1,y:-2},{x:0,y:-2},{x:-1,y:-2}],
		unlocked: false,
		near: "building",
		tab: "misc",
		effect(){
			displaypopup(popups.length-2)
			resources-=2000
			unemployed-=100
		},
		requires(){
			return resources >=2000 && unemployed>=100
		}
	},
	{
		name: "Bonfire",
		letter: "BF",
		description: "A city center. Requires exponentially more resources the more you build it",
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}],
		unlocked: true,
		near: "building",
		tab: "City Centers",
		amountbought: 0,
		effect(){
			resources-=this.amountbought**3
			this.amountbought+=1
			if((Math.floor(position.x-screen.width/2)/20)-spawnX>p.cityincreases.right){
			p.cityincreases.right = (Math.floor(position.x-screen.width/2)/20)-spawnX
			}
			if((Math.floor(position.x-screen.width/2)/20)-spawnX<p.cityincreases.left){
				p.cityincreases.left = (Math.floor(position.x-screen.width/2)/20)-spawnX
			}
			if(Math.floor((position.y-screen.height/2)/20)-spawnY>p.cityincreases.down){
				p.cityincreases.down = (Math.floor(position.y-screen.height/2)/20)-spawnY
			}
			if(Math.floor((position.y-screen.height/2)/20)-spawnY<p.cityincreases.up){
				p.cityincreases.up = (Math.floor(position.y-screen.height/2)/20)-spawnY
			}

		},
		requires(){
			return resources >=this.amountbought**3
		}
	},
	{
		name: "Trade School",
		letter: "TS",
		description: "A school for teaching miners and farmers.<br>Increases all production by 10% and requires 50 resources and 15 people to build.",
		unlocked: false,
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:1}],
		near: "building",
		tab: "misc",
		effect(){
			modifiers.food+=0.1
			modifiers.resources+=0.1
			resources-=50
			unemployed-=15
		},
		requires(){
			return resources>=50 && unemployed>=15
		}
	},
	{
		name: "Workshop",
		letter: "W",
		description: "A workshop for practicing and learning. Increases wisdom by 50 but uses up 2 resources each round<br>Requires 20 resources and 5 people to build.",
		unlocked: false,
		piecepositions: [{x:0,y:0},{x:-1,y:0},{x:0,y:1}],
		near: "building",
		tab: "misc",
		effect(){
			p.xp=50
			p.resources=-2
			resources-=20
			unemployed-=5
		},
		requires(){
			return resources>=20 && unemployed>=5
		}
	},
],
cityincreases:{
	up:-30,
	down:30,
	left:-30,
	right:30
},
food:0,
population:0,
military:0,
resources:0,
xp:0,
river: false,
hill : false,
entirehill : false,
}
for (const un of p.pieceROM){
	unlocked.push(un.unlocked)
}


function removebuildings(onhill=false){
	currentpop -= Math.floor(currentpop/3);
	remove = onhill
		for(i=gridstats.length-1;i>-1;i--){
		if (getRandomInt(0,3) == 0){
		if(onhill){
			remove = false
			for (let j = 0; j!=gridstats[i].positions.length;j++){
				if(hillgrid[gridstats[i].positions[j].y/20].includes(gridstats[i].positions[j].x)){
					remove=true
				}
			}
		}
		if (remove){
			for (let j = 0; j!=gridstats[i].positions.length;j++){
				
				const indexx = grid[gridstats[i].positions[j].y/20].indexOf(gridstats[i].positions[j].x)
				grid[gridstats[i].positions[j].y/20].splice(indexx,1)
			}
			buildingamounts[gridstats[i].index]-=1
			gridstats.splice(i,1)
		
		}
		
		}
		}
		render()
		displayUI()
}
function isallowed(){
localallowed = false
for (i=0,len=piece.length;i!=len;i++){
		
		
		if ((position.x/20)-(widthmax/2)+piece[i].x-spawnX>max.right||(position.x/20)-(widthmax/2)+piece[i].x-spawnX<max.left||(position.y/20)-(heightmax/2)+piece[i].y-spawnY>max.down||(position.y/20)-(heightmax/2)+piece[i].y-spawnY<max.up){
			return false
		}
		if (p.river &&!rivergrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)){
			return false
		}
		else if (grid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20) ||(!p.river&& (rivergrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)))){
			return false
			
		}
		if (p.pieceROM[p_index].near.includes("!hill")){
			if (hillgrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)){
				return false
				

			}
		}
		
			
			
			
			if (!first_turn){
				if (grid[(position.y/20)+piece[i].y].includes(20+position.x+piece[i].x*20)){
					localallowed = true
					
				}
				else if (grid[(position.y/20)+piece[i].y].includes(-20+position.x+piece[i].x*20)){
					localallowed = true
					
				}
				else if (grid[Math.min((grid.length-1),((1+position.y/20)+piece[i].y))].includes(position.x+piece[i].x*20)){
					localallowed = true
					
				}
				else if (grid[Math.max(0,(-1+position.y/20)+piece[i].y)].includes(position.x+piece[i].x*20)){
					localallowed = true
					
				}
			
			
			}
			else {
			localallowed = true
			}
			
		}
		if (!localallowed) return false
		if (p.pieceROM[p_index].near != "building"&&!p.pieceROM[p_index].near.includes("!hill")){localallowed = false}
			for (i=0;i!=piece.length;i++){
			
			if (p.pieceROM[p_index].near.includes("river")){
				if (rivergrid[(position.y/20)+piece[i].y].includes(20+position.x+piece[i].x*20)){
					localallowed = true
					break
				}
				else if (rivergrid[(position.y/20)+piece[i].y].includes(-20+position.x+piece[i].x*20)){
					localallowed = true
					break

				}

			}
			if (p.pieceROM[p_index].near == "hill"){
			if (hillgrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)){
				localallowed = true
				break

			}
			}
			
			}
		return localallowed
}

document.onmousemove = function(event){
	
		allowed = false
if (ispainting){
	position = {x:(Math.ceil((event.clientX)/20)-1+scrollX)*20,y:(Math.round(event.clientY/20)-3+scrollY)*20}



render()
ctx.beginPath();
	allowed = isallowed()
	
	
		
		for (i=0;i!=piece.length;i++){
			
				ctx.fillText(letter,position.x+10-(letter.length*4)-(scrollX*20)+piece[i].x*20,position.y+10-(scrollY*20)+piece[i].y*20);
			if (!allowed){
				ctx.fillStyle = "rgba(255,0,0,0.5)"
						ctx.fillRect(position.x-(scrollX*20)+piece[i].x*20,position.y+(-scrollY+piece[i].y)*20,20,20)
				

			}
			else{		
			ctx.strokeStyle = "black"
			ctx.rect(position.x-(scrollX*20)+piece[i].x*20,position.y+(-scrollY+piece[i].y)*20,20,20)
			
}
		}
		ctx.stroke();


}
else if (removing||repairing){
	position = {x:(Math.ceil((event.clientX)/20)-1+scrollX)*20,y:(Math.floor(event.clientY/20)-3+scrollY)*20}



render()

	
	
ctx.beginPath();
		if(removing){
		ctx.strokeStyle="white"
		}
		else{
			ctx.strokeStyle="#4d4d4d"
		}
			ctx.rect(position.x-(scrollX*20),position.y+-scrollY*20,21,21)
			ctx.stroke();
ctx.closePath()

		

}

}
function isremoving(){
	ispainting=false
	repairing = false
	if (removing == false){
		removing = true
	}
	else{
		removing = false
	}
}
function isrepairing(){
	ispainting=false
	removing = false
	if (repairing == false){
		repairing = true
	}
	else{
		repairing = false
	}
}
function renderclouds(){
	ctx.fillStyle = "#212121"
	ctx.fillRect(((spawnX-scrollX)*20)+screen.width/2+max.right*20,0,screen.width,screen.height)
	ctx.fillRect(((spawnX-scrollX)*20)-screen.width/2+max.left*20,0,screen.width,screen.height)
	ctx.fillRect(0,(-80+(spawnY-scrollY)*20)+screen.height/2+max.down*20,screen.width,screen.height)
	ctx.fillRect(0,(-120+(spawnY-scrollY)*20)-screen.height/2+max.up*20,screen.width,screen.height)
	ctx.fillStyle = "rgba(0,0,0,1)"
	ctx.stroke()
}
function render(){
	
	ctx.beginPath()
	
	ctx.clearRect(0,0,screen.width,screen.height)
	ctx.strokeStyle = "rgba(0,0,0,1)"
					ctx.fillStyle = "rgb(51, 166, 59)"
	ctx.fillRect(0,0, screen.width,screen.height)
	
	for (i=scrollY;i<=Math.min(499,scrollY+heightmax);i++){
		for (let j = 0; j<hillgrid[i].length;j++){
			if (hillgrid[i][j]-20<scrollX*20+widthmax*20&&hillgrid[i][j]+20>scrollX*20){
			ctx.fillStyle = "rgb(103, 104, 107)"
			ctx.fillRect(hillgrid[i][j]-(scrollX*20),(i-scrollY)*20,20,20)
			ctx.fillStyle = "rgba(0,0,0,1)"
			}
		}
	}		
	for (i=scrollY;i<=Math.min(499,scrollY+heightmax);i++){
		for (let j = 0; j!=rivergrid[i].length;j++){
			if (rivergrid[i][j]-20<scrollX*20+widthmax*20&&rivergrid[i][j]+20>scrollX*20){
			ctx.fillStyle = "rgb(3,172,252)"
			ctx.fillRect(rivergrid[i][j]-(scrollX*20),(i-scrollY)*20,20,20)
			ctx.fillStyle = "rgba(0,0,0,1)"
			}
		}
	}
	
	ctx.closePath()

	
	for(len = gridstats.length,i=0;i<len;i++){
		ctx.beginPath()
		
		if(gridstats[i].disabled){
			ctx.strokeStyle = "rgba(0,0,0,0.2)"
		}
		else{
			ctx.strokeStyle = "rgba(0,0,0,1)"
		}
		
		for (let j = 0,len = gridstats[i].positions.length;j!=len;j++){
			if(gridstats[i].positions[j].x-20<scrollX*20+widthmax*20&&gridstats[i].positions[j].x+20>scrollX*20)
				ctx.fillText(gridstats[i].letter,gridstats[i].positions[j].x+10-(gridstats[i].letter.length*4)-scrollX*20,gridstats[i].positions[j].y+10-scrollY*20);
				ctx.rect(gridstats[i].positions[j].x-scrollX*20,gridstats[i].positions[j].y-scrollY*20,20,20)
				
				
				
		}
	
		ctx.closePath()
		ctx.stroke()
		ctx.stroke()
		
	}
	renderclouds()

	
	
	
	
}
document.onmousedown = function(event){
	
	if (ispainting && allowed&&position.y-scrollY*20<canvas.height){
		click.play()
		p.population = 0
		p.military = 0
		p.resources = 0
		p.food = 0
		p.xp=0
		const oldpop = unemployed
		const gridposition = []
		if((Math.floor(position.x-screen.width/2)/20)-spawnX+5>max.right){
			max.right = (Math.floor(position.x-screen.width/2)/20)-spawnX+5
		}
		if((Math.floor(position.x-screen.width/2)/20)-spawnX-5<max.left){
			max.left = (Math.floor(position.x-screen.width/2)/20)-spawnX-5
		}
		if(Math.floor((position.y-screen.height/2)/20)-spawnY+10>max.down){
			max.down = (Math.floor(position.y-screen.height/2)/20)-spawnY+10
		}
		if(Math.floor((position.y-screen.height/2)/20)-spawnY-5<max.up){
			max.up = (Math.floor(position.y-screen.height/2)/20)-spawnY-5
		}
		for (i=0;i!=piece.length;i++){
			
		gridposition.push({x:position.x+piece[i].x*20,y:position.y+piece[i].y*20})
		grid[((position.y)/20+piece[i].y)].push(position.x+piece[i].x*20)
		
		
		
		
		if (!hillgrid[gridposition[i].y/20].includes(gridposition[i].x)){
			p.entirehill = false
		}
		if (hillgrid[gridposition[i].y/20].includes(gridposition[i].x)){
			p.hill = true
		}	
		
	}
	const oldresources = resources
		p.pieceROM[p_index].effect()

		gridstats.push({
			index:p_index,
			letter:letter,
			population:p.population,
			employmentrequired: oldpop-unemployed,
			food:p.food,
			resources:p.resources,
			military:p.military,
			xp:0,
			positions:gridposition.slice(0),
			resourcerefund: oldresources-resources,
			disabled: false
		})
		xp+=Math.ceil((oldresources-resources)*(1+techstats.innovation))
		first_turn = false
		
		if (!p.pieceROM[p_index].requires()){
			piece.length = 0
			ispainting = false
			allowed = false
		}
		
		buildingamounts[p_index] +=1
		
		displayUI()
		if (tutorialindex==1||tutorialindex==2){
			tutorialindex+=1
			continuetutorial(tutorialindex)
		}
		
}
else if (removing&&grid[position.y/20].includes(position.x)){
	
	let found = false
	let buildingindex = 0
	for (i=0, len=gridstats.length;i<len;i++){
		for (let j=0,len=gridstats[i].positions.length;j<len;j++){
		if (gridstats[i].positions[j].x==position.x&&gridstats[i].positions[j].y==position.y){
			buildingindex=i
			found=true
			break
		}
		}
		if(found)break
	}
	
	for (const el of gridstats[buildingindex].positions){
		const indexx = grid[el.y/20].indexOf(el.x)
		grid[el.y/20].splice(indexx,1)
		breaksound.play()
	}
	resources+=Math.round(gridstats[buildingindex].resourcerefund/2)
	buildingamounts[gridstats[buildingindex].index]-=1
	gridstats.splice(buildingindex,1)
	displayUI()
}
else if (repairing&&grid[position.y/20].includes(position.x)){
	let found = false
	let buildingindex = 0
	for (i=0, len=gridstats.length;i<len;i++){
		for (let j=0,len=gridstats[i].positions.length;j<len;j++){
		if (gridstats[i].positions[j].x==position.x&&gridstats[i].positions[j].y==position.y){
			buildingindex=i
			found=true
			break
		}
		}
		if(found)break
	}
	if(gridstats[buildingindex].disabled==true&&resources>=Math.round(gridstats[buildingindex].resourcerefund/2)){

	repairsound.play()
	resources-=Math.round(gridstats[buildingindex].resourcerefund/2)
	gridstats[buildingindex].disabled=false
	
	displayUI()
	}
}
}

document.onkeydown = function(event){
	if(techstats.exploration){
	switch(event.key){
		
		case "w":
			if (scrollY>0&&scrollY-spawnY>max.up){
			move(0,-1)
			}
			break
		case "s":
			if (scrollY<499-heightmax&&scrollY-spawnY<max.down){
			move(0,1)
			}
			break
		case "a":
			if (scrollX>0&&scrollX-spawnX>max.left){
			move(-1,0)
			}
			break
		case "d":
			if (scrollX<499&&scrollX-spawnX<max.right){
			move(1,0)
			}
			break
		//case "r":
		//rotate()
		//break
	}
	}
}
function rotate(){
	difference +=0.5
	let x = []
	let y = []
	for (i=0;i!=piece.length;i++){
		x.push(piece[i].x)
		y.push(piece[i].y)
		
	}
	let max = Math.max(...x)
	let min = Math.min(...x)
	let miny = Math.min(...y)
	let maxy = Math.max(...y)
	midpoint = {x:(min+max)/2,y:(miny+maxy)/2}
	
	
	for(i=0;i<piece.length;i++){
		piece[i].x-=midpoint.x
		piece[i].y-=midpoint.y

		oldy = piece[i].y
		piece[i].y = piece[i].x*-1
		piece[i].x = oldy
		piece[i].x+=midpoint.x
		piece[i].y+=midpoint.y
		piece[i].x = Math.floor(piece[i].x)
		piece[i].y = Math.floor(piece[i].y)
		if (Math.floor(difference) == 1){
			piece[i].x +=1
			piece[i].y +=1
		}
	}
			if (Math.floor(difference) == 1){
				difference = 0
			}
	render()

}
function select(index){
	removing=false
	repairing = false
		piece = []
	p.river = false
	p.hill=false
	p.entirehill=true
	for (i=0;i!=p.pieceROM[index].piecepositions.length;i++){
	piece.push(p.pieceROM[index].piecepositions[i])
	
	}
	if (p.pieceROM[index].name == "Bridge"){
		p.river = true
	}
	
	
	letter = p.pieceROM[index].letter
	p_index = index
	p.pieceROM[index]
	ispainting = true
	
}
function cancel(){
	piece = []
	removing=false
	ispainting = false
	repairing = false
	render()
}


function displaytab(){
	const selectcontainer = document.getElementById("select-grid")
	const ele = document.getElementsByClassName("select-choice")
	for (i=ele.length-1;i>-1;i--){
		
		ele[i].remove()
	}
	for (i=0,len=p.pieceROM.length;i<len;i++){
		
		if (p.pieceROM[i].tab ==tab){
		const button = document.createElement("button")
		button.style.animation = "none"
		button.innerHTML = p.pieceROM[i].name
		button.className = "select-choice"
		button.id = i
		button.onclick = function(){select(button.id)}
			if (!p.pieceROM[i].requires()||!p.pieceROM[i].unlocked){
			button.disabled = true;
			
			}
			else{button.disabled = false;
			if (buildingamounts[i]<1){
				button.style.animation = "flash 2s step-start infinite"
			}
			}
		selectcontainer.insertBefore(button, document.getElementById("xp_flex"))
		}
		
	}
}
