
var rainthroughnum = 500;
var speedRainTrough = 25;
var RainTrough = [];

var rainnum = 200;
var rain = [];

var w = canvas2.width;
var h = canvas2.height;



function createRainTrough() {
  for (var i = 0; i < rainthroughnum; i++) {
    RainTrough[i] = {
      x: getRandomInt(0, w),
      y: getRandomInt(0, h),
      length: Math.floor(getRandomInt(1, 830)),
      opacity: Math.random() * 0.2,
      xs: getRandomInt(-2, 2),
      ys: getRandomInt(10, 20)
    };
  }
}

function createRain() {
  for (var i = 0; i < rainnum; i++) {
    rain[i] = {
      x: Math.random() * w,
      y: Math.random() * h,
      l: Math.random() * 1,
      // xs: -4 + Math.random() * 4 + 2, //random rain movement, more natural but no wind
	  xs: Math.random() - 0.5,
      ys: Math.random() * 5
    };
  }
}

function drawRain(i) {
	ctx2.globalCompositeOperation='destination-over';
		ctx2.beginPath();
		ctx2.moveTo(rain[i].x, rain[i].y);
	switch(weather){
		case 1:
		ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
		ctx2.strokeStyle = 'rgba(174,194,224,0.5)';
		ctx2.lineWidth = 2;
		break
		case 2:
		// ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
		ctx2.arc(rain[i].x, rain[i].y, 1, 0, 2 * Math.PI, false);
		ctx2.strokeStyle = 'rgba(240, 242, 247,0.99)';
		ctx2.lineWidth = 4;
		break
	
		case 3:
		// ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
		ctx2.arc(rain[i].x, rain[i].y, 1, 0, 2 * Math.PI, false);
		ctx2.strokeStyle = 'rgba(255, 255, 255,0.99)';
		ctx2.lineWidth = 5;
		
	}
	
	ctx2.lineCap = 'round';
	ctx2.stroke();
}

function animateRain() {
  for (var i = 0; i < rainnum; i++) {
    rain[i].x += rain[i].xs;
    rain[i].y += rain[i].ys;
	if (weather == 1) {
		rain[i].ys = Math.random() * 10 + 10
	}
	if (weather == 2) {
		rain[i].ys = Math.random() * 10+5
	}
	if (weather == 3) {
		rain[i].ys = Math.random() * 10+10
	}
    if (rain[i].x > w || rain[i].y > h) {
		rain[i].x = Math.random() * w;
      rain[i].y = -20;
    }
	if (weather > 0) {
    drawRain(i);
	}
  }
}


function init() {
  createRainTrough();
  createRain();
  window.addEventListener('resize', createRainTrough);
}
init();

function animloop() {
  if(psettings.noweather){return}
  if (weather==0) {
	return
  } else {
	ctx2.clearRect(0,0,screen.width,screen.height)
	animateRain();
	requestAnimationFrame(animloop)
	  if (weather == 1) {
		  raintimer = 2
	  } else if (weather == 2) {
		  raintimer = 1
	  } else if (weather == 3) {
		  raintimer = 2
	  }
	 
  }
}

function createSimpleTable(rows) {
	const table = document.createElement('table');
	const tableBody = document.createElement('tbody');

	for (const row of rows) {
		const tableRow = document.createElement('tr');
		tableBody.appendChild(tableRow);

		row.forEach((content) => {
			const tableCell = document.createElement('th');
			tableCell.innerText = content;

			tableRow.appendChild(tableCell);
		});
	}

	table.appendChild(tableBody);

	return table;
}


