let Page = function() {
	this.mode = 'Classic'
}
Page.prototype.construct = function() {
	let page = this
	
	let currentTeam = null
	let currentGroup = null
	let currentButtonGroup = null

	let buttonGroups = {}

	// Create sidebar buttons
	for (let role in roleLookup) {
		let buttons = $(`.page .buttons`).get(0)

		// Get team
		let team = roleLookup[role].team
		let group = roleLookup[role].group
		let color = roleLookup[role].color
		
		let thisTopMargin = 0
		let uID = `${team} ${group}`

		if (buttonGroups[uID] === undefined) {
			let topMargin = 1
			if (team !== currentTeam && currentTeam !== null) {
				topMargin = 3
			}

			currentGroup = group
			currentTeam = team

			let buttonGroup = document.createElement('div')
				buttonGroup.className = `btn-group-vertical btn-group-sm mt-${topMargin}`
				buttonGroup.id = uID

			buttonGroups[uID] = buttonGroup
		}

		let button = document.createElement('button')
			button.className = `btn btn-custom`
			button.id = role
			button.style.backgroundColor = colorLookup[color]
			button.innerHTML = role
			button.addEventListener('click', function() {
				game.addRole(role)
			})

		buttonGroups[uID].appendChild(button)
	}

	for (let buttonGroup in buttonGroups) {
		buttons.appendChild(buttonGroups[buttonGroup])
	}

	// Give click listeners to sidebar buttons
	for (let role in roleLookup) {
		$(`.page .buttons button:contains(${role})`).on('click', function() {
			page.game.addRole(role)
		})
	}

	// Give click listeners to dropdown buttons
	for (let mode in gameModes) {
		let button = $(`.page button:contains("${mode}")`)
		button.on('click', function() {
			let newMode = button.html()
			page.mode = newMode
			$(`.page .dropdown #text`).html(`${newMode}`)

			page.game = new Game(page.mode)
			page.game.construct()
		})
	}

	// Set up game
	this.game = new Game(this.mode)
	this.game.construct()
}
let Game = function(gameMode) {
	this.mode = gameMode
	let repeats = {}

	this.roles = {}
	for (let role of gameModes[gameMode]) {
		repeats[role] = repeats[role]+1 || 0
		let name = scrubName(`${role} ${repeats[role]}`)

		this.roles[name] = {name: role, claimed: false, claim: null, count: repeats[role]}
	}

	return this
}

Game.prototype.construct = function() {
	let game = this

	$(`.page .data`).html('')

	let currentTeam = null
	let currentGroup = null
	let currentButtonGroup = null

	let buttonGroups = {}

	for (let role in this.roles) {
		let data = $(`.page .data .col`).get(0)
		let roleName = this.roles[role].name

		// Get team
		let team = null
		if (roleLookup[roleName] === undefined) {
			team = wildcardLookup[roleName]
		}
		else {
			team = roleLookup[roleName].team
		}
		// Get group
		let group = null
		if (roleLookup[roleName] !== undefined) {
			group = roleLookup[roleName].group
		}
		else {
			group = roleName
		}
		// Get color
		let color = null
		if (roleLookup[roleName] === undefined) {
			color = colorLookup[roleName]
		}
		else {
			color = colorLookup[roleLookup[roleName].color]
		}
		
		let thisTopMargin = 0
		let uID = `${team} ${group}`

		if (buttonGroups[uID] === undefined) {
			let topMargin = 1
			if (team !== currentTeam && currentTeam !== null) {
				topMargin = 3
			}

			currentGroup = group
			currentTeam = team

			let buttonGroup = document.createElement('div')
				buttonGroup.className = `btn-group-vertical btn-group-sm mt-${topMargin}`
				buttonGroup.id = uID

			buttonGroups[uID] = buttonGroup
		}

		let button = document.createElement('button')
			button.className = `btn btn-custom`
			button.id = scrubName(role)
			button.style.backgroundColor = color
			button.addEventListener('click', function() {
				game.subTarget(role)
			})

		let slot = document.createElement('div')
			slot.id = roleName
			slot.className = 'counter-name'
			slot.innerHTML = roleName
			button.appendChild(slot)

		let claim = document.createElement('div')
			claim.className = 'counter-claim'
			claim.innerHTML = '-'
			button.appendChild(claim)

		buttonGroups[uID].appendChild(button)
	}

	for (let buttonGroup in buttonGroups) {
		data.appendChild(buttonGroups[buttonGroup])
	}
}

Game.prototype.update = function() {
	for (let role in this.roles) {
		$(`.page .data #${role} .counter-claim`).html(`${this.roles[role].claim || '-'}`)
	}
}
Game.prototype.addRole = function(roleName) {
	if (roleLookup[roleName] === undefined) {

		console.log(`Found no match for ${roleName}`)
		return
	}

	for (let role in this.roles) {
		if (this.roles[role].name == roleName && this.roles[role].claimed == false) {
			this.roles[role].claimed = true
			this.roles[role].claim = roleName
			
			break
		}
		else if (roleLookup[roleName].partOf.includes(this.roles[role].name) && this.roles[role].claimed == false) {
			this.roles[role].claimed = true
			this.roles[role].claim = roleName

			break
		}
	}

	this.update()
	return
}
Game.prototype.subTarget = function(role) {
	if (this.roles[role] === undefined) {

		console.log(`Found no match for ${role}`)
		return
	}

	this.roles[role].claimed = false
	this.roles[role].claim = null

	this.update()
	return
}
Game.prototype.subRole = function(roleName) {
	if (roleLookup[roleName] === undefined) {

		console.log(`Found no match for ${roleName}`)
		return
	}

	let roleKeys = Object.keys(this.roles).reverse()
	for (let role of roleKeys) {
		if (this.roles[role].name == roleName && this.roles[role].claimed == true) {
			this.roles[role].claimed = false
			this.roles[role].claim = null
			
			break
		}
		else if (roleLookup[roleName].partOf.includes(this.roles[role].name) && this.roles[role].claimed == true && this.roles[role].claim == roleName) {
			this.roles[role].claimed = false
			this.roles[role].claim = null

			break
		}
	}

	this.update()
	return
}

let page = new Page('Classic')
page.construct()