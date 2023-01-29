function difficultyscreen(){

		const ele = document.getElementsByClassName("new_button")
		let k = 1
		for (const el of ele){
				if (k==2){
					break
				}
				el.innerHTML = "New Game"
				el.disabled = false;
				el.id = k
				el.onclick = function(){newgame(parseFloat(el.id))}
				k+=0.5
			
		}
	document.getElementById("difficulty-flex").style.display = 'flex'
	document.getElementById("back_button").hidden = false
	document.getElementById("back_button").onclick = function(){menu()}
	document.getElementById("title_start").innerHTML = 'Select Difficulty'
	document.getElementById("start-flex").style.display = "none"
	document.getElementsByTagName('canvas')[0].style.display = 'none'
}
function confirmclear(index){
	confirmation[2].choosetext(index)
	displaypopup(2,confirmation)
}
function clearsave(index){
	localStorage.removeItem('griditems'+index);
	localStorage.removeItem('scrollinfo'+index);
	localStorage.removeItem('pstats'+index);
	localStorage.removeItem('slot'+index,);
	localStorage.removeItem('marketmod'+index);
	localStorage.removeItem('marketitems'+index);
}
function info(){
	document.body.style.overflowY = "scroll"
ispainting = false
removing = false
repairing = false
	const ele = document.getElementsByClassName("infotext")
	for (let j=ele.length-1;j>=0;j--){
		ele[j].remove();
	}
	const ele2 = document.getElementsByClassName("info-grid")
	for (let j=ele2.length-1;j>=0;j--){
		ele2[j].remove();
	}
	document.getElementById("info-flex").style.display = 'flex'
	document.getElementById("boss_health_container").style.display = 'none'
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("back_button").hidden = false
	document.getElementById("back_button").onclick = function(){start()}
	document.getElementById("stats").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	
		for (const building of p.pieceROM){
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
function menu(){
	build_music.pause()
	market_music.pause()
	removing=false
	ispainting = false
	repairing = false
document.getElementById("achievement-flex").style.display = 'none'
document.getElementById("difficulty-flex").style.display = 'none'
document.getElementById("title_start").innerHTML = 'Civilization'
	document.getElementById("back_button").hidden = true
	document.getElementById("title_start").hidden = false
	document.getElementById("boss_health_container").display = "none"
	document.getElementById("stats").style.display = "none"
	document.getElementById("start-flex").style.display = "grid"
	document.body.style.overflow = "hidden"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	document.getElementsByTagName('canvas')[0].style.display = 'none'
}
function savescreen(save){
	
	removing=false
	ispainting = false
	repairing = false
	
	document.getElementById("back_button").hidden = false
	const ele = document.getElementsByClassName("save_button")
		
		i=1
		for (const el of ele){
			el.disabled = false
			el.innerHTML = "Save Game"
			el.onclick = function(){savegame(el.id)}
			i++
		}
	const ele2 = document.getElementsByClassName("clear_button")
		i=1
		for (const el of ele2){
		if (localStorage.getItem('pstats'+i) == null){
				el.disabled = true;
			}
			else{el.disabled=false}
			i++
		}
	if (!save){
		document.getElementById("back_button").onclick = function(){menu()}
		const ele = document.getElementsByClassName("save_button")
		const ele2 = document.getElementsByClassName("clear_button")
		i=1
		for (const el of ele2){
		if (localStorage.getItem('pstats'+i) == null){
				el.disabled = true;
			}
			else {
				el.disabled=false
			}
			i++
		}
		i=1
		for (const el of ele){
			el.innerHTML = "Load Game"
			el.onclick = function(){load(el.id)}
			if (localStorage.getItem('pstats'+i) == null){
				el.disabled = true;
			}
			i++
		}
	}
	else{
		
		document.getElementById("back_button").onclick = function(){start()}
		
	}
	for (i=1;i<6;i++){
		const localstats = JSON.parse(localStorage.getItem("pstats"+i))
		const ele = document.getElementsByClassName("savedes"+i)
			for (let j=ele.length-1;j>=0;j--){
				ele[j].remove();
			}
		if (localStorage.getItem('pstats'+i) != null){
			
			const grid = document.getElementById("save-grid"+i)
			difficultyname=""
			debugger
			switch(localstats.difficultymultiplier){
				case 1:
				difficultyname = "copper"
				break
				case 1.5:
				difficultyname="iron"
				break
				case 2:
				difficultyname="diamond"
			}
			const informationlist = ["difficulty: "+ difficultyname,"year: " + localstats.difficulty, "population: " + localstats.currentpop, "resources: " + localstats.resources, "military: " + localstats.military]
			for (let j=0;j<5;j++){
				
				const des = document.createElement("p")
				des.innerHTML = informationlist[j]
				des.className = "savedes"+i
				
				grid.appendChild(des)
			}
		}
		else{
			const grid = document.getElementById("save-grid"+i)

			const des = document.createElement("p")
				des.innerHTML = "Empty Slot"
				des.className = "savedes"+i
				
				grid.appendChild(des)
		}
	}
	document.getElementById("title_start").innerHTML = "Select Save"
	document.getElementById("stats").style.display = "none"
	document.getElementById("start-flex").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "flex"
	document.getElementById("boss_health_container").style.display = 'none'
	document.getElementsByTagName('canvas')[0].style.display = 'none'
}
function techscreen(){
	ispainting = false
removing = false
repairing = false
	build_music.pause()	
	tech_music.play()
	document.getElementById("info-flex").style.display = 'none'
	document.body.overflowY="scroll"
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("tech-tree").style.display = 'grid'
	document.getElementById("back_button").hidden = false
	document.getElementsByTagName('canvas')[0].style.display = 'none'
	document.getElementById("back_button").onclick = function(){start()}
	document.getElementById("stats").style.display = "none"
	document.getElementById("boss_health_container").style.display = 'none'
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	const categories = ["Farming", "Farming II","Housing", "Mining","Mining II", "Intelligence", "Intelligence II","Virtue","Virtue II","Military","Military II"]
	const techgrid = document.getElementById("tech-tree")
	const linecontainer = document.getElementById('techlinecontainer')
	linecontainer.style.display= "block"
	linecontainer.innerHTML=""
	techgrid.innerHTML=""
	
	const techelements = []
	const descriptioncontainer = document.createElement("div")
	const destitle = document.createElement("h1")
	const cost = document.createElement("p")
	const points = document.createElement("p")
	const ifyears = document.createElement(("p"))
	const reserachbutton = document.createElement("button")
	const years = document.createElement("div")
	points.innerHTML="Research Points:<br> " +research_points
	destitle.style.gridRow="1"
	destitle.style.gridColumn="2"	
	points.style.gridRow="1"
	points.style.gridColumn="4"
	points.style.fontSize = "20px"
	cost.style.gridRow="1"
	cost.style.gridColumn="3"
	cost.style.fontSize = "20px"
	document.body.style.overflowY = "scroll"
	const des = document.createElement("p")
	des.style.gridRow="2"
	ifyears.style.gridRow="2"
	ifyears.style.gridColumn="2"
	reserachbutton.style.gridColumn="3"
	reserachbutton.style.gridRow="2"
	reserachbutton.style.maxWidth="100px"
	reserachbutton.style.maxHeight="40px"
	reserachbutton.hidden=true
	des.style.gridColumn="2"
	years.className="techyears"
	years.style.gridRow = "1/ span " +tech.length+1
	years.style.gridColumn = categories.length+1
	for (i=0;i<4;i++){
		const yeardes = document.createElement("p")
		yeardes.style.gridRow = i+1
		switch(i){
			case 0:
				yeardes.innerHTML="<h1 style = 'font-size:20px'>Tribal-Age</h1><br>years 5-20"
				break
			case 1:
				yeardes.innerHTML="<h1 style = 'font-size:20px'>Pre-Diplomacy</h1><br>years 20-40"
				break
			case 3:
				yeardes.innerHTML="<h1 style = 'font-size:20px'>Post_Diplomacy</h1><br>years 40-infinity"
				break
		}
		years.appendChild(yeardes)
	}
	descriptioncontainer.className='techcontainer'
	descriptioncontainer.style.gridColumn = `1/ span ${categories.length}`
	descriptioncontainer.style.gridRow = tech.length+1
	descriptioncontainer.appendChild(destitle)
	descriptioncontainer.appendChild(des)
	descriptioncontainer.appendChild(cost)
	descriptioncontainer.appendChild(ifyears)
	descriptioncontainer.appendChild(reserachbutton)
	descriptioncontainer.appendChild(points)
	techgrid.appendChild(years)
	
	techgrid.style.gridTemplateColumns = (`${(screen.width*0.8)/categories.length}px `).repeat(categories.length)+"160px"
	techgrid.style.gridTemplateRows = ((screen.height-500)/tech.length+"px ").repeat(tech.length)+"200px"
	linecontainer.setAttribute("height", function(){const techwidth = techgrid.getBoundingClientRect(); return techwidth.height});
	linecontainer.setAttribute("width", function(){const techwidth = techgrid.getBoundingClientRect(); return techwidth.width});
	techgrid.appendChild(descriptioncontainer)
	descriptioncontainer.addEventListener("mouseover", function(){
		descriptioncontainer.classList.add("hover")
	})
	descriptioncontainer.addEventListener("mouseout", function(){
		descriptioncontainer.classList.remove("hover")
	})
	
	techgrid.onclick =  function(){
		if (!descriptioncontainer.classList.contains("hover")){
		const techoptions = document.getElementsByClassName("techbutton")
		destitle.innerHTML=""
		des.innerHTML=""
		cost.innerHTML=""
		reserachbutton.hidden=true
		for (const el of techoptions){
			
			if (el.classList.contains("hover")){
			techclick.play()
			el.style.border = "3px solid yellow"
			const techindex = JSON.parse(el.id)
			reserachbutton.hidden=false
			destitle.innerHTML=tech[techindex[0]][techindex[1]].name
			des.innerHTML=tech[techindex[0]][techindex[1]].description
			
			reserachbutton.innerHTML="Research"
			
			cost.innerHTML=`<strong class = 'color-${research_points>=tech[techindex[0]][techindex[1]].cost ? "g":"r"}'> Research cost: ${tech[techindex[0]][techindex[1]].cost}</strong>`
			reserachbutton.disabled = !(research_points>=tech[techindex[0]][techindex[1]].cost&&(!tech[techindex[0]][techindex[1]].unlocked||tech[techindex[0]][techindex[1]].unlocktwice))			
			for (const el of tech[techindex[0]][techindex[1]].requires){
				if (tech[el[0]][el[1]].unlocked==false){
					reserachbutton.disabled=true
					break
				}
			}
			switch(techindex[0]){
				case 0:
					if (difficulty<5){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Tribal Age</strong>"
					}
					break
				case 1:
					if (difficulty<10){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Pre-Diplomacy Age</strong>"
					}
				break
				case 2:
					if (difficulty<10){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Pre-Diplomacy Age</strong>"
					}
				break
				case 3:
					if (difficulty<30){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Post-Diplomacy Age</strong>"
					}
				break
				case 4:
					if (difficulty<30){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Post-Diplomacy Age</strong>"
					}
				break
				case 5:
					if (difficulty<30){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Post-Diplomacy Age</strong>"
					}
				break
			}
			reserachbutton.onclick = function(){
				techbuy.play()
				const success = document.createElement("h1")
				success.className = "status"
				success.style.animation = 'none';
				success.offsetHeight; /* trigger reflow */
				success.style.animation = null; 
			document.body.appendChild(success)
			success.innerHTML = "<strong class = 'color-g'>Tech Researched</strong>"
				research_points-=tech[techindex[0]][techindex[1]].cost
				tech[techindex[0]][techindex[1]].effect()
				
				tech[techindex[0]][techindex[1]].unlocked = true
				destitle.innerHTML=tech[techindex[0]][techindex[1]].name
			des.innerHTML=tech[techindex[0]][techindex[1]].description
				el.style.backgroundColor = "#bfb965"
			
			cost.innerHTML=`<strong class = 'color-${research_points>=tech[techindex[0]][techindex[1]].cost ? "g":"r"}'> Research cost: ${tech[techindex[0]][techindex[1]].cost}</strong>`
			debugger
			reserachbutton.disabled = !(research_points>=tech[techindex[0]][techindex[1]].cost&&(!tech[techindex[0]][techindex[1]].unlocked||tech[techindex[0]][techindex[1]].unlocktwice))	
			success.style.animation = "done 2s linear 0s 1 normal forwards"
			displayUI()
			setTimeout(function(){success.remove()},2000)
			}
			}
			else{
				el.style.border = "3px solid black"
			}
		}
	}
	}
	for (i=0,len=tech.length;i<len;i++){
		
		for (let j=0,leng=tech[i].length;j<leng;j++){
			const techoption = document.createElement("button")
			techoption.style.gridRow=i+1
			techoption.style.gridColumn=categories.indexOf(tech[i][j].category)+1
			techoption.className = "techbutton"
			techoption.id = JSON.stringify([i,j])
			
			techoption.addEventListener("mouseover", function(){
				techoption.classList.add("hover")
			})
			techoption.addEventListener("mouseout", function(){
				techoption.classList.remove("hover")
			})
			if (tech[i][j].unlocked){
				techoption.style.backgroundColor = "#bfb965"
			}
			else{
				techoption.style.backgroundColor = "#545232"
			}
			techgrid.appendChild(techoption)
			for (const el of tech[i][j].requires){
				let techelement = null
				
				for (const teposition of techelements){
					if (el[0]==teposition.techposition[0]&&el[1]==teposition.techposition[1]){
						techelement=teposition
					}
				}
				
				const techline = document.createElementNS('http://www.w3.org/2000/svg','line');
				
				const thisposition = techoption.getBoundingClientRect()
				const thatposition = techelement.element.getBoundingClientRect()
				
				techline.setAttribute('x1',thisposition.x+15);
				techline.setAttribute('y1',thisposition.y+15);
				techline.setAttribute('x2',thatposition.x+15);
				techline.setAttribute('y2',thatposition.y+15);
				techline.style.stroke = "black"
				techline.style.strokeWidth = "2"
				linecontainer.append(techline);
			}
			
			
			
			techelements.push({element: techoption, techposition: [i,j]})

		}
	}
	
	
}

function savegame(bindex){

	confirmation[0].choosetext(bindex)
	displaypopup(0,confirmation)
	
}
function save(bindex){
	const ele = document.getElementsByClassName("savedes"+bindex)
	for (i=ele.length-1;i>=0;i--){
		ele[i].remove();
	}
	const blueprintsitems = []
	
	for (len = m.marketselections.length, i = len-7;i<len-1;i++){
			blueprintsitems.push(m.marketselections[i].stock)

	}
	const localunlocked = []
	for (const un of tech){
		for (const unn of un){
			localunlocked.push(unn.unlocked)
		}
	}
	save_slot = bindex
	
	localStorage.setItem('griditems'+bindex, JSON.stringify({grid,rivergrid,hillgrid,gridstats}));
	localStorage.setItem('scrollinfo'+bindex, JSON.stringify([scrollX,scrollY,spawnX,spawnY,max]));
	localStorage.setItem('pstats'+bindex, JSON.stringify({localunlocked,techstats,research_points,difficultymultiplier,unlocked,luck,buildingamounts,temporaryeffects,reputation,difficulty,modifiers,currentpop,military,resources}));
	localStorage.setItem('slot'+bindex, JSON.stringify(save_slot));
	localStorage.setItem('marketmod'+bindex, JSON.stringify([m.assissin,m.spy,m.rebel,m.phase]));
	localStorage.setItem('marketitems'+bindex, JSON.stringify(marketitems));

	document.getElementById("save-flex").style.display = "none"
	start()
}
function load(bindex){
	buildingamounts.length = 0
	rivergrid.length=0
	gridstats.length=0
	grid.length=0
	hillgrid.length=0
	marketitems.length=0
	unlocked.length=0
	for (const el of JSON.parse(localStorage.getItem('griditems'+bindex)).grid){
		grid.push(el)
	}
	const localscrolldata = JSON.parse(localStorage.getItem('scrollinfo'+bindex));
	resources = JSON.parse(localStorage.getItem('pstats'+bindex)).resources;
	currentpop = JSON.parse(localStorage.getItem('pstats'+bindex)).currentpop;
	reputation = JSON.parse(localStorage.getItem('pstats'+bindex)).reputation;
	const localtechstats = []
	for (const obj in JSON.parse(localStorage.getItem('pstats'+bindex)).techstats){
		localtechstats.push(JSON.parse(localStorage.getItem('pstats'+bindex)).techstats[obj])
		
	}
	i=0
	for (const obj in techstats){
		
		
  		techstats[obj] = localtechstats[i];
		i+=1
	}
	i=0
	for (const un of tech){
		for (const unn of un){
			
			unn.unlocked = JSON.parse(localStorage.getItem('pstats'+bindex)).localunlocked[i]
			i+=1
		}
	}
	research_points = JSON.parse(localStorage.getItem('pstats'+bindex)).research_points;
	for (const el of JSON.parse(localStorage.getItem('griditems'+bindex)).rivergrid){
		rivergrid.push(el)
	}
	for (const el of JSON.parse(localStorage.getItem('griditems'+bindex)).hillgrid){
		hillgrid.push(el)
	}
	for (const el of JSON.parse(localStorage.getItem('griditems'+bindex)).gridstats){
		gridstats.push(el)
	}
	const localmod = JSON.parse(localStorage.getItem('pstats'+bindex)).modifiers;
	for (const el of JSON.parse(localStorage.getItem('pstats'+bindex)).temporaryeffects){
		temporaryeffects.push(el)
	}
	save_slot = JSON.parse(localStorage.getItem('slot'+bindex));
	difficulty = JSON.parse(localStorage.getItem('pstats'+bindex)).difficulty;
	difficultymultiplier = JSON.parse(localStorage.getItem('pstats'+bindex)).difficultymultiplier;
	for (const el of JSON.parse(localStorage.getItem('pstats'+bindex)).buildingamounts){
		buildingamounts.push(el)
	}
	for (const el of JSON.parse(localStorage.getItem('pstats'+bindex)).unlocked){
		unlocked.push(el)
	}
	for (const el of JSON.parse(localStorage.getItem('marketitems'+bindex))){
		marketitems.push(el)
	}
	luck = JSON.parse(localStorage.getItem('luck'+bindex));
	const localmarketmod = JSON.parse(localStorage.getItem('marketmod'+bindex));
	m.assissin = localmarketmod[0]
	m.spy = localmarketmod[1]
	m.rebel = localmarketmod[2]
	m.phase = localmarketmod[3]
	let j = 0
	spawnX = localscrolldata[2]
	spawnY = localscrolldata[3]
	scrollX = localscrolldata[0]
	scrollY = localscrolldata[1]
	max.up=localscrolldata[4].up
	max.down=localscrolldata[4].down
	max.left=localscrolldata[4].left
	max.right=localscrolldata[4].right
	
	if (gridstats.length>0){
		first_turn=false
	}
	modifiers.food = localmod.food
	modifiers.resources = localmod.resources
	modifiers.military = localmod.military
	
	start()
}
function newgame(difficult){
	rivergrid.length=0
	gridstats.length=0
	grid.length=0
	switchtab()
	hillgrid.length=0
	temporaryeffects.length=0
	buildingamounts.length = 0
	punishamount = 0
	spawnX=getRandomInt(100,300)
	spawnY=getRandomInt(100,300)
	scrollX=spawnX
	scrollY=spawnY
	for (i=0;i<p.pieceROM.length;i++){
	buildingamounts.push(0);
}	
	modifiers = {
	food: 1.5-difficult,
	resources: 1.5-difficult,
	military: 0
	}
	first_turn=true
	save_slot=null
	resources = 8
	difficulty = 0
	difficultymultiplier=difficult
	currentpop = 2
	unemployed = 2
	rivergrid.length = 0
	hillgrid.length = 0
	grid.length = 0
	gridstats.length = 0
	for (i=0;i<500;i++){
	rivergrid.push([])
	}
	for (i=0;i<500;i++){
		hillgrid.push([])
	}
	for (i=0;i<500;i++){
		grid.push([])
	}
	
	for (let h=0,rand=getRandomInt(8,10);h<rand;h++){
	generateriver((450/rand)*h, 0, 0,0,getRandomInt(2,5))
	}
	selectmarketitems()
	generateblob(spawnX+Math.floor(widthmax/2),spawnY+Math.floor(heightmax/2),false)
	let xspawn = 50
	let yspawn = 50
	for (let h=0,rand=getRandomInt(60,80);h<rand;h++){
		
		generateblob(xspawn+getRandomInt(-30,30),yspawn+getRandomInt(-30,30), getRandomInt(0,30)==0)
	
			xspawn+=50
		if (xspawn>450){
			xspawn=50
			yspawn+=50
		}
		
		
	}
	
	

displaypopup(3, confirmation)
}
function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


function start(){
	tech_music.pause()
	if(m.phase<2){
	boss_music.pause()
	build_music.play()
	}
	else{
	build_music.pause()
	boss_music.play()	
	}
	market_music.pause()
	disableinfo=istutorial
	document.getElementById("popup_block_buttons").style.width = screen.width+"px"
	document.getElementById("popup_block_buttons").style.height = screen.height+300+"px"
	
document.body.style.overflow = "hidden"
document.getElementById("tech-tree").style.display = 'none'
if (m.phase>1){document.getElementById("boss_health_container").style.display = 'block'}
document.getElementById("difficulty-flex").style.display = 'none'
document.getElementById("info-flex").style.display = 'none'
document.getElementById("achievement-flex").style.display = 'none'
document.getElementById("back_button").hidden = true
document.getElementById("techlinecontainer").style.display = "none"
document.getElementById("title_start").hidden = true
document.getElementById("stats").style.display = "flex"
document.getElementById("start-flex").style.display = "none"
document.getElementById("market-flex").style.display = "none"
document.getElementById("save-flex").style.display = "none"
document.getElementById("select-grid").style.display = "flex"
document.getElementsByTagName('canvas')[0].style.display = 'block'
displayUI()
render()

if (istutorial&&tutorialindex==0){
continuetutorial(0)
}
}
function move(x,y){
	scrollX+=x
	scrollY+=y
	render()
}
function removemax(){
	max.up=-1000000000
	max.left=-1000000000
	max.right=10000
	max.down=100000000
}