function difficultyscreen(){

	document.getElementById("difficulty-flex").style.display = 'grid'
	document.getElementById("back_button").hidden = false
	document.getElementById("back_button").onclick = function(){menu()}
	document.getElementById("title_start").innerHTML = 'Select Difficulty'
	document.getElementById("start-flex").style.display = "none"
	document.getElementById("bgimg").style.display = "none"
	canvas.style.display = 'none'
	canvas2.style.display = 'none'
}
function pause_menu(){
	document.getElementById("popup_block_buttons").style.display = "block"
	pause = document.getElementById("pause_flex")
	pause.style.display="flex"
	pause.style.animation = "none"
	pause.style.animation = "pause 1s"
}
function unpause(){
document.getElementById("popup_block_buttons").style.display = 'none';
document.getElementById("pause_flex").style.display='none'
}
function settings(ifmenu=true){
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("bgimg").style.display = 'none'
	document.getElementById("popup_block_buttons").style.display = 'none';
	document.getElementById("pause_flex").style.display='none'
	document.getElementById("settings-flex").style.display = "flex"
	document.getElementById("back_button").hidden = false
	document.getElementById("back_button").onclick = function(){(ifmenu ? menu():start())}
	document.getElementById("title_start").style.display = 'block'
	document.getElementById("title_start").innerHTML = 'Settings'
	document.getElementById("start-flex").style.display = "none"
		document.getElementById("stats").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	canvas.style.display = 'none'
	canvas2.style.display = 'none'
}
function pause_menu(){
	document.getElementById("popup_block_buttons").style.display = "block"
	pause = document.getElementById("pause_flex")
	pause.style.display="flex"
	pause.style.animation = "none"
	pause.style.animation = "pause 1s"
}
function unpause(){
document.getElementById("popup_block_buttons").style.display = 'none';
document.getElementById("pause_flex").style.display='none'
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
	localStorage.removeItem('marketstats'+index);
}
function info(){
	document.body.style.overflowY = "scroll"
ispainting = false
removing = false
repairing = false
	canvas.style.display="none"
	canvas2.style.display="none"
	document.getElementById("info-flex").innerHTML=""
	document.getElementById("info").style.display = 'flex'
	document.getElementById("boss_health_container").style.display = 'none'
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("back_button").hidden = false
	document.getElementById("back_button").onclick = function(){start()}
	document.getElementById("stats").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	
	const statflex = document.getElementById("stat-info")
	const stats = [
		{
			title:"Population",
			description:"",
			choosetext(){
			this.description = `The people in your village, who can be employed to preform important tasks.<br>Population: ${currentpop}`
			}
		},
		{
			title:"Food",
			description:"",
			choosetext(){
			this.description = `A neccessity for survival, your population grows if there is more food than people.<br>Food Production: ${food}<br>Population Gain: ${Math.max(-2-Math.ceil(currentpop/5),Math.min(1+Math.ceil(currentpop/5),food-currentpop))}`
			}
		},
		
		{
			title:"Resources",
			description:"",
			choosetext(){
			this.description = `The building blocks of construction, all buildings require resources to construct.<br>Resource Production: ${resourcesgained}`
		},
	},
	{
		title:"Unemployed",
		description:"",
		choosetext(){
		this.description = `The people who aren't employed. Most buildings require operators.<br>Amount Unemployed: ${unemployed}`
		}
	},
	{
		title:"Military",
		description:"",
		choosetext(){
		this.description = `The power of your military. All unemployed people serve in the military<br>Military Power: ${military}`
		}
	},
	{
		title:"Wisdom",
		description:"",
		choosetext(){
		this.description = `The accumulated wisdom of your village. Once the wisom bar fills up, it's converted into research points, which can be used to unlock tech.<br>Progress to Next Level: ${(xp/totalxp).toFixed(2)}%`
		}
	},
]
	for (const stat of stats){
	
		const statf = document.createElement("div")
		
		const stattitle = document.createElement("h1")
		const statdes = document.createElement("p")
		stat.choosetext()
		stattitle.style.textAlign = "center"
		statdes.style.textAlign = "center"
		stattitle.innerHTML = stat.title
		statdes.innerHTML = stat.description
		statf.appendChild(stattitle)
		statf.appendChild(statdes)
		statflex.appendChild(statf)
	}
		for (const building of p.pieceROM){
			const grid = document.createElement("div")
			grid.className = "info-grid"
			
			
			const title = document.createElement("h1")
			title.className = "infotext"
			title.innerHTML = building.name
			title.style.gridColumn = 3
			grid.appendChild(title)
			const des = document.createElement("p")
			des.style.gridRow = 2
			des.style.gridColumn = "3/ span 3"
			if (building.unlocked){
				const buildcanvas = document.createElement("canvas")
			buildcanvas.style.gridRow=1
			buildcanvas.style.gridColumn=2
			buildcanvas.style.width = 80
			buildcanvas.style.height = 80
			const bctx =  buildcanvas.getContext("2d")
			for (const pos of building.piecepositions){
				
				bctx.drawImage(buildimg, pos.img.dx, pos.img.dy, 20,20,(pos.x+2)*20,(pos.y+2)*20,20,20)
			}
			grid.appendChild(buildcanvas)
			des.innerHTML = building.description
			}
			else{
				des.innerHTML = "???"
				grid.style.opacity = 0.7
				title.style.opacity = 0.7
				des.style.opacity = 0.7
				grid.style.backgroundColor = "rgb(69, 62, 62)"
			}
			des.className = 'infotext'
			grid.appendChild(des)
			
			document.getElementById("info-flex").appendChild(grid)
		}
	
}
function menu(){
	build_music.pause()
	war_music.pause()
	boss_music.pause()
	market_music.pause()
	removing=false
	ispainting = false
	repairing = false
	istutorial=false
document.getElementById("achievement-flex").style.display = 'none'
document.getElementById("bgimg").style.display = 'block'
document.getElementById("title_start").style.display = 'block'
document.getElementById("difficulty-flex").style.display = 'none'
document.getElementById("settings-flex").style.display = 'none'
document.getElementById("title_start").innerHTML = 'Dawn of Civilization'
	document.getElementById("back_button").hidden = true
	document.getElementById("boss_health_container").style.display = "none"
	document.getElementById("stats").style.display = "none"
	document.getElementById("start-flex").style.display = "grid"
	document.body.style.overflow = "hidden"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	canvas.style.display = 'none'
	canvas2.style.display = 'none'
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
		const ele = document.getElementsByClassName("savedes"+i)[0]
		if (localStorage.getItem('pstats'+i) != null){
			difficultyname= {
				1.2: "copper",
				1.5: "iron",
				1.8: "diamond",
				2: "eternity"
			}[localstats.difficultymultiplier]

			// remove all children of `ele`
			// https://stackoverflow.com/a/3955238/13996389
			while (ele.lastChild) {
				ele.removeChild(ele.lastChild)
			}

			ele.appendChild(
				createSimpleTable([
					['difficulty:', difficultyname],
					['year:', shorten(localstats.difficulty)],
					['population:', shorten(localstats.currentpop)],
					['resources:', shorten(localstats.resources)],
					['military:', shorten(localstats.military)]
				])
			)
		}
		else{
			ele.innerHTML="Empty Slot"
		}
	}
	document.getElementById("title_start").style.display = "block"
	document.getElementById("title_start").innerHTML = "Select Save"
	document.getElementById("stats").style.display = "none"
	document.getElementById("bgimg").style.display = 'none'
	document.getElementById("start-flex").style.display = "none"
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "grid"
	document.getElementById("boss_health_container").style.display = 'none'
	canvas.style.display = 'none'
	canvas2.style.display = 'none'
}
function techscreen(){
	if (istutorial && tutorialindex == 16) {
		continuetutorial(++tutorialindex)
	}

	ispainting = false
removing = false
repairing = false
	build_music.pause()
	war_music.pause()
	boss_music.pause()
	tech_music.play()
	document.getElementById("info").style.display = 'none'
	document.body.overflowY="scroll"
	document.getElementById("techbutton").style.animation = "none"
	document.getElementById("difficulty-flex").style.display = 'none'
	document.getElementById("tech-tree-container").style.display = 'grid'
	document.getElementById("back_button").hidden = false
	canvas.style.display = 'none'
	canvas2.style.display = 'none'
	document.getElementById("back_button").onclick = function(){start()}
	document.getElementById("stats").style.display = "none"
	document.getElementById("boss_health_container").style.display = 'none'
	document.getElementById("select-grid").style.display = "none"
	ctx.clearRect(0,0,screen.width,screen.height)
	document.getElementById("save-flex").style.display = "none"
	const categories = ["Farming", "Farming II","Housing","Housing II", "Mining","Mining II", "Intelligence", "Intelligence II","Virtue","Virtue II","Military","Military II"]
	const techgrid = document.getElementById("tech-tree")
	const linecontainer = document.getElementById('techlinecontainer')
	linecontainer.style.display= "block"
	linecontainer.innerHTML=""
	techgrid.innerHTML=""
	
	const techelements = []
	const descriptioncontainer = document.getElementById("techcontainer")
	const destitle = document.createElement("h1")
	const cost = document.createElement("p")
	const tier = document.createElement("p")
	const points = document.createElement("p")
	const ifyears = document.createElement(("p"))
	const reserachbutton = document.createElement("button")
	
	points.innerHTML="Research Points:<br> " +research_points
	destitle.style.gridRow="1"
	destitle.style.gridColumn="1"	
	points.style.gridRow="1"
	points.style.gridColumn="3"
	points.style.fontSize = "20px"
	points.id = "research-points"
	cost.style.gridRow="1"
	cost.style.gridColumn="2"
	cost.style.fontSize = "20px"
	tier.style.gridRow="1"
	tier.style.gridColumn="1"
	tier.style.marginTop="auto"
	tier.style.fontSize = "20px"
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

	descriptioncontainer.className='techcontainer'
	descriptioncontainer.appendChild(destitle)
	descriptioncontainer.appendChild(des)
	descriptioncontainer.appendChild(cost)
	descriptioncontainer.appendChild(ifyears)
	descriptioncontainer.appendChild(reserachbutton)
	descriptioncontainer.appendChild(points)
	descriptioncontainer.appendChild(tier)

	techgrid.style.gridTemplateColumns = `1fr `.repeat(categories.length)
	techgrid.style.gridTemplateRows = `1fr `.repeat(tech.length)

	const techrect = techgrid.getBoundingClientRect()
	linecontainer.setAttribute("height", techrect.height);
	linecontainer.setAttribute("width", techrect.width);
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
		tier.innerHTML=""
		reserachbutton.hidden=true
		let isimage=0
		for (const el of techoptions){
			
			if (el.classList.contains("hover")){
			techclick.play()
			el.style.border = "4px solid yellow"
			const techindex = JSON.parse(el.id)
			reserachbutton.hidden=false
			destitle.innerHTML=tech[techindex[0]][techindex[1]].name
			des.innerHTML=tech[techindex[0]][techindex[1]].description
			
			reserachbutton.innerHTML="Research"
			if (tech[techindex[0]][techindex[1]].tier < tech[techindex[0]][techindex[1]].maxtier||tech[techindex[0]][techindex[1]].maxtier == -1) {
				tier.innerHTML= `<strong> Tier: ${tech[techindex[0]][techindex[1]].tier}</strong>`
			} else {
				tier.innerHTML= `<strong class= 'color-g'> Tier: ${tech[techindex[0]][techindex[1]].tier} (MAXED OUT)</strong>`
			}
			cost.innerHTML=`<strong class = 'color-${research_points>=tech[techindex[0]][techindex[1]].cost ? "g":"r"}'> Research cost: ${tech[techindex[0]][techindex[1]].cost}</strong>`
			reserachbutton.disabled = !(research_points>=tech[techindex[0]][techindex[1]].cost&&(tech[techindex[0]][techindex[1]].maxtier > tech[techindex[0]][techindex[1]].tier||tech[techindex[0]][techindex[1]].maxtier==-1))			
			for (const el of tech[techindex[0]][techindex[1]].requires){
				if (tech[el[0]][el[1]].tier==0){
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
					if (difficulty<40){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Post-Diplomacy Age</strong>"
					}
				break
				case 4:
					if (difficulty<40){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Post-Diplomacy Age</strong>"
					}
				break
				case 5:
					if (difficulty<40){
						reserachbutton.disabled=true
						des.innerHTML = des.innerHTML + "<br><strong class = 'color-r'>Must be in Post-Diplomacy Age</strong>"
					}
				break
			}
			const whichimage = isimage

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
				tech[techindex[0]][techindex[1]].tier++
				document.getElementById("research-points").innerHTML="Research Points:<br> " +research_points
				if (tech[techindex[0]][techindex[1]].tier < tech[techindex[0]][techindex[1]].maxtier||tech[techindex[0]][techindex[1]].maxtier == -1) {
					tier.innerHTML= `<strong> Tier: ${tech[techindex[0]][techindex[1]].tier}</strong>`
				} else {
					tier.innerHTML= `<strong class= 'color-g'> Tier: ${tech[techindex[0]][techindex[1]].tier} (MAXED OUT)</strong>`
				}

				
				tech[techindex[0]][techindex[1]].unlocked = true
				destitle.innerHTML=tech[techindex[0]][techindex[1]].name
			des.innerHTML=tech[techindex[0]][techindex[1]].description
				
				techelements[whichimage].image.style.filter = "brightness(100%)"
			cost.innerHTML=`<strong class = 'color-${research_points>=tech[techindex[0]][techindex[1]].cost ? "g":"r"}'> Research cost: ${tech[techindex[0]][techindex[1]].cost}</strong>`
			
			reserachbutton.disabled = !(research_points>=tech[techindex[0]][techindex[1]].cost&&(tech[techindex[0]][techindex[1]].maxtier > tech[techindex[0]][techindex[1]].tier||tech[techindex[0]][techindex[1]].maxtier == -1))	
			success.style.animation = "done 2s linear 0s 1 normal forwards"
			
			displayUI()
			document.getElementById("boss_health_container").style.display = 'none'
			setTimeout(function(){success.remove()},2000)
			}
			
			}
			else{
				el.style.border = "4px solid black"
			}
			isimage++
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
			const image = document.createElement("img")
			techoption.addEventListener("mouseover", function(){
				techoption.classList.add("hover")
			})
			techoption.addEventListener("mouseout", function(){
				techoption.classList.remove("hover")
			})
			if (tech[i][j].tier>=1){
				image.style.filter = "brightness(100%)"
			}
			else{
				image.style.filter = "brightness(30%)"
			}
			techgrid.appendChild(techoption)
			
			image.src=tech[i][j].image
			
			image.style.width="30px"
			image.style.height="30px"
			image.style.position="relative"
			image.style.bottom = "0.5px"
			image.style.right = "1px"
			techoption.appendChild(image)
			
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

				const screenOffsetY = techgrid.getBoundingClientRect().top;
				const screenOffsetX = techgrid.getBoundingClientRect().left;
				
				techline.setAttribute('x1',thisposition.x+17.5-screenOffsetX);
				techline.setAttribute('y1',thisposition.y+17.5-screenOffsetY);
				techline.setAttribute('x2',thatposition.x+17.5-screenOffsetX);
				techline.setAttribute('y2',thatposition.y+17.5-screenOffsetY);
				techline.style.stroke = "black"
				techline.style.strokeWidth = "2"
				linecontainer.append(techline);
			}
			techelements.push({image: image,element: techoption, techposition: [i,j]})

		}
	}
	
	
}

