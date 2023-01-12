
function generatehill(){
	
	let y = getRandomInt(1,heightmax-2)
	let height = getRandomInt(5,15)
	y=Math.min(heightmax-height-1,y)
	let x= getRandomInt(8,widthmax-7)
	let width = getRandomInt(3,7)
	let maxx = x+width
	let minx = x-width
	
	for (i = y; i <y+height;i++){
		for (let j = minx; j<maxx;j++){

				hillgrid[i].push((minx+maxx-j)*20)
				if (i==y && getRandomInt(0,1)==0){
					hillgrid[i-1].push((minx+maxx-j)*20)
				}
				else if (i==y+height-1 && getRandomInt(0,1)==0){
					hillgrid[i+1].push((minx+maxx-j)*20)
				}
			
			}
			maxx+=getRandomInt(-2,((maxx>=widthmax)-1 ? 0:2))
		minx+=getRandomInt(((minx==1) ? 0:-2),2)
		
	}
		
	
}
function generateriver(xpos,ypos, curve, times = 0){
	let x = xpos
	let rivertimes = times
	
	for (let y = ypos;y!=heightmax;y++){
		if (getRandomInt(0+curve,7) > 5){
			rivergrid[y].push(x*20)
			x+=1
			if (getRandomInt(0,5)==0&&rivertimes<3){generateriver(x,y,-5,rivertimes)}
		}
		else if (getRandomInt(3,10-curve) > 5){
			rivergrid[y].push(x*20)
			x-=1
			if (getRandomInt(0,5)==0&&rivertimes<3){generateriver(x,y,5,rivertimes)}
		}
		if (rivergrid[y].includes(x*20)&&y!=ypos){return}
		rivergrid[y].push(x*20)
		
	}
}
