
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
			maxx+=getRandomInt(-2,((maxx>=widthmax)-1 ? 0:2))
		minx+=getRandomInt(((minx==1) ? 0:-2),2)
		
	}
		
	
}
function generateriver(xpos,ypos, curve, times = 0){
	let x = xpos
	let rivertimes = times
	let rivercurve = curve
	let rand = 0
	for (let y = ypos;y<500;y++){
		if (getRandomInt(0+rivercurve,7) > 5){
			rivergrid[y].push(x*20)
			x+=1
			if (getRandomInt(0,100)==0&&rivertimes<7){rand =getRandomInt(-2,-5); generateriver(x,y,rand,rivertimes);rivercurve=rand*-1}
		}
		else if (getRandomInt(3,10-rivercurve) > 5){
			rivergrid[y].push(x*20)
			x-=1
			if (getRandomInt(0,100)==0&&rivertimes<7){rand =getRandomInt(2,5); generateriver(x,y,rand,rivertimes);rivercurve=rand*-1}
		}
		if (rivergrid[y].includes(x*20)&&y!=ypos){return}
		rivergrid[y].push(x*20)
		
	}
}