function savegame(bindex){

	confirmation[0].choosetext(bindex)
	displaypopup(0,confirmation)
	
}
function save(bindex){
	window.onbeforeunload=null
	

	
	
	const localtier = []
	for (const un of tech){
		for (const unn of un){
			localtier.push({tier:unn.tier,description:unn.description})
			
		}
	}
	save_slot = bindex
	const localmarketstats = []
	for (const item of m.marketselections){
		localmarketstats.push({price: item.price,amountincrease:item.amountincrease,stock:item.stock})
	}
	localStorage.setItem('griditems'+bindex, JSON.stringify({grid,roadgrid,rivergrid,hillgrid,gridstats}));
	localStorage.setItem('scrollinfo'+bindex, JSON.stringify([scrollX,scrollY,spawnX,spawnY,max]));
	localStorage.setItem('pstats'+bindex, JSON.stringify({localtier,siege,weathermod,cities:p.cities,wars, megatemple,xp,totalxp,techstats,research_points,difficultymultiplier,unlocked,luck,buildingamounts,temporaryeffects,reputation,difficulty,modifiers,currentpop,military,resources,outofrange}));
	localStorage.setItem('slot'+bindex, JSON.stringify(save_slot));
	localStorage.setItem('marketmod'+bindex, JSON.stringify([m.assissin,m.spy,m.rebel,m.phase,m.bhealth,m.totalbhealth,m.scout,m.shield]));
	localStorage.setItem('marketstats'+bindex, JSON.stringify(localmarketstats));
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
	wars.length=0
	p.cities.length=0
	for (const el of JSON.parse(localStorage.getItem('griditems'+bindex)).grid){
		grid.push(el)
	}
	const localmarketstats = JSON.parse(localStorage.getItem("marketstats"+bindex))
	for (i=0;i<m.marketselections.length;i++){
		m.marketselections[i].price=localmarketstats[i].price
		m.marketselections[i].amountincrease=localmarketstats[i].amountincrease
		m.marketselections[i].stock=localmarketstats[i].stock
	}
	const localscrolldata = JSON.parse(localStorage.getItem('scrollinfo'+bindex));
	resources = JSON.parse(localStorage.getItem('pstats'+bindex)).resources;
	weathermod = JSON.parse(localStorage.getItem('pstats'+bindex)).weathermod;
	currentpop = JSON.parse(localStorage.getItem('pstats'+bindex)).currentpop;
	reputation = JSON.parse(localStorage.getItem('pstats'+bindex)).reputation;
	xp = JSON.parse(localStorage.getItem('pstats'+bindex)).xp;
	totalxp = JSON.parse(localStorage.getItem('pstats'+bindex)).totalxp;
	siege = JSON.parse(localStorage.getItem('pstats'+bindex)).siege;
	megatemple = JSON.parse(localStorage.getItem('pstats'+bindex)).megatemple;
	outofrange = JSON.parse(localStorage.getItem('pstats'+bindex)).outofrange;
	for (const war of JSON.parse(localStorage.getItem('pstats'+bindex)).wars){
		wars.push(war)
	}
	for (const obj in JSON.parse(localStorage.getItem('pstats'+bindex)).techstats){
		techstats[obj] = JSON.parse(localStorage.getItem('pstats'+bindex)).techstats[obj]
		
	}
	
	for (const obj in JSON.parse(localStorage.getItem('griditems'+bindex)).roadgrid){
		roadgrid[obj] = JSON.parse(localStorage.getItem('griditems'+bindex)).roadgrid[obj]
		
	}

	i=0
	for (const un of tech){
		for (const unn of un){
			
			unn.tier = JSON.parse(localStorage.getItem('pstats'+bindex)).localtier[i].tier
			
			unn.description = JSON.parse(localStorage.getItem('pstats'+bindex)).localtier[i].description
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
	for (const increa in JSON.parse(localStorage.getItem('pstats'+bindex)).cities){
		p.cities[increa] = JSON.parse(localStorage.getItem('pstats'+bindex)).cities[increa]
	}
	difficultymultiplier = JSON.parse(localStorage.getItem('pstats'+bindex)).difficultymultiplier;
	for (const el of JSON.parse(localStorage.getItem('pstats'+bindex)).buildingamounts){
		buildingamounts.push(el)
	}
	i=0
	for (const el of JSON.parse(localStorage.getItem('pstats'+bindex)).unlocked){
		unlocked.push(el)
		p.pieceROM[i].unlocked=el
		i++
	}
	for (const el of JSON.parse(localStorage.getItem('marketitems'+bindex))){
		marketitems.push(el)
	}
	luck = JSON.parse(localStorage.getItem('luck'+bindex));
	weathermod = Math.sin(difficulty/3)/10
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
	const localmarketmod = JSON.parse(localStorage.getItem('marketmod'+bindex));
	m.assissin = localmarketmod[0]
	m.spy = localmarketmod[1]
	m.rebel = localmarketmod[2]
	m.phase = localmarketmod[3]
	m.bhealth = localmarketmod[4]
	m.totalbhealth = localmarketmod[5]
	m.scout = localmarketmod[6]
	m.shield = localmarketmod[7]
	if(m.phase>0){
		m.marketselections[m.marketselections.length-1].stock=0
	}
	let j = 0
	spawnX = localscrolldata[2]
	spawnY = localscrolldata[3]
	scrollX = localscrolldata[0]
	scrollY = localscrolldata[1]
	max.up=localscrolldata[4].up
	max.down=localscrolldata[4].down
	max.left=localscrolldata[4].left
	max.right=localscrolldata[4].right
	
	if (gridstats.length>0||Object.keys(roadgrid).length>0){
		first_turn=false
	}
	modifiers.food = localmod.food
	modifiers.population = localmod.population
	modifiers.resources = localmod.resources
	modifiers.military = localmod.military
	document.getElementById("year_label").innerHTML = "Year: "+difficulty
	displaytab()
	displayUI()
	start()
}
function newgame(difficult){
	window.onbeforeunload = function(){return "hi"}
	for (const stat in techstats){
		if (typeof techstats[stat] === "boolean"){
			techstats[stat]=false
		}
		else{
			techstats[stat]=0
		}
	}
	for (i=0;i<tech.length;i++){
		for(j=0;j<tech[i].length;j++){
			tech[i][j].tier =0
		}
	}
	rivergrid.length=0
	gridstats.length=0
	grid.length=0
	weathermod=0
	weather=0
	wars.length=0
	displaytab()
	hillgrid.length=0
	temporaryeffects.length=0
	buildingamounts.length = 0
	punishamount = 0
	spawnX=getRandomInt(100,300)
	spawnY=getRandomInt(100,300)
	scrollX=spawnX
	scrollY=spawnY
	difficulty=0
	for (i=0;i<p.pieceROM.length;i++){
	buildingamounts.push(0);
}	
	modifiers = {
	population:0,
	food: 15-difficult*10,
	resources: 15-difficult*10,
	military: 0
	}
	first_turn=true
	save_slot=null
	resources = 10+(difficult<=2 ? 2:0)
	difficulty = 0
	difficultymultiplier=difficult
	currentpop = 2
	unemployed = 2
	military=0
	xp=0
	totalxp=50
	rivergrid.length = 0
	hillgrid.length = 0
	p.cities.length = 0
	m.assissin = 0
	m.spy = 0
	m.rebel = 0
	m.phase = 0
	m.bhealth = 0
	m.totalbhealth = 0
	m.scout = false
	m.shield = 0
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
	for (let h=0,rand=getRandomInt(40,50);h<rand;h++){
		
		generateblob(xspawn+getRandomInt(-30,30),yspawn+getRandomInt(-30,30), getRandomInt(0,30)==0)
	
			xspawn+=45
		if (xspawn>450){
			xspawn=50
			yspawn+=50
		}
		
		
	}
	
	
	
if(psettings.notutorial){
	displayUI()

	start()
}
else{
displaypopup(3, confirmation)
}
}
function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.round(Math.random() * (max - min)) + min;
	}

function shorten(number){
	
	if(number.toString().includes("e")){
		return number
	}
	let numlength = Math.floor((JSON.stringify(Math.floor(Math.abs(number)/10)).length)/3)
	let returnnum = (number/10**(numlength*3))
	let endsymbol = ""
	switch (numlength){
		case 0:
		break
		case 1:
		endsymbol = "k"
		break
		case 2:
		endsymbol = "m"
		break
		case 3:
		endsymbol = "b"
		break
		case 4:
		endsymbol = "t"
		break
		case 5:
		endsymbol = "Qa"
		break
		case 6:
		endsymbol = "Qi"
		break
		case 7:
		endsymbol = "Sx"
		break
		
		
		
	}
	
	returnnum=returnnum.toFixed(2)
	
	while(returnnum.includes(".")&&returnnum[returnnum.length-1]==="0"){
		returnnum=returnnum.slice(0,returnnum.length-1)
	}
	if(returnnum[returnnum.length-1]=="."){
		returnnum=returnnum.slice(0,returnnum.length-1)
	}
	return returnnum+endsymbol
}
function start(){
	tech_music.pause()
	if(m.phase>1){
	boss_music.play()
	war_music.pause()
	build_music.pause()
	}
	else if (wars.length>0){
	build_music.pause()
	boss_music.pause()
	war_music.play()	
	}
	else{
		build_music.play()
		boss_music.pause()
		war_music.pause()
	}
	market_music.pause()
	if (istutorial) {
		disableinfo = (tutorialindex < 14)
	} else {
		disableinfo = false
	}

	
document.body.style.overflow = "hidden"
window.scrollTo(0, 0);
document.getElementById("tech-tree-container").style.display = 'none'
if (m.phase>1||wars.length>0){document.getElementById("boss_health_container").style.display = 'block'}
document.getElementById("difficulty-flex").style.display = 'none'
document.getElementById("settings-flex").style.display = 'none'
document.getElementById("info").style.display = 'none'
document.getElementById("achievement-flex").style.display = 'none'
document.getElementById("back_button").hidden = true

document.getElementById("techlinecontainer").style.display = "none"
document.getElementById("title_start").style.display = "none"
document.getElementById("stats").style.display = "flex"
document.getElementById("start-flex").style.display = "none"
document.getElementById("market-flex").style.display = "none"
document.getElementById("save-flex").style.display = "none"
document.getElementById("select-grid").style.display = "flex"
canvas.style.display = 'block'
canvas2.style.display = 'block'
displayUI()
document.getElementById("boss_healthg").style.transition = "0s"
document.getElementById("boss_healthg").style.width = document.getElementById("boss_health").style.width
document.getElementById("boss_healthg").style.transition = "all 1s ease-out"
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

