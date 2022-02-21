module.exports = function check(str, bracketsConfig) {
	let openBracket = {};
	let closeBracket = {};
	let stek = [];

	if (str.length % 2 !== 0) return false;

	for (let i = 1; i <= bracketsConfig.length; i++) {
		openBracket[bracketsConfig[i - 1][0]] = i;
		closeBracket[bracketsConfig[i - 1][1]] = i;
	}

	for (let i = 0; i < str.length; i++) {
		if (openBracket[str[i]]) {
			if (str[i] in closeBracket && stek[stek.length - 1] === str[i])
				stek.pop();
			else stek.push(str[i]);
		} else if (closeBracket[str[i]]) {
			if (stek.length === 0) return false;
			else if (
				openBracket[stek[stek.length - 1]] === closeBracket[str[i]]
			)
				stek.pop();
			else return false;
		}
	}

	if (stek.length === 0) return true;
	else return false;
};
