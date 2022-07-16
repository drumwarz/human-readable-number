module.exports = function toReadable (number) {
	const numUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const numDozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const numRound = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const numStr = number.toString();
	const unit = number % 10;
	const hundred = number % 100;
 
	if (number < 10) {
	  result = numUnits[number];
 
	} else if (number >= 10 && number < 20) {
	  result = numDozens[numStr[1]];
 
	} else if (number >=20 && number < 100) {
	  if (unit === 0) {
		 result = numRound[numStr[0] - 2];
	  } else {
		 result = `${numRound[numStr[0] -2]} ${numUnits[unit]}`;
	  }
 
	} else if (number >= 100 && number < 1000 && hundred === 0) {
	  result = `${numUnits[numStr[0]]} hundred`;
 
	} else if (hundred < 10 && hundred >= 1) {
	  result = `${numUnits[numStr[0]]} hundred ${numUnits[unit]}`;
 
	} else if (hundred < 20 && hundred >= 10) {
	  result = `${numUnits[numStr[0]]} hundred ${numDozens[unit]}`;
	
	} else if (number < 1000) {
	  if (unit === 0) {
		 result = `${numUnits[numStr[0]]} hundred ${numRound[numStr[1] - 2]}`;
	  } else {
		 result = `${numUnits[numStr[0]]} hundred ${numRound[numStr[1] - 2]} ${numUnits[unit]}`;
	  }
	}
	return result;
}
