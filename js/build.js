const p = {
	pieceROM: [
	
	{
		name: "Tent",
		letter: "T",
		description: "A small unit of housing that houses 1 person. Requires 1 resource to construct",
		piecepositions:[{x:0,y:0}],
		tab: "house",
		unlocked: true,
		near: "building",
		effect(){
			p.population=1
			resources-=1
		},
		
		requires(){
			return resources >=1
		}

	},
	{
		name: "House",
		letter: "H",
		description: "A medium unit of housing that houses 4 people. Requires 3 resources to construct",
		piecepositions:[{x:0,y:0}],
		unlocked: true,
		near: "building",
		effect(){
			p.population=4
			resources-=3
		},
		tab: "house",
		requires(){
			return resources >=3 && difficulty>3
		}
	},
	{
		name: "Duplex",
		letter: "D",
		description: "Two conjoined houses. Houses 8 people and requires 5 resources to construct",
		piecepositions:[{x:0,y:0},{x:1,y:0}],
		unlocked: true,
		near: "building",
		effect(){
			p.population=8
			resources-=5
		},
		tab: "house",
		requires(){
			return resources >=6 && difficulty>3
		}
	},
	
	{
		name: "Insula",
		letter: "I",
		description: "A high density primitive apartment that houses 40 people. Requires 10 resources to construct",
		piecepositions:[{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}],
		unlocked: false,
		near: "building",
		tab: "house",
		effect(){
			p.population=40
			resources-=10
		},
		requires(){
			return resources >= 10 && difficulty>4
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
			resources -=0.25
		},
		requires(){
			return resources >= 0.25 &&difficulty>3

		}
	},
	{
		name: "Tiny Farm",
		letter: "TF",
		piecepositions: [{x:1,y:0},{x:0,y:0}],
		description: "A very small farm that produces 2 food. Requires 2 resources to construct",
		unlocked: true,
		near: "building",
		tab: "food",
		effect(){
			p.food=2
			resources-=2
			
		},
		requires(){
			return resources >= 2 && unemployed >=0
		}
	},
	{
		name: "Small Farm",
		letter: "F",
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}],
		description: "A small farm that produces 5 food. Requires 3 resources to construct and 1 person operating it",
		unlocked: true,
		near: "building",
		tab: "food",
		effect(){
			p.food=5
			resources-=3
			unemployed-=1
		},
		requires(){
			return resources >= 3 && unemployed >=1
		}
	},
	{
		name: "Medium Farm",
		letter: "MF",
		description: "A medium farm that produces 20 food. Requires 15 resources to construct and 3 people operating it",
		unlocked: false,
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1}],
		near: "building",
		tab: "food",
		effect(){
			p.food=20
			resources-=15
			unemployed-=3
		},
		requires(){
			return resources >=15 && unemployed>=3
		}
	},
	{
		name: "Large Farm",
		letter: "LF",
		description: "A large farm that produces 40 food. Requires 20 resources to construct, 5 people operating it and must be nearby a river for irrigation",
		unlocked: false,
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1}],
		near: "river",
		tab: "food",
		effect(){
			p.food=40
			resources-=20
			unemployed-=5
		},
		requires(){
			return resources >=15 && unemployed>=5
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
			luck+=2
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
		description: "A building for military operations that increases military power by 20. Double effectivness if entirely on a hill. Requires 6 resources to construct and 3 people operating it",
		unlocked: true,
		piecepositions: [{x:-1,y:-1},{x:0,y:0},{x:-1,y:1},{x:1,y:1},{x:1,y:-1}],
		near: "building",
		tab: "military",
		effect(){
			p.military=10
			resources-=6
			unemployed-=3
			p.hill = true
		},
		requires(){
			return resources >= 6 && unemployed>=3
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
			resources-=3
		},
		requires(){
			return resources >= 3&&difficulty>4
		}
		
	},
	{
		name: "Small Mine",
		letter: "SM",
		description: "A small mine to extract resources from a hill. Collects 3 resources per year. Must be on a hill and requires 3 resources and 1 person operating it",
		unlocked: true,
		piecepositions: [{x:0,y:0},{x:0,y:1}],
		near: "hill",
		tab: "resources",
		effect(){
			
			p.resources=3
			resources-=3
			unemployed-=1
		},
		requires(){
			return resources >=3 && unemployed>=1
		}
	},
	{
		name: "Medium Mine",
		letter: "MM",
		description: "A medium mine to extract resources from a hill. Collects 12 resources per year. Must be on a hill and requires 12 resources and 3 people operating it",
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}],
		unlocked: false,
		near: "hill",
		tab: "resources",
		effect(){
			p.resources=12
			resources-=15
			unemployed-=4
		},
		requires(){
			return resources >=15 && unemployed>=4&&difficulty>4
		}
	},
	{
		name: "Large Mine",
		letter: "LM",
		description: "A large mine to extract resources from a hill. Collects 40 resources per year. Must be on a hill and requires 20 resources and 8 people operating it",
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1}],
		unlocked: false,
		near: "hill",
		tab: "resources",
		effect(){
			p.resources=40
			resources-=20
			unemployed-=8
		},
		requires(){
			return resources >=20 && unemployed>=8
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
],
food:0,
population:0,
military:0,
resources:0,
river: false,
hill : false
}
for (const un of p.pieceROM){
	unlocked.push(un.unlocked)
}
function switchtab(){
	let futuretab = tabs.indexOf(tab)+1
	if (futuretab>tabs.length-1){futuretab=0}
	tab = tabs[futuretab]
	displaytab()
}
function removebuildings(){
	currentpop -= Math.floor(currentpop/3);
		
		for(i=gridstats.length-1;i>-1;i--){
		if (getRandomInt(0,2) == 0){
			for (let j = 0; j!=gridstats[i].positions.length;j++){
				grid[gridstats[i].positions[j].y/20].splice(grid[gridstats[i].positions[j].y/20].indexOf(gridstats[i].positions[j].x),1)
			}
			gridstats.splice(i,1)
			buildingamounts[i] -= 1
		}
		
		}
		render()
		displayUI()
}
function isallowed(){
localallowed = false
for (i=0,len=piece.length;i!=len;i++){
		
		if((position.x/20)+piece[i].x < 0 || (position.x/20)+piece[i].x > widthmax-1 || (position.y/20)+piece[i].y < 0||(position.y/20)+piece[i].y > heightmax-1){
			return false
			
		}
		
		else if (p.river &&!rivergrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)){
			return false
		}
		else if (grid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20) ||(!p.river&& (rivergrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)))){
			return false
			
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
		if (p.pieceROM[p_index].near != "building"){localallowed = false}
			for (i=0;i!=piece.length;i++){
			
			if (p.pieceROM[p_index].near ==  "river"){
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
	position = {x:(Math.ceil((event.clientX)/20)-1)*20,y:(Math.floor(event.clientY/20)-3)*20}

ctx.beginPath();

render()

	allowed = isallowed()
	
	
		
		for (i=0;i!=piece.length;i++){
			
			ctx.fillText(letter,position.x-(letter.length*4)+10+piece[i].x*20,position.y+10+piece[i].y*20);
			if (!allowed){
				ctx.fillStyle = "rgba(255,0,0,0.5)"
						ctx.fillRect(position.x+piece[i].x*20,position.y+piece[i].y*20,20,20)

			}
			else{		
			
			ctx.rect(position.x+piece[i].x*20,position.y+piece[i].y*20,20,20)
}
		}
ctx.stroke();
}
}
function disable(){
	if (disabling == false){
		disabling = true
	}
	else{
		disabling = false
	}
}
function render(){
	
	ctx.beginPath()
	ctx.clearRect(0,0,screen.width,screen.height)
	ctx.strokeStyle = "rgb(0,0,0)"
					ctx.fillStyle = "rgb(51, 166, 59)"
	ctx.fillRect(0,0, screen.width,screen.height)
	for (i=0;i!=hillgrid.length;i++){
		for (let j = 0; j!=hillgrid[i].length;j++){
			ctx.fillStyle = "rgb(103, 104, 107)"
			ctx.fillRect(hillgrid[i][j],i*20,20,20)
			ctx.fillStyle = "rgb(0,0,0)"
		}
	}		
for (i=0;i!=rivergrid.length;i++){
		for (let j = 0; j!=rivergrid[i].length;j++){
			ctx.fillStyle = "rgb(3,172,252)"
			ctx.fillRect(rivergrid[i][j],i*20,20,20)
			ctx.fillStyle = "rgb(0,0,0)"
		}
	}
	for(i=0;i!=gridstats.length;i++){
		for (let j = 0;j!=gridstats[i].positions.length;j++){
				ctx.fillText(gridstats[i].letter,gridstats[i].positions[j].x+10-gridstats[i].letter.length*4,gridstats[i].positions[j].y+10);
				ctx.rect(gridstats[i].positions[j].x,gridstats[i].positions[j].y,20,20)
		}
	}
	ctx.stroke()
	
	
	ctx.stroke()
}
document.onmousedown = function(event){
	
	if (ispainting && allowed&&position.y<canvas.height){
		click.play()
		p.population = 0
		p.military = 0
		p.resources = 0
		p.food = 0
		oldpop = unemployed
		gridposition = []
		p.pieceROM[p_index].effect()
		
		for (i=0;i!=piece.length;i++){
		gridposition.push({x:position.x+piece[i].x*20,y:position.y+piece[i].y*20})
		grid[(position.y/20+piece[i].y)].push(position.x+piece[i].x*20)
		
		
		}
		
		
		ishill = true
		if (p.hill){
			for (i=0;i!=gridposition.length;i++){
				if (!hillgrid[gridposition[i].y/20].includes(gridposition[i].x)){
					ishill = false
				}
			}
		}
		else{ishill = false}
		gridstats.push({
			letter:letter,
			population:p.population,
			employmentrequired: oldpop-unemployed,
			food:p.food,
			resources:p.resources,
			military:p.military*(ishill ? 2:1),
			positions:gridposition
		
		})
		first_turn = false
		allowed = false
		if (!p.pieceROM[p_index].requires()){
			piece = []
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

}
