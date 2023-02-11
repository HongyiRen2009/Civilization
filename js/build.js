const p = {
	pieceROM: [
	
	{
		name: "Canopy",
		letter: "C",
		description: "A small unit of housing that houses 1 person. Requires 1 resource to construct",
		piecepositions:[{x:0,y:0,img:{dx:1,dy:127}}],
		tab: "housing",
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
		name: "Hut",
		letter: "H",
		description: "A medium unit of housing that houses 6 people. Requires 5 resources to construct",
		piecepositions:[{x:0,y:0,img:{dx:22,dy:127}}],
		unlocked: true,
		near: "building",
		effect(){
			p.population=6
			resources-=5+Math.ceil(3*techstats.eff_infra)
		},
		tab: "housing",
		requires(){
			return resources >=5-Math.ceil(3*techstats.eff_infra) && difficulty>3
		}
	},
	{
		name: "Townhouse",
		letter: "TH",
		description: "A house for many people. Houses 20 people and requires 10 resources to construct",
		piecepositions:[{x:0,y:0,img:{dx:1,dy:148}},{x:1,y:0,img:{dx:22,dy:148}}],
		unlocked: false,
		near: "building",
		effect(){
			p.population=20
			resources-=10+Math.ceil(3*techstats.eff_infra)
		},
		tab: "housing",
		requires(){
			return resources >=10-Math.ceil(3*techstats.eff_infra)
		}
	},
	
	{
		name: "Insula",
		letter: "I",
		description: "A high density primitive apartment that houses 35 people. Requires 15 resources to construct",
		piecepositions:[{x:1,y:0,img:{dx:64,dy:127}},{x:0,y:0,img:{dx:43,dy:127}},{x:0,y:1,img:{dx:43,dy:148}},{x:1,y:1,img:{dx:43,dy:148}}],
		unlocked: false,
		near: "building",
		tab: "housing",
		effect(){
			p.population=35
			resources-=15+Math.ceil(3*techstats.eff_infra)
		},
		requires(){
			return resources >= 15-Math.ceil(3*techstats.eff_infra)
		}
	},
	
	{
		name: "Road",
		letter: "R",
		description: "A road that connects one place from the village to another. Requires 0.25 resources to construct",
		piecepositions:[{x:0,y:0,img:{dx:1,dy:22}}],
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
		piecepositions: [{x:1,y:0,img:{dx:22,dy:106}},{x:0,y:0,img:{dx:1,dy:106}}],
		description: "A very small farm that produces 1 food. Requires 3 resources to construct",
		unlocked: true,
		near: "building",
		tab: "farms",
		effect(){
			p.food=1
			resources-=2-Math.ceil(2*techstats.simple_farms)
			
		},
		requires(){
			return resources >= 2-Math.ceil(2*techstats.simple_farms) && unemployed >=0
		}
	},
	{
		name: "Small Farm",
		letter: "F",
		piecepositions: [{x:1,y:0, img:{dx:64,dy:85}},{x:0,y:0,img:{dx:43,dy:85}},{x:0,y:1,img:{dx:43,dy:106}},{x:1,y:1,img:{dx:64,dy:106}}],
		description: "A small farm that produces 3 food. Requires 4 resources to construct and 1 person operating it",
		unlocked: true,
		near: "building",
		tab: "farms",
		effect(){
			
			p.food=3
			resources-=4-Math.ceil(4*techstats.simple_farms)
			unemployed-=1
		},
		requires(){
			return resources >= 4-Math.ceil(4*techstats.simple_farms) && unemployed >=1
		}
	},
	{
		name: "Medium Farm",
		letter: "MF",
		description: "A medium farm that produces 12 food. Requires 12 resources to construct and 3 people operating it. Cannot be on a hill",
		unlocked: false,
		piecepositions: [{x:1,y:0,img:{dx:64, dy:43}},{x:0,y:0, img:{dx:43, dy:43}},{x:0,y:1,img:{dx:43, dy:64}},{x:1,y:1, img:{dx:64, dy:64}},{x:1,y:-1, img:{dx:64, dy:22}}],
		near: "!hill",
		tab: "farms",
		effect(){
			p.food=12
			resources-=12-Math.ceil(6*techstats.simple_farms)
			unemployed-=3
		},
		requires(){
			return resources >=12-Math.ceil(6*techstats.simple_farms) && unemployed>=3
		}
	},
	{
		name: "Large Farm",
		letter: "LF",
		description: "A large farm that produces 30 food. Requires 24 resources to construct, 5 people operating it. Must be nearby a river for irrigation and cannot be on a hill",
		unlocked: false,
		piecepositions: [{x:1,y:0, img:{dx:22, dy:64}},{x:0,y:0, img:{dx:1,dy:64}},{x:0,y:1,img:{dx:1,dy:85}},{x:1,y:1,img:{dx:22, dy:85}},{x:1,y:-1,img:{dx:22,dy:43}},{x:0,y:-1,img:{dx:1,dy:43}}],
		near: "river not",
		tab: "farms",
		effect(){
			p.food=30
			resources-=24-Math.ceil(24*techstats.simple_farms)
			unemployed-=5
		},
		requires(){
			return resources >=24-Math.ceil(24*techstats.simple_farms) && unemployed>=5
		}
	},
	{
		name: "Temple",
		letter: "T",
		description: "A temple to pray to RNGesus (increases luck). Requires 40 resources to construct and 10 people operating it",
		unlocked: false,
		piecepositions: [{x:1,y:0,img:{dx:190, dy:106}},{x:0,y:0,img:{dx:169, dy:106}},{x:0,y:1,img:{dx:169,dy:127}},{x:1,y:1,img:{dx:190,dy:127}},{x:1,y:-1,img:{dx:190,dy:85}},{x:0,y:-1,img:{dx:169,dy:85}},{x:-1,y:0,img:{dx:148,dy:106}},{x:-1,y:-1,img:{dx:148,dy:85}},{x:-1,y:1,img:{dx:148,dy:127}}],
		near: "building",
		tab: "misc",
		effect(){
			luck+=Math.ceil(2*(1+techstats.ded_worship))
			p.xp+=50
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
		description: "A building for military operations that increases military power by 10. Double effectivness if entirely on a hill. Requires 6 resources to construct and 3 people operating it. Requires 5 resources every turn to maintain",
		unlocked: false,
		piecepositions: [{x:1,y:1,img:{dx:127, dy:106}},{x:0,y:0, img:{dx:106, dy:85}},{x:-1,y:1, img:{dx:85, dy:106}},{x:-1,y:-1,img:{dx:85, dy:64}},{x:1,y:-1, img:{dx:127, dy:64}}],
		near: "building",
		tab: "military",
		effect(){
			p.military=10*(p.entirehill ? 2:1)
			resources-=6
			p.resources-=5
			unemployed-=3
			
		},
		requires(){
			return resources >= 6 && unemployed>=3
		}
		
	},
	{
		name: "Barracks",
		letter: "BR",
		description: "A building to store weapons and train soldiers, increasing your military 10%. Requires 20 resources to construct and 10 people operating it. Gains no bonuses for being on a hill. Requires 20 resources every turn to maintain",
		unlocked: false,
		piecepositions: [{x:-1,y:0, img:{dx:85, dy:22}},{x:0,y:0, img:{dx:106, dy:22}},{x:0,y:1, img:{dx:106, dy:43}},{x:-1,y:1, img:{dx:85, dy:43}},{x:-1,y:-1, img:{dx:85, dy:1}},{x:0,y:-1, img:{dx:106, dy:1}},{x:1,y:-1, img:{dx:127, dy:1}},{x:1,y:1, img:{dx:127, dy:43}}],
		near: "building",
		tab: "military",
		effect(){
			modifiers.military +=0.1
			resources-=20
			p.resources-=20
			unemployed-=10
			
		},
		requires(){
			return resources >= 20 && unemployed>=10
		}
		
	},
	{
		name: "Fortress",
		letter: "FT",
		description: "A massive structure that offers substantial defense. Increases military power by 150. Requires 70 resources to construct and 20 people operating it. Double military if on a hill. Requires 35 resources every turn to maintain",
		unlocked: false,
		piecepositions: [{x:-1,y:0, img:{dx:85, dy:148}},{x:0,y:0, img:{dx:106, dy:148}},{x:0,y:1, img:{dx:106, dy:169}},{x:-1,y:1, img:{dx:85, dy: 169}},{x:-1,y:-1, img:{dx:85, dy:127}},{x:0,y:-1, img:{dx:106, dy:127}},{x:1,y:-1, img:{dx:127, dy:127}},{x:1,y:1, img:{dx:127, dy:169}},{x:1,y:0, img:{dx:127, dy:148}}],
		near: "building",
		tab: "military",
		effect(){
			p.military = Math.floor(150*(p.entirehill ? 2:1)*(1+techstats.archery))
			resources-=70
			p.resources-=35
			unemployed-=8
			
		},
		requires(){
			return resources >= 70 && unemployed>=8
		}
		
	},
	{
		name: "Bridge",
		letter: "B",
		description: "A brige to connect one side of the river to another. Must be on a river to construct and requires 3 resources",
		unlocked: true,
		piecepositions: [{x:0,y:0, img:{dx:22, dy:22}}],
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
		description: "A small mine to extract resources from a hill. Collects 2 resources per year. Requires 4 resources and 1 person operating it",
		unlocked: true,
		piecepositions: [{x:0,y:0,img:{dx:1, dy:169}},{x:0,y:1, img:{dx:1, dy:190}}],
		near: "building",
		tab: "mines",
		effect(){
			
			p.resources=2
			resources-=4-Math.ceil(techstats.planned_mines*4)
			unemployed-=1
		},
		requires(){
			return resources >=4-Math.ceil(techstats.planned_mines*4) && unemployed>=1
		}
	},
	{
		name: "Medium Mine",
		letter: "MM",
		description: "A medium mine to extract resources from a hill. Collects 18 resources per year. Must be on a hill and requires 24 resources and 5 people operating it",
		piecepositions: [{x:-1,y:0, img:{dx:22, dy:169}},{x:0,y:0, img:{dx:43, dy:169}},{x:1,y:0, img:{dx:64, dy:169}},{x:-1,y:1, img:{dx:22, dy:190}},{x:0,y:1, img:{dx:43, dy:190}},{x:1,y:1, img:{dx:64, dy:190}}],
		unlocked: false,
		near: "hill",
		tab: "mines",
		effect(){
			p.resources=18
			resources-=24-Math.ceil(techstats.planned_mines*24)
			unemployed-=5
		},
		requires(){
			return resources >=24-Math.ceil(techstats.planned_mines*24) && unemployed>=5
		}
	},
	{
		name: "Large Mine",
		letter: "LM",
		description: "A large mine to extract resources from a hill. Collects 70 resources per year. Must be on entirely on a hill and requires 70 resources and 8 people operating it. Must be entirely on a hill",
		piecepositions: [
			{x:1,y:0, img:{dx:190, dy:22}},{x:0,y:0, img:{dx:169, dy:22}}, {x:-1, y:0, img:{dx:148, dy:22}},
			{x:0,y:1, img:{dx:190, dy:43}},{x:1,y:1, img:{dx:169, dy:43}}, {x:-1, y:1, img:{dx:148, dy:43}},
			{x:0,y:2, img:{dx:190, dy:64}},{x:1,y:2, img:{dx:169, dy:64}}, {x:-1, y:2, img:{dx:148, dy:64}},
			{x:1,y:-1, img:{dx:190, dy:1}},{x:0,y:-1, img:{dx:169, dy:1}}, {x:-1, y:-1, img:{dx:148, dy:1}}],
		unlocked: false,
		near: "entire",
		tab: "mines",
		effect(){
			p.resources=70
			resources-=70-Math.ceil(techstats.planned_mines*70)
			unemployed-=8
		},
		requires(){
			return resources >=70-Math.ceil(techstats.planned_mines*70) && unemployed>=8
		}
	},
	{
		name: "Mega Temple",
		letter: "MT",
		description: "A mega temple to directly contact god. Build one to beat the game. Requires 2000 resources and 100 people praying",
	piecepositions: [{x:1,y:0, img:{dx:254, dy:127}},{x:0,y:0, img:{dx:232, dy:127}},{x:0,y:1, img:{dx:232, dy:148}},{x:1,y:1, img:{dx:254, dy:148}},{x:1,y:-1, img:{dx:254, dy:106}},{x:0,y:-1, img:{dx:232, dy:106}},{x:-1,y:0, img:{dx:211, dy:127}},{x:-1,y:-1, img:{dx:211, dy:106}},{x:-1,y:1, img:{dx:211, dy:148}},{x:2,y:1, img:{dx: 275, dy:148}},{x:2,y:0, img:{dx:275, dy:127}},{x:2,y:-1, img:{dx:275, dy:106}},{x:2,y:-2, img:{dx:275, dy:85}},{x:1,y:-2, img:{dx:254, dy:85}},{x:0,y:-2, img:{dx:232, dy:85}},{x:-1,y:-2, img:{dx:211, dy:85}}],
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
			if((Math.floor(position.x-screen.width/2)/20)-spawnX+30>p.cityincreases.right){
			p.cityincreases.right = (Math.floor(position.x-screen.width/2)/20)-spawnX+30
			}
			if((Math.floor(position.x-screen.width/2)/20)-spawnX-30<p.cityincreases.left){
				p.cityincreases.left = (Math.floor(position.x-screen.width/2)/20)-spawnX-30
			}
			if(Math.floor((position.y-screen.height/2)/20)-spawnY+30>p.cityincreases.down){
				p.cityincreases.down = (Math.floor(position.y-screen.height/2)/20)-spawnY+30
			}
			if(Math.floor((position.y-screen.height/2)/20)-spawnY-30<p.cityincreases.up){
				p.cityincreases.up = (Math.floor(position.y-screen.height/2)/20)-spawnY-30
			}

		},
		requires(){
			return resources >=this.amountbought**3
		}
	},
	{
		name: "Trade School",
		letter: "TS",
		description: "A school for teaching miners and farmers.<br>Increases all production by 20% and requires 200 resources and 15 people to build.",
		unlocked: false,
		piecepositions: [{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:1}],
		near: "building",
		tab: "misc",
		effect(){
			modifiers.food+=0.2
			modifiers.resources+=0.2
			resources-=200
			unemployed-=15
		},
		requires(){
			return resources>=200 && unemployed>=15
		}
	},
	{
		name: "Workshop",
		letter: "W",
		description: "A workshop for practicing and learning. Increases wisdom by 50 but uses up 5 resources each round<br>Requires 20 resources and 5 people to build.",
		unlocked: false,
		piecepositions: [{x:0,y:0},{x:-1,y:0},{x:0,y:1}],
		near: "building",
		tab: "misc",
		effect(){
			p.xp=50
			p.resources=-5
			resources-=20
			unemployed-=5
		},
		requires(){
			return resources>=20 && unemployed>=5
		}
	},
	{
		name: "Fishery",
		letter: "F",
		description: "A fishery for fishing. Every years' catch will vary in amount of food. Requires 10 resources and 2 people to build",
		unlocked: false,
		piecepositions: [
												
						{x:-1,y:1},{x:0,y:1}, {x:1,y:1},
						{x:1,y:0},
						{x:-1,y:-1},{x:0,y:-1}, {x:1,y:-1}						
												],
		near: "river",
		tab: "farms",
		effect(){
			p.food = getRandomInt(10,15)
			resources-=10
			p.fish = true
			unemployed-=2
		},
		requires(){
			return resources>=10 && unemployed>=2
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
fish:false,
xp:0,
river: false,
hill : false,
entirehill : false,
}
for (const un of p.pieceROM){
	unlocked.push(un.unlocked)
}


function removebuildings(intensity = 4,onhill=false){
	remove = onhill
		for(i=gridstats.length-1;i>-1;i--){
		if (getRandomInt(0,intensity) == 0){
		if(onhill){
			remove = false
			for (let j = 0; j!=gridstats[i].positions.length;j++){
				if(hillgrid[gridstats[i].positions[j].y/20].includes(gridstats[i].positions[j].x)){
					remove=true
				}
			}
		}
		else{
			remove=true
		}
		if (remove){
			
			buildingamounts[gridstats[i].index]-=1
			gridstats[i].disabled=true
			currentpop-=gridstats[i].employmentrequired
		
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
		if (p.pieceROM[p_index].near.includes("!hill")||p.pieceROM[p_index].near.includes("not")){
			if (hillgrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)){
				return false
				

			}
		}
		if (p.pieceROM[p_index].near.includes("entire")){
			if (!hillgrid[(position.y/20)+piece[i].y].includes(position.x+piece[i].x*20)){
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
		if (p.pieceROM[p_index].near != "building"&&(!p.pieceROM[p_index].near.includes("!hill")&&!p.pieceROM[p_index].near.includes("entire"))){localallowed = false}
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

canvas.onmousemove = function(event){
	
		
if (ispainting){
	
	position = {x:(Math.ceil((event.clientX)/20)-1+scrollX)*20,y:(Math.round(event.clientY/20)-3+scrollY)*20}
	if (position.x!=oldposition.x||position.y!=oldposition.y){
		allowed = false
	oldposition.x=position.x
	oldposition.y=position.y
	


render()
ctx.beginPath();

	allowed = isallowed()
	
	
		
		for (len = piece.length,i=0;i!=len;i++){
			
			if (!allowed){
				ctx.fillStyle = "rgba(255,0,0,0.5)"
				if(psettings.noimage){
					ctx.fillText(letter,position.x+10-(letter.length*4)-(scrollX*20)+piece[i].x*20,position.y+10-(scrollY*20)+piece[i].y*20);
				}
				else{
				ctx.drawImage(document.getElementById("cloudimg"),p.pieceROM[p_index].piecepositions[i].img.dx,p.pieceROM[p_index].piecepositions[i].img.dy,20,20,position.x-(scrollX*20)+piece[i].x*20,position.y+(-scrollY+piece[i].y)*20,20,20)
				}
				debugger
				ctx.fillRect(position.x-(scrollX*20)+piece[i].x*20,position.y+(-scrollY+piece[i].y)*20,20,20)
				

			}
			else{		
			ctx.strokeStyle = "black"
			if(psettings.noimage){
				ctx.fillText(letter,position.x+10-(letter.length*4)-(scrollX*20)+piece[i].x*20,position.y+10-(scrollY*20)+piece[i].y*20);
				ctx.rect(position.x-(scrollX*20)+piece[i].x*20,position.y+(-scrollY+piece[i].y)*20,20,20)
			}
			else{
			ctx.drawImage(document.getElementById("cloudimg"),p.pieceROM[p_index].piecepositions[i].img.dx,p.pieceROM[p_index].piecepositions[i].img.dy,20,20,position.x-(scrollX*20)+piece[i].x*20,position.y+(-scrollY+piece[i].y)*20,20,20)
			}
		}
		}
		ctx.stroke();


}
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
	ctx.fillStyle = "rgb(103, 104, 107)"
	for (i=scrollY;i<=Math.min(499,scrollY+heightmax);i++){
		for (let j = 0; j<hillgrid[i].length;j++){
			if (hillgrid[i][j]-20<scrollX*20+widthmax*20&&hillgrid[i][j]+20>scrollX*20){
			
			ctx.fillRect(hillgrid[i][j]-(scrollX*20),(i-scrollY)*20,20,20)
			
			}
		}
	}
	ctx.fillStyle = "rgba(0,0,0,1)"
	ctx.fillStyle = "rgb(3,172,252)"	
	for (i=scrollY;i<=Math.min(499,scrollY+heightmax);i++){
		for (let j = 0; j!=rivergrid[i].length;j++){
			if (rivergrid[i][j]-20<scrollX*20+widthmax*20&&rivergrid[i][j]+20>scrollX*20){
			
			ctx.fillRect(rivergrid[i][j]-(scrollX*20),(i-scrollY)*20,20,20)
			
			}
		}
	}
	ctx.fillStyle = "rgba(0,0,0,1)"
	
	ctx.closePath()

	if (psettings.noimage){
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
					ctx.closePath()
			ctx.stroke()
			ctx.stroke()
					
					
			}
		
			
			
		}
		
	}
	else{
	for(len = gridstats.length,i=0;i<len;i++){
		ctx.beginPath()
		
		
		
		for (let j = 0,len = gridstats[i].positions.length;j!=len;j++){
			if(gridstats[i].positions[j].x-20<scrollX*20+widthmax*20&&gridstats[i].positions[j].x+20>scrollX*20){
				ctx.drawImage(document.getElementById("cloudimg"),gridstats[i].positions[j].img.dx,gridstats[i].positions[j].img.dy,20,20,gridstats[i].positions[j].x-scrollX*20,gridstats[i].positions[j].y-scrollY*20,20,20)
				ctx.stroke()

			}
				
				
		}
	
		
		
	}
	
}
	renderclouds()

	
	
	
	
}
canvas.onmousedown = function(event){
	
	if (ispainting && allowed&&position.y-scrollY*20<canvas.height){
		allowed = false
		click.play()
		p.population = 0
		p.military = 0
		p.resources = 0
		p.food = 0
		p.xp=0
		p.fish = 0
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
			
		gridposition.push({x:position.x+piece[i].x*20,y:position.y+piece[i].y*20,img:p.pieceROM[p_index].piecepositions[i].img})
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
			xp:p.xp,
			fish:p.fish,
			positions:gridposition.slice(0),
			resourcerefund: oldresources-resources,
			disabled: false
		})
		xp+=Math.ceil((oldresources-resources)*(1+techstats.innovation)*2)
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
	resources+=Math.floor(gridstats[buildingindex].resourcerefund/2)
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
	if(event.key=="Escape"){
		if(canvas.style.display=="block"){
					pause_menu()
				}
	}
	if(techstats.exploration&&document.getElementById("popup_block_buttons").style.display!="block"&&canvas.style.display=="block"){
		if(psettings.arrowkeys){
			switch(event.key){
		
				case "ArrowUp":
					if (scrollY>0&&scrollY-spawnY>max.up){
					move(0,-1)
					}
					break
				case "ArrowDown":
					if (scrollY<499-heightmax&&scrollY-spawnY<max.down){
					move(0,1)
					}
					break
				case "ArrowLeft":
					if (scrollX>0&&scrollX-spawnX>max.left){
					move(-1,0)
					}
					break
				case "ArrowRight":
					if (scrollX<499&&scrollX-spawnX<max.right){
					move(1,0)
					}
					break
				
				//case "r":
				//rotate()
				//break
			}
		}
		else{
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
		selectcontainer.insertBefore(button, document.getElementById("year_label"))
		}
		
	}
}
