var startTime
var endTime
var longClickDuration = 200

let role = function(name) {

	if (!lookup.includes(name)) {
		return false
	}

	this.name = name
	this.team = lookup[name].team
	this.partOf = lookup[name].partOf

	return this
}

let Page = function() {
	this.mode = 'Town Traitor'
	this.game = new Game(this.mode)
	this.game.construct()

	let page = this
	let modeSelect = d3.select('.modeSelector').select('.dropDown')
	modeSelect.on('change', function() {
		let newMode = modeSelect.node().options[modeSelect.node().options.selectedIndex].value
		page.mode = newMode
		d3.select('.buttons').selectAll('*').remove()
		d3.select('.data').selectAll('*').remove()

		page.game = new Game(page.mode)
		page.game.construct()
	})
}
Page.prototype.construct = function() {
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

	let prevTeam = null
	// Create button column
	for (let role in roleLookup) {
		let roleObj = roleLookup[role]
		let roleTeam = roleLookup[role].team

		let offset = 0.5
		if (prevTeam === null) {
			prevTeam = roleTeam
		}
		if (prevTeam != roleTeam) {
			prevTeam = roleTeam
			offset = 6
		}

		let roleButton = `<button class='selector'>`
		roleButton += role
		roleButton += `</button>`

		d3.select('body').select('.buttons').append('Button')
			.attr('class', 'selector')
			.style('background-color', `${roleObj.color}`).style('margin-top', `${offset}px`)
			.html(role)
			.on('click', function() {
				game.addRole(role)
			})
	}

	// Create checklist column
	for (let role in this.roles) {
		let roleName = this.roles[role].name
		let roleObj = roleLookup[roleName]

		let roleColor = null
		if (roleLookup[roleName] === undefined) {
			if (colorLookup[roleName] === undefined) {
				console.log(`Need a color for ${roleName}`)

				roleColor = '#FF0000'
			}
			else {
				roleColor = colorLookup[roleName]
			}
		}
		else {
			roleColor = roleLookup[roleName].color
		}
		d3.select('body').select('.data').append('div')
			.attr('class', 'counterContainer')
		let checklistContainer = d3.select('body').select('.counterContainer').append('button')
			.attr('class', 'counter').attr('id', role)
			.style('background-color', `${roleColor}`)
			.on('click', function() {
				game.subTarget(role)
			})

		checklistContainer.append('div')
			.attr('id', 'name').attr('class', 'counter-name')
			.html(this.roles[role].name)
		checklistContainer.append('div')
			.attr('id', 'name').attr('class', 'counter-claim')
			.html('-')
		checklistContainer.append('div')
			.attr('id', 'count').attr('class', 'counter-count')
			.html(booleanLookup['false'])
	}
}

Game.prototype.update = function() {
	for (let role in this.roles) {
		d3.select('body').select('.counterContainer').select(`#${role}`).select('#count')
			.html(booleanLookup[this.roles[role].claimed])

		let d = d3.select('body').select('.counterContainer').select(`#${role}`).select('.counter-claim')
			.html(this.roles[role].claim || '-')
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
