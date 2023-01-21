
function generateblob(xpos,ypos, large, type = "hill"){
	
	let y = ypos
	let x= xpos
	let width=0
	let height=0
	
	if (type=="hill"){
	height = large ? getRandomInt(20,50):getRandomInt(5,10)
	
	
	width =large ? getRandomInt(20,50):getRandomInt(5,10)
	}
	else if (type == "lake"){
		const size = large ? getRandomInt(20,50):getRandomInt(5,10)
		width=size+getRandomInt(-10,10)
		height=size+getRandomInt(-10,10)

	}
	let maxx = x+width
	let minx = x-width
	
	for (i = y; i <y+height;i++){
		for (let j = minx; j<maxx;j++){
				if (type=="hill"){
				hillgrid[i].push((minx+maxx-j)*20)
				}
				else if (type=="lake"){
					rivergrid[i].push((minx+maxx-j)*20)
				}
				if (i==y && getRandomInt(0,1)==0){
					
					if (type=="hill"){
						hillgrid[i-1].push((minx+maxx-j)*20)
						}
						else if (type=="lake"){
							rivergrid[i-1].push((minx+maxx-j)*20)
						}
				}
				else if (i==y+height-1 && getRandomInt(0,1)==0){
					if (type=="hill"){
						hillgrid[i+1].push((minx+maxx-j)*20)
						}
						else if (type=="lake"){
							rivergrid[i+1].push((minx+maxx-j)*20)
						}
				}
			
			}
			//if(getRandomInt(0,100)==0){
			//generatevillage(maxx-3,i,1)
		//}
			maxx+=getRandomInt(-2,2)
		minx+=getRandomInt(-2,2)
		
		
	}
		
	
}
function generatevillage(xpos,ypos,type){
	let x = xpos
	let y = ypos
	const pieceindexes = []

	for (i=0,rand=getRandomInt(1,4);i<rand;i++){
		pieceindexes.push({index:12,change(){
			x+=1
			
	}
		})
	}
	for (i=0;i<10;i++){
		pieceindexes.push({index:4,change(){x+=1}})
		if(!hillgrid[y].includes(20*(x+i))){
			break
		}
		if(rivergrid[y].includes(20*(x+i))){
			return
		}
	}
	for (i=0;i<5;i++){
		pieceindexes.push({index:6,change(){x+=2;y+=2}})
	pieceindexes.push({index:1,change(){y-=2}})
	}
	const gridpositions=[]
	for (const el of pieceindexes){
		
		gridpositions.length=0
		
	for(i=0;i<p.pieceROM[el.index].piecepositions.length;i++){
		gridpositions.push({x:x*20+p.pieceROM[el.index].piecepositions[i].x*20,y:y*20+p.pieceROM[el.index].piecepositions[i].y*20})
		grid[y+p.pieceROM[el.index].piecepositions[i].y].push(x*20+p.pieceROM[el.index].piecepositions[i].x*20)
	}
	const oldresources = resources
	oldpop = unemployed
		p.pieceROM[el.index].effect()

		gridstats.push({
			letter:p.pieceROM[el.index].letter,
			population:p.population,
			employmentrequired: oldpop-unemployed,
			food:p.food,
			resources:p.resources,
			military:p.military,
			positions:[...gridpositions],
			resourcerefund: oldresources-resources,
			disabled: true
		})
		resources=oldresources
		unemployed=oldpop
		el.change()
	}
}
function generateriver(xpos,ypos, curve, times = 0, width=2){
	let x = xpos
	let rivertimes = times
	let rivercurve = curve
	let rand = 0
	let oldx=xpos
	for (let y = ypos;y<getRandomInt(300,500);y++){
		oldx = x
		debugger
		x=(Math.sin(0.3*y)+1.1*Math.sin(0.2*y-10)/2+1.2*Math.sin(0.1*y-15)/2)+x+(y*rivercurve)/100
		if (x-oldx>1){
			while(x-oldx>1){
				x-=0.1
			}
			
		}
		else if (x-oldx<-1){
			while(x-oldx<-1){
				x+=0.1
			}

		}
		if(rivertimes<5&&getRandomInt(0,100)==0){
			generateriver(x,y,rivercurve*-1,rivertimes,Math.max(2,width-1))
		}
		if (rivergrid[y].includes(Math.floor(x)*20)&&y!=ypos){return}
		for(let k=0;k<width;k++){
		rivergrid[y].push(Math.floor(x+k)*20)
		}
		
	}
}
