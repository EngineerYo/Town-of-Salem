let colorLookup = {
	'Town':					'#45BF00',
	'Town Investigative':	'#45BF00',
	'Town Killing':			'#45BF00',
	'Town Protective':		'#45BF00',
	'Town Support':			'#45BF00',
	'Random Town':  		'#45BF00',

	'Mafia':				'#DD0000',
	'Mafia Deception':		'#DD0000',
	'Mafia Killing':		'#DD0000',
	'Mafia Support':		'#DD0000',
	'Random Mafia':			'#DD0000',

	'Neutral Evil':			'#DDDDDD',
	'Neutral Killing':		'#DDDDDD',

	'Amnesiac':				'#4FF0E8',
	'Survivor':				'#C8C800',

	'Vampire':				'#7B8867',

	'Executioner':			'#ACACAC',
	'Jester':				'#F49FD0',
	'Witch':				'#BF5FFF',

	'Arsonist':				'#EE7600',
	'Serial Killer':		'#5555dd',
	'Werewolf':				'#744A26',

	'Any':					'#DDDDDD',
	'Neutral': 				'#999999'
}

let groupLookup = [
	'Town Investigative',
	'Town Killing',
	'Town Protective',
	'Town Support',

	'Mafia Deception',
	'Mafia Killing',
	'Mafia Support',
	
	'Neutral Benign',
	'Neutral Chaos',
	'Neutral Evil',
	'Neutral Killing'
]

let roleLookup = {
	'Investigator': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Investigative'
	},
	'Lookout': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Investigative'
	},
	'Sheriff': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Investigative'
	},
	'Spy': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Investigative'
	},

	'Jailor': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Killing'
	},
	'Vampire Hunter': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Killing'
	},
	'Veteran': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Killing'
	},
	'Vigilante': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Killing'
	},

	'Bodyguard': {
		partOf: ['Any', 'Random Town', 'Town Protective'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Protective'
	},
	'Doctor': {
		partOf: ['Any', 'Random Town', 'Town Protective'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Protective'
	},
	
	'Escort': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Support'
	},
	'Mayor': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Support'
	},
	'Medium': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Support'
	},
	'Retributionist': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Support'
	},
	'Transporter': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color: 	'Town',
		group:	'Town Support'
	},

	'Disguiser': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Deception'
	},
	'Forger': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Deception'
	},
	'Framer': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Deception'
	},
	'Janitor': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Deception'
	},

	'Godfather': {
		partOf: ['Any', 'Random Mafia', 'Mafia Killing'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Killing'
	},
	'Mafioso': {
		partOf: ['Any', 'Random Mafia', 'Mafia Killing'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Killing'
	},
	
	'Blackmailer': {
		partOf: ['Any', 'Random Mafia', 'Mafia Support'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Support'
	},
	'Consigliere': {
		partOf: ['Any', 'Random Mafia', 'Mafia Support'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Support'
	},
	'Consort': {
		partOf: ['Any', 'Random Mafia', 'Mafia Support'],
		team:	'Mafia',
		color: 	'Mafia',
		group:	'Mafia Support'
	},

	'Amnesiac': {
		partOf: ['Any', 'Random Neutral', 'Neutral Benign'],
		team:	'Neutral',
		color: 	'Amnesiac',
		group:	'Neutral Benign'
	},
	'Survivor': {
		partOf: ['Any', 'Random Neutral', 'Neutral Benign'],
		team:	'Neutral',
		color: 	'Survivor',
		group:	'Neutral Benign'
	},

	'Vampire': {
		partOf: ['Any', 'Random Neutral', 'Neutral Chaos'],
		team:	'Neutral',
		color: 	'Vampire',
		group:	'Neutral Chaos'
	},

	'Executioner': {
		partOf: ['Any', 'Random Neutral', 'Neutral Evil'],
		team:	'Neutral',
		color: 	'Executioner',
		group:	'Neutral Evil'
	},
	'Jester': {
		partOf: ['Any', 'Random Neutral', 'Neutral Evil'],
		team:	'Neutral',
		color: 	'Jester',
		group:	'Neutral Evil'
	},
	'Witch': {
		partOf: ['Any', 'Random Neutral', 'Neutral Evil'],
		team:	'Neutral',
		color: 	'Witch',
		group:	'Neutral Evil'
	},

	'Arsonist': {
		partOf: ['Any', 'Random Neutral', 'Neutral Killing'],
		team:	'Neutral',
		color: 	'Arsonist',
		group:	'Neutral Killing'
	},
	'Serial Killer': {
		partOf: ['Any', 'Random Neutral', 'Neutral Killing'],
		team:	'Neutral',
		color: 	'Serial Killer',
		group:	'Neutral Killing'
	},
	'Werewolf': {
		partOf: ['Any', 'Random Neutral', 'Neutral Killing'],
		team:	'Neutral',
		color: 	'Werewolf',
		group:	'Neutral Killing'
	}
}

let wildcardLookup = {
	'Random Town':			'Town',
	'Town Investigative':	'Town',
	'Town Killing':			'Town',
	'Town Protective':		'Town',
	'Town Support':			'Town',

	'Random Mafia':			'Mafia',
	'Mafia Deception':		'Mafia',
	'Mafia Killing': 		'Mafia',
	'Mafia Support':		'Mafia'
}

let gameModes = {
	'Classic': [
		'Sheriff', 'Lookout', 'Investigator', 'Jailor', 'Doctor', 'Escort', 'Medium', 'Town Killing', 'Random Town',
		'Godfather', 'Mafioso', 'Framer',
		'Serial Killer', 'Executioner', 'Jester'
	],
	'Town Traitor': [
		'Sheriff', 'Jailor', 'Doctor', 'Lookout', 'Town Investigative', 'Town Protective', 'Town Killing', 'Town Support', 'Random Town', 'Random Town', 'Random Town',
		'Godfather', 'Mafioso', 'Random Mafia',
		'Witch'
	],
	'Ranked Practice': [
		'Jailor', 'Town Investigative', 'Town Investigative', 'Town Protective', 'Town Killing', 'Town Support', 'Random Town', 'Random Town', 'Random Town',
		'Godfather', 'Mafioso', 'Random Mafia', 'Random Mafia',
		'Neutral Evil', 'Neutral Killing'
	],
	'Ranked': [
		'Jailor', 'Town Investigative', 'Town Investigative', 'Town Protective', 'Town Killing', 'Town Support', 'Random Town', 'Random Town', 'Random Town',
		'Godfather', 'Mafioso', 'Random Mafia', 'Random Mafia',
		'Neutral Evil', 'Neutral Killing'
	],
	'All Any': [
		'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any'
	],
	"Dracula's Palace": [
		'Doctor', 'Lookout', 'Lookout', 'Jailor', 'Vigilante', 'Town Protective', 'Town Support', 'Town Support', 'Vampire Hunter',
		'Jester', 'Witch',
		'Vampire', 'Vampire', 'Vampire', 'Vampire'
	],
	'Rainbow': [
		'Godfather', 'Arsonist', 'Survivor', 'Jailor', 'Amnesiac', 'Serial Killer', 'Witch', 'Any', 'Witch', 'Serial Killer', 'Amnesiac', 'Veteran', 'Survivor', 'Arsonist', 'Mafioso'
	]
}

let booleanLookup = {
	'false': 	'☐',
	'true':		'☑'
}
