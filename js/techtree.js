const tech = {
    techupgrades: [{
        title: "Very Epic Test Upgrade!",
        description: "Very Epic Test Description!",
        image: "This is a real image!",
        price: -5,
        unlocked: false,
        purchased: false,
        requires(){
            return true
            // super cool no reqs!
        },
        effect(){
            resources += 100000000
            // what a cool upgrade!
        }
    },
    {
        title: "Very Epic Test Upgrade 2!",
        description: "Very Epic Test Description 2!",
        image: "This is a real image (2)!",
        price: 5,
        unlocked: false,
        purchased: false,
        requires(){
            return tech.techupgrades[0].purchased
            // wow req!
        },
        effect(){
            resources += 100000000
            // what a cool upgrade!
        }
    },
]
}

function techtreescreen() {
    ispainting = false
	repairing=false
	removing = false
		const ele = document.getElementsByClassName("techtree-container")
		for (let j=ele.length-1;j>=0;j--){
			ele[j].remove();
		}
		document.getElementById("back_button").onclick = function(){start()}
		document.body.style.overflowY = "scroll"
		document.getElementById("techtree-flex").style.display = 'flex'
		document.getElementById("difficulty-flex").style.display = 'none'
		document.getElementById("back_button").hidden = false
		document.getElementById("title_start").hidden = true
		document.getElementById("start-flex").style.display = "none"
		
		document.getElementById("stats").style.display = "none"
		document.getElementById("select-grid").style.display = "none"
		ctx.clearRect(0,0,screen.width,screen.height)
		document.getElementById("save-flex").style.display = "none"
		for (const el of tech.techupgrades){
			const flex = document.createElement("flex")
			
			const title = document.createElement("h1")
			const description = document.createElement("p")
			title.innerHTML = el.title
			description.innerHTML = el.description
			flex.className = "techtree-container"
			flex.appendChild(title)
			flex.appendChild(description)

            const purchaseButton = document.createElement("button")
            let text = document.createTextNode(`${el.price} Research`)
            if (el.purchased) {
                purchaseButton.disabled = true
                purchaseButton.innerHTML = `<b class = 'color-g'>SOLD OUT</b>`
            } else {
            purchaseButton.appendChild(text)
            }
            purchaseButton.onclick = function(){
                p.research -= el.price
                el.purchased = true
                el.effect()
                purchaseButton.disabled = true
                techtreescreen()
            }
            purchaseButton.className = "techtree-purchase"
            

            flex.appendChild(purchaseButton)
			
			document.getElementById("techtree-flex").appendChild(flex)
			if (!el.requires()){
			
			flex.style.opacity = "0.7"
			title.style.opacity = "0.7"
			description.style.opacity = "0.7"
            purchaseButton.style.opacity = "0.7"
			flex.style.backgroundColor = "rgb(69, 62, 62)"
            purchaseButton.style.backgroundColor = "rgb(100, 96, 80)"
            purchaseButton.disabled = true
			}
            
		}
		
		
	}