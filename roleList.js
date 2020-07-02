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

let roleLookup = {
	'Investigator': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Lookout': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Sheriff': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Spy': {
		partOf: ['Any', 'Random Town', 'Town Investigative'],
		team:	'Town',
		color:	colorLookup['Town']
	},

	'Jailor': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Vampire Hunter': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Veteran': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Vigilante': {
		partOf: ['Any', 'Random Town', 'Town Killing'],
		team:	'Town',
		color:	colorLookup['Town']
	},

	'Bodyguard': {
		partOf: ['Any', 'Random Town', 'Town Protective'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Doctor': {
		partOf: ['Any', 'Random Town', 'Town Protective'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	
	'Escort': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Mayor': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Medium': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Retributionist': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color:	colorLookup['Town']
	},
	'Transporter': {
		partOf: ['Any', 'Random Town', 'Town Support'],
		team:	'Town',
		color:	colorLookup['Town']
	},

	'Disguiser': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},
	'Forger': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},
	'Framer': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},
	'Janitor': {
		partOf: ['Any', 'Random Mafia', 'Mafia Deception'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},

	'Godfather': {
		partOf: ['Any', 'Random Mafia', 'Mafia Killing'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},
	'Mafioso': {
		partOf: ['Any', 'Random Mafia', 'Mafia Killing'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},
	
	'Blackmailer': {
		partOf: ['Any', 'Random Mafia', 'Mafia Support'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},
	'Consigliere': {
		partOf: ['Any', 'Random Mafia', 'Mafia Support'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},
	'Consort': {
		partOf: ['Any', 'Random Mafia', 'Mafia Support'],
		team:	'Mafia',
		color:	colorLookup['Mafia']
	},

	'Amnesiac': {
		partOf: ['Any', 'Random Neutral', 'Neutral Benign'],
		team:	'Neutral Benign',
		color:	colorLookup['Amnesiac']
	},
	'Survivor': {
		partOf: ['Any', 'Random Neutral', 'Neutral Benign'],
		team:	'Neutral Benign',
		color:	colorLookup['Survivor']
	},

	'Vampire': {
		partOf: ['Any', 'Random Neutral', 'Neutral Chaos'],
		team:	'Neutral Chaos',
		color:	colorLookup['Vampire']
	},

	'Executioner': {
		partOf: ['Any', 'Random Neutral', 'Neutral Evil'],
		team:	'Neutral Evil',
		color:	colorLookup['Executioner']
	},
	'Jester': {
		partOf: ['Any', 'Random Neutral', 'Neutral Evil'],
		team:	'Neutral Evil',
		color:	colorLookup['Jester']
	},
	'Witch': {
		partOf: ['Any', 'Random Neutral', 'Neutral Evil'],
		team:	'Neutral Evil',
		color:	colorLookup['Witch']
	},

	'Arsonist': {
		partOf: ['Any', 'Random Neutral', 'Neutral Killing'],
		team:	'Neutral Killing',
		color:	colorLookup['Arsonist']
	},
	'Serial Killer': {
		partOf: ['Any', 'Random Neutral', 'Neutral Killing'],
		team:	'Neutral Killing',
		color:	colorLookup['Serial Killer']
	},
	'Werewolf': {
		partOf: ['Any', 'Random Neutral', 'Neutral Killing'],
		team:	'Neutral Killing',
		color:	colorLookup['Werewolf']
	}
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
