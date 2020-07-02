let scrubName = function(name) {
	let outStr = ''

	for (let i in name) {
		if (name[i] != ' ') {
			outStr += name[i]
		}
		else {
			outStr += '-'
		}
	}

	return outStr
}