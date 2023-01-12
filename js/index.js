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
}
function confirmclear(index){
	confirmation[2].choosetext(index)
	displaypopup(2,confirmation)
}
function clearsave(index){
	localStorage.removeItem('grid'+index)
	localStorage.removeItem('river'+index)
	localStorage.removeItem('hill'+index)
	localStorage.removeItem('stats'+index)
	localStorage.removeItem('modifiers'+index)
	localStorage.removeItem('population'+index)
	localStorage.removeItem('temp'+index)
	localStorage.removeItem('slot'+index)
	localStorage.removeItem('difficulty'+index)
	localStorage.removeItem('resources'+index)
	localStorage.removeItem('reputation'+index)
	localStorage.removeItem('military'+index)
	localStorage.removeItem('multiply'+index)
	localStorage.removeItem('luck'+index)
	localStorage.removeItem('amounts'+index)
	localStorage.removeItem('unlocked'+index)
	localStorage.removeItem('marketmod'+index)
	localStorage.removeItem('marketitems'+index)

}
function menu(){
	build_music.pause()
	market_music.pause()
ispainting = false
document.getElementById("achievement-flex").style.display = 'none'
document.getElementById("difficulty-flex").style.display = 'none'
document.getElementById("title_start").innerHTML = 'Civilization'
	document.getElementById("back_button").hidden = true
	document.getElementById("title_start").hidden = false
	document.getElementById("stats").style.display = "none"
	document.getElementById("start-flex").style.display = "flex"
	document.body.style.overflow = "hidden"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
}
function savescreen(save){
	
ispainting = false
	document.getElementById("back_button").hidden = false
	const ele2 = document.getElementsByClassName("clear_button")
		i=1
		for (const el of ele2){
		if (localStorage.getItem('grid'+i) == null){
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
		if (localStorage.getItem('grid'+i) == null){
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
			if (localStorage.getItem('grid'+i) == null){
				el.disabled = true;
			}
			i++
		}
	}
	else{
		
		document.getElementById("back_button").onclick = function(){start()}
		const ele = document.getElementsByClassName("save_button")
		
		i=1
		for (const el of ele){
			el.disabled = false
			el.innerHTML = "Save Game"
			el.onclick = function(){savegame(el.id)}
			i++
		}
	}
	for (i=1;i<6;i++){
		const ele = document.getElementsByClassName("savedes"+i)
			for (let j=ele.length-1;j>=0;j--){
				ele[j].remove();
			}
		if (localStorage.getItem('grid'+i) != null){
			
			const grid = document.getElementById("save-grid"+i)
			difficultyname=""
			switch(localStorage.getItem("multiply"+i)){
				case '1':
				difficultyname = "copper"
				break
				case '1.5':
				difficultyname="iron"
				break
				case '2':
				difficultyname="diamond"
			}
			const informationlist = ["difficulty: "+ difficultyname, "population: " + JSON.parse(localStorage.getItem('population'+i)), "resources: " + JSON.parse(localStorage.getItem('resources'+i)), "military: " + JSON.parse(localStorage.getItem('military'+i))]
			for (let j=0;j<4;j++){
				
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
	
	save_slot = bindex
	localStorage.setItem('grid'+bindex, JSON.stringify(grid));
	localStorage.setItem('river'+bindex, JSON.stringify(rivergrid));
	localStorage.setItem('hill'+bindex, JSON.stringify(hillgrid));
	localStorage.setItem('stats'+bindex, JSON.stringify(gridstats));
	localStorage.setItem('modifiers'+bindex, JSON.stringify(modifiers));
	localStorage.setItem('population'+bindex, currentpop.toString());
	localStorage.setItem('military'+bindex, military.toString());
	localStorage.setItem('resources'+bindex, resources.toString());
	localStorage.setItem('reputation'+bindex, reputation.toString());
	localStorage.setItem('temp'+bindex, JSON.stringify(temporaryeffects));
	localStorage.setItem('difficulty'+bindex, JSON.stringify(difficulty));
	localStorage.setItem('slot'+bindex, JSON.stringify(save_slot));
	localStorage.setItem('multiply'+bindex, JSON.stringify(difficultymultiplier));
	localStorage.setItem('amounts'+bindex, JSON.stringify(buildingamounts));
	localStorage.setItem('unlocked'+bindex, JSON.stringify(unlocked));
	localStorage.setItem('luck'+bindex, JSON.stringify(luck));
	localStorage.setItem('marketmod'+bindex, JSON.stringify([m.assissin,m.spy,m.rebel]));
	localStorage.setItem('marketitems'+bindex, JSON.stringify(marketitems));
	localStorage.setItem('bluestocks'+bindex, JSON.stringify(blueprintsitems));

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
	
	const localgrid = JSON.parse(localStorage.getItem('grid'+bindex));
	resources = JSON.parse(localStorage.getItem('resources'+bindex));
	currentpop = JSON.parse(localStorage.getItem('population'+bindex));
	reputation = JSON.parse(localStorage.getItem('reputation'+bindex));
	const localriver = JSON.parse(localStorage.getItem('river'+bindex));
	const localhill = JSON.parse(localStorage.getItem('hill'+bindex));
	const localstats = JSON.parse(localStorage.getItem('stats'+bindex));
	const localmod = JSON.parse(localStorage.getItem('modifiers'+bindex));
	const localtemporaryeffects = JSON.parse(localStorage.getItem('temp'+bindex));
	save_slot = JSON.parse(localStorage.getItem('slot'+bindex));
	difficulty = JSON.parse(localStorage.getItem('difficulty'+bindex));
	difficultymultiplier = JSON.parse(localStorage.getItem('multiply'+bindex));
	const localbuildingamounts = JSON.parse(localStorage.getItem('amounts'+bindex));
	const localunlocked = JSON.parse(localStorage.getItem('unlocked'+bindex));
	const localmarketitems = JSON.parse(localStorage.getItem('marketitems'+bindex));
	const localbluestocks = JSON.parse(localStorage.getItem('bluestocks'+bindex));
	luck = JSON.parse(localStorage.getItem('luck'+bindex));
	const localmarketmod = JSON.parse(localStorage.getItem('marketmod'+bindex));
	m.assissin = localmarketmod[0]
	m.spy = localmarketmod[1]
	m.rebel = localmarketmod[2]
	let j = 0
	debugger
	for (len = m.marketselections.length, i = len-7;i<len-1;i++){
			m.marketselections[i].stock=localbluestocks[j]
					j++


	}
	if (localstats.length>0){
		first_turn=false
	}
	for (i=0;i!=localgrid.length;i++){
	grid.push(localgrid[i])
	}
	for (i=0;i!=localtemporaryeffects.length;i++){
	temporaryeffects.push(localtemporaryeffects[i])
	}
	for (i=0;i!=localmarketitems.length;i++){
	marketitems.push(localmarketitems[i])
	}
	for (i=0;i!=localriver.length;i++){
	rivergrid.push(localriver[i])
	}
	for (i=0;i!=localhill.length;i++){
	hillgrid.push(localhill[i])
	}
	for (i=0;i!=localbuildingamounts.length;i++){
	buildingamounts.push(localbuildingamounts[i])
	}
	for (i=0;i!=localunlocked.length;i++){
	p.pieceROM[i].unlocked = localunlocked[i]
	}
	modifiers.food = localmod.food
	modifiers.resources = localmod.resources
	modifiers.military = localmod.military
	for (i=0;i!=localstats.length;i++){
	gridstats.push(localstats[i])
	}
	
	start()
}
function newgame(difficult){
	rivergrid.length=0
	gridstats.length=0
	grid.length=0
	hillgrid.length=0
	temporaryeffects.length=0
	buildingamounts.length = 0
	punishamount = 0
	
	for (i=0;i<p.pieceROM.length;i++){
	buildingamounts.push(0);
}	
	modifiers = {
	food: 1.5-difficult,
	resources: 1.5-difficult,
	military: 1
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
	for (i=0;i!=heightmax;i++){
	rivergrid.push([])
	}
	for (i=0;i!=heightmax;i++){
		hillgrid.push([])
	}
	for (i=0;i!=heightmax;i++){
		grid.push([])
	}
	for (i=0;i<getRandomInt(1,3);i++){
	generateriver(Math.round(widthmax/2)+getRandomInt(-10,10), 0, getRandomInt(-5,5))
	}
	selectmarketitems()

generatehill()
generatehill()
generatehill()
generatehill()
generatehill()
generatehill()
displaypopup(3, confirmation)
}
function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


function start(){
	build_music.play()
	market_music.pause()
	disableinfo=istutorial
	document.getElementById("popup_block_buttons").style.width = screen.width+"px"
	document.getElementById("popup_block_buttons").style.height = screen.height+300+"px"
	const ele = document.getElementsByClassName("select-choice")
	for (i=ele.length-1;i>=0;i--){
		ele[i].remove();
	}
	for (i=0;i!=p.pieceROM.length;i++){
	
	const grid = document.getElementById("select-grid")
	const button = document.createElement("button")
	
	button.id = i
	button.className = "select-choice"
	let text = document.createTextNode(p.pieceROM[i].name)
	button.appendChild(text)
	
	button.onclick = function(){select(button.id)}
	grid.appendChild(button)
}
document.body.style.overflow = "hidden"
document.getElementById("difficulty-flex").style.display = 'none'
document.getElementById("info-flex").style.display = 'none'
document.getElementById("achievement-flex").style.display = 'none'
document.getElementById("back_button").hidden = true
document.getElementById("title_start").hidden = true
document.getElementById("stats").style.display = "flex"
document.getElementById("start-flex").style.display = "none"
document.getElementById("market-flex").style.display = "none"
document.getElementById("save-flex").style.display = "none"
document.getElementById("select-grid").style.display = "flex"

displayUI()
render()

if (istutorial&&tutorialindex==0){
continuetutorial(0)
}
}
